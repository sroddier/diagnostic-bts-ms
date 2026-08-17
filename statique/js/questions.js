/* Généré — pas de bonnes réponses. */
window.DOMAINES = {
  "ACT": {
    "nom": "Actions mécaniques",
    "court": "Actions",
    "consigne": "Force, couple, point d’application, isolé."
  },
  "LIA": {
    "nom": "Liaisons et ddl",
    "court": "Liaisons",
    "consigne": "Ce qu’une liaison laisse passer ou bloque."
  },
  "MOM": {
    "nom": "Moments",
    "court": "Moments",
    "consigne": "Bras de levier, couple, unités."
  },
  "EQU": {
    "nom": "Équilibre",
    "court": "Équilibre",
    "consigne": "Somme nulle, réactions, « à l’arrêt » ≠ « sans effort »."
  },
  "RDM": {
    "nom": "Sollicitations",
    "court": "RDM",
    "consigne": "Traction, compression, cisaillement, torsion, flambement."
  },
  "MOD": {
    "nom": "Modélisation",
    "court": "Modèle",
    "consigne": "Isoler, remplacer une liaison par ses actions, PFS."
  }
};
window.ORDRE_DOMAINES = [
  "ACT",
  "LIA",
  "MOM",
  "EQU",
  "RDM",
  "MOD"
];
window.QUESTIONS = [
  {
    "id": "ACT-01",
    "domaine": "ACT",
    "type": "qcm1",
    "intitule": "Une force se distingue d’un couple parce que la force :",
    "choix": [
      {
        "id": "A",
        "texte": "Ne peut pas mettre un objet en mouvement"
      },
      {
        "id": "B",
        "texte": "S’exprime toujours en N·m"
      },
      {
        "id": "C",
        "texte": "A un point (ou une droite) d’application et une direction"
      },
      {
        "id": "D",
        "texte": "N’a jamais d’unité"
      }
    ]
  },
  {
    "id": "ACT-02",
    "domaine": "ACT",
    "type": "qcm1",
    "intitule": "Le poids d’un organe est une action :",
    "choix": [
      {
        "id": "A",
        "texte": "À distance, verticale, vers le bas, appliquée au centre de gravité"
      },
      {
        "id": "B",
        "texte": "Toujours nulle si l’organe est à l’arrêt"
      },
      {
        "id": "C",
        "texte": "Identique à la masse (même unité)"
      },
      {
        "id": "D",
        "texte": "De contact, exercée par le sol uniquement"
      }
    ]
  },
  {
    "id": "ACT-03",
    "domaine": "ACT",
    "type": "qcm1",
    "intitule": "Si le corps A pousse B avec 100 N, alors B pousse A :",
    "choix": [
      {
        "id": "A",
        "texte": "Avec 200 N"
      },
      {
        "id": "B",
        "texte": "Seulement si A et B bougent"
      },
      {
        "id": "C",
        "texte": "Avec 0 N si B est plus lourd"
      },
      {
        "id": "D",
        "texte": "Avec 100 N, dans le sens opposé (même droite d’action)"
      }
    ]
  },
  {
    "id": "ACT-04",
    "domaine": "ACT",
    "type": "qcm1",
    "intitule": "Parmi ces actions, laquelle est une action à distance ?",
    "choix": [
      {
        "id": "A",
        "texte": "La réaction d’un palier sur un arbre"
      },
      {
        "id": "B",
        "texte": "Le poids de l’arbre"
      },
      {
        "id": "C",
        "texte": "Le frottement des plaquettes sur le disque"
      },
      {
        "id": "D",
        "texte": "L’effort d’un vérin sur une bielle"
      }
    ]
  },
  {
    "id": "ACT-05",
    "domaine": "ACT",
    "type": "qcm1",
    "intitule": "L’unité SI de force est :",
    "choix": [
      {
        "id": "A",
        "texte": "Le newton"
      },
      {
        "id": "B",
        "texte": "Le pascal"
      },
      {
        "id": "C",
        "texte": "Le watt"
      },
      {
        "id": "D",
        "texte": "Le kilogramme"
      }
    ]
  },
  {
    "id": "LIA-01",
    "domaine": "LIA",
    "type": "qcm1",
    "intitule": "Une liaison pivot d’axe Z laisse, dans le modèle idéal :",
    "choix": [
      {
        "id": "A",
        "texte": "Les 3 rotations"
      },
      {
        "id": "B",
        "texte": "Aucune mobilité"
      },
      {
        "id": "C",
        "texte": "La rotation autour de Z seulement"
      },
      {
        "id": "D",
        "texte": "La translation selon Z seulement"
      }
    ]
  },
  {
    "id": "LIA-02",
    "domaine": "LIA",
    "type": "qcm1",
    "intitule": "Une glissière d’axe X laisse :",
    "choix": [
      {
        "id": "A",
        "texte": "La rotation autour de X seulement"
      },
      {
        "id": "B",
        "texte": "Translation X et rotation X"
      },
      {
        "id": "C",
        "texte": "Aucune mobilité"
      },
      {
        "id": "D",
        "texte": "La translation selon X seulement"
      }
    ]
  },
  {
    "id": "LIA-03",
    "domaine": "LIA",
    "type": "qcm1",
    "intitule": "Un encastrement peut transmettre :",
    "choix": [
      {
        "id": "A",
        "texte": "Uniquement un moment, jamais une force"
      },
      {
        "id": "B",
        "texte": "Une force et un moment (en 3D : jusqu’à 6 composantes)"
      },
      {
        "id": "C",
        "texte": "Rien : les pièces sont libres"
      },
      {
        "id": "D",
        "texte": "Uniquement une force, jamais un moment"
      }
    ]
  },
  {
    "id": "LIA-04",
    "domaine": "LIA",
    "type": "qcm1",
    "intitule": "Un appui simple (ponctuel, sans colle ni vis) ne peut en général pas :",
    "choix": [
      {
        "id": "A",
        "texte": "Tirer (transmettre un effort de sens opposé au contact)"
      },
      {
        "id": "B",
        "texte": "Exister sur une poutre"
      },
      {
        "id": "C",
        "texte": "Être remplacé par une flèche sur un schéma"
      },
      {
        "id": "D",
        "texte": "S’opposer à un enfoncement local"
      }
    ]
  },
  {
    "id": "LIA-05",
    "domaine": "LIA",
    "type": "qcm1",
    "intitule": "Une rotule bloque :",
    "choix": [
      {
        "id": "A",
        "texte": "Une seule translation"
      },
      {
        "id": "B",
        "texte": "Les 3 rotations"
      },
      {
        "id": "C",
        "texte": "Les 3 translations"
      },
      {
        "id": "D",
        "texte": "Tout (encastrement)"
      }
    ]
  },
  {
    "id": "MOM-01",
    "domaine": "MOM",
    "type": "qcm1",
    "intitule": "Force de 40 N perpendiculaire à une clé de 250 mm. Le moment à l’écrou vaut :",
    "choix": [
      {
        "id": "A",
        "texte": "100 N·m"
      },
      {
        "id": "B",
        "texte": "1 000 N·m"
      },
      {
        "id": "C",
        "texte": "10 N"
      },
      {
        "id": "D",
        "texte": "10 N·m"
      }
    ],
    "figure": "cle"
  },
  {
    "id": "MOM-02",
    "domaine": "MOM",
    "type": "qcm1",
    "intitule": "Le moment d’une force par rapport à un point est nul si :",
    "choix": [
      {
        "id": "A",
        "texte": "La droite d’action de la force passe par ce point"
      },
      {
        "id": "B",
        "texte": "L’objet est en acier"
      },
      {
        "id": "C",
        "texte": "On est à l’arrêt"
      },
      {
        "id": "D",
        "texte": "La force est très grande"
      }
    ]
  },
  {
    "id": "MOM-03",
    "domaine": "MOM",
    "type": "qcm1",
    "intitule": "Pour diminuer l’effort à fournir sur une clé, à couple d’écrou identique, on :",
    "choix": [
      {
        "id": "A",
        "texte": "Pousse dans l’axe de la clé"
      },
      {
        "id": "B",
        "texte": "Raccourcit le bras"
      },
      {
        "id": "C",
        "texte": "Allonge le bras (clé plus longue)"
      },
      {
        "id": "D",
        "texte": "Graisse l’écrou : le couple demandé augmente toujours"
      }
    ]
  },
  {
    "id": "MOM-04",
    "domaine": "MOM",
    "type": "qcm1",
    "intitule": "L’unité SI de moment (couple) est :",
    "choix": [
      {
        "id": "A",
        "texte": "N"
      },
      {
        "id": "B",
        "texte": "N·m"
      },
      {
        "id": "C",
        "texte": "Pa"
      },
      {
        "id": "D",
        "texte": "kg"
      }
    ]
  },
  {
    "id": "MOM-05",
    "domaine": "MOM",
    "type": "qcm1",
    "intitule": "Deux forces opposées, de même intensité, non alignées, forment :",
    "choix": [
      {
        "id": "A",
        "texte": "Un équilibre automatique"
      },
      {
        "id": "B",
        "texte": "Une pression"
      },
      {
        "id": "C",
        "texte": "Une résultante non nulle"
      },
      {
        "id": "D",
        "texte": "Un couple (moment résultant non nul, résultante nulle)"
      }
    ]
  },
  {
    "id": "EQU-01",
    "domaine": "EQU",
    "type": "qcm1",
    "intitule": "La charge de 200 N est immobile. La tension du câble vaut :",
    "choix": [
      {
        "id": "A",
        "texte": "200 N"
      },
      {
        "id": "B",
        "texte": "400 N"
      },
      {
        "id": "C",
        "texte": "0 N, rien ne bouge"
      },
      {
        "id": "D",
        "texte": "100 N"
      }
    ],
    "figure": "cable"
  },
  {
    "id": "EQU-02",
    "domaine": "EQU",
    "type": "qcm1",
    "intitule": "Pour qu’un solide soit en équilibre, il faut (modèle 2D) :",
    "choix": [
      {
        "id": "A",
        "texte": "Qu’aucune force n’existe"
      },
      {
        "id": "B",
        "texte": "Uniquement que la somme des forces soit nulle"
      },
      {
        "id": "C",
        "texte": "Que la somme des forces et la somme des moments soient nulles"
      },
      {
        "id": "D",
        "texte": "Qu’il soit posé par terre"
      }
    ]
  },
  {
    "id": "EQU-03",
    "domaine": "EQU",
    "type": "qcm1",
    "intitule": "Poutre en équilibre sur deux appuis, charge au milieu. Les réactions verticales :",
    "choix": [
      {
        "id": "A",
        "texte": "Sont toutes les deux nulles"
      },
      {
        "id": "B",
        "texte": "Se partagent la charge (égales si la charge est au milieu et appuis symétriques)"
      },
      {
        "id": "C",
        "texte": "Valent chacune le double de la charge"
      },
      {
        "id": "D",
        "texte": "N’existent que si la poutre bouge"
      }
    ],
    "figure": "poutre"
  },
  {
    "id": "EQU-04",
    "domaine": "EQU",
    "type": "qcm1",
    "intitule": "« La machine est à l’arrêt, donc il n’y a plus d’efforts dans les pièces » :",
    "choix": [
      {
        "id": "A",
        "texte": "Vrai seulement en hydraulique"
      },
      {
        "id": "B",
        "texte": "Vrai si on a consigné"
      },
      {
        "id": "C",
        "texte": "Vrai toujours"
      },
      {
        "id": "D",
        "texte": "Faux : l’équilibre se fait avec des efforts (poids, précharge, pression résiduelle…)"
      }
    ]
  },
  {
    "id": "RDM-01",
    "domaine": "RDM",
    "type": "qcm1",
    "intitule": "La barre ci-dessous travaille principalement en :",
    "choix": [
      {
        "id": "A",
        "texte": "Traction"
      },
      {
        "id": "B",
        "texte": "Torsion"
      },
      {
        "id": "C",
        "texte": "Flambement"
      },
      {
        "id": "D",
        "texte": "Compression"
      }
    ],
    "figure": "traction"
  },
  {
    "id": "RDM-02",
    "domaine": "RDM",
    "type": "qcm1",
    "intitule": "Cette tige longue, comprimée dans son axe, risque surtout :",
    "choix": [
      {
        "id": "A",
        "texte": "Rien si la section est constante"
      },
      {
        "id": "B",
        "texte": "Une rupture en traction"
      },
      {
        "id": "C",
        "texte": "Le flambement (instabilité)"
      },
      {
        "id": "D",
        "texte": "Un couple de torsion"
      }
    ],
    "figure": "compression"
  },
  {
    "id": "RDM-03",
    "domaine": "RDM",
    "type": "qcm1",
    "intitule": "Une vis de cisaillement (effort perpendiculaire à son axe) travaille surtout en :",
    "choix": [
      {
        "id": "A",
        "texte": "Flambement"
      },
      {
        "id": "B",
        "texte": "Pression de fluide"
      },
      {
        "id": "C",
        "texte": "Traction pure"
      },
      {
        "id": "D",
        "texte": "Cisaillement"
      }
    ]
  },
  {
    "id": "RDM-04",
    "domaine": "RDM",
    "type": "qcm1",
    "intitule": "Un arbre de transmission qui amène un couple moteur travaille principalement en :",
    "choix": [
      {
        "id": "A",
        "texte": "Traction"
      },
      {
        "id": "B",
        "texte": "Torsion (souvent + flexion)"
      },
      {
        "id": "C",
        "texte": "Pression hydrostatique"
      },
      {
        "id": "D",
        "texte": "Rien : l’arbre ne « travaille » pas"
      }
    ]
  },
  {
    "id": "RDM-05",
    "domaine": "RDM",
    "type": "qcm1",
    "intitule": "Une étagère chargée en son milieu, encastrée ou en appui aux extrémités, subit surtout :",
    "choix": [
      {
        "id": "A",
        "texte": "De la flexion"
      },
      {
        "id": "B",
        "texte": "Uniquement de la traction"
      },
      {
        "id": "C",
        "texte": "Aucun effort si elle ne casse pas"
      },
      {
        "id": "D",
        "texte": "De la torsion"
      }
    ]
  },
  {
    "id": "MOD-01",
    "domaine": "MOD",
    "type": "qcm1",
    "intitule": "« Isoler » le solide S, c’est :",
    "choix": [
      {
        "id": "A",
        "texte": "Supprimer toutes les forces"
      },
      {
        "id": "B",
        "texte": "Le démonter physiquement de la machine"
      },
      {
        "id": "C",
        "texte": "Le représenter seul, en remplaçant le reste par les actions extérieures"
      },
      {
        "id": "D",
        "texte": "Négliger son poids toujours"
      }
    ],
    "figure": "isole"
  },
  {
    "id": "MOD-02",
    "domaine": "MOD",
    "type": "qcm1",
    "intitule": "Le principe fondamental de la statique, appliqué à un solide isolé à l’équilibre, dit que :",
    "choix": [
      {
        "id": "A",
        "texte": "Il n’y a aucune action extérieure"
      },
      {
        "id": "B",
        "texte": "Seules les actions intérieures comptent"
      },
      {
        "id": "C",
        "texte": "La masse est nulle"
      },
      {
        "id": "D",
        "texte": "Le torseur des actions extérieures est nul"
      }
    ]
  },
  {
    "id": "MOD-03",
    "domaine": "MOD",
    "type": "qcm1",
    "intitule": "Quand on isole une pièce, une liaison pivot se remplace par :",
    "choix": [
      {
        "id": "A",
        "texte": "Rien : le pivot disparaît"
      },
      {
        "id": "B",
        "texte": "Les actions que le pivot peut transmettre (forces, pas le moment d’axe du pivot)"
      },
      {
        "id": "C",
        "texte": "Uniquement le poids"
      },
      {
        "id": "D",
        "texte": "Six moments et zéro force"
      }
    ]
  },
  {
    "id": "MOD-04",
    "domaine": "MOD",
    "type": "qcm1",
    "intitule": "Dans un modèle de statique de première année, on suppose le plus souvent :",
    "choix": [
      {
        "id": "A",
        "texte": "Que les pièces se déforment beaucoup"
      },
      {
        "id": "B",
        "texte": "Que le solide est indéformable et que l’équilibre est atteint"
      },
      {
        "id": "C",
        "texte": "Que la gravité n’existe pas"
      },
      {
        "id": "D",
        "texte": "Que toutes les liaisons sont des rotules"
      }
    ]
  },
  {
    "id": "MOD-05",
    "domaine": "MOD",
    "type": "ordre",
    "intitule": "Classez les étapes d’une étude de statique simple (de la première à la dernière).",
    "choix": [
      {
        "id": "A",
        "texte": "Écrire l’équilibre (somme des forces / des moments)"
      },
      {
        "id": "B",
        "texte": "Isoler le solide et représenter les actions extérieures"
      },
      {
        "id": "C",
        "texte": "Conclure sur les inconnues (réactions, effort utile…)"
      },
      {
        "id": "D",
        "texte": "Choisir le solide et le paramétrage (repère, points)"
      }
    ],
    "ordre": true
  },
  {
    "id": "MOD-06",
    "domaine": "MOD",
    "type": "qcmn",
    "intitule": "On isole uniquement la charge suspendue au câble. Quelles actions extérieures doit-on tracer ? (plusieurs réponses)",
    "choix": [
      {
        "id": "A",
        "texte": "Son poids"
      },
      {
        "id": "B",
        "texte": "La tension du câble"
      },
      {
        "id": "C",
        "texte": "Les efforts internes dans le matériau de la charge"
      },
      {
        "id": "D",
        "texte": "Le poids du bâtiment"
      }
    ],
    "figure": "cable",
    "multiple": true
  }
];
