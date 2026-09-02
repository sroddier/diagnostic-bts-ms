window.DIAGNOSTIC = {
  session: "2026-r1",
  storageKey: "diagnostic-bts-ms-2026-r1",
  schema: "diagnostic-bts-ms-r1-v1",
  titre: "Positionnement rentrée",
  formation: "BTS Maintenance des systèmes — option SP",
  dureeSec: 55 * 60,
  /* Coller l’URL du déploiement Apps Script (se termine par /exec). */
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbxORkveocDQUOv_uf2YD6FCwCXHag7t-QC-7Zk7nP_QKCjifkM5LVpD4IMBOeE08WF5HQ/exec",
  groupes: [
    { id: "1MS-A", label: "1MS-A — 1re année, initiale" },
    { id: "1MS-B", label: "1MS-B — 1re année, initiale" },
    { id: "1MS-ALT", label: "1MS-ALT — 1re année, alternance" },
    { id: "2MS-A", label: "2MS-A — 2e année, initiale" },
    { id: "2MS-B", label: "2MS-B — 2e année, initiale" },
    { id: "2MS-ALT", label: "2MS-ALT — 2e année, alternance" },
  ],
  bacs: [
    { id: "bac_pro_mei", label: "Bac pro MEI / MSPC (maintenance)" },
    { id: "bac_pro_indus", label: "Bac pro industriel (autre)" },
    { id: "sti2d", label: "STI2D" },
    { id: "general", label: "Bac général" },
    { id: "autre", label: "Autre / reconversion" },
  ],
  labels: {
    alaise: "À l’aise",
    construction: "En construction",
    prioritaire: "Prioritaire",
  },
};
