"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";

// ─── Newsletter-Bereich (DSGVO-vorbereitet) ──────────────────────────────────
// Premium editorial-style signup inspired by the Berlin Philharmonic.
// Frontend-only Platzhalter – sammelt keine echten Daten,
// zeigt nach Absenden eine Erfolgsmeldung.

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;

    // TODO: Echten API Call an Backend/Newsletter-Provider einbauen
    // z.B. fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email }) })

    setSubmitted(true);
    setEmail("");
    setConsent(false);
  };

  return (
    <section
      id="newsletter"
      aria-label="Newsletter Anmeldung"
      style={{ background: "var(--color-forest)" }}
      className="relative overflow-hidden"
    >
      {/* Subtle decorative gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(0,0,0,.15), transparent), radial-gradient(ellipse 60% 50% at 90% 20%, rgba(198,162,90,.06), transparent)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* ─── LEFT: Editorial headline & description ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Mail size={18} style={{ color: "var(--color-gold)" }} />
              <span
                className="text-xs uppercase tracking-[0.25em]"
                style={{ color: "var(--color-gold)" }}
              >
                Newsletter
              </span>
            </div>

            <h2
              className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-6"
              style={{ color: "#ffffff" }}
            >
              Bleiben Sie
              <br />
              in Kontakt
            </h2>

            {/* Gold underline accent */}
            <div
              className="w-16 h-[2px] mb-8"
              style={{ background: "var(--color-gold)" }}
            />

            <p
              className="text-base md:text-[17px] leading-relaxed max-w-md"
              style={{ color: "rgba(255,255,255,.7)" }}
            >
              Erhalten Sie exklusive Einblicke in unser Chorleben, erfahren Sie
              als Erstes von kommenden Konzerten und bleiben Sie Teil unserer
              musikalischen Gemeinschaft in Seeboden.
            </p>
          </motion.div>

          {/* ─── RIGHT: Form ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                {/* Email input */}
                <div>
                  <label
                    htmlFor="nl-email"
                    className="block text-xs uppercase tracking-[0.2em] mb-3"
                    style={{ color: "rgba(255,255,255,.5)" }}
                  >
                    E-Mail Adresse
                  </label>
                  <div className="relative">
                    <input
                      id="nl-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ihre.email@beispiel.at"
                      className="w-full px-5 py-4 text-[15px] rounded-lg border-0 outline-none transition-shadow focus:ring-2"
                      style={{
                        background: "#ffffff",
                        color: "var(--color-forest-dark)",
                        fontFamily: "var(--font-sans)",
                      }}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Mail
                        size={18}
                        style={{ color: "var(--color-muted)", opacity: 0.4 }}
                      />
                    </div>
                  </div>
                </div>

                {/* DSGVO consent checkbox */}
                <label
                  htmlFor="nl-consent"
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    id="nl-consent"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-2 appearance-none cursor-pointer shrink-0"
                    style={{
                      borderColor: "rgba(255,255,255,.4)",
                      background: consent
                        ? "var(--color-gold)"
                        : "transparent",
                    }}
                  />
                  <span
                    className="text-[12px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,.6)" }}
                  >
                    Ich stimme zu, Neuigkeiten und Termine des MGV Seeboden per
                    E-Mail zu erhalten. Meine Daten werden gemäß der{" "}
                    <a
                      href="/datenschutz"
                      className="underline transition-colors"
                      style={{ color: "rgba(255,255,255,.8)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--color-gold)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,.8)")
                      }
                    >
                      Datenschutzerklärung
                    </a>{" "}
                    verarbeitet.
                  </span>
                </label>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={!email || !consent}
                  className="w-full flex items-center justify-center gap-3 py-4 px-8 rounded-lg text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    background: "var(--color-gold)",
                    color: "var(--color-forest-dark)",
                  }}
                  onMouseEnter={(e) => {
                    if (!e.currentTarget.disabled) {
                      e.currentTarget.style.filter = "brightness(1.1)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "brightness(1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Send size={16} />
                  <span>Anmelden</span>
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                  style={{
                    background: "rgba(198,162,90,.15)",
                    border: "1px solid rgba(198,162,90,.3)",
                  }}
                >
                  <CheckCircle2
                    size={32}
                    style={{ color: "var(--color-gold)" }}
                  />
                </div>

                <h3
                  className="font-serif text-2xl mb-3"
                  style={{ color: "#ffffff" }}
                >
                  Vielen Dank!
                </h3>

                <p
                  className="text-[15px] leading-relaxed mb-2"
                  style={{ color: "rgba(255,255,255,.7)" }}
                >
                  Wir haben Ihnen eine Bestätigungs-E-Mail gesendet.
                  <br />
                  Bitte bestätigen Sie Ihre Anmeldung über den Link in der
                  E-Mail.
                </p>

                <p
                  className="text-[11px] mb-6"
                  style={{ color: "rgba(255,255,255,.35)" }}
                >
                  (Platzhalter – es wurde keine echte E-Mail versendet.)
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[13px] underline underline-offset-4 transition-colors"
                  style={{ color: "var(--color-gold)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffffff")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-gold)")
                  }
                >
                  Weitere Adresse anmelden
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
