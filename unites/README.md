# Diagnostic unités et conversions

Même dispositif que le [positionnement général](../README.md), ciblé **unités et conversions**.

**Site :** https://sroddier.github.io/diagnostic-bts-ms/unites/  
**Cours / jeu :** https://sroddier.github.io/diagnostic-bts-ms/unites/jeu/

| Domaine | Code | Items |
|---|---|---|
| Préfixes SI | PRE | 5 |
| Longueur, aire, volume | GEO | 5 |
| Force, couple, pression | MEC | 5 |
| Vitesse, rotation, débit | CIN | 5 |
| Énergie et puissance | ENE | 5 |
| Ordre de grandeur | COH | 5 |

30 questions, 40 minutes, pas de calculatrice. Groupes `1MS-A` / `1MS-B` / `1MS-ALT`.

**Feuille séparée** de celle du positionnement général (ne pas mélanger les copies).

## Mise en service

```powershell
cd C:\Users\srodd\diagnostic-bts-ms
python scripts\build_unites.py
python scripts\generer_code_unites.py
```

1. Créer une feuille Google privée `Unités conversions BTS MS 2026`.
2. Extensions → Apps Script → coller `unites\teacher\Code-a-coller.gs`.
3. Exécuter `setup`, déployer en application web (Moi / Tout le monde).
4. Coller l’URL `/exec` dans `unites\js\config.js` → `appsScriptUrl`.
5. `publier.bat`.

Code séance par défaut : **`UN26R1`**.
