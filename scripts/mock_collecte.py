# -*- coding: utf-8 -*-
"""Serveur local qui imite le Web App Google (pour essai avant Apps Script)."""
from __future__ import annotations

import json
import sys
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(Path(__file__).resolve().parent))
from score_local import scorer  # noqa: E402

CLE = json.loads((ROOT / "teacher" / "cle-correction.json").read_text(encoding="utf-8"))
EXPORT = ROOT / "exports"
EXPORT.mkdir(exist_ok=True)
COPIES = EXPORT / "copies-local.jsonl"
SESSION_CODE = "MS26R1"


class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        print(f"[collecte] {self.address_string()} {fmt % args}")

    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def _json(self, code: int, payload: dict):
        raw = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self._cors()
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(raw)))
        self.end_headers()
        self.wfile.write(raw)

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_GET(self):
        self._json(200, {"ok": True, "service": "diagnostic-bts-ms-local", "session": CLE.get("session")})

    def do_POST(self):
        n = int(self.headers.get("Content-Length", "0"))
        raw = self.rfile.read(n).decode("utf-8")
        try:
            data = json.loads(raw)
        except json.JSONDecodeError:
            self._json(400, {"ok": False, "erreur": "JSON invalide"})
            return
        code = (data.get("code_seance") or "").strip()
        if SESSION_CODE and code != SESSION_CODE:
            self._json(403, {"ok": False, "erreur": "Code séance incorrect"})
            return
        ident = data.get("identite") or {}
        if not ident.get("nom") or not ident.get("prenom") or not ident.get("groupe"):
            self._json(400, {"ok": False, "erreur": "Identité incomplète"})
            return
        if not data.get("reponses"):
            self._json(400, {"ok": False, "erreur": "Aucune réponse"})
            return
        res = scorer(data, CLE)
        res.pop("details", None)
        res["message"] = _message(res)
        record = {
            "recu_at": datetime.now(timezone.utc).isoformat(),
            "copie": data,
            "profil": res,
        }
        with COPIES.open("a", encoding="utf-8") as f:
            f.write(json.dumps(record, ensure_ascii=False) + "\n")
        print(f"  → {ident.get('prenom')} {ident.get('nom')} ({ident.get('groupe')})")
        self._json(200, res)


def _message(res: dict) -> str:
    noms = CLE["domaines"]
    appui = ", ".join(noms[d]["nom"] for d in res["appui"][:2])
    prio = ", ".join(noms[d]["nom"] for d in res["priorites"][:2])
    return (
        f"Point d’appui : {appui or 'à confirmer en entretien'}. "
        f"Priorité de travail : {prio}."
    )


def main() -> None:
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8787
    httpd = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"Collecte locale  http://127.0.0.1:{port}")
    print(f"Code séance     {SESSION_CODE}")
    print(f"Copies          {COPIES}")
    httpd.serve_forever()


if __name__ == "__main__":
    main()
