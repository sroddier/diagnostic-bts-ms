# -*- coding: utf-8 -*-
"""Produit unites/teacher/Code-a-coller.gs (barème intégré)."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main() -> None:
    src = (ROOT / "unites" / "collecte" / "Code.gs").read_text(encoding="utf-8")
    full = json.loads((ROOT / "unites" / "teacher" / "cle-correction.json").read_text(encoding="utf-8"))
    compact = {
        "session": full.get("session"),
        "ordre_domaines": full["ordre_domaines"],
        "domaines": full["domaines"],
        "items": {
            i: {"correct": v["correct"], "domaine": v["domaine"], "type": v["type"]}
            for i, v in full["items"].items()
        },
    }
    src = src.replace(
        'var attendu = (props.getProperty("SESSION_CODE") || "").trim();',
        'var attendu = (props.getProperty("SESSION_CODE") || SESSION_CODE || "").trim();',
    )
    src = src.replace(
        'var cle = JSON.parse(props.getProperty("ANSWER_KEY") || "null");',
        'var cle = ANSWER_KEY_EMBEDDED || JSON.parse(props.getProperty("ANSWER_KEY") || "null");',
    )
    body = src[src.find("var COPIES") :]
    header = (
        "/**\n"
        " * À coller dans Apps Script de la feuille Unités.\n"
        " * Ne pas publier sur GitHub.\n"
        " */\n"
        "var SESSION_CODE = 'UN26R1';\n"
        f"var ANSWER_KEY_EMBEDDED = {json.dumps(compact, ensure_ascii=False, separators=(',', ':'))};\n\n"
    )
    out = ROOT / "unites" / "teacher" / "Code-a-coller.gs"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(header + body, encoding="utf-8")
    print(f"{out}  ({out.stat().st_size} octets)")


if __name__ == "__main__":
    main()
