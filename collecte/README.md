# Collecte Google Sheet (privée)

Le site public n’enregistre rien. Les copies vont dans **votre** feuille.

## Une fois pour toutes

1. [Créer une feuille Google](https://sheets.new) nommée par exemple `Positionnement BTS MS 2026` — rester **privé** (partage : vous seul, ou un collègue nommé).
2. **Extensions → Apps Script**. Effacer le code par défaut. Coller `Code.gs`.
3. **Paramètres du projet** (engrenage) → **Propriétés du script** :
   - `ANSWER_KEY` = coller **tout** le fichier `teacher/cle-correction.json` (une seule ligne ou formaté, peu importe).
   - `SESSION_CODE` = le code que vous écrirez au tableau (`MS26R1` pour l’essai local).
4. Enregistrer. Exécuter la fonction `setup` (bouton Exécuter). Autoriser le compte Google.
5. **Déployer → Nouvelle déploiement → Type : Application Web**
   - Description : `collecte-r1`
   - Exécuter en tant que : **Moi**
   - Qui peut y accéder : **Tout le monde** (les étudiants n’ont pas besoin d’un compte Google)
6. Copier l’URL qui se termine par `/exec`.
7. La coller dans `js/config.js`, champ `appsScriptUrl`.
8. Publier le site (`publier.bat`).

## Jour J

- Écrire le `SESSION_CODE` au tableau.
- Ouvrir la feuille : les lignes arrivent dans l’onglet **Copies**.
- L’onglet **Items** sert à l’analyse (une ligne par question).
- Pour un second créneau (alternance), vous pouvez **changer** `SESSION_CODE` et redéployer (Gérer les déploiements → crayon → nouvelle version) si vous voulez fermer le premier créneau.

## Essai sans Google

```powershell
cd C:\Users\srodd\diagnostic-bts-ms
python scripts\build_public.py
Start-Process python -ArgumentList "scripts\mock_collecte.py" -WindowStyle Hidden
python -m http.server 5500
```

Ouvrir http://127.0.0.1:5500 — code séance : `MS26R1` (déjà dans `js/config.local.js` si vous l’avez créé).
