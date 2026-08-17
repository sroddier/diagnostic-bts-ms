/**
 * Collecte du positionnement BTS MS.
 *
 * 1. Créer une feuille Google (privée).
 * 2. Extensions > Apps Script > coller ce fichier.
 * 3. Propriétés du script :
 *      ANSWER_KEY   = contenu intégral de teacher/cle-correction.json
 *      SESSION_CODE = code écrit au tableau (ex. MS26R1)
 * 4. Exécuter setup() une fois (autorisation Google).
 * 5. Déployer > Application Web
 *      Exécuter en tant que : Moi
 *      Qui a accès : Tout le monde
 * 6. Copier l’URL /exec dans js/config.js → appsScriptUrl
 */

var COPIES = "Copies";
var ITEMS = "Items";

function setup() {
  var ss = SpreadsheetApp.getActive();
  var copies = ss.getSheetByName(COPIES) || ss.insertSheet(COPIES);
  var items = ss.getSheetByName(ITEMS) || ss.insertSheet(ITEMS);
  if (copies.getLastRow() === 0) {
    copies.appendRow([
      "recu_at", "session", "nom", "prenom", "groupe", "bac",
      "duree_s", "MAT", "MEC", "PHY", "DOC", "MET", "TEC",
      "appui", "priorites", "json",
    ]);
    copies.setFrozenRows(1);
  }
  if (items.getLastRow() === 0) {
    items.appendRow([
      "recu_at", "nom", "prenom", "groupe", "item_id", "domaine",
      "choix", "correct", "temps_s", "confiance",
    ]);
    items.setFrozenRows(1);
  }
}

function doGet() {
  return json_({ ok: true, service: "diagnostic-bts-ms", session: "2026-r1" });
}

function doPost(e) {
  try {
    var raw = (e && e.postData && e.postData.contents) || "";
    var data = JSON.parse(raw);
    var props = PropertiesService.getScriptProperties();
    var attendu = (props.getProperty("SESSION_CODE") || "").trim();
    var recu = String(data.code_seance || "").trim();
    if (attendu && recu !== attendu) {
      return json_({ ok: false, erreur: "Code séance incorrect" });
    }
    var ident = data.identite || {};
    if (!ident.nom || !ident.prenom || !ident.groupe) {
      return json_({ ok: false, erreur: "Identité incomplète" });
    }
    if (!data.reponses || !data.reponses.length) {
      return json_({ ok: false, erreur: "Aucune réponse" });
    }
    var cle = JSON.parse(props.getProperty("ANSWER_KEY") || "null");
    if (!cle || !cle.items) {
      return json_({ ok: false, erreur: "Clé de correction absente côté enseignant" });
    }
    var profil = scorer_(data, cle);
    ecrire_(data, profil);
    return json_({
      ok: true,
      schema: "diagnostic-bts-ms-r1-v1",
      session: data.session || cle.session,
      prenom: ident.prenom,
      scores: profil.scores,
      niveaux: profil.niveaux,
      appui: profil.appui,
      priorites: profil.priorites,
      message: profil.message,
    });
  } catch (err) {
    return json_({ ok: false, erreur: String(err) });
  }
}

function scorer_(copie, cle) {
  var items = cle.items;
  var ordre = cle.ordre_domaines || ["MAT", "MEC", "PHY", "DOC", "MET", "TEC"];
  var tot = {}, ok = {}, details = [];
  ordre.forEach(function (d) { tot[d] = 0; ok[d] = 0; });
  copie.reponses.forEach(function (r) {
    var spec = items[r.id];
    if (!spec) return;
    var d = spec.domaine;
    tot[d] = (tot[d] || 0) + 1;
    var choix = r.choix || [];
    var bon = spec.type === "ordre"
      ? sameSeq_(choix, spec.correct)
      : sameSet_(choix, spec.correct);
    if (bon) ok[d] = (ok[d] || 0) + 1;
    details.push({
      id: r.id, domaine: d, choix: choix, correct: bon,
      temps_s: r.temps_s, confiance: r.confiance,
    });
  });
  var scores = {}, niveaux = {};
  ordre.forEach(function (d) {
    scores[d] = tot[d] ? ok[d] / tot[d] : 0;
    niveaux[d] = niveau_(scores[d]);
  });
  var appui = ordre.filter(function (d) { return niveaux[d] === "alaise"; });
  var priorites = ordre.filter(function (d) { return niveaux[d] === "prioritaire"; });
  if (!priorites.length) {
    priorites = ordre.slice().sort(function (a, b) { return scores[a] - scores[b]; }).slice(0, 2);
  }
  if (!appui.length) {
    appui = ordre.slice().sort(function (a, b) { return scores[b] - scores[a]; }).slice(0, 1);
  }
  return {
    scores: scores,
    niveaux: niveaux,
    appui: appui,
    priorites: priorites,
    details: details,
    message: message_(cle, appui, priorites),
  };
}

function niveau_(s) {
  if (s >= 0.75) return "alaise";
  if (s >= 0.40) return "construction";
  return "prioritaire";
}

function message_(cle, appui, priorites) {
  var noms = cle.domaines || {};
  var nom = function (d) { return (noms[d] && noms[d].nom) || d; };
  return "Point d’appui : " + appui.slice(0, 2).map(nom).join(", ") +
    ". Priorité de travail : " + priorites.slice(0, 2).map(nom).join(", ") + ".";
}

function ecrire_(copie, profil) {
  setup();
  var ss = SpreadsheetApp.getActive();
  var ident = copie.identite;
  var recu = new Date();
  var s = profil.scores;
  ss.getSheetByName(COPIES).appendRow([
    recu, copie.session || "", ident.nom, ident.prenom, ident.groupe, ident.bac,
    copie.duree_totale_s || "",
    s.MAT, s.MEC, s.PHY, s.DOC, s.MET, s.TEC,
    profil.appui.join(" "), profil.priorites.join(" "),
    JSON.stringify(copie),
  ]);
  var itemSheet = ss.getSheetByName(ITEMS);
  var rows = profil.details.map(function (d) {
    return [
      recu, ident.nom, ident.prenom, ident.groupe, d.id, d.domaine,
      (d.choix || []).join(","), d.correct, d.temps_s, d.confiance,
    ];
  });
  if (rows.length) {
    itemSheet.getRange(itemSheet.getLastRow() + 1, 1, rows.length, 10).setValues(rows);
  }
}

function sameSet_(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  var sa = a.slice().sort().join("\0");
  var sb = b.slice().sort().join("\0");
  return sa === sb;
}

function sameSeq_(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
