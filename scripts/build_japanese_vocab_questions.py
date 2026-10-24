#!/usr/bin/env python3
"""Build Japanese-only NAT/JLPT vocabulary items from Han-Nichi source entries."""

import json
import random
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "data/han-nichi-minna-n4-26-50.json"
OUTPUT = ROOT / "data/han-nichi-vocabulary-ja.js"
QUESTION_BANK = ROOT / "data/han-nichi-question-bank-26-50.json"
GRAMMAR_OUTPUT = ROOT / "data/han-nichi-grammar-26-50.js"
KANJI = re.compile(r"[\u3400-\u4dbf\u4e00-\u9fff]")
JAPANESE_WORD = re.compile(r"^[\u3041-\u3096\u30a1-\u30faー\u3400-\u4dbf\u4e00-\u9fff々〆ヶヵ]+$")
JAPANESE_READING = re.compile(r"^[\u3041-\u3096\u30a1-\u30faー]+$")


def edit_distance(left, right):
    previous = list(range(len(right) + 1))
    for row, char_left in enumerate(left, 1):
        current = [row]
        for column, char_right in enumerate(right, 1):
            current.append(min(
                current[-1] + 1,
                previous[column] + 1,
                previous[column - 1] + (char_left != char_right),
            ))
        previous = current
    return previous[-1]


def main():
    source = json.loads(SOURCE.read_text(encoding="utf-8"))
    vocabulary = source["vocabulary"]
    eligible = [
        item for item in vocabulary
        if KANJI.search(item["word"])
        and JAPANESE_WORD.fullmatch(item["word"].strip())
        and JAPANESE_READING.fullmatch(item["reading"].strip())
    ]
    reading_counts = {}
    for item in eligible:
        reading_counts[item["reading"]] = reading_counts.get(item["reading"], 0) + 1

    questions = []
    for item in eligible:
        is_writing = item["id"] % 2 == 0 and reading_counts[item["reading"]] == 1
        answer_text = item["word"] if is_writing else item["reading"]
        candidates = []
        target_reading = item["reading"]
        for other in eligible:
            if other["id"] == item["id"]:
                continue
            choice = other["word"] if is_writing else other["reading"]
            if choice == answer_text or any(existing[1] == choice for existing in candidates):
                continue
            if is_writing and other["reading"] == item["reading"]:
                continue
            candidates.append((other, choice, edit_distance(target_reading, other["reading"])))

        close_candidates = [candidate for candidate in candidates if 0 < candidate[2] <= 3]
        close_candidates.sort(key=lambda candidate: (candidate[2], abs(len(candidate[1]) - len(answer_text))))
        candidates = [candidate[1] for candidate in close_candidates[:60]]
        if len(candidates) < 3:
            fallback = [
                candidate for candidate in [
                    (other, other["word"] if is_writing else other["reading"], edit_distance(target_reading, other["reading"]))
                    for other in eligible
                    if other["id"] != item["id"]
                    and (not is_writing or other["reading"] != target_reading)
                ]
                if abs(len(candidate[0]["reading"]) - len(target_reading)) <= 2
                and candidate[1] != answer_text
            ]
            fallback.sort(key=lambda candidate: (candidate[2], abs(len(candidate[1]) - len(answer_text))))
            candidates = list(dict.fromkeys(candidate[1] for candidate in fallback[:60]))
        if len(candidates) < 3:
            raise ValueError(f"Not enough plausible distractors for source vocabulary {item['id']}")

        # Use valid readings or valid kanji spellings from source records as distractors.
        rng = random.Random(item["id"] * 20261024)
        distractors = rng.sample(candidates[: min(30, len(candidates))], 3)
        options = distractors + [answer_text]
        rng.shuffle(options)
        answer = options.index(answer_text)
        if is_writing:
            prompt = f"「{item['reading']}」を漢字で書くとどれですか。"
            rationale = f"「{item['reading']}」は「{item['word']}」と書きます。"
        else:
            prompt = f"「{item['word']}」の読み方として正しいものはどれですか。"
            rationale = f"「{item['word']}」は「{item['reading']}」と読みます。"
        if item["meaningVi"].strip():
            rationale += f" 意味：{item['meaningVi']}。"
        questions.append({
            "id": f"hn-ja-vocab-{item['id']}",
            "section": "vocab",
            "type": "漢字で書く" if is_writing else "漢字の読み方",
            "prompt": prompt,
            "options": options,
            "answer": answer,
            "explanation": rationale,
            "sourceLesson": item["lesson"],
            "sourceUrl": item["sourceUrl"],
            "sourceRecordId": item["id"],
            "sourceWord": item["word"],
            "sourceReading": item["reading"],
            "sourceMeaningVi": item["meaningVi"],
        })

    OUTPUT.write_text(
        "window.HAN_NICHI_N4_JA_VOCAB="
        + json.dumps(questions, ensure_ascii=False, separators=(",", ":"))
        + ";\n",
        encoding="utf-8",
    )
    question_bank = json.loads(QUESTION_BANK.read_text(encoding="utf-8"))
    grammar_questions = [question for question in question_bank["questions"] if question["section"] == "grammar"]
    GRAMMAR_OUTPUT.write_text(
        "window.HAN_NICHI_N4_GRAMMAR_QUESTIONS="
        + json.dumps(grammar_questions, ensure_ascii=False, separators=(",", ":"))
        + ";\n",
        encoding="utf-8",
    )
    print(f"Built {len(questions)} Japanese-only questions from {len(eligible)} kanji vocabulary records.")
    print(f"Built {len(grammar_questions)} source-linked grammar questions.")


if __name__ == "__main__":
    main()
