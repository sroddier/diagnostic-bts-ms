# -*- coding: utf-8 -*-
"""Génère js/questions.js, js/figures.js et teacher/cle-correction.json."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(Path(__file__).resolve().parent))

from banque import DOMAINES, FIGURES, ITEMS, ORDRE_DOMAINES, cle_correction, public_item  # noqa: E402


def js_assign(name: str, value) -> str:
    payload = json.dumps(value, ensure_ascii=False, indent=2)
    return f"window.{name} = {payload};\n"


def main() -> None:
    counts = {}
    ids = []
    for item in ITEMS:
        counts[item["domaine"]] = counts.get(item["domaine"], 0) + 1
        ids.append(item["id"])
        if not item["correct"]:
            raise SystemExit(f"{item['id']}: correct vide")
        choix_ids = {c["id"] for c in item["choix"]}
        for cid in item["correct"]:
            if cid not in choix_ids:
                raise SystemExit(f"{item['id']}: correct {cid} absent des choix")

    if len(ids) != len(set(ids)):
        raise SystemExit("Identifiants en double")

    questions = [public_item(item) for item in ITEMS]
    (ROOT / "js").mkdir(exist_ok=True)
    (ROOT / "teacher").mkdir(exist_ok=True)
    (ROOT / "data").mkdir(exist_ok=True)

    questions_js = (
        "/* Généré par scripts/build_public.py — ne pas ajouter les bonnes réponses. */\n"
        + js_assign("DOMAINES", DOMAINES)
        + js_assign("ORDRE_DOMAINES", ORDRE_DOMAINES)
        + js_assign("QUESTIONS", questions)
    )
    (ROOT / "js" / "questions.js").write_text(questions_js, encoding="utf-8")
    (ROOT / "js" / "figures.js").write_text(
        "/* Généré par scripts/build_public.py */\n" + js_assign("FIGURES", FIGURES),
        encoding="utf-8",
    )

    cle = {
        "schema": "diagnostic-bts-ms-r1-v1",
        "session": "2026-r1",
        "items": cle_correction(),
        "domaines": DOMAINES,
        "ordre_domaines": ORDRE_DOMAINES,
    }
    (ROOT / "teacher" / "cle-correction.json").write_text(
        json.dumps(cle, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    (ROOT / "data" / "items.full.json").write_text(
        json.dumps({"items": ITEMS, "domaines": DOMAINES}, ensure_ascii=False, indent=2)
        + "\n",
        encoding="utf-8",
    )

    print(f"{len(ITEMS)} items  |  " + "  ".join(f"{k}:{counts[k]}" for k in ORDRE_DOMAINES))
    print("Écrit : js/questions.js, js/figures.js, teacher/cle-correction.json")


if __name__ == "__main__":
    main()
