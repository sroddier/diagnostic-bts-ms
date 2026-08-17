# -*- coding: utf-8 -*-
"""Génère unites/js/questions.js, unites/js/figures.js et la clé enseignant."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(Path(__file__).resolve().parent))

from banque_unites import DOMAINES, FIGURES, ITEMS, ORDRE_DOMAINES, cle_correction, public_item  # noqa: E402


def js_assign(name: str, value) -> str:
    return f"window.{name} = {json.dumps(value, ensure_ascii=False, indent=2)};\n"


def main() -> None:
    counts = {}
    ids = []
    for item in ITEMS:
        counts[item["domaine"]] = counts.get(item["domaine"], 0) + 1
        ids.append(item["id"])
        choix_ids = {c["id"] for c in item["choix"]}
        for cid in item["correct"]:
            if cid not in choix_ids:
                raise SystemExit(f"{item['id']}: correct {cid} absent")
    if len(ids) != len(set(ids)):
        raise SystemExit("ids en double")

    out_js = ROOT / "unites" / "js"
    out_js.mkdir(parents=True, exist_ok=True)
    (ROOT / "unites" / "teacher").mkdir(parents=True, exist_ok=True)

    questions = [public_item(it) for it in ITEMS]
    (out_js / "questions.js").write_text(
        "/* Généré par scripts/build_unites.py — pas de bonnes réponses. */\n"
        + js_assign("DOMAINES", DOMAINES)
        + js_assign("ORDRE_DOMAINES", ORDRE_DOMAINES)
        + js_assign("QUESTIONS", questions),
        encoding="utf-8",
    )
    (out_js / "figures.js").write_text(
        "/* Généré par scripts/build_unites.py */\n" + js_assign("FIGURES", FIGURES),
        encoding="utf-8",
    )
    cle = {
        "schema": "diagnostic-unites-r1-v1",
        "session": "2026-unites",
        "items": cle_correction(),
        "domaines": DOMAINES,
        "ordre_domaines": ORDRE_DOMAINES,
    }
    (ROOT / "unites" / "teacher" / "cle-correction.json").write_text(
        json.dumps(cle, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"{len(ITEMS)} items  |  " + "  ".join(f"{k}:{counts[k]}" for k in ORDRE_DOMAINES))


if __name__ == "__main__":
    main()
