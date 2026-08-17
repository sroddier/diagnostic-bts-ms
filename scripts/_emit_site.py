# -*- coding: utf-8 -*-
"""Génère le site + scripts d'un diagnostic (appelé une fois par famille)."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def emit(spec: dict) -> None:
    sys.path.insert(0, str(Path(__file__).resolve().parent))
    banque = __import__(spec["banque"])
    slug = spec["slug"]
    out = ROOT / slug
    (out / "js").mkdir(parents=True, exist_ok=True)
    (out / "teacher").mkdir(parents=True, exist_ok=True)
    (out / "collecte").mkdir(parents=True, exist_ok=True)

    counts = {}
    ids = []
    for item in banque.ITEMS:
        counts[item["domaine"]] = counts.get(item["domaine"], 0) + 1
        ids.append(item["id"])
        choix = {c["id"] for c in item["choix"]}
        for cid in item["correct"]:
            if cid not in choix:
                raise SystemExit(f"{item['id']}: {cid} absent")
    if len(ids) != len(set(ids)):
        raise SystemExit("ids en double")

    def js(name, value):
        return f"window.{name} = {json.dumps(value, ensure_ascii=False, indent=2)};\n"

    questions = [banque.public_item(it) for it in banque.ITEMS]
    (out / "js" / "questions.js").write_text(
        f"/* Généré — pas de bonnes réponses. */\n"
        + js("DOMAINES", banque.DOMAINES)
        + js("ORDRE_DOMAINES", banque.ORDRE_DOMAINES)
        + js("QUESTIONS", questions),
        encoding="utf-8",
    )
    (out / "js" / "figures.js").write_text(
        "/* Généré */\n" + js("FIGURES", banque.FIGURES), encoding="utf-8"
    )
    cle = {
        "schema": spec["schema"],
        "session": spec["session"],
        "items": banque.cle_correction(),
        "domaines": banque.DOMAINES,
        "ordre_domaines": banque.ORDRE_DOMAINES,
    }
    (out / "teacher" / "cle-correction.json").write_text(
        json.dumps(cle, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (out / "js" / "config.js").write_text(
        "window.DIAGNOSTIC = "
        + json.dumps(
            {
                "session": spec["session"],
                "storageKey": spec["storage"],
                "schema": spec["schema"],
                "titre": spec["titre"],
                "formation": "BTS Maintenance des systèmes — option SP",
                "dureeSec": spec["duree"] * 60,
                "appsScriptUrl": "",
                "localCollecteUrl": spec["local"],
                "groupes": [
                    {"id": "1MS-A", "label": "1MS-A — Formation initiale"},
                    {"id": "1MS-B", "label": "1MS-B — Formation initiale"},
                    {"id": "1MS-ALT", "label": "1MS-ALT — Alternance"},
                ],
                "bacs": [
                    {"id": "bac_pro_mei", "label": "Bac pro MEI / MSPC (maintenance)"},
                    {"id": "bac_pro_indus", "label": "Bac pro industriel (autre)"},
                    {"id": "sti2d", "label": "STI2D"},
                    {"id": "general", "label": "Bac général"},
                    {"id": "autre", "label": "Autre / reconversion"},
                ],
                "labels": {
                    "alaise": "À l’aise",
                    "construction": "En construction",
                    "prioritaire": "Prioritaire",
                },
            },
            ensure_ascii=False,
            indent=2,
        )
        + ";\n",
        encoding="utf-8",
    )

    # Code.gs from equations template with replacements
    src = (ROOT / "equations" / "collecte" / "Code.gs").read_text(encoding="utf-8")
    src = src.replace(
        'var DOMAINES = ["ISO", "TRANS", "FRAC", "PUIS", "FORM", "PIEGE"];',
        "var DOMAINES = " + json.dumps(banque.ORDRE_DOMAINES) + ";",
    )
    src = src.replace("diagnostic-equations-bts-ms", spec["service"])
    src = src.replace("2026-equations", spec["session"])
    src = src.replace("diagnostic-equations-r1-v1", spec["schema"])
    (out / "collecte" / "Code.gs").write_text(src, encoding="utf-8")

    compact = {
        "session": spec["session"],
        "ordre_domaines": banque.ORDRE_DOMAINES,
        "domaines": banque.DOMAINES,
        "items": {
            i: {"correct": v["correct"], "domaine": v["domaine"], "type": v["type"]}
            for i, v in cle["items"].items()
        },
    }
    gs = src.replace(
        'var attendu = (props.getProperty("SESSION_CODE") || "").trim();',
        'var attendu = (props.getProperty("SESSION_CODE") || SESSION_CODE || "").trim();',
    ).replace(
        'var cle = JSON.parse(props.getProperty("ANSWER_KEY") || "null");',
        'var cle = ANSWER_KEY_EMBEDDED || JSON.parse(props.getProperty("ANSWER_KEY") || "null");',
    )
    body = gs[gs.find("var COPIES") :]
    (out / "teacher" / "Code-a-coller.gs").write_text(
        f"/** À coller dans Apps Script. Ne pas publier. */\nvar SESSION_CODE = '{spec['code']}';\n"
        f"var ANSWER_KEY_EMBEDDED = {json.dumps(compact, ensure_ascii=False, separators=(',', ':'))};\n\n"
        + body,
        encoding="utf-8",
    )

    print(f"{slug}: {len(banque.ITEMS)} items  " + "  ".join(f"{k}:{counts[k]}" for k in banque.ORDRE_DOMAINES))


if __name__ == "__main__":
    emit(json.loads(Path(sys.argv[1]).read_text(encoding="utf-8")))
