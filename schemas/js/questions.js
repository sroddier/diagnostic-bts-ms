/* Généré — pas de bonnes réponses. */
window.DOMAINES = {
  "LIA": {
    "nom": "Schémas et liaisons",
    "court": "Liaisons",
    "consigne": "Pivot, glissière, rotule, encastrement — lecture d’un schéma."
  },
  "DES": {
    "nom": "Dessin technique",
    "court": "Dessin",
    "consigne": "Traits, coupes, hachures, vues."
  },
  "COT": {
    "nom": "Cotation et tolérances",
    "court": "Cotes",
    "consigne": "Cote, H7/g6, rugosité vs tolérance."
  },
  "NOM": {
    "nom": "Nomenclature",
    "court": "Nomen.",
    "consigne": "Repère, désignation, quantité, fonction."
  },
  "SYM": {
    "nom": "Symboles",
    "court": "Symboles",
    "consigne": "Vérin, distributeur, contact, moteur."
  },
  "LEC": {
    "nom": "Extraire une info",
    "court": "Lecture",
    "consigne": "Aller chercher une grandeur sur un extrait de document."
  }
};
window.ORDRE_DOMAINES = [
  "LIA",
  "DES",
  "COT",
  "NOM",
  "SYM",
  "LEC"
];
window.QUESTIONS = [
  {
    "id": "LIA-01",
    "domaine": "LIA",
    "type": "qcm1",
    "intitule": "Les deux pièces sont assemblées par un axe. La pièce 2 tourne autour de Z, sans translation. Quelle liaison idéale ?",
    "choix": [
      {
        "id": "A",
        "texte": "Pivot d’axe Z"
      },
      {
        "id": "B",
        "texte": "Liaison hélicoïdale"
      },
      {
        "id": "C",
        "texte": "Encastrement"
      },
      {
        "id": "D",
        "texte": "Glissière d’axe Z"
      }
    ],
    "figure": "pivot"
  },
  {
    "id": "LIA-02",
    "domaine": "LIA",
    "type": "qcm1",
    "intitule": "Le chariot jaune ne peut que translater selon X. Quelle liaison idéale ?",
    "choix": [
      {
        "id": "A",
        "texte": "Encastrement"
      },
      {
        "id": "B",
        "texte": "Pivot d’axe X"
      },
      {
        "id": "C",
        "texte": "Glissière d’axe X"
      },
      {
        "id": "D",
        "texte": "Rotule"
      }
    ],
    "figure": "glissiere"
  },
  {
    "id": "LIA-03",
    "domaine": "LIA",
    "type": "qcm1",
    "intitule": "Une liaison rotule (sphérique) laisse, dans le modèle idéal :",
    "choix": [
      {
        "id": "A",
        "texte": "6 degrés de liberté"
      },
      {
        "id": "B",
        "texte": "0 degré de liberté"
      },
      {
        "id": "C",
        "texte": "1 rotation"
      },
      {
        "id": "D",
        "texte": "3 rotations"
      }
    ]
  },
  {
    "id": "LIA-04",
    "domaine": "LIA",
    "type": "qcm1",
    "intitule": "Deux pièces soudées sur toute la surface de contact se modélisent en général par :",
    "choix": [
      {
        "id": "A",
        "texte": "Une glissière"
      },
      {
        "id": "B",
        "texte": "Un encastrement"
      },
      {
        "id": "C",
        "texte": "Un appui plan"
      },
      {
        "id": "D",
        "texte": "Un pivot"
      }
    ]
  },
  {
    "id": "LIA-05",
    "domaine": "LIA",
    "type": "qcm1",
    "intitule": "Deux roulements supportent un arbre qui tourne. Leur fonction principale est :",
    "choix": [
      {
        "id": "A",
        "texte": "Le guidage en rotation et la reprise d’efforts"
      },
      {
        "id": "B",
        "texte": "La réduction de vitesse"
      },
      {
        "id": "C",
        "texte": "Le stockage d’énergie"
      },
      {
        "id": "D",
        "texte": "L’étanchéité du carter"
      }
    ]
  },
  {
    "id": "DES-01",
    "domaine": "DES",
    "type": "qcm1",
    "intitule": "Sur le cartouche de traits ci-dessous, le trait n°1 (continu fort) sert à :",
    "choix": [
      {
        "id": "A",
        "texte": "Les hachures de coupe"
      },
      {
        "id": "B",
        "texte": "Les lignes de cote"
      },
      {
        "id": "C",
        "texte": "Les axes et traces de plans de symétrie"
      },
      {
        "id": "D",
        "texte": "Les contours et arêtes vues"
      }
    ],
    "figure": "traits"
  },
  {
    "id": "DES-02",
    "domaine": "DES",
    "type": "qcm1",
    "intitule": "Le trait n°2 (mixte fin) sert principalement à :",
    "choix": [
      {
        "id": "A",
        "texte": "Les filetages uniquement"
      },
      {
        "id": "B",
        "texte": "Les contours vus"
      },
      {
        "id": "C",
        "texte": "Les axes de révolution et de symétrie"
      },
      {
        "id": "D",
        "texte": "Les arêtes cachées"
      }
    ],
    "figure": "traits"
  },
  {
    "id": "DES-03",
    "domaine": "DES",
    "type": "qcm1",
    "intitule": "Sur cette coupe, les hachures représentent :",
    "choix": [
      {
        "id": "A",
        "texte": "La matière réellement coupée par le plan de coupe"
      },
      {
        "id": "B",
        "texte": "Un filetage"
      },
      {
        "id": "C",
        "texte": "Une zone hors cote"
      },
      {
        "id": "D",
        "texte": "Une surface extérieure peinte"
      }
    ],
    "figure": "coupe"
  },
  {
    "id": "DES-04",
    "domaine": "DES",
    "type": "qcm1",
    "intitule": "Une arête cachée se représente en général par :",
    "choix": [
      {
        "id": "A",
        "texte": "Un trait mixte fin"
      },
      {
        "id": "B",
        "texte": "Un trait interrompu fin (n°4)"
      },
      {
        "id": "C",
        "texte": "Un trait continu très fort coloré"
      },
      {
        "id": "D",
        "texte": "Un trait continu fort"
      }
    ],
    "figure": "traits"
  },
  {
    "id": "DES-05",
    "domaine": "DES",
    "type": "qcm1",
    "intitule": "La vue de face d’un dessin d’ensemble est choisie pour :",
    "choix": [
      {
        "id": "A",
        "texte": "Être forcément une coupe"
      },
      {
        "id": "B",
        "texte": "Remplacer la nomenclature"
      },
      {
        "id": "C",
        "texte": "Être toujours la plus petite"
      },
      {
        "id": "D",
        "texte": "Montrer le mieux le fonctionnement / la forme principale"
      }
    ]
  },
  {
    "id": "COT-01",
    "domaine": "COT",
    "type": "qcm1",
    "intitule": "La cote Ø40 H7 désigne :",
    "choix": [
      {
        "id": "A",
        "texte": "Un matériau (nuance H7)"
      },
      {
        "id": "B",
        "texte": "Un arbre Ø40, tolérance H7"
      },
      {
        "id": "C",
        "texte": "Un alésage Ø40 nominal, tolérance H7"
      },
      {
        "id": "D",
        "texte": "Une rugosité de 40 µm"
      }
    ],
    "figure": "cote"
  },
  {
    "id": "COT-02",
    "domaine": "COT",
    "type": "qcm1",
    "intitule": "La cote Ø40 g6 désigne plutôt :",
    "choix": [
      {
        "id": "A",
        "texte": "Un arbre (lettre minuscule)"
      },
      {
        "id": "B",
        "texte": "Un traitement thermique"
      },
      {
        "id": "C",
        "texte": "Une longueur hors tout"
      },
      {
        "id": "D",
        "texte": "Un alésage"
      }
    ]
  },
  {
    "id": "COT-03",
    "domaine": "COT",
    "type": "qcm1",
    "intitule": "Un ajustement Ø40 H7/g6 est typiquement :",
    "choix": [
      {
        "id": "A",
        "texte": "Une cote de rugosité"
      },
      {
        "id": "B",
        "texte": "Un ajustement avec jeu (arbre plus petit que l’alésage)"
      },
      {
        "id": "C",
        "texte": "Un frettage impossible à démonter"
      },
      {
        "id": "D",
        "texte": "Une soudure"
      }
    ]
  },
  {
    "id": "COT-04",
    "domaine": "COT",
    "type": "qcm1",
    "intitule": "Le symbole de rugosité (triangle / Ra) indique :",
    "choix": [
      {
        "id": "A",
        "texte": "Le matériau"
      },
      {
        "id": "B",
        "texte": "Le couple de serrage"
      },
      {
        "id": "C",
        "texte": "La tolérance dimensionnelle H7"
      },
      {
        "id": "D",
        "texte": "L’état de surface exigé"
      }
    ]
  },
  {
    "id": "COT-05",
    "domaine": "COT",
    "type": "qcm1",
    "intitule": "Sur un dessin mécanique européen, une cote « 80 » sans unité s’entend en général en :",
    "choix": [
      {
        "id": "A",
        "texte": "Centimètres"
      },
      {
        "id": "B",
        "texte": "Millimètres"
      },
      {
        "id": "C",
        "texte": "Pouces"
      },
      {
        "id": "D",
        "texte": "Mètres"
      }
    ],
    "figure": "plan_arbre"
  },
  {
    "id": "NOM-01",
    "domaine": "NOM",
    "type": "qcm1",
    "intitule": "D’après la nomenclature, quel composant assure principalement l’étanchéité ?",
    "choix": [
      {
        "id": "A",
        "texte": "Rep 1 — corps"
      },
      {
        "id": "B",
        "texte": "Rep 3 — roulement"
      },
      {
        "id": "C",
        "texte": "Rep 4 — joint à lèvre"
      },
      {
        "id": "D",
        "texte": "Rep 5 — vis CHC"
      }
    ],
    "html": "\n        <table class=\"nomenc\">\n          <thead><tr><th>Rep</th><th>Désignation</th><th>Qté</th></tr></thead>\n          <tbody>\n            <tr><td>1</td><td>Corps</td><td>1</td></tr>\n            <tr><td>2</td><td>Couvercle</td><td>1</td></tr>\n            <tr><td>3</td><td>Roulement à billes 6205</td><td>2</td></tr>\n            <tr><td>4</td><td>Joint à lèvre</td><td>1</td></tr>\n            <tr><td>5</td><td>Vis CHC M6×20</td><td>6</td></tr>\n          </tbody>\n        </table>\n        "
  },
  {
    "id": "NOM-02",
    "domaine": "NOM",
    "type": "qcm1",
    "intitule": "Dans la même nomenclature, quel composant assure le guidage en rotation ?",
    "choix": [
      {
        "id": "A",
        "texte": "Rep 4"
      },
      {
        "id": "B",
        "texte": "Rep 5"
      },
      {
        "id": "C",
        "texte": "Aucun"
      },
      {
        "id": "D",
        "texte": "Rep 3"
      }
    ],
    "html": "\n        <table class=\"nomenc\">\n          <thead><tr><th>Rep</th><th>Désignation</th><th>Qté</th></tr></thead>\n          <tbody>\n            <tr><td>1</td><td>Corps</td><td>1</td></tr>\n            <tr><td>3</td><td>Roulement à billes 6205</td><td>2</td></tr>\n            <tr><td>4</td><td>Joint à lèvre</td><td>1</td></tr>\n            <tr><td>5</td><td>Vis CHC M6×20</td><td>6</td></tr>\n          </tbody>\n        </table>\n        "
  },
  {
    "id": "NOM-03",
    "domaine": "NOM",
    "type": "qcm1",
    "intitule": "Combien de vis faut-il pour monter un palier selon cette nomenclature ?",
    "choix": [
      {
        "id": "A",
        "texte": "6"
      },
      {
        "id": "B",
        "texte": "20"
      },
      {
        "id": "C",
        "texte": "2"
      },
      {
        "id": "D",
        "texte": "5"
      }
    ],
    "html": "\n        <table class=\"nomenc\">\n          <thead><tr><th>Rep</th><th>Désignation</th><th>Qté</th></tr></thead>\n          <tbody>\n            <tr><td>5</td><td>Vis CHC M6×20</td><td>6</td></tr>\n            <tr><td>3</td><td>Roulement 6205</td><td>2</td></tr>\n          </tbody>\n        </table>\n        "
  },
  {
    "id": "NOM-04",
    "domaine": "NOM",
    "type": "qcm1",
    "intitule": "Le « repère » d’une nomenclature sert à :",
    "choix": [
      {
        "id": "A",
        "texte": "Donner le prix unitaire"
      },
      {
        "id": "B",
        "texte": "Relier la bulle du dessin à la ligne de la liste"
      },
      {
        "id": "C",
        "texte": "Indiquer la rugosité"
      },
      {
        "id": "D",
        "texte": "Remplacer la cote"
      }
    ]
  },
  {
    "id": "NOM-05",
    "domaine": "NOM",
    "type": "qcm1",
    "intitule": "« Roulement 6205 » dans la désignation permet surtout de :",
    "choix": [
      {
        "id": "A",
        "texte": "Lire la pression d’huile"
      },
      {
        "id": "B",
        "texte": "Connaître le couple de serrage des vis"
      },
      {
        "id": "C",
        "texte": "Identifier la référence commerciale à commander / remplacer"
      },
      {
        "id": "D",
        "texte": "Savoir la puissance du moteur"
      }
    ]
  },
  {
    "id": "SYM-01",
    "domaine": "SYM",
    "type": "qcm1",
    "intitule": "Le schéma pneumatique ci-dessous représente :",
    "choix": [
      {
        "id": "A",
        "texte": "Un vérin double effet"
      },
      {
        "id": "B",
        "texte": "Un moteur rotatif"
      },
      {
        "id": "C",
        "texte": "Un limiteur de pression"
      },
      {
        "id": "D",
        "texte": "Un vérin simple effet"
      }
    ],
    "figure": "verin"
  },
  {
    "id": "SYM-02",
    "domaine": "SYM",
    "type": "qcm1",
    "intitule": "Un vérin simple effet se reconnaît sur un schéma surtout parce que :",
    "choix": [
      {
        "id": "A",
        "texte": "Il n’existe qu’en hydraulique"
      },
      {
        "id": "B",
        "texte": "Il n’a pas de tige"
      },
      {
        "id": "C",
        "texte": "Il a deux tiges"
      },
      {
        "id": "D",
        "texte": "Il n’a qu’un orifice d’alimentation (retour souvent par ressort)"
      }
    ]
  },
  {
    "id": "SYM-03",
    "domaine": "SYM",
    "type": "qcm1",
    "intitule": "Le contact représenté (ouvert au repos) est :",
    "choix": [
      {
        "id": "A",
        "texte": "Un transformateur"
      },
      {
        "id": "B",
        "texte": "Un contact à ouverture (NF) au repos"
      },
      {
        "id": "C",
        "texte": "Un contact à fermeture (NO) au repos"
      },
      {
        "id": "D",
        "texte": "Un moteur asynchrone"
      }
    ],
    "figure": "contact_no"
  },
  {
    "id": "SYM-04",
    "domaine": "SYM",
    "type": "qcm1",
    "intitule": "Sur un schéma de puissance, le symbole KM désigne en général :",
    "choix": [
      {
        "id": "A",
        "texte": "Un capteur de température"
      },
      {
        "id": "B",
        "texte": "Un contacteur de puissance"
      },
      {
        "id": "C",
        "texte": "Un réducteur"
      },
      {
        "id": "D",
        "texte": "Un manomètre"
      }
    ]
  },
  {
    "id": "SYM-05",
    "domaine": "SYM",
    "type": "qcm1",
    "intitule": "Le cercle annoté « M » sur un schéma électrique de puissance représente :",
    "choix": [
      {
        "id": "A",
        "texte": "Un moteur"
      },
      {
        "id": "B",
        "texte": "Un micromètre"
      },
      {
        "id": "C",
        "texte": "Un joint"
      },
      {
        "id": "D",
        "texte": "Un manomètre"
      }
    ]
  },
  {
    "id": "LEC-01",
    "domaine": "LEC",
    "type": "qcm1",
    "intitule": "Sur cet extrait, le plus grand diamètre de l’arbre est :",
    "choix": [
      {
        "id": "A",
        "texte": "30 mm"
      },
      {
        "id": "B",
        "texte": "50 mm"
      },
      {
        "id": "C",
        "texte": "80 mm"
      },
      {
        "id": "D",
        "texte": "25 mm"
      }
    ],
    "figure": "plan_arbre"
  },
  {
    "id": "LEC-02",
    "domaine": "LEC",
    "type": "qcm1",
    "intitule": "La longueur de la portée centrale (Ø50) vaut :",
    "choix": [
      {
        "id": "A",
        "texte": "On ne peut pas savoir"
      },
      {
        "id": "B",
        "texte": "25 mm"
      },
      {
        "id": "C",
        "texte": "50 mm"
      },
      {
        "id": "D",
        "texte": "80 mm"
      }
    ],
    "figure": "plan_arbre"
  },
  {
    "id": "LEC-03",
    "domaine": "LEC",
    "type": "qcm1",
    "intitule": "Le trait horizontal en mixte à mi-hauteur de l’arbre est :",
    "choix": [
      {
        "id": "A",
        "texte": "Un filetage"
      },
      {
        "id": "B",
        "texte": "Une cote de 100 mm"
      },
      {
        "id": "C",
        "texte": "L’axe de révolution de l’arbre"
      },
      {
        "id": "D",
        "texte": "Une arête cachée"
      }
    ],
    "figure": "plan_arbre"
  },
  {
    "id": "LEC-04",
    "domaine": "LEC",
    "type": "qcmn",
    "intitule": "Quelles informations sont lisibles sur cet extrait ? (plusieurs réponses)",
    "choix": [
      {
        "id": "A",
        "texte": "Trois diamètres de portées"
      },
      {
        "id": "B",
        "texte": "La matière de l’arbre (nuance)"
      },
      {
        "id": "C",
        "texte": "Une longueur de portée"
      },
      {
        "id": "D",
        "texte": "La puissance à transmettre"
      }
    ],
    "figure": "plan_arbre",
    "multiple": true
  },
  {
    "id": "LEC-05",
    "domaine": "LEC",
    "type": "ordre",
    "intitule": "Classez l’ordre utile pour lire un dessin d’ensemble inconnu (du premier au dernier).",
    "choix": [
      {
        "id": "A",
        "texte": "Lire la nomenclature (repères, désignations)"
      },
      {
        "id": "B",
        "texte": "Identifier la vue de face et le fonctionnement global"
      },
      {
        "id": "C",
        "texte": "Aller chercher une cote précise sur une portée"
      },
      {
        "id": "D",
        "texte": "Repérer les liaisons / guidages principaux"
      }
    ],
    "ordre": true
  }
];
