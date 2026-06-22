/**
 * events.ts
 * ---------
 * Zentrale Datendatei für alle Termine und Chronik-Einträge des MGV Seeboden.
 *
 * LOGIK:
 * - getUpcomingEvents(): Gibt nur Termine zurück, die in der Zukunft liegen → Terminkalender
 * - getPastEvents(): Gibt Termine zurück, die bereits vergangen sind → Chronik
 * - historicEntries: Feste historische Einträge für die Vereinschronik (keine Termine)
 *
 * PLATZHALTER: Alle Termine, Orte, Preise und Links sind Platzhalter.
 * Bitte vor Veröffentlichung mit echten Daten ersetzen.
 */

export type EventCategory = "concert" | "church" | "rehearsal" | "trip" | "special" | "other";

export interface MGVEvent {
  id: string;
  date: string;         // ISO 8601, z.B. "2026-03-14"
  time?: string;        // Uhrzeit als String, z.B. "19:30"
  title: string;
  subtitle?: string;
  location: string;
  description: string;
  category: EventCategory;
  ticketUrl?: string;   // TODO: echte Ticket-URL eintragen
  price?: string;       // Platzhalter, z.B. "ab 12 €"
  imageUrl?: string;    // Platzhalterbild für Chronik-Karte
}

/**
 * Alle MGV-Termine (vergangene + zukünftige).
 *
 * Datum-Format: YYYY-MM-DD (ISO 8601)
 * Vergangene Termine erscheinen automatisch in der Chronik.
 * Zukünftige Termine erscheinen im Terminkalender.
 */
export const ALL_EVENTS: MGVEvent[] = [
  // ──── VERGANGENE TERMINE (echte Rückblicke) ────
  {
    id: "evt-2026-kabarett",
    date: "2026-01-30",
    time: "19:30",
    title: "Kabarett im Konzert",
    subtitle: "5. Auflage mit Bernhard Viktorin",
    location: "Kulturhaus Seeboden",
    description:
      "Die 5. Ausgabe unserer beliebten Reihe „Kabarett im Konzert“ — mit Bernhard Viktorin als Gastkabarettist, umrahmt von humorigen Chorliedern des MGV Seeboden.",
    category: "concert",
    imageUrl: "/gallery-concert.png",
  },
  {
    id: "evt-2026-kinderfasching",
    date: "2026-02-15",
    time: "14:00",
    title: "Seebodner Kinderfasching",
    subtitle: "Spaß für die ganze Familie",
    location: "Kulturhaus Seeboden",
    description:
      "Disco, Spiele und Unterhaltung für die Kleinen — organisiert vom MGV Seeboden.",
    category: "special",
    imageUrl: "/gallery-choir-color.png",
  },
  {
    id: "evt-2026-dreikoenigsmesse",
    date: "2026-01-06",
    time: "10:00",
    title: "Messe zu Heiligen Drei Könige",
    subtitle: "Musikalische Gestaltung",
    location: "Pfarrkirche Seeboden",
    description:
      "Der MGV Seeboden gestaltete die Festmesse zu Heiligen Drei Könige mit feierlichen Chorsätzen.",
    category: "church",
    imageUrl: "/gallery-church.png",
  },
  {
    id: "evt-2026-palmsonntag",
    date: "2026-03-29",
    time: "10:00",
    title: "Palmsonntag",
    subtitle: "Kirchliche Gestaltung",
    location: "Pfarrkirche Seeboden",
    description:
      "Musikalische Gestaltung des Palmsonntag-Gottesdienstes in der Pfarrkirche Seeboden.",
    category: "church",
    imageUrl: "/gallery-church.png",
  },
  {
    id: "evt-2026-ostermontag",
    date: "2026-04-06",
    title: "Ostermontag am Wolfsberg",
    subtitle: "Singen auf dem Berg",
    location: "Am Wolfsberg",
    description:
      "Traditionelles Singen am Ostermontag auf dem Wolfsberg — ein fixer Bestandteil des kirchlichen Jahreskreises.",
    category: "church",
    imageUrl: "/gallery-alps.png",
  },
  {
    id: "evt-2024-jubilaeum",
    date: "2024-09-21",
    time: "18:00",
    title: "130 Jahre MGV Seeboden",
    subtitle: "Großes Sängerfest im Blumenpark",
    location: "Blumenpark Seeboden",
    description:
      "130 Jahre MGV Seeboden — gefeiert mit einem großen Sängerfest im Blumenpark Seeboden, an dem zahlreiche Chöre teilnahmen. Ein Festabend für die Ewigkeit.",
    category: "special",
    price: "Eintritt frei",
    imageUrl: "/gallery-concert.png",
  },

  // ──── KOMMENDE TERMINE (echte 2026-Daten) ────
  {
    id: "evt-2026-kirchtag-1",
    date: "2026-07-25",
    time: "18:00",
    title: "Seebodner Kirchtag — Auftakt",
    subtitle: "Seit 1948 vom MGV Seeboden veranstaltet",
    location: "Festwiese Seeboden",
    description:
      "Feierlicher Auftakt zum traditionellen Seebodner Kirchtag auf der Festwiese — mit Musik und Tanz. Seit 1948 vom MGV Seeboden organisiert.",
    category: "special",
    imageUrl: "/gallery-beer.png",
  },
  {
    id: "evt-2026-kirchtag-2",
    date: "2026-07-26",
    time: "10:30",
    title: "Seebodner Kirchtag — Festkonzert",
    subtitle: "Festgottesdienst, Festzug & Konzert",
    location: "Festwiese Seeboden",
    description:
      "Festgottesdienst um 10:30 Uhr, anschließend Festzug und Festkonzert beim Seebodner Kirchtag. Der Höhepunkt des Vereinsjahres.",
    category: "concert",
    imageUrl: "/gallery-concert.png",
  },
  {
    id: "evt-2026-karntnarisch",
    date: "2026-07-30",
    time: "19:00",
    title: "Karntnarisch g'sungen",
    subtitle: "Gemütliches Singen im Kulturhaus",
    location: "Foyer Kulturhaus Seeboden",
    description:
      "Gemütliches Beisammensein mit Kärntner Liedern im stimmungsvollen Foyer des Kulturhauses. Beginn um 19:00 Uhr.",
    category: "concert",
    imageUrl: "/gallery-choir-color.png",
  },
  {
    id: "evt-2026-jugendsingtag",
    date: "2026-11-21",
    title: "Jugendsingtag",
    subtitle: "Mit der SG Kärntner Oberland",
    location: "Kulturhaus Seeboden",
    description:
      "Jugendsingtag unter Mitwirkung des MGV Seeboden und der Sängergemeinschaft Kärntner Oberland — Förderung junger Stimmen in Zusammenarbeit mit der MMS Seeboden.",
    category: "special",
    imageUrl: "/gallery-choir-color.png",
  },
];

// ─── Hilfsfunktionen ────────────────────────────────────────────────────────

/** Gibt nur zukünftige Termine zurück (ab heute), aufsteigend sortiert. */
export function getUpcomingEvents(): MGVEvent[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Vergleich auf Tagesbasis
  return ALL_EVENTS
    .filter((e) => new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

/** Gibt vergangene Termine zurück (vor heute), absteigend sortiert (neueste zuerst). */
export function getPastEvents(): MGVEvent[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return ALL_EVENTS
    .filter((e) => new Date(e.date) < today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** Gibt den neuesten vergangenen Termin zurück (für den Rückblick-Banner). */
export function getLastPastEvent(): MGVEvent | null {
  const past = getPastEvents();
  return past.length > 0 ? past[0] : null;
}

/** Gibt den nächsten kommenden Termin zurück. */
export function getNextUpcomingEvent(): MGVEvent | null {
  const upcoming = getUpcomingEvents();
  return upcoming.length > 0 ? upcoming[0] : null;
}

/**
 * Historische Chronik-Einträge (echte Vereinsgeschichte).
 * Quellen: mgv-seeboden.at/der-verein, meinbezirk.at
 */
export const HISTORIC_ENTRIES = [
  {
    year: "1894",
    title: "Gründung des MGV Seeboden-Unterhaus",
    description:
      "Am 7. Oktober 1894 gründeten Johann Dietrich (Gastwirt in Wirlsdorf) und Matthias Ortner (Landwirt aus Kötzing) den Verein bei einer Versammlung im Gasthaus Ertl. 16 sangesfreudige Männer waren dabei. Erster Chorleiter: Leopold Eisendle, Schullehrer aus Lieseregg.",
    imageUrl: "/gallery-bw.png",
  },
  {
    year: "1894",
    title: "Beitritt zum Kärntner Sängerbund",
    description:
      "Bereits am 11. Dezember 1894 trat der junge Verein auf Initiative von Chorleiter Leopold Eisendle dem Kärntner Sängerbund bei — eine Mitgliedschaft, die bis heute besteht.",
    imageUrl: "/gallery-bw.png",
  },
  {
    year: "1899",
    title: "Umbenennung in MGV Seeboden",
    description:
      "Auf Antrag von Franz Dietrich wurde bei der Jahreshauptversammlung am 18. Februar 1899 die Umbenennung von „MGV Seeboden-Unterhaus“ in „MGV Seeboden“ beschlossen.",
    imageUrl: "/gallery-bw.png",
  },
  {
    year: "1948",
    title: "Erster Seebodner Kirchtag",
    description:
      "Der MGV Seeboden beginnt mit der Veranstaltung des Seebodner Kirchtags — ein Fest, das bis heute jährlich stattfindet und zum wichtigsten Event des Vereins geworden ist.",
    imageUrl: "/gallery-beer.png",
  },
  {
    year: "2024",
    title: "130 Jahre — Großes Sängerfest",
    description:
      "130 Jahre MGV Seeboden — gefeiert mit einem großen Sängerfest im Blumenpark Seeboden, an dem zahlreiche Chöre aus der Region teilnahmen. Ein Meilenstein in der Vereinsgeschichte.",
    imageUrl: "/gallery-concert.png",
  },
];

/** Formatiert ein ISO-Datum auf Deutsch, z.B. "14. März 2026" */
export function formatEventDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("de-AT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Formatiert ein ISO-Datum kurz, z.B. "Sa · 14.03." */
export function formatEventDateShort(dateStr: string): string {
  const d = new Date(dateStr);
  const weekday = d.toLocaleDateString("de-AT", { weekday: "short" });
  const day = d.toLocaleDateString("de-AT", { day: "2-digit", month: "2-digit" });
  return `${weekday} · ${day}`;
}

/** Gibt das Kategorie-Label auf Deutsch zurück */
export function getCategoryLabel(cat: EventCategory): string {
  const labels: Record<EventCategory, string> = {
    concert: "Konzert",
    church: "Kirchlich",
    rehearsal: "Probe",
    trip: "Ausflug",
    special: "Besonders",
    other: "Sonstiges",
  };
  return labels[cat] ?? cat;
}
