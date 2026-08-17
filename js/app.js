(() => {
  const CFG = window.DIAGNOSTIC;
  const STORAGE = "diagnostic-bts-ms-2026-r1";
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const state = load() || blank();

  function blank() {
    return {
      phase: "accueil",
      identite: null,
      index: 0,
      startedAt: null,
      endsAt: null,
      reponses: {},
      enteredAt: null,
      profil: null,
      soumis: false,
    };
  }

  function load() {
    try {
      return JSON.parse(sessionStorage.getItem(STORAGE) || "null");
    } catch {
      return null;
    }
  }

  function save() {
    sessionStorage.setItem(STORAGE, JSON.stringify(state));
  }

  function show(phase) {
    state.phase = phase;
    $$(".ecran").forEach((el) => el.hidden = el.id !== `ecran-${phase}`);
    const timer = $("#timer");
    if (timer) timer.hidden = phase !== "test";
    save();
  }

  /* ——— Accueil ——— */
  function remplirListes() {
    const g = $("#groupe");
    const b = $("#bac");
    g.innerHTML = '<option value="">Choisir…</option>' +
      CFG.groupes.map((x) => `<option value="${x.id}">${x.label}</option>`).join("");
    b.innerHTML = '<option value="">Choisir…</option>' +
      CFG.bacs.map((x) => `<option value="${x.id}">${x.label}</option>`).join("");
  }

  $("#form-identite").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const identite = {
      nom: String(fd.get("nom") || "").trim(),
      prenom: String(fd.get("prenom") || "").trim(),
      groupe: String(fd.get("groupe") || ""),
      bac: String(fd.get("bac") || ""),
      code_seance: String(fd.get("code") || "").trim(),
    };
    if (identite.nom.length < 2 || identite.prenom.length < 2) {
      toast("Indiquez votre nom et votre prénom.");
      return;
    }
    if (!identite.groupe || !identite.bac) {
      toast("Choisissez votre groupe et votre bac d’origine.");
      return;
    }
    if (!identite.code_seance) {
      toast("Saisissez le code séance écrit au tableau.");
      return;
    }
    if (!$("#rgpd").checked) {
      toast("Cochez la case d’information pour commencer.");
      return;
    }
    const now = Date.now();
    state.identite = identite;
    state.startedAt = now;
    state.endsAt = now + CFG.dureeSec * 1000;
    state.index = 0;
    state.reponses = {};
    state.enteredAt = now;
    state.profil = null;
    state.soumis = false;
    save();
    demarrerTest();
  });

  /* ——— Test ——— */
  function reponse(id) {
    if (!state.reponses[id]) {
      state.reponses[id] = { choix: [], confiance: null, temps_s: 0, vu: false };
    }
    return state.reponses[id];
  }

  function comptabiliserTemps() {
    const q = window.QUESTIONS[state.index];
    if (!q || !state.enteredAt) return;
    const r = reponse(q.id);
    r.temps_s += Math.max(0, Math.round((Date.now() - state.enteredAt) / 1000));
    state.enteredAt = Date.now();
  }

  function aller(i) {
    comptabiliserTemps();
    state.index = Math.max(0, Math.min(window.QUESTIONS.length - 1, i));
    state.enteredAt = Date.now();
    renderQuestion();
    save();
  }

  function demarrerTest() {
    $("#qui").textContent = `${state.identite.prenom} ${state.identite.nom} · ${state.identite.groupe}`;
    construireNav();
    show("test");
    aller(state.index);
    tickTimer();
  }

  function construireNav() {
    const nav = $("#nav-q");
    nav.innerHTML = window.QUESTIONS.map((q, i) =>
      `<button type="button" class="pill" data-i="${i}" aria-label="Question ${i + 1}">${i + 1}</button>`
    ).join("");
    nav.onclick = (e) => {
      const btn = e.target.closest("[data-i]");
      if (btn) aller(Number(btn.dataset.i));
    };
  }

  function renderQuestion() {
    const q = window.QUESTIONS[state.index];
    const r = reponse(q.id);
    r.vu = true;
    const n = window.QUESTIONS.length;
    $("#progress-txt").textContent = `Question ${state.index + 1} / ${n}`;
    $("#progress-bar").style.width = `${((state.index + 1) / n) * 100}%`;
    const domaine = window.DOMAINES[q.domaine];
    $("#q-domaine").textContent = domaine.nom;
    $("#q-intitule").textContent = q.intitule;

    const fig = $("#q-figure");
    if (q.figure && window.FIGURES[q.figure]) {
      fig.hidden = false;
      fig.innerHTML = window.FIGURES[q.figure];
    } else {
      fig.hidden = true;
      fig.innerHTML = "";
    }
    const extra = $("#q-html");
    if (q.html) {
      extra.hidden = false;
      extra.innerHTML = q.html;
    } else {
      extra.hidden = true;
      extra.innerHTML = "";
    }

    const hint = $("#q-hint");
    if (q.type === "qcmn") {
      hint.hidden = false;
      hint.textContent = "Plusieurs réponses sont attendues. Cochez toutes celles qui conviennent.";
    } else if (q.type === "ordre") {
      hint.hidden = false;
      hint.textContent = "Classez les étapes : 1 = première action, 4 = dernière.";
    } else {
      hint.hidden = true;
    }

    const box = $("#q-choix");
    if (q.type === "ordre") {
      box.className = "choix ordre";
      const ordre = r.choix.length === q.choix.length ? r.choix : q.choix.map((c) => c.id);
      r.choix = [...ordre];
      box.innerHTML = ordre.map((id, idx) => {
        const c = q.choix.find((x) => x.id === id);
        return `<div class="opt ordre-ligne" data-id="${c.id}">
          <span class="rang">${idx + 1}</span>
          <span class="opt-txt">${c.texte}</span>
          <span class="ordre-btns">
            <button type="button" data-move="-1" aria-label="Monter">↑</button>
            <button type="button" data-move="1" aria-label="Descendre">↓</button>
          </span>
        </div>`;
      }).join("");
      box.onclick = (e) => {
        const btn = e.target.closest("[data-move]");
        if (!btn) return;
        const ligne = btn.closest("[data-id]");
        const arr = [...r.choix];
        const i = arr.indexOf(ligne.dataset.id);
        const j = i + Number(btn.dataset.move);
        if (j < 0 || j >= arr.length) return;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        r.choix = arr;
        save();
        renderQuestion();
      };
    } else {
      const multi = q.type === "qcmn";
      box.className = "choix";
      box.innerHTML = q.choix.map((c) => {
        const on = r.choix.includes(c.id);
        return `<button type="button" class="opt ${on ? "on" : ""}" data-id="${c.id}">
          <span class="lettre">${c.id}</span>
          <span class="opt-txt">${c.texte}</span>
        </button>`;
      }).join("");
      box.onclick = (e) => {
        const btn = e.target.closest("[data-id]");
        if (!btn) return;
        const id = btn.dataset.id;
        if (multi) {
          r.choix = r.choix.includes(id) ? r.choix.filter((x) => x !== id) : [...r.choix, id].sort();
        } else {
          r.choix = [id];
        }
        save();
        renderQuestion();
      };
    }

    $$(".conf button").forEach((b) => {
      b.classList.toggle("on", String(r.confiance) === b.dataset.n);
    });

    $("#btn-prev").disabled = state.index === 0;
    $("#btn-next").textContent = state.index === n - 1 ? "Revoir avant d’envoyer" : "Suivante";
    majPills();
  }

  function majPills() {
    $$("#nav-q .pill").forEach((p, i) => {
      const q = window.QUESTIONS[i];
      const r = state.reponses[q.id];
      p.classList.toggle("current", i === state.index);
      p.classList.toggle("done", !!(r && r.choix && r.choix.length));
    });
  }

  $("#conf").addEventListener("click", (e) => {
    const b = e.target.closest("[data-n]");
    if (!b) return;
    const q = window.QUESTIONS[state.index];
    reponse(q.id).confiance = Number(b.dataset.n);
    save();
    renderQuestion();
  });

  $("#btn-prev").addEventListener("click", () => aller(state.index - 1));
  $("#btn-next").addEventListener("click", () => {
    if (state.index === window.QUESTIONS.length - 1) {
      $("#nav-q").scrollIntoView({ behavior: "smooth", block: "center" });
      toast("Parcourez les pastilles : les questions sans réponse sont vides.");
      return;
    }
    aller(state.index + 1);
  });

  $("#btn-envoyer").addEventListener("click", () => proposerEnvoi(false));

  document.addEventListener("keydown", (e) => {
    if (state.phase !== "test" || e.target.matches("input, select, textarea")) return;
    const q = window.QUESTIONS[state.index];
    if (!q || q.type === "ordre") return;
    const map = { Digit1: "A", Digit2: "B", Digit3: "C", Digit4: "D",
      Numpad1: "A", Numpad2: "B", Numpad3: "C", Numpad4: "D" };
    const lettre = map[e.code];
    if (!lettre) return;
    if (!q.choix.some((c) => c.id === lettre)) return;
    const r = reponse(q.id);
    if (q.type === "qcmn") {
      r.choix = r.choix.includes(lettre) ? r.choix.filter((x) => x !== lettre) : [...r.choix, lettre].sort();
    } else {
      r.choix = [lettre];
    }
    save();
    renderQuestion();
  });

  function tickTimer() {
    if (state.phase !== "test" || state.soumis) return;
    const left = Math.max(0, state.endsAt - Date.now());
    const m = Math.floor(left / 60000);
    const s = Math.floor((left % 60000) / 1000);
    const el = $("#timer");
    el.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    el.classList.toggle("warn", left <= 10 * 60 * 1000);
    el.classList.toggle("hot", left <= 2 * 60 * 1000);
    if (left <= 0) {
      proposerEnvoi(true);
      return;
    }
    setTimeout(tickTimer, 400);
  }

  function payload() {
    comptabiliserTemps();
    const reponses = window.QUESTIONS.map((q) => {
      const r = state.reponses[q.id] || { choix: [], confiance: null, temps_s: 0 };
      return {
        id: q.id,
        choix: r.choix || [],
        confiance: r.confiance,
        temps_s: r.temps_s || 0,
      };
    });
    return {
      schema: "diagnostic-bts-ms-r1-v1",
      session: CFG.session,
      soumis_at: new Date().toISOString(),
      duree_totale_s: state.startedAt ? Math.round((Date.now() - state.startedAt) / 1000) : null,
      code_seance: state.identite.code_seance,
      identite: {
        nom: state.identite.nom,
        prenom: state.identite.prenom,
        groupe: state.identite.groupe,
        bac: state.identite.bac,
      },
      reponses,
    };
  }

  function proposerEnvoi(auto) {
    if (state.soumis) return;
    const manquantes = window.QUESTIONS.filter((q) => {
      const r = state.reponses[q.id];
      return !r || !r.choix || r.choix.length === 0;
    }).length;
    const msg = auto
      ? "Le temps est écoulé. La copie va être envoyée."
      : (manquantes
        ? `${manquantes} question(s) sans réponse. Envoyer quand même ?`
        : "Envoyer la copie ? Vous ne pourrez plus modifier.");
    if (!auto && !confirm(msg)) return;
    if (auto) toast(msg);
    envoyer();
  }

  async function envoyer() {
    if (state.soumis) return;
    state.soumis = true;
    save();
    const data = payload();
    $("#overlay").hidden = false;
    $("#overlay-txt").textContent = "Enregistrement de la copie…";
    let profil = null;
    let erreur = null;
    if (!CFG.appsScriptUrl && (location.hostname === "127.0.0.1" || location.hostname === "localhost")) {
      CFG.appsScriptUrl = "http://127.0.0.1:8787/";
    }
    const url = (CFG.appsScriptUrl || "").trim();
    if (url) {
      try {
        const res = await fetch(url, {
          method: "POST",
          redirect: "follow",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(data),
        });
        const json = await res.json();
        if (!json.ok) throw new Error(json.erreur || "Envoi refusé");
        profil = json;
      } catch (err) {
        erreur = err.message || String(err);
      }
    } else {
      erreur = "Collecte non configurée (URL Apps Script manquante).";
    }
    $("#overlay").hidden = true;
    if (!profil) {
      telecharger(data);
      state.soumis = false;
      save();
      alert(
        "La copie n’a pas pu être envoyée (" + (erreur || "réseau") + ").\n\n" +
        "Un fichier JSON a été téléchargé. Remettez-le au professeur.\n" +
        "Le profil radar vous sera rendu ensuite."
      );
      return;
    }
    state.profil = profil;
    save();
    afficherProfil(profil);
  }

  function telecharger(data) {
    const nom = `${data.identite.nom}-${data.identite.prenom}-${data.identite.groupe}.json`
      .replace(/\s+/g, "_");
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = nom;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  /* ——— Restitution ——— */
  function afficherProfil(p) {
    show("resultat");
    $("#res-prenom").textContent = p.prenom || state.identite.prenom;
    $("#res-msg").textContent = p.message || "";
    dessinerRadar(p);
    const ul = $("#res-domaines");
    ul.innerHTML = window.ORDRE_DOMAINES.map((d) => {
      const niv = p.niveaux[d];
      const pct = Math.round((p.scores[d] || 0) * 100);
      return `<li class="niv-${niv}">
        <strong>${window.DOMAINES[d].nom}</strong>
        <span class="tag">${CFG.labels[niv] || niv}</span>
        <em>${pct} %</em>
      </li>`;
    }).join("");
  }

  function dessinerRadar(p) {
    const svg = $("#radar");
    const labels = window.ORDRE_DOMAINES;
    const n = labels.length;
    const cx = 160, cy = 160, r = 112;
    const pt = (i, ratio) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
      return [cx + r * ratio * Math.cos(a), cy + r * ratio * Math.sin(a)];
    };
    let rings = "";
    [0.25, 0.5, 0.75, 1].forEach((g) => {
      const pts = labels.map((_, i) => pt(i, g).join(",")).join(" ");
      rings += `<polygon points="${pts}" class="ring"/>`;
    });
    let axes = "";
    let labs = "";
    labels.forEach((d, i) => {
      const [x, y] = pt(i, 1);
      axes += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" class="axis"/>`;
      const [lx, ly] = pt(i, 1.22);
      labs += `<text x="${lx}" y="${ly}" class="rlab">${window.DOMAINES[d].court}</text>`;
    });
    const poly = labels.map((d, i) => pt(i, p.scores[d] || 0).join(",")).join(" ");
    svg.innerHTML = `${rings}${axes}<polygon points="${poly}" class="area"/>${labs}`;
  }

  $("#btn-quitter").addEventListener("click", () => {
    sessionStorage.removeItem(STORAGE);
    location.reload();
  });

  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toast._id);
    toast._id = setTimeout(() => { t.hidden = true; }, 3200);
  }

  /* ——— Boot ——— */
  remplirListes();
  $("#annee").textContent = new Date().getFullYear();
  if (state.phase === "test" && state.identite && !state.soumis) {
    demarrerTest();
  } else if (state.phase === "resultat" && state.profil) {
    afficherProfil(state.profil);
  } else {
    show("accueil");
  }
})();
