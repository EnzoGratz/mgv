"use client";

import { motion } from "framer-motion";
import { Youtube, Instagram, Facebook, Globe, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { hasConsent, SERVICE_REGISTRY } from "@/lib/consentConfig";
import { CookieSettingsLink } from "@/components/CookieBanner";

// ─── Social Media Section (Consent-Aware) ────────────────────────────────────
// Zeigt Cards für externe Plattformen. Wenn Consent fehlt, wird ein Platzhalter
// mit Hinweis auf die Cookie-Einstellungen gezeigt.

const SOCIAL_LINKS = [
  {
    id: "youtube",
    name: "YouTube",
    icon: <Youtube size={28} />,
    color: "#FF0000",
    url: SERVICE_REGISTRY.youtube.baseUrl,
    handle: "@mgvseeboden",
    description: "Konzertmitschnitte und Videos",
    requiresConsent: "external_media",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: <Instagram size={28} />,
    color: "#E1306C",
    url: SERVICE_REGISTRY.instagram.profileUrl,
    handle: "@mgvseeboden",
    description: "Einblicke hinter die Kulissen",
    requiresConsent: "external_media",
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: <Facebook size={28} />,
    color: "#1877F2",
    url: SERVICE_REGISTRY.facebook.pageUrl,
    handle: "MGV Seeboden",
    description: "Aktuelle Meldungen und Events",
    requiresConsent: "external_media",
  },
  {
    id: "website",
    name: "Weitere Links",
    icon: <Globe size={28} />,
    color: "var(--color-gold)",
    url: "#",
    handle: "mgv-seeboden.at",
    description: "Partner & Sponsoren (Platzhalter)",
    requiresConsent: null, // Braucht keinen Consent
  },
];

export default function SocialSection() {
  const [consentState, setConsentState] = useState({
    external_media: false,
  });

  // Client-seitiges Laden der Consent-Zustände
  useEffect(() => {
    // Kurzer Timeout, damit der CookieBanner eventuell zuerst mountet/speichert
    const timer = setTimeout(() => {
      setConsentState({
        external_media: hasConsent("external_media"),
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="social"
      className="mgv-section"
      aria-label="Social Media"
      style={{
        background: "linear-gradient(180deg, var(--color-bg) 0%, var(--color-midnight) 100%)",
      }}
    >
      <div className="mgv-wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mgv-section-header centered mb-16"
        >
          <div className="kicker">
            <span className="kicker-dot" />
            Folge Uns
          </div>
          <h2 className="mgv-section-title">MGV Digital</h2>
          <p className="mgv-section-lead" style={{ textAlign: "center" }}>
            Erlebe den MGV Seeboden auch online. Folge uns auf unseren Kanälen für Videos,
            Fotos und aktuelle Neuigkeiten.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_LINKS.map((link, index) => {
            const needsConsent = link.requiresConsent !== null;
            const hasAccess = !needsConsent || consentState[link.requiresConsent as keyof typeof consentState];

            return (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {hasAccess ? (
                  /* ── Aktive Social Card ── */
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mgv-card rounded-[var(--radius-card)] p-6 md:p-8 flex flex-col items-center text-center group h-full block"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: "rgba(255,255,255,.03)",
                        border: "1px solid rgba(255,255,255,.10)",
                        color: link.color,
                      }}
                    >
                      {link.icon}
                    </div>
                    <h3 className="font-serif text-xl mb-1" style={{ color: "var(--color-ink)" }}>{link.name}</h3>
                    <p className="text-[11px] uppercase tracking-widest mb-4" style={{ color: "var(--color-gold)" }}>{link.handle}</p>
                    <p className="text-[13px] mb-6 flex-grow" style={{ color: "var(--color-muted)" }}>{link.description}</p>
                    <div className="flex items-center gap-2 text-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "var(--color-ink)" }}>
                      Öffnen <ExternalLink size={12} />
                    </div>
                  </a>
                ) : (
                  /* ── Consent Platzhalter Card ── */
                  <div
                    className="mgv-card rounded-[var(--radius-card)] p-6 md:p-8 flex flex-col items-center text-center h-full border-dashed"
                    style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(0,0,0,.2)" }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{ background: "rgba(255,255,255,.02)", color: "var(--color-muted)", opacity: 0.5 }}
                    >
                      {link.icon}
                    </div>
                    <h3 className="font-serif text-xl mb-2" style={{ color: "var(--color-muted)" }}>{link.name}</h3>
                    <p className="text-[12px] mb-4 flex-grow" style={{ color: "rgba(201,196,184,.5)", lineHeight: 1.6 }}>
                      Um {link.name}-Inhalte zu sehen, benötigen wir deine Zustimmung für Externe Medien.
                    </p>
                    <div className="text-[12px] underline" style={{ color: "var(--color-gold)" }}>
                      <CookieSettingsLink />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
