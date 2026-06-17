"use client";

import { useState, useEffect } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import {
  CONSENT_CATEGORIES,
  DEFAULT_CONSENT,
  ConsentSettings,
  hasConsentDecision,
  saveConsent,
  getConsent,
} from "@/lib/consentConfig";

// ─── Cookie-Settings Modal ────────────────────────────────────────────────────

function CookieSettings({
  settings,
  onChange,
  onSave,
  onClose,
}: {
  settings: ConsentSettings;
  onChange: (cat: keyof ConsentSettings, val: boolean) => void;
  onSave: () => void;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="cookie-modal-overlay" role="dialog" aria-modal="true" aria-label="Cookie-Einstellungen">
      <div className="cookie-modal">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2
            className="font-serif text-xl"
            style={{ color: "var(--color-ink)" }}
          >
            Cookie-Einstellungen
          </h2>
          <button
            onClick={onClose}
            className="p-1 text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
            aria-label="Schließen"
          >
            <X size={20} />
          </button>
        </div>

        <p className="text-sm mb-6" style={{ color: "var(--color-muted)", lineHeight: 1.7 }}>
          Hier kannst du deine Cookie-Einstellungen anpassen. Notwendige Cookies sind immer aktiv,
          da sie für den Betrieb der Website erforderlich sind.
        </p>

        {/* Kategorien */}
        <div className="flex flex-col gap-3 mb-8">
          {(Object.keys(CONSENT_CATEGORIES) as Array<keyof typeof CONSENT_CATEGORIES>).map((cat) => {
            const info = CONSENT_CATEGORIES[cat];
            const isExpanded = expanded === cat;
            const isRequired = info.required;
            const isOn = isRequired ? true : !!settings[cat as keyof ConsentSettings];

            return (
              <div
                key={cat}
                className="rounded-2xl border p-4"
                style={{
                  border: "1px solid rgba(255,255,255,.10)",
                  background: "rgba(255,255,255,.03)",
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[13px] font-bold tracking-wide"
                        style={{ color: "var(--color-ink)" }}
                      >
                        {info.label}
                      </span>
                      {isRequired && (
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full tracking-wider uppercase"
                          style={{
                            background: "rgba(198,162,90,.15)",
                            color: "var(--color-gold)",
                            border: "1px solid rgba(198,162,90,.3)",
                          }}
                        >
                          Erforderlich
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => setExpanded(isExpanded ? null : cat)}
                      className="flex items-center gap-1 mt-1 text-[11px] tracking-wide uppercase transition-colors"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {isExpanded ? "Weniger" : "Details"}
                      {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                    </button>
                  </div>

                  {/* Toggle Switch */}
                  <button
                    role="switch"
                    aria-checked={isOn}
                    disabled={isRequired}
                    onClick={() => !isRequired && onChange(cat as keyof ConsentSettings, !isOn)}
                    className={`relative w-11 h-6 rounded-full transition-all duration-300 flex-shrink-0 ${
                      isRequired ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                    }`}
                    style={{
                      background: isOn
                        ? "linear-gradient(90deg, var(--color-gold), var(--color-gold-2))"
                        : "rgba(255,255,255,.15)",
                    }}
                    aria-label={`${info.label} ${isOn ? "deaktivieren" : "aktivieren"}`}
                  >
                    <span
                      className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300"
                      style={{ transform: isOn ? "translateX(20px)" : "translateX(0)" }}
                    />
                  </button>
                </div>

                {isExpanded && (
                  <p
                    className="mt-3 text-[13px] leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {info.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onSave}
            className="mgv-btn justify-center w-full"
            id="cookie-save-selection"
          >
            Auswahl speichern
          </button>
          <p
            className="text-center text-[11px] leading-relaxed"
            style={{ color: "rgba(201,196,184,.5)" }}
          >
            Weitere Informationen findest du in unserer{" "}
            <a href="/datenschutz" className="underline hover:text-[var(--color-gold)]">
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Cookie Banner (Haupt-Komponente) ────────────────────────────────────────

export default function CookieBanner() {
  const [visible, setVisible]         = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings]       = useState<ConsentSettings>(DEFAULT_CONSENT);

  // Nur anzeigen, wenn noch keine Entscheidung getroffen wurde
  useEffect(() => {
    if (!hasConsentDecision()) {
      // Kurze Verzögerung damit die Seite zuerst lädt
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  // Aktuelle Einstellungen laden wenn Settings geöffnet wird
  useEffect(() => {
    if (showSettings) {
      setSettings(getConsent());
    }
  }, [showSettings]);

  const handleAcceptAll = () => {
    saveConsent({ necessary: true, statistics: true, marketing: true, external_media: true });
    setVisible(false);
    setShowSettings(false);
  };

  const handleAcceptNecessary = () => {
    saveConsent({ ...DEFAULT_CONSENT });
    setVisible(false);
    setShowSettings(false);
  };

  const handleSaveSelection = () => {
    saveConsent(settings);
    setVisible(false);
    setShowSettings(false);
  };

  const handleChange = (cat: keyof ConsentSettings, val: boolean) => {
    setSettings((prev) => ({ ...prev, [cat]: val }));
  };

  if (!visible && !showSettings) return null;

  return (
    <>
      {/* Cookie-Einstellungen Modal */}
      {showSettings && (
        <CookieSettings
          settings={settings}
          onChange={handleChange}
          onSave={handleSaveSelection}
          onClose={() => setShowSettings(false)}
        />
      )}

      {/* Haupt-Banner */}
      {visible && !showSettings && (
        <div className="cookie-banner" role="dialog" aria-modal="true" aria-label="Cookie-Hinweis">
          <div className="mgv-wrap">
            <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
              {/* Text */}
              <div className="flex-1 min-w-0">
                <p
                  className="text-[13px] font-bold tracking-wide mb-1"
                  style={{ color: "var(--color-ink)" }}
                >
                  🍪 Diese Website verwendet Cookies
                </p>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  Wir verwenden Cookies, um dein Erlebnis zu verbessern. Notwendige Cookies sind
                  immer aktiv. Statistik-, Marketing- und externe Medien-Cookies werden nur nach
                  deiner Zustimmung geladen.{" "}
                  <a href="/datenschutz" className="underline hover:text-[var(--color-gold)]">
                    Datenschutzerklärung
                  </a>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => setShowSettings(true)}
                  className="mgv-btn mgv-btn-ghost text-[12px] py-2 px-4"
                  id="cookie-btn-settings"
                >
                  Einstellungen
                </button>
                <button
                  onClick={handleAcceptNecessary}
                  className="mgv-btn mgv-btn-secondary text-[12px] py-2 px-4"
                  id="cookie-btn-necessary"
                >
                  Nur notwendige
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="mgv-btn text-[12px] py-2 px-4"
                  id="cookie-btn-accept-all"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Re-Export für den Footer-Link ───────────────────────────────────────────
// Verwendung im Footer: <CookieSettingsLink />
export function CookieSettingsLink() {
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings]         = useState<ConsentSettings>(DEFAULT_CONSENT);

  const handleOpen = () => {
    setSettings(getConsent());
    setShowSettings(true);
  };

  const handleSave = () => {
    saveConsent(settings);
    setShowSettings(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="hover:text-[var(--color-gold)] transition-colors"
        id="footer-cookie-settings-link"
      >
        Cookie-Einstellungen
      </button>
      {showSettings && (
        <CookieSettings
          settings={settings}
          onChange={(cat, val) => setSettings((p) => ({ ...p, [cat]: val }))}
          onSave={handleSave}
          onClose={() => setShowSettings(false)}
        />
      )}
    </>
  );
}
