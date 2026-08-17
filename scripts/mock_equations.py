# -*- coding: utf-8 -*-
from __future__ import annotations

import json
import sys
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(Path(__file__).resolve().parent))
from score_local import scorer  # noqa: E402

CLE = json.loads((ROOT / "equations" / "teacher" / "cle-correction.json").read_text(encoding="utf-8"))
EXPORT = ROOT / "equations" / "teacher" / "exports"
EXPORT.mkdir(parents=True, exist_ok=True)
COPIES = EXPORT / "copies-local.jsonl"
SESSION_CODE = "EQ26R1"


class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        print(f"[equations] {fmt % args}")

    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def _json(self, code, payload):
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
        self._json(200, {"ok": True, "service": "diagnostic-equations-local"})

    def do_POST(self):
        n = int(self.headers.get("Content-Length", "0"))
        data = json.loads(self.rfile.read(n).decode("utf-8"))
        if SESSION_CODE and (data.get("code_seance") or "").strip() != SESSION_CODE:
            self._json(403, {"ok": False, "erreur": "Code séance incorrect"})
            return
        res = scorer(data, CLE)
        res.pop("details", None)
        noms = CLE["domaines"]
        res["message"] = (
            "Point d’appui : " + ", ".join(noms[d]["nom"] for d in res["appui"][:2])
            + ". Priorité de travail : " + ", ".join(noms[d]["nom"] for d in res["priorites"][:2]) + "."
        )
        with COPIES.open("a", encoding="utf-8") as f:
            f.write(json.dumps({"copie": data, "profil": res}, ensure_ascii=False) + "\n")
        self._json(200, res)


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8789
    print(f"Collecte équations  http://127.0.0.1:{port}  code {SESSION_CODE}")
    ThreadingHTTPServer(("127.0.0.1", port), Handler).serve_forever()
