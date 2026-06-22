/**
 * consentConfig.ts
 * ----------------
 * Zentrale Cookie- & Consent-Konfiguration für den MGV Seeboden.
 *
 * AUFBAU:
 * - consentCategories: Definition aller Cookie-Kategorien
 * - serviceRegistry: Alle Drittdienste, die Cookie-Kategorien zugeordnet sind
 *
 * WICHTIG:
 * - Statistik-, Marketing- und externe Medien-Dienste werden NICHT automatisch geladen.
 * - Sie dürfen nur nach expliziter Zustimmung des Nutzers aktiviert werden.
 * - Standardmäßig sind nur "notwendige" Cookies aktiv.
 *
 * STORAGE_KEY: localStorage["mgv_consent"] = JSON-String mit Einstellungen
 */

export const CONSENT_STORAGE_KEY = "mgv_consent";

export type ConsentCategory = "necessary" | "statistics" | "marketing" | "external_media";

export interface ConsentSettings {
  necessary: boolean;      // Immer true, nicht deaktivierbar
  statistics: boolean;     // Google Analytics, Matomo – Platzhalter
  marketing: boolean;      // Meta Pixel, Facebook Ads – Platzhalter
  external_media: boolean; // YouTube, Instagram, Facebook, Google Maps
  timestamp?: string;      // Zeitpunkt der Zustimmung (ISO 8601)
  version?: string;        // Versionierung für spätere Anpassungen
}

/** Standard-Einstellungen: Nur notwendige Cookies aktiv */
export const DEFAULT_CONSENT: ConsentSettings = {
  necessary: true,
  statistics: false,
  marketing: false,
  external_media: false,
};

/** Beschreibungen der Kategorien für den Cookie-Banner */
export const CONSENT_CATEGORIES = {
  necessary: {
    label: "Notwendig",
    description:
      "Technisch erforderliche Cookies für den Betrieb der Website. Diese können nicht deaktiviert werden.",
    required: true,
  },
  statistics: {
    label: "Statistik",
    description:
      "Helfen uns zu verstehen, wie Besucher die Website nutzen. Dienste: Google Analytics (Platzhalter), Matomo (Platzhalter).",
    required: false,
  },
  marketing: {
    label: "Marketing",
    description:
      "Werden für gezielte Werbung verwendet. Dienste: Meta Pixel (Platzhalter), Facebook Ads (Platzhalter). Aktuell nicht aktiv.",
    required: false,
  },
  external_media: {
    label: "Externe Medien",
    description:
      "Inhalte von YouTube, Instagram, Facebook und anderen Diensten. Ohne Zustimmung werden nur Platzhalter angezeigt.",
    required: false,
  },
} satisfies Record<ConsentCategory, { label: string; description: string; required: boolean }>;

/**
 * Dienst-Registry: Alle Drittanbieter-Dienste mit ihrer Kategorie-Zuordnung.
 * TODO: Vor Produktivbetrieb echte Skript-URLs und Cookie-Infos eintragen.
 */
export const SERVICE_REGISTRY = {
  // === STATISTIK ===
  google_analytics: {
    name: "Google Analytics",
    category: "statistics" as ConsentCategory,
    enabled: false, // TODO: auf true setzen und trackingId eintragen
    trackingId: "G-XXXXXXXXXX", // TODO: echte ID eintragen
    scriptUrl: "https://www.googletagmanager.com/gtag/js", // Platzhalter
  },
  matomo: {
    name: "Matomo",
    category: "statistics" as ConsentCategory,
    enabled: false, // TODO: auf true setzen wenn Matomo-Instanz vorhanden
    siteId: "1", // TODO: echte ID eintragen
    trackerUrl: "https://TODO.matomo.cloud/", // TODO: echte URL eintragen
  },

  // === MARKETING ===
  meta_pixel: {
    name: "Meta Pixel (Facebook)",
    category: "marketing" as ConsentCategory,
    enabled: false, // TODO: aktivieren wenn gewünscht
    pixelId: "XXXXXXXXXX", // TODO: echte Pixel-ID eintragen
  },

  // === EXTERNE MEDIEN ===
  youtube: {
    name: "YouTube",
    category: "external_media" as ConsentCategory,
    enabled: true,
    baseUrl: "https://www.youtube.com/@mgvseeboden",
  },
  instagram: {
    name: "Instagram",
    category: "external_media" as ConsentCategory,
    enabled: true,
    profileUrl: "https://www.instagram.com/mgvseeboden/", // TODO: echte URL prüfen
  },
  facebook: {
    name: "Facebook",
    category: "external_media" as ConsentCategory,
    enabled: true,
    pageUrl: "https://www.facebook.com/mgvseeboden/", // TODO: echte URL prüfen
  },
};

// ─── Consent-Lese- und Schreibfunktionen ────────────────────────────────────

/** Liest die gespeicherten Consent-Einstellungen aus localStorage. */
export function getConsent(): ConsentSettings {
  if (typeof window === "undefined") return DEFAULT_CONSENT;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return DEFAULT_CONSENT;
    return { ...DEFAULT_CONSENT, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_CONSENT;
  }
}

/** Speichert die Consent-Einstellungen in localStorage. */
export function saveConsent(settings: Partial<ConsentSettings>): void {
  if (typeof window === "undefined") return;
  const current = getConsent();
  const updated: ConsentSettings = {
    ...current,
    ...settings,
    necessary: true, // Notwendige Cookies immer aktiv
    timestamp: new Date().toISOString(),
    version: "1.0",
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(updated));
}

/** Prüft, ob der Nutzer bereits eine Consent-Entscheidung getroffen hat. */
export function hasConsentDecision(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONSENT_STORAGE_KEY) !== null;
}

/** Prüft ob eine bestimmte Kategorie zugestimmt wurde. */
export function hasConsent(category: ConsentCategory): boolean {
  if (category === "necessary") return true;
  return getConsent()[category] === true;
}
