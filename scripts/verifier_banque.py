# -*- coding: utf-8 -*-
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from banque import ITEMS, ORDRE_DOMAINES  # noqa: E402


def main() -> None:
    errors = []
    ids = []
    counts = {d: 0 for d in ORDRE_DOMAINES}
    for item in ITEMS:
        i = item["id"]
        ids.append(i)
        if item["domaine"] not in counts:
            errors.append(f"{i}: domaine inconnu {item['domaine']}")
        else:
            counts[item["domaine"]] += 1
        if item["type"] not in {"qcm1", "qcmn", "ordre"}:
            errors.append(f"{i}: type {item['type']}")
        choix = [c["id"] for c in item["choix"]]
        if len(choix) != len(set(choix)):
            errors.append(f"{i}: choix en double")
        if item["type"] == "qcm1" and len(item["correct"]) != 1:
            errors.append(f"{i}: qcm1 doit avoir une seule bonne réponse")
        if item["type"] == "qcmn" and len(item["correct"]) < 2:
            errors.append(f"{i}: qcmn attend au moins 2 bonnes réponses")
        if item["type"] == "ordre" and item["correct"] != item["correct"]:
            errors.append(f"{i}: ordre invalide")
        for c in item["correct"]:
            if c not in choix:
                errors.append(f"{i}: {c} pas dans les choix")
    if len(ids) != len(set(ids)):
        errors.append("ids en double")
    if len(ITEMS) < 28 or len(ITEMS) > 36:
        errors.append(f"volume {len(ITEMS)} hors cible 28–36")
    print(f"{len(ITEMS)} items")
    print("  ".join(f"{d}:{counts[d]}" for d in ORDRE_DOMAINES))
    if errors:
        print("ERREURS:")
        for e in errors:
            print(" -", e)
        sys.exit(1)
    print("banque OK")


if __name__ == "__main__":
    main()
