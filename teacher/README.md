# Dossier enseignant (ne pas publier la clé)

| Fichier | Statut Git | Rôle |
|---|---|---|
| `cle-correction.json` | **gitignoré** | Barème + compétences + commentaires |
| `exports/` | **gitignoré** | Copies de secours, exports Sheet |
| ce README | versionné | Mode d’emploi |

`cle-correction.json` est régénéré par :

```powershell
python scripts\build_public.py
```

**Ne le commitez jamais. Ne le mettez pas dans le dépôt GitHub.**  
Sauvegarde privée : clé USB, Drive perso, pas le repo public.

## Corriger une copie JSON (étudiant hors ligne)

```powershell
python scripts\score_local.py teacher\exports\NOM-Prenom-1MS-A.json
```

## Pour l’analyse ultérieure (Grok)

Exporter depuis Google Sheet :

1. Fichier → Télécharger → CSV des deux onglets, **ou**
2. Copier la colonne `json` de l’onglet Copies dans un fichier `exports/session-2026-r1.jsonl`

Puis déposer ces fichiers ici en disant : *« analyse les résultats du positionnement »*.
