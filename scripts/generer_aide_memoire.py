# -*- coding: utf-8 -*-
"""Aide-mémoire A4 : liens, codes salle, feuilles Google."""
from __future__ import annotations

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

OUT = Path(__file__).resolve().parents[1] / "teacher" / "exports" / "aide-memoire-codes-liens.pdf"

NAVY = colors.HexColor("#1a2332")
GOLD = colors.HexColor("#b8860b")
LINE = colors.HexColor("#c5cdd8")
MUTED = colors.HexColor("#4a5568")
OK_BG = colors.HexColor("#e7f3e8")
WAIT_BG = colors.HexColor("#fff4d6")
ROW = colors.HexColor("#f4f6f8")


def styles():
    b = getSampleStyleSheet()
    return {
        "kicker": ParagraphStyle("k", parent=b["Normal"], fontName="Times-Bold", fontSize=8, textColor=GOLD, spaceAfter=1 * mm),
        "h1": ParagraphStyle("h1", parent=b["Normal"], fontName="Times-Bold", fontSize=18, textColor=NAVY, leading=22, spaceAfter=2 * mm),
        "h2": ParagraphStyle("h2", parent=b["Normal"], fontName="Times-Bold", fontSize=11, textColor=NAVY, spaceBefore=3.5 * mm, spaceAfter=2 * mm),
        "meta": ParagraphStyle("m", parent=b["Normal"], fontName="Helvetica", fontSize=9, textColor=MUTED, spaceAfter=3 * mm),
        "th": ParagraphStyle("th", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=7.5, textColor=colors.white, leading=10),
        "td": ParagraphStyle("td", parent=b["Normal"], fontName="Helvetica", fontSize=7.8, textColor=NAVY, leading=10.5),
        "code": ParagraphStyle("code", parent=b["Normal"], fontName="Courier-Bold", fontSize=10, textColor=NAVY, alignment=TA_CENTER),
        "body": ParagraphStyle("body", parent=b["Normal"], fontName="Helvetica", fontSize=8.5, textColor=NAVY, leading=11.5),
        "li": ParagraphStyle("li", parent=b["Normal"], fontName="Helvetica", fontSize=8.5, textColor=NAVY, leading=11.5),
        "tiny": ParagraphStyle("tiny", parent=b["Normal"], fontName="Helvetica", fontSize=7.5, textColor=MUTED, leading=10),
    }


def header_footer(canvas, doc):
    canvas.saveState()
    w, h = A4
    canvas.setFillColor(NAVY)
    canvas.rect(0, h - 15 * mm, w, 15 * mm, fill=1, stroke=0)
    canvas.setFillColor(GOLD)
    canvas.roundRect(12 * mm, h - 12.4 * mm, 8 * mm, 8 * mm, 1.4 * mm, fill=1, stroke=0)
    canvas.setFillColor(NAVY)
    canvas.setFont("Times-Bold", 9)
    canvas.drawCentredString(16 * mm, h - 9.8 * mm, "MS")
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 9)
    canvas.drawString(23 * mm, h - 8 * mm, "BTS MS · option SP  —  aide-mémoire enseignant")
    canvas.setFont("Helvetica", 8)
    canvas.drawString(23 * mm, h - 11.6 * mm, "Codes salle, liens élèves, feuilles de collecte  ·  2026-2027")
    canvas.setFillColor(GOLD)
    canvas.rect(0, 0, w, 8 * mm, fill=1, stroke=0)
    canvas.setFillColor(NAVY)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(14 * mm, 3 * mm, "Ne pas afficher aux étudiants  ·  une feuille Google = un test  ·  ne pas mélanger")
    canvas.drawRightString(w - 14 * mm, 3 * mm, "1 / 1")
    canvas.restoreState()


def cell(txt, st):
    return Paragraph(txt, st)


def main() -> None:
    s = styles()
    OUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUT), pagesize=A4,
        leftMargin=12 * mm, rightMargin=12 * mm,
        topMargin=19 * mm, bottomMargin=11 * mm,
        title="Aide-mémoire codes et liens — BTS MS 2026-2027",
        author="Stéphane Roddier",
    )

    head = [
        cell("Test", s["th"]),
        cell("Quand / durée", s["th"]),
        cell("Lien élèves", s["th"]),
        cell("Code tableau", s["th"]),
        cell("Feuille Google", s["th"]),
        cell("Collecte", s["th"]),
    ]
    rows_data = [
        (
            "Positionnement général<br/>(méca + tronc commun)",
            "Semaine 1<br/>55 min",
            "sroddier.github.io/diagnostic-bts-ms/",
            "MS26R1",
            "Positionnement de rentrée 2026-2027",
            "OK",
        ),
        (
            "Unités et conversions",
            "Semaine 2<br/>40 min",
            "…/diagnostic-bts-ms/unites/",
            "UN26R1",
            "Unités conversions BTS MS 2026",
            "OK",
        ),
        (
            "Manipulation d’équations",
            "Quand les formules commencent<br/>40 min",
            "…/diagnostic-bts-ms/equations/",
            "EQ26R1",
            "Manipulation equation bilan",
            "OK",
        ),
        (
            "Lecture de représentations",
            "Après octobre<br/>40 min",
            "…/diagnostic-bts-ms/schemas/",
            "SC26R1",
            "Lecture de représentations",
            "OK",
        ),
        (
            "Statique qualitative",
            "Après octobre<br/>40 min",
            "…/diagnostic-bts-ms/statique/",
            "ST26R1",
            "Statique qualitative",
            "OK",
        ),
    ]
    table_rows = [head]
    status_row = []
    for i, (nom, quand, lien, code, feuille, statut) in enumerate(rows_data):
        table_rows.append([
            cell(nom, s["td"]),
            cell(quand, s["td"]),
            cell(lien, s["td"]),
            cell(code, s["code"]),
            cell(feuille, s["td"]),
            cell(statut, s["td"]),
        ])
        status_row.append(statut)

    tbl = Table(table_rows, colWidths=[38 * mm, 28 * mm, 48 * mm, 22 * mm, 38 * mm, 18 * mm])
    cmds = [
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("BOX", (0, 0), (-1, -1), 0.4, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.3, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, ROW]),
        ("BACKGROUND", (3, 1), (3, -1), colors.HexColor("#fff8e6")),
    ]
    for i, st in enumerate(status_row, start=1):
        cmds.append(("BACKGROUND", (5, i), (5, i), OK_BG if st == "OK" else WAIT_BG))
    tbl.setStyle(TableStyle(cmds))

    liens_feuilles = [
        "<b>Positionnement</b> — docs.google.com/spreadsheets/d/1QmnN85R0tdu1raS1sta8QKJR1yFFsTPLb685-W4iZ9A",
        "<b>Unités</b> — docs.google.com/spreadsheets/d/17zy90GVs68ivvktAXjwBaoY1tJDgZ5hJf5LEp_lcF-4",
        "<b>Équations</b> — docs.google.com/spreadsheets/d/1LUCqNQVeTwc7F69xbvjbZ-F7Hd27P4NkJebKr3F9LsI",
        "<b>Représentations</b> — docs.google.com/spreadsheets/d/1Z3cjrsfAvFFj-fcSuD7idP1Ol-_lzcwgnIDV7IFAmaQ",
        "<b>Statique</b> — docs.google.com/spreadsheets/d/1JZDZAEgeecpEm7Yq-qZadBAC0itKSv_-GwTAw6W_Mrk",
    ]

    story = [
        Paragraph("DOCUMENT ENSEIGNANT", s["kicker"]),
        Paragraph("Codes salle et liens 2026-2027", s["h1"]),
        Paragraph(
            "Groupes : 1MS-A/B/ALT (1re) · 2MS-A/B/ALT (2e). Un code par test, le même pour tous les groupes le même jour. "
            "Changez le code dans le script pour fermer un créneau.",
            s["meta"],
        ),
        tbl,
        Paragraph("Feuilles déjà ouvertes", s["h2"]),
        ListFlowable(
            [ListItem(Paragraph(t, s["li"]), leftIndent=6) for t in liens_feuilles],
            bulletType="bullet", start="–", leftIndent=8,
        ),
        Paragraph("Les cinq collectes sont branchées", s["h2"]),
        Paragraph(
            "Supprimez les lignes d’essai ESSAI-SCHEMAS et ESSAI-STATIQUE (Copies + Items). "
            "Prépa E4 (pas un test) : sroddier.github.io/prepa-bts-ms/",
            s["body"],
        ),
        Paragraph("Jour J et après", s["h2"]),
        Paragraph(
            "Code au tableau → surveiller l’onglet Copies. Double envoi = deux lignes (garder la première complète). "
            "Après la séance : export Copies + Items, me les donner pour les PDF bilan. "
            "Remise : entretien 5–8 min + papier, archive Pronote document (pas une note). "
            "Dossier local : C:\\Users\\srodd\\diagnostic-bts-ms",
            s["body"],
        ),
        Spacer(1, 2 * mm),
        HRFlowable(width="100%", thickness=0.5, color=GOLD),
        Spacer(1, 1.5 * mm),
        Paragraph(
            "Raccourcis élèves (à recréer en favori salle info) : "
            "github.io/diagnostic-bts-ms/  ·  /unites/  ·  /equations/  ·  /schemas/  ·  /statique/",
            s["tiny"],
        ),
    ]
    doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)
    print(OUT)


if __name__ == "__main__":
    main()
