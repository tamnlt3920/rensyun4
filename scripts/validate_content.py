#!/usr/bin/env python3
"""Validate source-linked N4 study data before publishing the practice site."""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE_PATH = ROOT / "data/han-nichi-minna-n4-26-50.json"
BANK_PATH = ROOT / "data/han-nichi-question-bank-26-50.json"
JA_BANK_PATH = ROOT / "data/han-nichi-vocabulary-ja.js"
GRAMMAR_BANK_PATH = ROOT / "data/han-nichi-grammar-26-50.js"
APPLIED_GRAMMAR_PATH = ROOT / "data/han-nichi-applied-grammar.js"
APP_PATH = ROOT / "app.js"


def fail(message):
    print(f"FAIL: {message}")
    return 1


def normalized(value):
    return value.replace("降ろします,下ろします", "降ろします・下ろします").replace("降ろします・下ろします", "降ろします下ろします")


def main():
    try:
        source = json.loads(SOURCE_PATH.read_text(encoding="utf-8"))
        bank = json.loads(BANK_PATH.read_text(encoding="utf-8"))
        ja_text = JA_BANK_PATH.read_text(encoding="utf-8").strip()
        ja_questions = json.loads(ja_text.split("=", 1)[1].removesuffix(";"))
        grammar_text = GRAMMAR_BANK_PATH.read_text(encoding="utf-8").strip()
        grammar_questions = json.loads(grammar_text.split("=", 1)[1].removesuffix(";"))
        applied_text = APPLIED_GRAMMAR_PATH.read_text(encoding="utf-8").strip()
        applied_questions = json.loads(applied_text.split("=", 1)[1].removesuffix(";"))
        app_text = APP_PATH.read_text(encoding="utf-8")
    except (OSError, UnicodeError, json.JSONDecodeError) as error:
        return fail(f"cannot read UTF-8 JSON: {error}")

    errors = []
    lessons = {lesson["lesson"]: lesson for lesson in source["lessons"]}
    vocab_by_id = {item["id"]: item for item in source["vocabulary"]}
    grammar_by_id = {
        item["id"]: (lesson["lesson"], item)
        for lesson in source["lessons"]
        for item in lesson["grammar"]
    }
    questions = bank["questions"]
    ids = [question.get("id") for question in questions]

    if len(ids) != len(set(ids)):
        errors.append("duplicate question IDs")
    if set(lessons) != set(range(26, 51)):
        errors.append("source lessons do not cover 26–50 exactly")
    if len(source["vocabulary"]) != 1163 or len(grammar_by_id) != 102:
        errors.append("source item totals differ from the published counts")

    required_exam_rules = [
        '["漢字の読み方",1],["漢字で書く",1],["文脈に合う言葉",2],["言い換え",2],["使い方",2]',
        'const generatedGrammar=drawSourceGrammar(13,usedGrammar)',
        '...grammarParaphrase',
        'grammarOrder,...grammarText',
        'sourceVocabTypes=Array.from({length:20}',
        'vocabTaskOrder=typeOrder(["漢字の読み方","漢字で書く","文脈に合う言葉","言い換え","使い方"])',
        'grammarTaskOrder=typeOrder(["文法形式","文法の言い換え","文の組み立て","文章の文法"])',
        'readingTaskOrder=typeOrder(["短い文章","中文読解","情報検索"])',
        'e.vocab.length!==28',
        'e.grammar.length!==5',
        'exam.vocab.length!==28||exam.grammar.length!==18||exam.reading.length!==11',
        'grammarTypeCounts["文法の言い換え"]!==2',
        'grammarTypeCounts["文法の言い換え"]!==2',
        'drawBalancedQuestions(all,grammarExposure,GRAMMAR_COVERAGE_KEY',
    ]
    if any(rule not in app_text for rule in required_exam_rules):
        errors.append("exam builder no longer enforces the reviewed task mix and section totals")
    if "sourceGrammarSample" in app_text or "文中で使われている文法を選んでください" in app_text:
        errors.append("exam contains grammar-name recognition items instead of applied questions")
    for source_id in ("grammar-34-2", "grammar-34-3"):
        if app_text.count(f'"{source_id}"),') != 3:
            errors.append(f"source-backed grammar paraphrase {source_id} is missing from one or more mock forms")
    for question in questions:
        qid = question.get("id", "<missing-id>")
        options = question.get("options")
        if not question.get("prompt", "").strip() or not question.get("explanation", "").strip():
            errors.append(f"{qid}: prompt or rationale is empty")
        if not isinstance(options, list) or len(options) != 4:
            errors.append(f"{qid}: expected four answer choices")
            continue
        if len({option.strip() for option in options}) != 4:
            errors.append(f"{qid}: duplicate answer choices")
        answer = question.get("answer")
        if not isinstance(answer, int) or not 0 <= answer < 4:
            errors.append(f"{qid}: invalid answer key")
            continue

        all_text = " ".join([question["prompt"], question["explanation"], *options])
        if "\ufffd" in all_text or re.search(r"(?:Ã.|â€|ï¿½)", all_text):
            errors.append(f"{qid}: possible text encoding corruption")
        if re.search(r"\w,\S", all_text) and question.get("section") == "vocab":
            errors.append(f"{qid}: missing space after a Vietnamese comma")
        if not question.get("sourceUrl", "").startswith("https://han-nichi.vercel.app/"):
            errors.append(f"{qid}: missing Han-Nichi source URL")

        if question.get("section") == "vocab":
            original = vocab_by_id.get(question.get("sourceRecordId"))
            if not original:
                errors.append(f"{qid}: unknown source vocabulary record")
                continue
            if question.get("sourceLesson") != original["lesson"]:
                errors.append(f"{qid}: source lesson does not match vocabulary record")
            correct = options[answer]
            if original["meaningVi"] not in correct or normalized(original["word"]) not in normalized(question["prompt"]):
                errors.append(f"{qid}: answer/prompt does not match source vocabulary")
        elif question.get("section") == "grammar":
            source_record = grammar_by_id.get(question.get("sourceRecordId"))
            if not source_record:
                errors.append(f"{qid}: unknown source grammar record")
                continue
            lesson_no, grammar = source_record
            if question.get("sourceLesson") != lesson_no:
                errors.append(f"{qid}: source lesson does not match grammar record")
            if grammar["title"] not in options[answer]:
                errors.append(f"{qid}: answer does not identify the source grammar point")
        else:
            errors.append(f"{qid}: unsupported question section")

    ja_ids = set()
    ja_by_lesson = {}
    for question in ja_questions:
        qid = question.get("id", "<missing-id>")
        options = question.get("options", [])
        if qid in ja_ids:
            errors.append(f"{qid}: duplicate Japanese question ID")
        ja_ids.add(qid)
        if question.get("type") not in {"漢字の読み方", "漢字で書く"}:
            errors.append(f"{qid}: unsupported Japanese vocabulary task type")
        if len(options) != 4 or len(set(options)) != 4:
            errors.append(f"{qid}: Japanese item needs four distinct choices")
            continue
        if not isinstance(question.get("answer"), int) or not 0 <= question["answer"] < 4:
            errors.append(f"{qid}: invalid Japanese item answer key")
            continue
        if re.search(r"[ăâđêôơưĂÂĐÊÔƠƯàáảãạèéẻẽẹìíỉĩịòóỏõọùúủũụỳýỷỹỵ]", question["prompt"] + " ".join(options), re.I):
            errors.append(f"{qid}: Vietnamese text appears in the exam prompt or choices")
        original = vocab_by_id.get(question.get("sourceRecordId"))
        if not original or question.get("sourceLesson") != original["lesson"]:
            errors.append(f"{qid}: Japanese item has invalid source linkage")
            continue
        correct = options[question["answer"]]
        expected = original["reading"] if question["type"] == "漢字の読み方" else original["word"]
        if correct != expected:
            errors.append(f"{qid}: Japanese answer does not match source reading/spelling")
        ja_by_lesson.setdefault(original["lesson"], []).append(question)

    if len(grammar_questions) != len(grammar_by_id):
        errors.append("exam-facing grammar bank does not include all source-linked grammar questions")
    for question in grammar_questions:
        prompt_and_options = question.get("prompt", "") + " " + " ".join(question.get("options", []))
        if re.search(r"[ăâđêôơưĂÂĐÊÔƠƯàáảãạèéẻẽẹìíỉĩịòóỏõọùúủũụỳýỷỹỵ]", prompt_and_options, re.I):
            errors.append(f"{question.get('id', '<missing-id>')}: Vietnamese text appears in a grammar prompt or choice")

    applied_ids = set()
    for question in applied_questions:
        qid = question.get("id", "<missing-id>")
        source_record = grammar_by_id.get(question.get("sourceRecordId"))
        if qid in applied_ids:
            errors.append(f"{qid}: duplicate applied grammar question ID")
        applied_ids.add(qid)
        if question.get("type") != "文法形式":
            errors.append(f"{qid}: applied grammar question has the wrong task type")
        if not source_record or question.get("sourceLesson") != source_record[0]:
            errors.append(f"{qid}: applied grammar question has invalid source linkage")
            continue
        opts = question.get("options", [])
        if len(opts) != 4 or len(set(opts)) != 4:
            errors.append(f"{qid}: applied grammar question needs four distinct choices")
            continue
        answer = question.get("answer")
        if not isinstance(answer, int) or not 0 <= answer < 4:
            errors.append(f"{qid}: invalid applied grammar answer key")
            continue
        target = question.get("sourceSurface", "")
        example = question.get("sourceExample", "")
        if opts[answer] != target or not target or target not in example:
            errors.append(f"{qid}: answer key does not match the source example")
        masked = example.replace(target, "（　　　）", 1)
        if masked not in question.get("prompt", ""):
            errors.append(f"{qid}: prompt does not mask the source grammar example")
        exam_text = question.get("prompt", "") + " ".join(opts)
        if re.search(r"[ăâđêôơưĂÂĐÊÔƠƯàáảãạèéẻẽẹìíỉĩịòóỏõọùúủũụỳýỷỹỵ]", exam_text, re.I):
            errors.append(f"{qid}: Vietnamese text appears in an applied grammar prompt or choice")
    if len(applied_questions) != 102 or len(applied_ids) != 102:
        errors.append("applied grammar bank must cover all 102 source points exactly once")

    sampled_ids = set()
    for exam_index in range(3):
        sample = []
        for item_index in range(20):
            lesson = 26 + ((exam_index * 8 + item_index) % 25)
            task_type = "漢字の読み方" if item_index % 2 == 0 else "漢字で書く"
            pool = [item for item in ja_by_lesson.get(lesson, []) if item["type"] == task_type]
            if not pool:
                errors.append(f"exam {exam_index + 1}: no {task_type} source vocabulary for lesson {lesson}")
                continue
            sample.append(pool[(exam_index * 17 + item_index * 13) % len(pool)])
        ids_for_exam = {item["id"] for item in sample}
        if len(sample) != 20 or len(ids_for_exam) != 20:
            errors.append(f"exam {exam_index + 1}: source vocabulary sampling is incomplete or repeats items")
        type_counts = {task: sum(item["type"] == task for item in sample) for task in ("漢字の読み方", "漢字で書く")}
        if type_counts != {"漢字の読み方": 10, "漢字で書く": 10}:
            errors.append(f"exam {exam_index + 1}: source Kanji split is not 10 reading + 10 writing")
        sampled_ids.update(ids_for_exam)

    if errors:
        for error in errors:
            print(f"FAIL: {error}")
        return 1

    print(
        f"PASS: {len(questions)} source-linked questions; "
        f"{len(vocab_by_id)} vocabulary records; {len(grammar_by_id)} grammar points; "
        f"{len(ja_questions)} Japanese-only vocabulary questions, {len(grammar_questions)} source grammar records, and {len(applied_questions)} applied Japanese-only grammar questions; UTF-8, four choices, "
        "answer keys, source links, source correspondence, 10/10 Kanji task split, applied source grammar, grammar paraphrases, grammar task mix, and mock sampling checked."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
