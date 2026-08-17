/* Généré par scripts/build_equations.py */
window.DOMAINES = {
  "ISO": {
    "nom": "Isoler une grandeur",
    "court": "Isoler",
    "consigne": "Un geste : passer de A = B × C à l’inconnue voulue."
  },
  "TRANS": {
    "nom": "Enchaîner les gestes",
    "court": "Enchaîner",
    "consigne": "Plusieurs opérations, ou substituer une formule dans une autre."
  },
  "FRAC": {
    "nom": "Fractions et produits",
    "court": "Fractions",
    "consigne": "Produit en croix, inverse, supprimer un dénominateur."
  },
  "PUIS": {
    "nom": "Puissances et racines",
    "court": "Puissances",
    "consigne": "Carré, racine, puissances de 10."
  },
  "FORM": {
    "nom": "Formules du métier",
    "court": "Formules",
    "consigne": "Ohm, pression, couple, rendement, engrenages — avec des nombres."
  },
  "PIEGE": {
    "nom": "Repérer l’erreur",
    "court": "Pièges",
    "consigne": "Quelle étape est interdite, ou dans quel ordre procéder."
  }
};
window.ORDRE_DOMAINES = [
  "ISO",
  "TRANS",
  "FRAC",
  "PUIS",
  "FORM",
  "PIEGE"
];
window.QUESTIONS = [
  {
    "id": "ISO-01",
    "domaine": "ISO",
    "type": "qcm1",
    "intitule": "On part de U = R × I. On cherche I. Quelle écriture est juste ?",
    "choix": [
      {
        "id": "A",
        "texte": "I = R − U"
      },
      {
        "id": "B",
        "texte": "I = R / U"
      },
      {
        "id": "C",
        "texte": "I = U / R"
      },
      {
        "id": "D",
        "texte": "I = U × R"
      }
    ],
    "figure": "ohm"
  },
  {
    "id": "ISO-02",
    "domaine": "ISO",
    "type": "qcm1",
    "intitule": "On part de P = F / S. On cherche F.",
    "choix": [
      {
        "id": "A",
        "texte": "F = P × S"
      },
      {
        "id": "B",
        "texte": "F = P − S"
      },
      {
        "id": "C",
        "texte": "F = P / S"
      },
      {
        "id": "D",
        "texte": "F = S / P"
      }
    ]
  },
  {
    "id": "ISO-03",
    "domaine": "ISO",
    "type": "qcm1",
    "intitule": "On part de C = F × d. On cherche d.",
    "choix": [
      {
        "id": "A",
        "texte": "d = C + F"
      },
      {
        "id": "B",
        "texte": "d = C × F"
      },
      {
        "id": "C",
        "texte": "d = F / C"
      },
      {
        "id": "D",
        "texte": "d = C / F"
      }
    ]
  },
  {
    "id": "ISO-04",
    "domaine": "ISO",
    "type": "qcm1",
    "intitule": "On part de E = P × t. On cherche t.",
    "choix": [
      {
        "id": "A",
        "texte": "t = E − P"
      },
      {
        "id": "B",
        "texte": "t = E / P"
      },
      {
        "id": "C",
        "texte": "t = P / E"
      },
      {
        "id": "D",
        "texte": "t = E × P"
      }
    ]
  },
  {
    "id": "ISO-05",
    "domaine": "ISO",
    "type": "qcm1",
    "intitule": "On part de v = d / t. On cherche d.",
    "choix": [
      {
        "id": "A",
        "texte": "d = v × t"
      },
      {
        "id": "B",
        "texte": "d = v + t"
      },
      {
        "id": "C",
        "texte": "d = v / t"
      },
      {
        "id": "D",
        "texte": "d = t / v"
      }
    ]
  },
  {
    "id": "TRANS-01",
    "domaine": "TRANS",
    "type": "qcm1",
    "intitule": "On part de η = Pu / Pa. On cherche Pa (puissance absorbée).",
    "choix": [
      {
        "id": "A",
        "texte": "Pa = η / Pu"
      },
      {
        "id": "B",
        "texte": "Pa = Pu − η"
      },
      {
        "id": "C",
        "texte": "Pa = η × Pu"
      },
      {
        "id": "D",
        "texte": "Pa = Pu / η"
      }
    ]
  },
  {
    "id": "TRANS-02",
    "domaine": "TRANS",
    "type": "qcm1",
    "intitule": "On part de N₁ Z₁ = N₂ Z₂. On cherche N₂.",
    "choix": [
      {
        "id": "A",
        "texte": "N₂ = N₁ + Z₁ − Z₂"
      },
      {
        "id": "B",
        "texte": "N₂ = N₁ × Z₂ / Z₁"
      },
      {
        "id": "C",
        "texte": "N₂ = N₁ × Z₁ / Z₂"
      },
      {
        "id": "D",
        "texte": "N₂ = Z₁ / (N₁ Z₂)"
      }
    ]
  },
  {
    "id": "TRANS-03",
    "domaine": "TRANS",
    "type": "qcm1",
    "intitule": "On part de σ = F / S. On cherche S.",
    "choix": [
      {
        "id": "A",
        "texte": "S = σ / F"
      },
      {
        "id": "B",
        "texte": "S = F / σ"
      },
      {
        "id": "C",
        "texte": "S = F − σ"
      },
      {
        "id": "D",
        "texte": "S = F × σ"
      }
    ]
  },
  {
    "id": "TRANS-04",
    "domaine": "TRANS",
    "type": "qcm1",
    "intitule": "On a P = U × I et U = R × I. On veut P en fonction de R et I seulement.",
    "choix": [
      {
        "id": "A",
        "texte": "P = R × I²"
      },
      {
        "id": "B",
        "texte": "P = R × I"
      },
      {
        "id": "C",
        "texte": "P = I / R"
      },
      {
        "id": "D",
        "texte": "P = R / I"
      }
    ]
  },
  {
    "id": "TRANS-05",
    "domaine": "TRANS",
    "type": "qcm1",
    "intitule": "On part de U = E − R × I. On cherche I.",
    "choix": [
      {
        "id": "A",
        "texte": "I = E − U − R"
      },
      {
        "id": "B",
        "texte": "I = (E + U) / R"
      },
      {
        "id": "C",
        "texte": "I = (E − U) / R"
      },
      {
        "id": "D",
        "texte": "I = (U − E) / R"
      }
    ]
  },
  {
    "id": "FRAC-01",
    "domaine": "FRAC",
    "type": "qcm1",
    "intitule": "On a a / b = c / d. On cherche a.",
    "choix": [
      {
        "id": "A",
        "texte": "a = b + c − d"
      },
      {
        "id": "B",
        "texte": "a = b × c / d"
      },
      {
        "id": "C",
        "texte": "a = b × d / c"
      },
      {
        "id": "D",
        "texte": "a = c / (b × d)"
      }
    ]
  },
  {
    "id": "FRAC-02",
    "domaine": "FRAC",
    "type": "qcm1",
    "intitule": "3 / x = 6 / 10. La valeur de x est :",
    "choix": [
      {
        "id": "A",
        "texte": "2"
      },
      {
        "id": "B",
        "texte": "18"
      },
      {
        "id": "C",
        "texte": "20"
      },
      {
        "id": "D",
        "texte": "5"
      }
    ]
  },
  {
    "id": "FRAC-03",
    "domaine": "FRAC",
    "type": "qcm1",
    "intitule": "On a A / B = C. On cherche B.",
    "choix": [
      {
        "id": "A",
        "texte": "B = A / C"
      },
      {
        "id": "B",
        "texte": "B = A − C"
      },
      {
        "id": "C",
        "texte": "B = A × C"
      },
      {
        "id": "D",
        "texte": "B = C / A"
      }
    ]
  },
  {
    "id": "FRAC-04",
    "domaine": "FRAC",
    "type": "qcm1",
    "intitule": "(2 / 5) × 15 vaut :",
    "choix": [
      {
        "id": "A",
        "texte": "75 / 2"
      },
      {
        "id": "B",
        "texte": "3"
      },
      {
        "id": "C",
        "texte": "6"
      },
      {
        "id": "D",
        "texte": "2 / 75"
      }
    ]
  },
  {
    "id": "FRAC-05",
    "domaine": "FRAC",
    "type": "qcm1",
    "intitule": "On a x / 4 = 3. Pour isoler x, l’opération licite est :",
    "choix": [
      {
        "id": "A",
        "texte": "Diviser les deux membres par 4"
      },
      {
        "id": "B",
        "texte": "Ajouter 4 aux deux membres"
      },
      {
        "id": "C",
        "texte": "Soustraire 4 aux deux membres"
      },
      {
        "id": "D",
        "texte": "Multiplier les deux membres par 4"
      }
    ],
    "figure": "balance"
  },
  {
    "id": "PUIS-01",
    "domaine": "PUIS",
    "type": "qcm1",
    "intitule": "On part de A = π r² (aire d’un disque). On cherche r (positif).",
    "choix": [
      {
        "id": "A",
        "texte": "r = √(A / π)"
      },
      {
        "id": "B",
        "texte": "r = (A / π)²"
      },
      {
        "id": "C",
        "texte": "r = π / A"
      },
      {
        "id": "D",
        "texte": "r = A / π"
      }
    ]
  },
  {
    "id": "PUIS-02",
    "domaine": "PUIS",
    "type": "qcm1",
    "intitule": "1 / 10⁻³ vaut :",
    "choix": [
      {
        "id": "A",
        "texte": "0,001"
      },
      {
        "id": "B",
        "texte": "10³"
      },
      {
        "id": "C",
        "texte": "10⁻⁶"
      },
      {
        "id": "D",
        "texte": "10⁻³"
      }
    ]
  },
  {
    "id": "PUIS-03",
    "domaine": "PUIS",
    "type": "qcm1",
    "intitule": "(10²)³ vaut :",
    "choix": [
      {
        "id": "A",
        "texte": "10⁸"
      },
      {
        "id": "B",
        "texte": "10"
      },
      {
        "id": "C",
        "texte": "10⁵"
      },
      {
        "id": "D",
        "texte": "10⁶"
      }
    ]
  },
  {
    "id": "PUIS-04",
    "domaine": "PUIS",
    "type": "qcm1",
    "intitule": "√(4 × 10⁻²) vaut :",
    "choix": [
      {
        "id": "A",
        "texte": "2 × 10⁻⁴"
      },
      {
        "id": "B",
        "texte": "2 × 10⁻²"
      },
      {
        "id": "C",
        "texte": "2 × 10⁻¹"
      },
      {
        "id": "D",
        "texte": "4 × 10⁻¹"
      }
    ]
  },
  {
    "id": "PUIS-05",
    "domaine": "PUIS",
    "type": "qcm1",
    "intitule": "On a x² = 25. Les solutions sont :",
    "choix": [
      {
        "id": "A",
        "texte": "x = −5 seulement"
      },
      {
        "id": "B",
        "texte": "x = 5 ou x = −5"
      },
      {
        "id": "C",
        "texte": "x = 25"
      },
      {
        "id": "D",
        "texte": "x = 5 seulement"
      }
    ]
  },
  {
    "id": "FORM-01",
    "domaine": "FORM",
    "type": "qcm1",
    "intitule": "U = 24 V, R = 8 Ω. L’intensité I vaut :",
    "choix": [
      {
        "id": "A",
        "texte": "192 A"
      },
      {
        "id": "B",
        "texte": "0,33 A"
      },
      {
        "id": "C",
        "texte": "16 A"
      },
      {
        "id": "D",
        "texte": "3 A"
      }
    ]
  },
  {
    "id": "FORM-02",
    "domaine": "FORM",
    "type": "qcm1",
    "intitule": "F = 3 000 N, S = 0,002 m². La pression P = F / S vaut :",
    "choix": [
      {
        "id": "A",
        "texte": "6 MPa"
      },
      {
        "id": "B",
        "texte": "1,5 Pa"
      },
      {
        "id": "C",
        "texte": "1,5 MPa"
      },
      {
        "id": "D",
        "texte": "6 Pa"
      }
    ]
  },
  {
    "id": "FORM-03",
    "domaine": "FORM",
    "type": "qcm1",
    "intitule": "F = 50 N, d = 0,20 m, force perpendiculaire. Le couple C = F × d vaut :",
    "choix": [
      {
        "id": "A",
        "texte": "10 N·m"
      },
      {
        "id": "B",
        "texte": "250 N·m"
      },
      {
        "id": "C",
        "texte": "4 N·m"
      },
      {
        "id": "D",
        "texte": "10 N"
      }
    ]
  },
  {
    "id": "FORM-04",
    "domaine": "FORM",
    "type": "qcm1",
    "intitule": "Pu = 3,6 kW, Pa = 4,0 kW. Le rendement η = Pu / Pa vaut :",
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
    "id": "FORM-05",
    "domaine": "FORM",
    "type": "qcm1",
    "intitule": "N₁ = 1 500 tr/min, Z₁ = 20, Z₂ = 60. N₂ = N₁ Z₁ / Z₂ vaut :",
    "choix": [
      {
        "id": "A",
        "texte": "1 500 tr/min"
      },
      {
        "id": "B",
        "texte": "300 tr/min"
      },
      {
        "id": "C",
        "texte": "500 tr/min"
      },
      {
        "id": "D",
        "texte": "4 500 tr/min"
      }
    ]
  },
  {
    "id": "PIEGE-01",
    "domaine": "PIEGE",
    "type": "qcm1",
    "intitule": "On part de U = R × I. Quelle affirmation est fausse ?",
    "choix": [
      {
        "id": "A",
        "texte": "On en déduit R = I / U"
      },
      {
        "id": "B",
        "texte": "Multiplier les deux membres par 1/R donne I = U / R"
      },
      {
        "id": "C",
        "texte": "Diviser les deux membres par R donne I = U / R"
      },
      {
        "id": "D",
        "texte": "Diviser les deux membres par I donne R = U / I"
      }
    ],
    "figure": "ohm"
  },
  {
    "id": "PIEGE-02",
    "domaine": "PIEGE",
    "type": "qcm1",
    "intitule": "On a 2x + 6 = 10. La première étape correcte pour isoler x est :",
    "choix": [
      {
        "id": "A",
        "texte": "x = 10 − 6 − 2"
      },
      {
        "id": "B",
        "texte": "2x + 6 − 10 = 2"
      },
      {
        "id": "C",
        "texte": "2x = 10 + 6"
      },
      {
        "id": "D",
        "texte": "2x = 10 − 6"
      }
    ]
  },
  {
    "id": "PIEGE-03",
    "domaine": "PIEGE",
    "type": "qcm1",
    "intitule": "On a x / 3 − 2 = 4. On cherche x. Quelle chaîne est juste ?",
    "choix": [
      {
        "id": "A",
        "texte": "x / 3 = 4 − 2, puis x = 6"
      },
      {
        "id": "B",
        "texte": "x / 3 = 4 + 2, puis x = 18"
      },
      {
        "id": "C",
        "texte": "x − 2 = 12, puis x = 14"
      },
      {
        "id": "D",
        "texte": "x = 4 − 2 × 3 = −2"
      }
    ]
  },
  {
    "id": "PIEGE-04",
    "domaine": "PIEGE",
    "type": "qcmn",
    "intitule": "Quelles opérations sont licites sur une égalité ? (plusieurs réponses)",
    "choix": [
      {
        "id": "A",
        "texte": "Ajouter le même nombre aux deux membres"
      },
      {
        "id": "B",
        "texte": "Multiplier un seul membre par 2"
      },
      {
        "id": "C",
        "texte": "Diviser les deux membres par la même grandeur non nulle"
      },
      {
        "id": "D",
        "texte": "Inverser uniquement le membre de gauche"
      }
    ],
    "figure": "balance",
    "multiple": true
  },
  {
    "id": "PIEGE-05",
    "domaine": "PIEGE",
    "type": "ordre",
    "intitule": "Classez les étapes pour isoler I à partir de U = E − R × I (de la première à la dernière).",
    "choix": [
      {
        "id": "A",
        "texte": "Diviser par R : I = (E − U) / R"
      },
      {
        "id": "B",
        "texte": "Ajouter R × I aux deux membres : U + R × I = E"
      },
      {
        "id": "C",
        "texte": "Soustraire U : R × I = E − U"
      },
      {
        "id": "D",
        "texte": "On écrit la relation de départ U = E − R × I"
      }
    ],
    "ordre": true
  }
];
