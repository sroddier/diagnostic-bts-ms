/* Généré par scripts/build_public.py — ne pas ajouter les bonnes réponses. */
window.DOMAINES = {
  "MAT": {
    "nom": "Maths outils",
    "court": "Maths",
    "consigne": "Unités, proportions, lecture de graphique, trigonométrie de base."
  },
  "MEC": {
    "nom": "Mécanique",
    "court": "Méca",
    "consigne": "Liaisons, efforts, transmissions, RDM qualitative."
  },
  "PHY": {
    "nom": "Physique appliquée",
    "court": "Physique",
    "consigne": "Électricité de base, pression, effort d'un vérin."
  },
  "DOC": {
    "nom": "Documents techniques",
    "court": "Docs",
    "consigne": "Lecture de plan, nomenclature, tolérances, schémas."
  },
  "MET": {
    "nom": "Méthode & sécurité",
    "court": "Méthode",
    "consigne": "Consignation, démarche de diagnostic, 5M."
  },
  "TEC": {
    "nom": "Culture techno",
    "court": "Techno",
    "consigne": "Composants courants d'un système de production."
  }
};
window.ORDRE_DOMAINES = [
  "MAT",
  "MEC",
  "PHY",
  "DOC",
  "MET",
  "TEC"
];
window.QUESTIONS = [
  {
    "id": "MAT-01",
    "domaine": "MAT",
    "type": "qcm1",
    "intitule": "Un arbre a un diamètre de 45 mm. Quelle est cette cote exprimée en mètres ?",
    "choix": [
      {
        "id": "A",
        "texte": "0,45 m"
      },
      {
        "id": "B",
        "texte": "0,045 m"
      },
      {
        "id": "C",
        "texte": "4,5 m"
      },
      {
        "id": "D",
        "texte": "0,0045 m"
      }
    ]
  },
  {
    "id": "MAT-02",
    "domaine": "MAT",
    "type": "qcm1",
    "intitule": "En maintenance, on lit souvent des pressions en bar. 1 bar correspond approximativement à :",
    "choix": [
      {
        "id": "A",
        "texte": "1 Pa"
      },
      {
        "id": "B",
        "texte": "100 Pa"
      },
      {
        "id": "C",
        "texte": "10⁵ Pa (100 000 Pa)"
      },
      {
        "id": "D",
        "texte": "10⁶ Pa"
      }
    ]
  },
  {
    "id": "MAT-03",
    "domaine": "MAT",
    "type": "qcm1",
    "intitule": "Sur un plan à l’échelle 1:5, vous mesurez 32 mm au réglet. Quelle est la longueur réelle de la pièce ?",
    "choix": [
      {
        "id": "A",
        "texte": "6,4 mm"
      },
      {
        "id": "B",
        "texte": "32 mm"
      },
      {
        "id": "C",
        "texte": "160 mm"
      },
      {
        "id": "D",
        "texte": "1,60 mm"
      }
    ]
  },
  {
    "id": "MAT-04",
    "domaine": "MAT",
    "type": "qcm1",
    "intitule": "D’après le graphique ci-dessous, la force de coupe Fc pour une avance de 0,2 mm/tr vaut environ :",
    "choix": [
      {
        "id": "A",
        "texte": "600 N"
      },
      {
        "id": "B",
        "texte": "1 100 N"
      },
      {
        "id": "C",
        "texte": "1 500 N"
      },
      {
        "id": "D",
        "texte": "2 000 N"
      }
    ],
    "figure": "graphe_fc"
  },
  {
    "id": "MAT-05",
    "domaine": "MAT",
    "type": "qcm1",
    "intitule": "Dans le triangle rectangle ci-dessous, la longueur du côté opposé à l’angle de 30° vaut :",
    "choix": [
      {
        "id": "A",
        "texte": "50 mm"
      },
      {
        "id": "B",
        "texte": "86,6 mm"
      },
      {
        "id": "C",
        "texte": "100 mm"
      },
      {
        "id": "D",
        "texte": "57,7 mm"
      }
    ],
    "figure": "triangle_30"
  },
  {
    "id": "MEC-01",
    "domaine": "MEC",
    "type": "qcm1",
    "intitule": "Les deux pièces sont assemblées par un axe. La pièce 2 peut tourner autour de Z par rapport à la pièce 1, sans translation. Quelle liaison cinématique idéale modélise cet assemblage ?",
    "choix": [
      {
        "id": "A",
        "texte": "Encastrement"
      },
      {
        "id": "B",
        "texte": "Glissière d’axe Z"
      },
      {
        "id": "C",
        "texte": "Pivot d’axe Z"
      },
      {
        "id": "D",
        "texte": "Liaison hélicoïdale"
      }
    ],
    "figure": "pivot"
  },
  {
    "id": "MEC-02",
    "domaine": "MEC",
    "type": "qcm1",
    "intitule": "Une liaison rotule (sphérique) laisse, dans le modèle idéal :",
    "choix": [
      {
        "id": "A",
        "texte": "0 degré de liberté"
      },
      {
        "id": "B",
        "texte": "1 degré de liberté (une rotation)"
      },
      {
        "id": "C",
        "texte": "3 degrés de liberté (les 3 rotations)"
      },
      {
        "id": "D",
        "texte": "6 degrés de liberté"
      }
    ]
  },
  {
    "id": "MEC-03",
    "domaine": "MEC",
    "type": "qcm1",
    "intitule": "On serre un écrou avec une clé de 200 mm de long. La force de 50 N est perpendiculaire à la clé. Le moment appliqué à l’écrou vaut :",
    "choix": [
      {
        "id": "A",
        "texte": "10 N"
      },
      {
        "id": "B",
        "texte": "10 N·m"
      },
      {
        "id": "C",
        "texte": "250 N·m"
      },
      {
        "id": "D",
        "texte": "4 N·m"
      }
    ],
    "figure": "cle_ecrou"
  },
  {
    "id": "MEC-04",
    "domaine": "MEC",
    "type": "qcm1",
    "intitule": "Une charge de poids 200 N est suspendue immobile à un câble vertical. La tension du câble vaut :",
    "choix": [
      {
        "id": "A",
        "texte": "0 N, le câble ne travaille pas à l’arrêt"
      },
      {
        "id": "B",
        "texte": "100 N"
      },
      {
        "id": "C",
        "texte": "200 N"
      },
      {
        "id": "D",
        "texte": "400 N"
      }
    ]
  },
  {
    "id": "MEC-05",
    "domaine": "MEC",
    "type": "qcm1",
    "intitule": "Un pignon de 20 dents entraîne une roue de 60 dents. Le pignon tourne à 1 500 tr/min. La vitesse de la roue est :",
    "choix": [
      {
        "id": "A",
        "texte": "500 tr/min"
      },
      {
        "id": "B",
        "texte": "4 500 tr/min"
      },
      {
        "id": "C",
        "texte": "1 500 tr/min"
      },
      {
        "id": "D",
        "texte": "300 tr/min"
      }
    ],
    "figure": "pignon_roue"
  },
  {
    "id": "MEC-06",
    "domaine": "MEC",
    "type": "qcm1",
    "intitule": "Trois engrenages extérieurs sont en chaîne. Le pignon 1 (moteur) tourne dans le sens horaire. Dans quel sens tourne la roue 3 (sortie) ?",
    "choix": [
      {
        "id": "A",
        "texte": "Sens horaire (même sens que 1)"
      },
      {
        "id": "B",
        "texte": "Sens antihoraire (sens contraire de 1)"
      },
      {
        "id": "C",
        "texte": "La roue 3 ne tourne pas"
      },
      {
        "id": "D",
        "texte": "On ne peut pas savoir sans les nombres de dents"
      }
    ],
    "figure": "engrenages3"
  },
  {
    "id": "MEC-07",
    "domaine": "MEC",
    "type": "qcm1",
    "intitule": "Un réducteur absorbe 4,0 kW et fournit 3,6 kW à la sortie. Son rendement vaut :",
    "choix": [
      {
        "id": "A",
        "texte": "0,9 %"
      },
      {
        "id": "B",
        "texte": "90 %"
      },
      {
        "id": "C",
        "texte": "111 %"
      },
      {
        "id": "D",
        "texte": "10 %"
      }
    ]
  },
  {
    "id": "MEC-08",
    "domaine": "MEC",
    "type": "qcm1",
    "intitule": "La barre ci-dessous est droite. Les deux forces sont opposées, de même intensité, et dans l’axe. La barre travaille principalement en :",
    "choix": [
      {
        "id": "A",
        "texte": "Compression"
      },
      {
        "id": "B",
        "texte": "Traction"
      },
      {
        "id": "C",
        "texte": "Torsion"
      },
      {
        "id": "D",
        "texte": "Flambement"
      }
    ],
    "figure": "tige_traction"
  },
  {
    "id": "MEC-09",
    "domaine": "MEC",
    "type": "qcm1",
    "intitule": "Une tige longue et mince est comprimée dans son axe. Le risque spécifique à ce cas de charge est :",
    "choix": [
      {
        "id": "A",
        "texte": "La rupture brutale en traction"
      },
      {
        "id": "B",
        "texte": "Le flambement (instabilité)"
      },
      {
        "id": "C",
        "texte": "Un couple de torsion"
      },
      {
        "id": "D",
        "texte": "Aucun risque si la section est constante"
      }
    ]
  },
  {
    "id": "MEC-10",
    "domaine": "MEC",
    "type": "qcm1",
    "intitule": "Deux roulements supportent un arbre qui tourne. Leur fonction principale est :",
    "choix": [
      {
        "id": "A",
        "texte": "Assurer l’étanchéité du carter"
      },
      {
        "id": "B",
        "texte": "Guider en rotation et transmettre les efforts à l’alésage"
      },
      {
        "id": "C",
        "texte": "Réduire la vitesse de rotation"
      },
      {
        "id": "D",
        "texte": "Stocker de l’énergie mécanique"
      }
    ]
  },
  {
    "id": "MEC-11",
    "domaine": "MEC",
    "type": "qcm1",
    "intitule": "Lors d’un freinage d’un chariot sur un convoyeur, l’énergie cinétique est principalement transformée en :",
    "choix": [
      {
        "id": "A",
        "texte": "Énergie potentielle de pesanteur"
      },
      {
        "id": "B",
        "texte": "Énergie thermique (échauffement)"
      },
      {
        "id": "C",
        "texte": "Énergie électrique renvoyée au réseau, toujours"
      },
      {
        "id": "D",
        "texte": "Énergie chimique dans les plaquettes"
      }
    ]
  },
  {
    "id": "PHY-01",
    "domaine": "PHY",
    "type": "qcm1",
    "intitule": "Dans le circuit ci-dessous, la tension U aux bornes de la résistance vaut :",
    "choix": [
      {
        "id": "A",
        "texte": "5 V"
      },
      {
        "id": "B",
        "texte": "12 V"
      },
      {
        "id": "C",
        "texte": "20 V"
      },
      {
        "id": "D",
        "texte": "0,2 V"
      }
    ],
    "figure": "circuit_ohm"
  },
  {
    "id": "PHY-02",
    "domaine": "PHY",
    "type": "qcm1",
    "intitule": "Un moteur 24 V absorbe 5 A en régime établi. La puissance électrique absorbée est :",
    "choix": [
      {
        "id": "A",
        "texte": "4,8 W"
      },
      {
        "id": "B",
        "texte": "29 W"
      },
      {
        "id": "C",
        "texte": "120 W"
      },
      {
        "id": "D",
        "texte": "120 kW"
      }
    ]
  },
  {
    "id": "PHY-03",
    "domaine": "PHY",
    "type": "qcm1",
    "intitule": "Un vérin développe un effort de 3 000 N. La section utile du piston est 0,002 m². La pression dans la chambre vaut :",
    "choix": [
      {
        "id": "A",
        "texte": "1,5 Pa"
      },
      {
        "id": "B",
        "texte": "1,5 kPa"
      },
      {
        "id": "C",
        "texte": "1,5 MPa"
      },
      {
        "id": "D",
        "texte": "15 MPa"
      }
    ],
    "figure": "verin_section"
  },
  {
    "id": "PHY-04",
    "domaine": "PHY",
    "type": "qcm1",
    "intitule": "À section de piston constante, si on augmente la pression d’alimentation d’un vérin, l’effort disponible :",
    "choix": [
      {
        "id": "A",
        "texte": "diminue"
      },
      {
        "id": "B",
        "texte": "reste identique"
      },
      {
        "id": "C",
        "texte": "augmente"
      },
      {
        "id": "D",
        "texte": "s’annule"
      }
    ]
  },
  {
    "id": "DOC-01",
    "domaine": "DOC",
    "type": "qcm1",
    "intitule": "Extrait de nomenclature d’un palier. Quel composant assure principalement l’étanchéité ?",
    "choix": [
      {
        "id": "A",
        "texte": "Rep 3 — roulement 6205"
      },
      {
        "id": "B",
        "texte": "Rep 4 — joint à lèvre"
      },
      {
        "id": "C",
        "texte": "Rep 5 — vis CHC"
      },
      {
        "id": "D",
        "texte": "Rep 1 — corps"
      }
    ],
    "html": "\n        <table class=\"nomenc\">\n          <thead><tr><th>Rep</th><th>Désignation</th><th>Qté</th></tr></thead>\n          <tbody>\n            <tr><td>1</td><td>Corps</td><td>1</td></tr>\n            <tr><td>2</td><td>Couvercle</td><td>1</td></tr>\n            <tr><td>3</td><td>Roulement à billes 6205</td><td>2</td></tr>\n            <tr><td>4</td><td>Joint à lèvre</td><td>1</td></tr>\n            <tr><td>5</td><td>Vis CHC M6×20</td><td>6</td></tr>\n          </tbody>\n        </table>\n        "
  },
  {
    "id": "DOC-02",
    "domaine": "DOC",
    "type": "qcm1",
    "intitule": "Sur un dessin technique, le trait continu fort sert principalement à représenter :",
    "choix": [
      {
        "id": "A",
        "texte": "Les axes de révolution et les traces de plans de symétrie"
      },
      {
        "id": "B",
        "texte": "Les contours et arêtes vues"
      },
      {
        "id": "C",
        "texte": "Les hachures de coupe"
      },
      {
        "id": "D",
        "texte": "Les lignes de cote"
      }
    ]
  },
  {
    "id": "DOC-03",
    "domaine": "DOC",
    "type": "qcm1",
    "intitule": "La cote Ø40 H7 désigne :",
    "choix": [
      {
        "id": "A",
        "texte": "Un arbre de diamètre 40 mm, tolérance H7"
      },
      {
        "id": "B",
        "texte": "Un alésage de diamètre nominal 40 mm, tolérance H7"
      },
      {
        "id": "C",
        "texte": "Une rugosité de 40 µm"
      },
      {
        "id": "D",
        "texte": "Un matériau (nuance H7)"
      }
    ]
  },
  {
    "id": "DOC-04",
    "domaine": "DOC",
    "type": "qcm1",
    "intitule": "Le schéma pneumatique ci-dessous représente :",
    "choix": [
      {
        "id": "A",
        "texte": "Un vérin simple effet (un seul orifice)"
      },
      {
        "id": "B",
        "texte": "Un vérin double effet (deux orifices)"
      },
      {
        "id": "C",
        "texte": "Un moteur pneumatique rotatif"
      },
      {
        "id": "D",
        "texte": "Un limiteur de pression"
      }
    ],
    "figure": "verin_de"
  },
  {
    "id": "MET-01",
    "domaine": "MET",
    "type": "ordre",
    "intitule": "Classez dans l’ordre les étapes de consignation d’un équipement électrique avant intervention (de la première à la dernière), selon la logique NFC 18-510.",
    "choix": [
      {
        "id": "A",
        "texte": "Vérifier l’absence de tension (VAT) avec un VAT en bon état"
      },
      {
        "id": "B",
        "texte": "Séparer l’équipement de ses sources d’énergie"
      },
      {
        "id": "C",
        "texte": "Condamner les organes de séparation (cadenas / consigne)"
      },
      {
        "id": "D",
        "texte": "Identifier l’ouvrage sur lequel on va intervenir"
      }
    ],
    "ordre": true
  },
  {
    "id": "MET-02",
    "domaine": "MET",
    "type": "qcm1",
    "intitule": "La vérification d’absence de tension (VAT) doit être réalisée :",
    "choix": [
      {
        "id": "A",
        "texte": "Avant toute séparation, pour gagner du temps"
      },
      {
        "id": "B",
        "texte": "Après séparation et condamnation, avec un VAT en bon état, au plus près du lieu de travail"
      },
      {
        "id": "C",
        "texte": "Uniquement en fin d’intervention, avant remise sous tension"
      },
      {
        "id": "D",
        "texte": "Seulement si un disjoncteur a déjà sauté"
      }
    ]
  },
  {
    "id": "MET-03",
    "domaine": "MET",
    "type": "qcm1",
    "intitule": "Dans un diagramme d’Ishikawa (5M), le « Milieu » désigne :",
    "choix": [
      {
        "id": "A",
        "texte": "Le milieu de la pièce à usiner"
      },
      {
        "id": "B",
        "texte": "L’environnement de travail (température, propreté, organisation de l’espace…)"
      },
      {
        "id": "C",
        "texte": "La moyenne des mesures de contrôle"
      },
      {
        "id": "D",
        "texte": "Le milieu scolaire de l’opérateur"
      }
    ]
  },
  {
    "id": "MET-04",
    "domaine": "MET",
    "type": "qcm1",
    "intitule": "Un convoyeur ne redémarre plus après un arrêt d’urgence. Quelle est la première action d’une démarche d’investigation ?",
    "choix": [
      {
        "id": "A",
        "texte": "Remplacer le moteur, c’est souvent lui"
      },
      {
        "id": "B",
        "texte": "Recueillir le contexte : que s’est-il passé, voyants, témoignages, conditions de l’arrêt"
      },
      {
        "id": "C",
        "texte": "Reprogrammer l’automate tout de suite"
      },
      {
        "id": "D",
        "texte": "Commander l’ensemble des pièces d’usure du convoyeur"
      }
    ]
  },
  {
    "id": "TEC-01",
    "domaine": "TEC",
    "type": "qcm1",
    "intitule": "Un vérin double effet se distingue d’un vérin simple effet parce que :",
    "choix": [
      {
        "id": "A",
        "texte": "Il a deux tiges qui sortent des deux côtés, toujours"
      },
      {
        "id": "B",
        "texte": "La sortie et la rentrée de tige sont toutes les deux commandées par le fluide"
      },
      {
        "id": "C",
        "texte": "Il ne peut fonctionner qu’à l’huile, jamais à l’air"
      },
      {
        "id": "D",
        "texte": "Il n’a pas besoin de distributeur"
      }
    ]
  },
  {
    "id": "TEC-02",
    "domaine": "TEC",
    "type": "qcm1",
    "intitule": "La fonction principale d’un réducteur placé entre un moteur et un convoyeur est :",
    "choix": [
      {
        "id": "A",
        "texte": "Augmenter la vitesse et diminuer le couple"
      },
      {
        "id": "B",
        "texte": "Diminuer la vitesse et augmenter le couple"
      },
      {
        "id": "C",
        "texte": "Redresser le courant alternatif"
      },
      {
        "id": "D",
        "texte": "Mesurer la position angulaire"
      }
    ]
  },
  {
    "id": "TEC-03",
    "domaine": "TEC",
    "type": "qcmn",
    "intitule": "Parmi ces composants, lesquels sont des capteurs ? (plusieurs réponses possibles)",
    "choix": [
      {
        "id": "A",
        "texte": "Codeur incrémental sur l’axe d’un moteur"
      },
      {
        "id": "B",
        "texte": "Vérin pneumatique de transfert"
      },
      {
        "id": "C",
        "texte": "Détecteur inductif de présence palette"
      },
      {
        "id": "D",
        "texte": "Contacteur de puissance KM1"
      }
    ],
    "multiple": true
  },
  {
    "id": "TEC-04",
    "domaine": "TEC",
    "type": "qcm1",
    "intitule": "Dans le départ moteur simplifié ci-dessous, le contacteur KM sert principalement à :",
    "choix": [
      {
        "id": "A",
        "texte": "Mesurer le courant absorbé"
      },
      {
        "id": "B",
        "texte": "Établir ou interrompre le circuit de puissance du moteur, sur ordre du circuit de commande"
      },
      {
        "id": "C",
        "texte": "Réduire la tension à 24 V"
      },
      {
        "id": "D",
        "texte": "Protéger contre les courts-circuits (rôle unique du contacteur)"
      }
    ],
    "figure": "contacteur"
  }
];
