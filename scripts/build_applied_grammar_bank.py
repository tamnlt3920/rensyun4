#!/usr/bin/env python3
"""Build Japanese-context grammar completion items from source examples."""
import json
import random
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "data/han-nichi-minna-n4-26-50.json"
OUTPUT = ROOT / "data/han-nichi-applied-grammar.js"

# The masked span is the grammar-bearing Japanese phrase in a source example.
SURFACES = {
    "grammar-26-1":"んです", "grammar-26-2":"いただけませんか", "grammar-26-3":"たらいい",
    "grammar-27-1":"話せます", "grammar-27-2":"見えます", "grammar-27-3":"聞こえます", "grammar-27-4":"しかありません",
    "grammar-28-1":"ながら", "grammar-28-2":"ていました", "grammar-28-3":"し", "grammar-28-4":"それに", "grammar-28-5":"それで",
    "grammar-29-1":"開いています", "grammar-29-2":"してしまいました",
    "grammar-30-1":"置いてあります", "grammar-30-2":"予約しておきます", "grammar-30-3":"まだ", "grammar-30-4":"すると",
    "grammar-31-1":"食べよう", "grammar-31-2":"留学するつもりです", "grammar-31-3":"出張する予定です", "grammar-31-4":"まだ食べていません", "grammar-31-5":"ずっと",
    "grammar-32-1":"行ったほうがいい", "grammar-32-2":"入らないほうがいい", "grammar-32-3":"でしょう", "grammar-32-4":"かもしれません", "grammar-32-5":"もしかしたら", "grammar-32-6":"入るな", "grammar-32-7":"あと",
    "grammar-33-1":"入るな", "grammar-33-2":"あと",
    "grammar-34-1":"か", "grammar-34-2":"とおりに", "grammar-34-3":"あとで", "grammar-34-4":"ないで",
    "grammar-35-1":"あれば", "grammar-35-2":"降ったら", "grammar-35-3":"なると", "grammar-35-4":"聞けばいい", "grammar-35-5":"行くなら", "grammar-35-6":"すればするほど",
    "grammar-36-1":"話せるように", "grammar-36-2":"話せるようになりました", "grammar-36-3":"話すようにしています", "grammar-36-4":"見るとか", "grammar-36-5":"二つずつ",
    "grammar-37-1":"褒められました", "grammar-37-2":"木でできています", "grammar-37-3":"会議中",
    "grammar-38-1":"勉強するのは", "grammar-38-2":"聞くのが", "grammar-38-3":"作るのが", "grammar-38-4":"歌うのが", "grammar-38-5":"赤いのは", "grammar-38-6":"ちゃんと",
    "grammar-39-1":"会えて", "grammar-39-2":"なくて", "grammar-39-3":"降っているので", "grammar-39-4":"行く途中で",
    "grammar-40-1":"いるか", "grammar-40-2":"降るかどうか", "grammar-40-3":"食べてみます", "grammar-40-4":"高さ", "grammar-40-5":"さあ",
    "grammar-41-1":"やりました", "grammar-41-2":"いただきました", "grammar-41-3":"くださいました", "grammar-41-4":"行ってやりました", "grammar-41-5":"直していただきました", "grammar-41-6":"教えてくださいました", "grammar-41-7":"教えてくださいませんか", "grammar-41-8":"くださいました",
    "grammar-42-1":"ために", "grammar-42-2":"切るのに", "grammar-42-3":"も", "grammar-42-4":"代わりに",
    "grammar-43-1":"おいしそう", "grammar-43-2":"なってきました",
    "grammar-44-1":"食べすぎました", "grammar-44-2":"読みやすい", "grammar-44-3":"覚えにくい", "grammar-44-4":"コーヒーにします",
    "grammar-45-1":"降った場合は", "grammar-45-2":"のに",
    "grammar-46-1":"食べるところ", "grammar-46-2":"食べているところ", "grammar-46-3":"食べたところ", "grammar-46-4":"来たばかり", "grammar-46-5":"来るはず",
    "grammar-47-1":"降るそう", "grammar-47-2":"留守のよう", "grammar-47-3":"音がします", "grammar-47-4":"によると",
    "grammar-48-1":"食べさせます",
    "grammar-49-1":"お読みになりました", "grammar-49-2":"いらっしゃいます", "grammar-49-3":"お待ちください",
    "grammar-50-1":"お持ちします", "grammar-50-2":"ご説明いたします", "grammar-50-3":"お待ち願います", "grammar-50-4":"それでは",
}


def main():
    data = json.loads(SOURCE.read_text(encoding="utf-8"))
    points = [g for lesson in data["lessons"] for g in lesson["grammar"]]
    by_id = {g["id"]: g for g in points}
    if set(by_id) != set(SURFACES):
        missing = sorted(set(by_id) - set(SURFACES))
        extra = sorted(set(SURFACES) - set(by_id))
        raise ValueError(f"Grammar surface map mismatch; missing={missing}, extra={extra}")

    result = []
    for grammar in points:
        gid = grammar["id"]
        target = SURFACES[gid]
        example = next((e["ja"] for e in grammar["examples"] if target in e["ja"]), None)
        if not example:
            raise ValueError(f"{gid}: source surface {target!r} not found in examples")
        lesson_no = int(gid.split("-")[1])
        stem = example.replace(target, "（　　　）", 1)
        if stem == example:
            raise ValueError(f"{gid}: could not mask target surface")

        same_lesson = [SURFACES[g["id"]] for g in points if g["id"] != gid and int(g["id"].split("-")[1]) == lesson_no]
        others = [SURFACES[g["id"]] for g in points if g["id"] != gid]
        # Similar-length source forms make workable Japanese distractors for the sentence gap.
        candidates = [x for x in same_lesson if x != target and abs(len(x) - len(target)) <= 5]
        if len(set(candidates)) < 3:
            candidates = [x for x in others if x != target and abs(len(x) - len(target)) <= 5]
        candidates = list(dict.fromkeys(candidates))
        if len(candidates) < 3:
            candidates = list(dict.fromkeys(x for x in others if x != target))
        rng = random.Random(f"han-nichi-{gid}")
        distractors = rng.sample(candidates, 3)
        options = distractors + [target]
        rng.shuffle(options)
        answer = options.index(target)
        original = example.replace(target, f"『{target}』", 1)
        usage = grammar["usageVi"].split("。", 1)[0].strip()
        explanation = f"第{lesson_no}課の例文は「{original}」です。空欄には「{target}」が入り、この文では{grammar['title']}の使い方を表します。{usage}。"
        result.append({
            "id": f"hn-applied-{gid.removeprefix('grammar-')}",
            "section": "grammar",
            "type": "文法形式",
            "prompt": f"文の意味が通るように、空欄に入る表現はどれですか。\n「{stem}」",
            "options": options,
            "answer": answer,
            "explanation": explanation,
            "sourceLesson": lesson_no,
            "sourceUrl": f"https://han-nichi.vercel.app/grammar/minna-2-n4/lesson-{lesson_no}",
            "sourceRecordId": gid,
            "sourceSurface": target,
            "sourceExample": example,
        })
    OUTPUT.write_text("window.HAN_NICHI_N4_APPLIED_GRAMMAR=" + json.dumps(result, ensure_ascii=False, separators=(",", ":")) + ";\n", encoding="utf-8")
    print(f"Built {len(result)} applied grammar completion questions from source examples.")

if __name__ == "__main__":
    main()
