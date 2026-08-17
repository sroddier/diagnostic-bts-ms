# -*- coding: utf-8 -*-
from __future__ import annotations

import json
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(Path(__file__).resolve().parent))
from score_local import scorer  # noqa: E402


def check(slug, module_name):
    mod = __import__(module_name)
    cle = json.loads((ROOT / slug / "teacher" / "cle-correction.json").read_text(encoding="utf-8"))
    public = (ROOT / slug / "js" / "questions.js").read_text(encoding="utf-8")
    if '"correct"' in public:
        raise SystemExit(f"{slug}: fuite barème")
    p = scorer({"reponses": [{"id": it["id"], "choix": it["correct"]} for it in mod.ITEMS]}, cle)
    assert all(abs(p["scores"][d] - 1) < 1e-9 for d in mod.ORDRE_DOMAINES)
    dist = Counter(it["correct"][0] for it in mod.ITEMS if it["type"] == "qcm1")
    if max(dist.values()) - min(dist.values()) > 1:
        raise SystemExit(f"{slug} lettres {dict(dist)}")
    n = len(mod.ITEMS)
    if n < 28 or n > 32:
        raise SystemExit(f"{slug} volume {n}")
    print(f"{slug} OK  {n} items  {dict(sorted(dist.items()))}")


if __name__ == "__main__":
    check("schemas", "banque_schemas")
    check("statique", "banque_statique")
