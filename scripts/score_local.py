# -*- coding: utf-8 -*-
"""Corrige une copie (JSON) avec teacher/cle-correction.json."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def same_seq(a, b) -> bool:
    return list(a) == list(b)


def same_set(a, b) -> bool:
    return set(a) == set(b)


def niveau(score: float) -> str:
    if score >= 0.75:
        return "alaise"
    if score >= 0.40:
        return "construction"
    return "prioritaire"


def scorer(copie: dict, cle: dict) -> dict:
    items = cle["items"]
    ordre = cle["ordre_domaines"]
    tot = {d: 0 for d in ordre}
    ok = {d: 0 for d in ordre}
    details = []
    for r in copie.get("reponses", []):
        spec = items.get(r["id"])
        if not spec:
            continue
        d = spec["domaine"]
        tot[d] += 1
        choix = r.get("choix") or []
        if spec["type"] == "ordre":
            bon = same_seq(choix, spec["correct"])
        else:
            bon = same_set(choix, spec["correct"])
        if bon:
            ok[d] += 1
        details.append(
            {
                "id": r["id"],
                "domaine": d,
                "choix": choix,
                "correct": bon,
                "temps_s": r.get("temps_s"),
                "confiance": r.get("confiance"),
            }
        )
    scores = {d: (ok[d] / tot[d] if tot[d] else 0.0) for d in ordre}
    niveaux = {d: niveau(scores[d]) for d in ordre}
    appui = [d for d in ordre if niveaux[d] == "alaise"]
    priorites = [d for d in ordre if niveaux[d] == "prioritaire"]
    if not priorites:
        priorites = sorted(ordre, key=lambda d: scores[d])[:2]
    if not appui:
        appui = sorted(ordre, key=lambda d: scores[d], reverse=True)[:1]
    return {
        "ok": True,
        "schema": "diagnostic-bts-ms-r1-v1",
        "session": copie.get("session") or cle.get("session"),
        "prenom": (copie.get("identite") or {}).get("prenom", ""),
        "scores": scores,
        "niveaux": niveaux,
        "appui": appui,
        "priorites": priorites,
        "details": details,
    }


def main() -> None:
    if len(sys.argv) < 2:
        print("Usage: python scripts/score_local.py copie.json")
        sys.exit(2)
    cle = json.loads((ROOT / "teacher" / "cle-correction.json").read_text(encoding="utf-8"))
    copie = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    res = scorer(copie, cle)
    print(json.dumps({k: v for k, v in res.items() if k != "details"}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
