# -*- coding: utf-8 -*-
from __future__ import annotations

import json
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(Path(__file__).resolve().parent))
from banque_unites import ITEMS, ORDRE_DOMAINES  # noqa: E402
from score_local import scorer  # noqa: E402


def main() -> None:
    cle = json.loads((ROOT / "unites" / "teacher" / "cle-correction.json").read_text(encoding="utf-8"))
    public = (ROOT / "unites" / "js" / "questions.js").read_text(encoding="utf-8")
    if '"correct"' in public:
        raise SystemExit("fuite barème dans questions.js")

    by_id = {it["id"]: it for it in ITEMS}
    parfait = {"identite": {"prenom": "A"}, "reponses": [
        {"id": it["id"], "choix": it["correct"]} for it in ITEMS
    ]}
    p = scorer(parfait, cle)
    assert all(abs(p["scores"][d] - 1) < 1e-9 for d in ORDRE_DOMAINES)

    ordre_ok = scorer({"reponses": [{"id": "COH-05", "choix": by_id["COH-05"]["correct"]}]}, cle)
    ordre_ko = scorer({"reponses": [{"id": "COH-05", "choix": list(reversed(by_id["COH-05"]["correct"]))}]}, cle)
    assert ordre_ok["details"][0]["correct"]
    assert not ordre_ko["details"][0]["correct"]

    multi = scorer({"reponses": [{"id": "COH-04", "choix": by_id["COH-04"]["correct"]}]}, cle)
    incomplet = scorer({"reponses": [{"id": "COH-04", "choix": ["A"]}]}, cle)
    assert multi["details"][0]["correct"]
    assert not incomplet["details"][0]["correct"]

    dist = Counter(it["correct"][0] for it in ITEMS if it["type"] == "qcm1")
    if max(dist.values()) - min(dist.values()) > 1:
        raise SystemExit(f"lettres : {dict(dist)}")
    print("unites OK", dict(sorted(dist.items())), f"{len(ITEMS)} items")


if __name__ == "__main__":
    main()
