# Positionnement rentrée — BTS MS option SP

Test diagnostique de début de 1re année : **mécanique + tronc commun**.  
Une heure en salle, trois groupes (`1MS-A`, `1MS-B`, `1MS-ALT`).  
Site public, résultats nominatifs dans **votre** feuille Google (privée).

**Site (après publication) :** https://sroddier.github.io/diagnostic-bts-ms/  
**Unités et conversions :** https://sroddier.github.io/diagnostic-bts-ms/unites/  
**Manipulation d’équations :** https://sroddier.github.io/diagnostic-bts-ms/equations/  
**Lecture de représentations :** https://sroddier.github.io/diagnostic-bts-ms/schemas/  
**Statique qualitative :** https://sroddier.github.io/diagnostic-bts-ms/statique/

## Ce que ça fait

| Étudiant | Vous | Plus tard |
|---|---|---|
| 32 questions, 55 min, pas de compte | Feuille : une ligne par copie + une ligne par item | Bilan personnalisé à partir de l’export |
| Radar immédiat (pas le corrigé) | Code séance au tableau | Groupes de besoin |

Le corrigé **n’est pas** dans le site. Il est dans `teacher/cle-correction.json` (gitignoré) et dans les propriétés du script Google.

## Contenu (32 items)

| Domaine | Code | Items |
|---|---|---|
| Maths outils | MAT | 5 |
| Mécanique | MEC | 11 |
| Physique appliquée | PHY | 4 |
| Documents techniques | DOC | 4 |
| Méthode & sécurité | MET | 4 |
| Culture techno | TEC | 4 |

Option **SP** seulement. Pas une note de bulletin.

## Mise en service (ordre)

1. Générer la clé enseignant (déjà fait si vous avez ce dossier) :
   ```powershell
   cd C:\Users\srodd\diagnostic-bts-ms
   python scripts\build_public.py
   ```
2. Brancher la feuille : voir [`collecte/README.md`](collecte/README.md).
3. Coller l’URL `/exec` dans `js/config.js` → `appsScriptUrl`.
4. Publier : double-clic `publier.bat` (ou les commandes git ci-dessous).
5. Essai à blanc : vous-même, code séance, vérifier qu’une ligne apparaît dans la feuille et que le radar s’affiche.
6. Jour J : code au tableau, salle info, vous surveillez l’onglet **Copies**.

## Essai en local (sans Google)

Deux terminaux :

```powershell
cd C:\Users\srodd\diagnostic-bts-ms
python scripts\mock_collecte.py
```

```powershell
cd C:\Users\srodd\diagnostic-bts-ms
python -m http.server 5500
```

Ouvrir http://127.0.0.1:5500 — code séance : **`MS26R1`**.

## Publier une modification

```powershell
cd C:\Users\srodd\diagnostic-bts-ms
git add -A
git commit -m "Correction item MEC-03"
git push
```

Ou `publier.bat`. Attendre ~1 min, Ctrl+F5.

## Analyse des résultats

Exporter les onglets **Copies** et **Items** (CSV) ou la colonne `json`.  
Les déposer ici et demander le bilan classe + un bilan par étudiant.

## Fichiers sensibles

Ne jamais committer (déjà dans `.gitignore`) :

- `scripts/banque.py` — banque source avec barème
- `teacher/cle-correction.json`
- `data/items.full.json`
- `js/config.local.js`

Gardez une copie privée de `teacher/cle-correction.json` (USB / Drive), pas le dépôt public.
