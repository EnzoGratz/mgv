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
 * TODO: Vor Produktivbetrieb durch echte Termine ersetzen.
 *
 * Datum-Format: YYYY-MM-DD (ISO 8601)
 * Vergangene Termine erscheinen automatisch in der Chronik.
 * Zukünftige Termine erscheinen im Terminkalender.
 */
export const ALL_EVENTS: MGVEvent[] = [
  // ──── VERGANGENE TERMINE (Platzhalter für Chronik) ────
  {
    id: "evt-2025-adventsingen",
    date: "2025-12-14",
    time: "18:00",
    title: "Adventsingen 2025",
    subtitle: "Festlicher Abend im Kerzenschein",
    location: "Pfarrkirche Seeboden",
    description:
      "Ein besonderer Abend voller Musik und Begegnung. Der MGV Seeboden gestaltete das Adventsingen mit geistlichen Werken und Kärntner Volksweisen. Hier kommt später der echte Rückblick zum Konzert hin.",
    category: "church",
    imageUrl: "https://picsum.photos/seed/adventsingen2025/800/500",
  },
  {
    id: "evt-2025-herbstkonzert",
    date: "2025-10-04",
    time: "19:30",
    title: "Herbstkonzert",
    subtitle: "Stimmen des Herbstes",
    location: "Gemeindesaal Seeboden",
    description:
      "Ein Moment aus der Geschichte des Chors. Das Herbstkonzert vereinte Klassik, Volkslied und moderne Chorarrangements zu einem unvergesslichen Abend.",
    category: "concert",
    price: "ab 12 €",
    imageUrl: "https://picsum.photos/seed/herbstkonzert2025/800/500",
  },
  {
    id: "evt-2025-sommerfest",
    date: "2025-07-05",
    time: "17:00",
    title: "Sommerabend am See",
    subtitle: "Open Air am Millstätter See",
    location: "Uferpromenade Seeboden",
    description:
      "Musik unter freiem Himmel. Der MGV Seeboden sang bei Sonnenuntergang direkt am Seeufer – ein unvergesslicher Abend für alle Besucher.",
    category: "concert",
    imageUrl: "https://picsum.photos/seed/sommerfest2025/800/500",
  },
  {
    id: "evt-2025-fruehlingskonzert",
    date: "2025-03-22",
    time: "19:30",
    title: "Frühlingskonzert",
    subtitle: "Abend der Harmonien",
    location: "Kulturhaus Seeboden",
    description:
      "Den Frühling mit Musik begrüßen. Das Frühlingskonzert 2025 war ein voller Erfolg – herzlicher Applaus und strahlende Gesichter.",
    category: "concert",
    price: "ab 10 €",
    imageUrl: "https://picsum.photos/seed/fruehling2025/800/500",
  },
  {
    id: "evt-2024-jubilaeum",
    date: "2024-09-21",
    time: "18:00",
    title: "130 Jahre MGV Seeboden",
    subtitle: "Jubiläumskonzert",
    location: "Gemeindesaal Seeboden",
    description:
      "Ein Festabend für die Ewigkeit. 130 Jahre MGV Seeboden – gefeiert mit Freunden, Ehrengästen und unvergesslicher Musik.",
    category: "special",
    price: "Eintritt frei",
    imageUrl: "https://picsum.photos/seed/jubilaeum2024/800/500",
  },

  // ──── KOMMENDE TERMINE (Platzhalter) ────
  {
    id: "evt-2026-fruehling",
    date: "2026-03-21",
    time: "19:30",
    title: "Frühlingskonzert 2026",
    subtitle: "Stimmen im Erwachen",
    location: "Kulturhaus Seeboden",
    description:
      "Den Frühling musikalisch einläuten – mit Volksweisen, geistlicher Chormusik und modernen Arrangements. Tickets an der Abendkasse.",
    category: "concert",
    price: "ab 12 €",
    ticketUrl: "#ticketshop", // TODO: echte Ticket-URL eintragen
    imageUrl: "https://picsum.photos/seed/fruehling2026/800/500",
  },
  {
    id: "evt-2026-kirchenfest",
    date: "2026-04-05",
    time: "10:00",
    title: "Kirchlicher Festgottesdienst",
    subtitle: "Musikalische Gestaltung zu Ostern",
    location: "Pfarrkirche Seeboden",
    description:
      "Der MGV Seeboden gestaltet den Ostergottesdienst mit feierlichen Chören und geistlichen Gesängen.",
    category: "church",
    imageUrl: "https://picsum.photos/seed/kirchenfest2026/800/500",
  },
  {
    id: "evt-2026-offene-probe",
    date: "2026-05-14",
    time: "19:30",
    title: "Offene Chorprobe",
    subtitle: "Reinschnuppern willkommen",
    location: "Kulturhaus Seeboden",
    description:
      "Interesse am Chorsingen? Komm einfach vorbei und singe eine Probe mit. Keine Vorkenntnisse nötig. Wir freuen uns auf dich!",
    category: "rehearsal",
    imageUrl: "https://picsum.photos/seed/offeneprobe2026/800/500",
  },
  {
    id: "evt-2026-sommer",
    date: "2026-06-27",
    time: "17:00",
    title: "Sommerabend am See 2026",
    subtitle: "Open Air am Millstätter See",
    location: "Uferpromenade Seeboden",
    description:
      "Musik unter freiem Himmel, Sonnenuntergang, Millstätter See. Der MGV Seeboden lädt zum großen Sommerabend ein.",
    category: "concert",
    price: "Eintritt frei",
    imageUrl: "https://picsum.photos/seed/sommer2026/800/500",
  },
  {
    id: "evt-2026-ausflug",
    date: "2026-08-08",
    title: "Vereinsausflug 2026",
    subtitle: "Gemeinschaft & Abenteuer",
    location: "Ziel wird noch bekannt gegeben",
    description:
      "Der jährliche Vereinsausflug – für Gemeinschaft, Spaß und unvergessliche Momente abseits der Bühne.",
    category: "trip",
    imageUrl: "https://picsum.photos/seed/ausflug2026/800/500",
  },
  {
    id: "evt-2026-advent",
    date: "2026-12-12",
    time: "18:00",
    title: "Adventsingen 2026",
    subtitle: "Stimmungsvoller Advent",
    location: "Pfarrkirche Seeboden",
    description:
      "Weihnachtszeit mit dem MGV Seeboden. Geistliche Musik, Kerzenlicht und die Wärme der Gemeinschaft.",
    category: "church",
    imageUrl: "https://picsum.photos/seed/advent2026/800/500",
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
 * Historische Chronik-Einträge (keine Termine, feste Vereinsgeschichte).
 * Diese erscheinen immer in der Chronik, unabhängig vom Datum.
 */
export const HISTORIC_ENTRIES = [
  {
    year: "1894",
    title: "Gründung des MGV Seeboden",
    description:
      "Die Geburtsstunde des MGV Seeboden. Ein Versprechen an die Heimat und das Kärntner Liedgut – mit zwölf Gründungsmitgliedern und viel Leidenschaft.",
    imageUrl: "https://picsum.photos/seed/gruendung1894/800/500",
  },
  {
    year: "1924",
    title: "Erste Fahnenweihe",
    description:
      "Dreißig Jahre Gemeinschaft. Ein Fest, das die Verbundenheit zum Millstätter See besiegelte und dem Verein ein bleibendes Symbol gab.",
    imageUrl: "https://picsum.photos/seed/fahnenweihe1924/800/500",
  },
  {
    year: "1950",
    title: "Neubeginn nach dem Krieg",
    description:
      "Stimmen der Rückkehr. Der Chor als Ankerpunkt für Identität, Kameradschaft und Hoffnung in einer Zeit des Wiederaufbaus.",
    imageUrl: "https://picsum.photos/seed/neubeginn1950/800/500",
  },
  {
    year: "1984",
    title: "Goldenes Verdienstzeichen",
    description:
      "Verleihung des Goldenen Verdienstzeichens für unermüdlichen Einsatz um die Kärntner Musikkultur und das Vereinsleben.",
    imageUrl: "https://picsum.photos/seed/goldenesurkunde1984/800/500",
  },
  {
    year: "2024",
    title: "130 Jahre – und kein bisschen leise",
    description:
      "Eine Chronik, die weiterlebt. 130 Jahre MGV Seeboden – gefeiert mit Freunden, Ehrengästen und einem Jubiläumskonzert für die Ewigkeit.",
    imageUrl: "https://picsum.photos/seed/jubilaeum130/800/500",
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
