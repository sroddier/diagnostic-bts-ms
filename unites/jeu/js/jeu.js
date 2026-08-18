(() => {
  const DATA = window.JEU;
  const KEY = "unites-jeu-v1";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const save = (st) => localStorage.setItem(KEY, JSON.stringify(st));
  const load = () => {
    try { return JSON.parse(localStorage.getItem(KEY) || "null"); } catch { return null; }
  };

  const state = load() || { etoiles: {}, meilleur: {}, boss: null };

  function unlocked(i) {
    if (i === 0) return true;
    return (state.etoiles[DATA.niveaux[i - 1].id] || 0) >= 1;
  }
  function bossOpen() {
    return DATA.niveaux.every((n) => (state.etoiles[n.id] || 0) >= 1);
  }
  function etoilesTotal() {
    return DATA.niveaux.reduce((a, n) => a + (state.etoiles[n.id] ? 1 : 0), 0) + (state.boss === "ok" ? 1 : 0);
  }

  function show(id) {
    $$(".ecran").forEach((el) => { el.hidden = el.id !== id; });
  }

  function renderCarte() {
    show("ecran-carte");
    $("#qui").textContent = "";
    $("#etoiles-tot").textContent = `${etoilesTotal()} / 7`;
    const box = $("#carte");
    box.innerHTML = DATA.niveaux.map((n, i) => {
      const open = unlocked(i);
      const star = state.etoiles[n.id] ? "★" : "☆";
      const best = state.meilleur[n.id];
      return `<button type="button" class="node ${open ? "" : "lock"} ${state.etoiles[n.id] ? "won" : ""}" data-i="${i}" ${open ? "" : "disabled"}>
        <span class="num">${n.num}</span>
        <span class="node-txt">
          <strong>${n.nom}</strong>
          <em>${n.sous}</em>
          <small>${open ? (best != null ? `Meilleur : ${best} / ${n.defis.length}` : "À jouer") : "Verrouillé"}</small>
        </span>
        <span class="star">${star}</span>
      </button>`;
    }).join("") + `
      <button type="button" class="node boss ${bossOpen() ? "" : "lock"} ${state.boss === "ok" ? "won" : ""}" data-boss="1" ${bossOpen() ? "" : "disabled"}>
        <span class="num">B</span>
        <span class="node-txt">
          <strong>${DATA.boss.nom}</strong>
          <em>${DATA.boss.sous}</em>
          <small>${bossOpen() ? (state.boss === "ok" ? "Ligne relancée" : "3 vies · 8 décisions") : "6 ateliers d’abord"}</small>
        </span>
        <span class="star">${state.boss === "ok" ? "★" : "☠"}</span>
      </button>`;
    box.onclick = (e) => {
      const btn = e.target.closest("[data-i]");
      if (btn) ouvrirNiveau(Number(btn.dataset.i));
      if (e.target.closest("[data-boss]") && bossOpen()) ouvrirBoss();
    };
  }

  /* ——— Niveau ——— */
  let niv, phase, idx, score, choix, vies;

  function ouvrirNiveau(i) {
    niv = DATA.niveaux[i];
    phase = "fiche";
    idx = 0;
    score = 0;
    choix = null;
    $("#qui").textContent = `Atelier ${niv.num} · ${niv.nom}`;
    renderFiche();
    show("ecran-niveau");
  }

  function renderFiche() {
    const f = niv.fiche;
    $("#niv-kicker").textContent = `Atelier ${niv.num} / 6`;
    $("#niv-titre").textContent = niv.nom;
    const bar = $("#progress-bar");
    if (bar) bar.style.width = "0";
    $("#zone").innerHTML = `
      <p class="lede">${f.accroche}</p>
      <ul class="regles">${f.regles.map((r) => `<li><strong>${r.t}</strong> — ${r.d}</li>`).join("")}</ul>
      <div class="geste"><strong>Geste.</strong> ${f.geste}</div>
      <div class="actions">
        <button class="btn" type="button" id="go-defi">Entrer dans le défi (${niv.defis.length} questions, ${DATA.seuil} pour l’étoile)</button>
        <button class="btn ghost" type="button" id="go-carte">Retour à la carte</button>
      </div>`;
    $("#go-defi").onclick = () => { phase = "defi"; idx = 0; score = 0; choix = null; renderDefi(); };
    $("#go-carte").onclick = renderCarte;
  }

  function currentList() {
    return phase === "boss" ? DATA.boss.defis : niv.defis;
  }

  function renderDefi() {
    const list = currentList();
    const d = list[idx];
    const tot = list.length;
    $("#niv-kicker").textContent = phase === "boss"
      ? `Boss · ${idx + 1} / ${tot} · vies ${"♥".repeat(vies)}${"♡".repeat(DATA.viesBoss - vies)}`
      : `Défi · ${idx + 1} / ${tot} · score ${score}`;
    $("#niv-titre").textContent = phase === "boss" ? DATA.boss.nom : niv.nom;
    $("#progress-bar").style.width = `${((idx) / tot) * 100}%`;

    let html = `<p class="intitule">${d.q}</p>`;
    if (d.ordre) {
      const ordre = (choix && choix.length === d.c.length) ? choix : d.c.map((_, i) => i);
      choix = [...ordre];
      html += `<p class="hint">Classez : 1 = premier / plus petit.</p>
        <div class="choix ordre">${ordre.map((ci, pos) => `
          <div class="opt" data-i="${ci}">
            <span class="lettre">${pos + 1}</span>
            <span>${d.c[ci]}</span>
            <span class="ordre-btns">
              <button type="button" data-mv="-1">↑</button>
              <button type="button" data-mv="1">↓</button>
            </span>
          </div>`).join("")}</div>`;
    } else if (d.multi) {
      const sel = new Set(choix || []);
      html += `<p class="hint">Plusieurs réponses possibles.</p>
        <div class="choix">${d.c.map((t, i) => `
          <button type="button" class="opt ${sel.has(i) ? "on" : ""}" data-i="${i}">
            <span class="lettre">${"ABCD"[i]}</span><span>${t}</span>
          </button>`).join("")}</div>`;
    } else {
      html += `<div class="choix">${d.c.map((t, i) => `
        <button type="button" class="opt ${choix === i ? "on" : ""}" data-i="${i}">
          <span class="lettre">${"ABCD"[i]}</span><span>${t}</span>
        </button>`).join("")}</div>`;
    }
    html += `<div id="feedback" hidden></div>
      <div class="actions">
        <button class="btn" type="button" id="valider">Valider</button>
      </div>`;
    $("#zone").innerHTML = html;

    const box = $("#zone .choix");
    if (d.ordre) {
      box.onclick = (e) => {
        const b = e.target.closest("[data-mv]");
        if (!b) return;
        const ligne = b.closest("[data-i]");
        const arr = [...choix];
        const i = arr.indexOf(Number(ligne.dataset.i));
        const j = i + Number(b.dataset.mv);
        if (j < 0 || j >= arr.length) return;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        choix = arr;
        renderDefi();
      };
    } else if (d.multi) {
      box.onclick = (e) => {
        const b = e.target.closest("[data-i]");
        if (!b) return;
        const i = Number(b.dataset.i);
        const sel = new Set(choix || []);
        if (sel.has(i)) sel.delete(i); else sel.add(i);
        choix = [...sel].sort();
        renderDefi();
      };
    } else {
      box.onclick = (e) => {
        const b = e.target.closest("[data-i]");
        if (!b) return;
        choix = Number(b.dataset.i);
        renderDefi();
      };
    }
    $("#valider").onclick = valider;
  }

  function estJuste(d) {
    if (d.ordre) return JSON.stringify(choix) === JSON.stringify(d.b);
    if (d.multi) {
      const a = [...(choix || [])].sort().join(",");
      const b = [...d.b].sort().join(",");
      return a === b;
    }
    return choix === d.b;
  }

  function valider() {
    const list = currentList();
    const d = list[idx];
    if (d.ordre) { /* always has a permutation */ }
    else if (d.multi && (!choix || !choix.length)) return toast("Cochez au moins une réponse.");
    else if (!d.multi && !d.ordre && choix == null) return toast("Choisissez une réponse.");

    const ok = estJuste(d);
    if (ok) score += 1;
    else if (phase === "boss") vies -= 1;

    const fb = $("#feedback");
    fb.hidden = false;
    fb.className = ok ? "fb ok" : "fb ko";
    fb.innerHTML = `<strong>${ok ? "Juste." : "Pas celle-là."}</strong> ${d.x}`;
    $("#valider").textContent = idx + 1 < list.length && (phase !== "boss" || vies > 0) ? "Suivant" : "Voir le résultat";
    $("#valider").onclick = suivant;
    $$("#zone .opt, #zone [data-mv]").forEach((el) => { el.disabled = true; });
  }

  function suivant() {
    const list = currentList();
    if (phase === "boss" && vies <= 0) return finBoss(false);
    if (idx + 1 < list.length) {
      idx += 1;
      choix = null;
      renderDefi();
      return;
    }
    if (phase === "boss") return finBoss(true);
    finNiveau();
  }

  function finNiveau() {
    const tot = niv.defis.length;
    const passe = score >= DATA.seuil;
    const prev = state.meilleur[niv.id] || 0;
    if (score > prev) state.meilleur[niv.id] = score;
    if (passe) state.etoiles[niv.id] = 1;
    save(state);
    $("#zone").innerHTML = `
      <div class="fin ${passe ? "win" : "fail"}">
        <p class="kicker">${passe ? "Atelier validé" : "Pas encore"}</p>
        <h2>${score} / ${tot}</h2>
        <p class="lede">${passe
          ? "L’étoile est à vous. Relisez la fiche si un item a coincé, puis l’atelier suivant."
          : `Il en faut ${DATA.seuil} pour débloquer la suite. Relisez la fiche — surtout le geste — et rejouez.`}</p>
        <div class="actions">
          <button class="btn" type="button" id="rejouer">Rejouer le défi</button>
          <button class="btn ghost" type="button" id="fiche">Revoir la fiche</button>
          <button class="btn ghost" type="button" id="carte">Carte</button>
        </div>
      </div>`;
    $("#rejouer").onclick = () => { idx = 0; score = 0; choix = null; phase = "defi"; renderDefi(); };
    $("#fiche").onclick = renderFiche;
    $("#carte").onclick = renderCarte;
  }

  function ouvrirBoss() {
    phase = "boss";
    idx = 0;
    score = 0;
    vies = DATA.viesBoss;
    choix = null;
    $("#qui").textContent = "Boss · " + DATA.boss.nom;
    $("#niv-kicker").textContent = "Boss final";
    $("#niv-titre").textContent = DATA.boss.nom;
    $("#zone").innerHTML = `
      <p class="lede">${DATA.boss.intro}</p>
      <div class="actions">
        <button class="btn" type="button" id="go-boss">Entrer dans la ligne (3 vies)</button>
        <button class="btn ghost" type="button" id="go-carte">Retour</button>
      </div>`;
    show("ecran-niveau");
    $("#go-boss").onclick = () => renderDefi();
    $("#go-carte").onclick = renderCarte;
  }

  function finBoss(survecu) {
    const tot = DATA.boss.defis.length;
    const gagne = survecu && score >= 6;
    if (gagne) state.boss = "ok";
    save(state);
    $("#zone").innerHTML = `
      <div class="fin ${gagne ? "win" : "fail"}">
        <p class="kicker">${gagne ? "Ligne relancée" : "Arrêt d’urgence"}</p>
        <h2>${score} / ${tot}${survecu ? "" : " · plus de vies"}</h2>
        <p class="lede">${gagne ? DATA.boss.epilogue : "Trois conversions ratées d’affilée, c’est une pièce cassée ou une étiquette fausse qu’on n’a pas vue. Revenez aux ateliers faibles, puis réessayez."}</p>
        <div class="actions">
          <button class="btn" type="button" id="re-boss">Retenter le boss</button>
          <button class="btn ghost" type="button" id="carte">Carte</button>
        </div>
      </div>`;
    $("#re-boss").onclick = ouvrirBoss;
    $("#carte").onclick = renderCarte;
  }

  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toast._id);
    toast._id = setTimeout(() => { t.hidden = true; }, 2800);
  }

  $("#btn-reset").addEventListener("click", () => {
    if (!confirm("Effacer toute la progression de cet ordinateur ?")) return;
    localStorage.removeItem(KEY);
    Object.keys(state).forEach((k) => delete state[k]);
    state.etoiles = {};
    state.meilleur = {};
    state.boss = null;
    renderCarte();
  });

  $("#annee").textContent = new Date().getFullYear();
  renderCarte();
})();
