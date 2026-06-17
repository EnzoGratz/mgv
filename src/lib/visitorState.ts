/**
 * visitorState.ts
 * ----------------
 * Erkennt, ob ein Besucher zum ersten Mal auf der Website ist.
 *
 * DATENSCHUTZ-HINWEIS:
 * - Es wird NUR gespeichert, ob die Intro-Seite bereits gesehen wurde.
 * - Kein Nutzerprofil, keine ID, kein Tracking, keine Analytics.
 * - Kein Meta Pixel, kein Marketing.
 * - Keine Weitergabe an Dritte.
 * - Wert: localStorage["mgv_intro_seen"] = "true"
 *
 * Um den Status zurückzusetzen (z.B. für Tests):
 * - Im Browser-DevTools: localStorage.removeItem("mgv_intro_seen")
 * - Oder die unten exportierte Funktion resetVisitorState() aufrufen.
 */

const STORAGE_KEY = "mgv_intro_seen";

/**
 * Gibt true zurück, wenn der Besucher zum ersten Mal auf der Website ist.
 * Achtung: Muss clientseitig aufgerufen werden (kein SSR).
 */
export function isFirstVisit(): boolean {
  if (typeof window === "undefined") return true; // SSR-Schutz
  return localStorage.getItem(STORAGE_KEY) !== "true";
}

/**
 * Markiert den Besucher als "hat die Intro gesehen".
 * Wird nur aufgerufen, wenn der Nutzer aktiv interagiert hat.
 */
export function markIntroAsSeen(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, "true");
}

/**
 * Setzt den Besucherstatus zurück (Intro wird wieder angezeigt).
 * Nur für Entwickler oder auf expliziten Nutzerwunsch verwenden.
 */
export function resetVisitorState(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * DEV-HELFER: Zeigt den aktuellen Status in der Konsole an.
 * Nur in Entwicklungsumgebungen verwenden.
 */
export function debugVisitorState(): void {
  if (process.env.NODE_ENV !== "production") {
    console.log(
      "[MGV VisitorState] mgv_intro_seen =",
      localStorage.getItem(STORAGE_KEY) ?? "(nicht gesetzt)"
    );
  }
}
