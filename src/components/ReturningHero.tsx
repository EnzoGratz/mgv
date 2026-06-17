"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { getNextUpcomingEvent, getLastPastEvent, formatEventDate } from "@/data/events";

// ─── Hero für wiederkehrende Besucher ────────────────────────────────────────
// Kompakter Banner, zeigt nächsten Termin + Rückblick

export default function ReturningHero() {
  const nextEvent = getNextUpcomingEvent();
  const lastEvent = getLastPastEvent();

  return (
    <section
      id="start"
      className="relative overflow-hidden pt-24 pb-16"
      aria-label="Willkommen zurück"
      style={{
        background:
          "linear-gradient(180deg, var(--color-midnight) 0%, var(--color-bg) 100%)",
      }}
    >
      {/* Gold-Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 500px at 30% 0%, rgba(198,162,90,.10), transparent 60%)",
        }}
      />

      <div className="mgv-wrap relative z-10">
        <div className="grid lg:grid-cols-[1.25fr_.85fr] gap-6 items-stretch">

          {/* ── Hauptkarte ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mgv-card mgv-card-gold rounded-[var(--radius-card)] p-8 lg:p-10"
          >
            <div className="kicker mb-4">
              <span className="kicker-dot" />
              Willkommen zurück · MGV Seeboden
            </div>

            <h1
              className="font-serif mb-4"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
                lineHeight: 1.08,
                color: "var(--color-ink)",
              }}
            >
              Tradition, die{" "}
              <span style={{ color: "var(--color-gold-2)" }}>klingt</span>.
            </h1>

            <p
              className="mb-6"
              style={{
                color: "var(--color-muted)",
                fontSize: "16px",
                lineHeight: 1.7,
                maxWidth: "60ch",
              }}
            >
              Der MGV Seeboden steht für gepflegten Chorklang, würdige Auftritte
              und gelebte Kameradschaft. Seit 1894 tragen wir das Kärntner Liedgut
              in die Gegenwart.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#termine" className="mgv-btn text-[13px]">
                <CalendarDays size={15} />
                Nächster Auftritt
              </a>
              <a href="#chronik" className="mgv-btn mgv-btn-secondary text-[13px]">
                Chronik entdecken
              </a>
            </div>

            {/* Kontakt-Info */}
            <div className="mgv-divider" />
            <p
              className="text-[13px] leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              <strong style={{ color: "var(--color-ink)" }}>Proben:</strong>{" "}
              Donnerstag 19:30 · Kulturhaus Seeboden · Treffling 266, 9871 Seeboden ·{" "}
              <a
                href="mailto:singen@mgv-seeboden.at"
                className="underline hover:text-[var(--color-gold)]"
              >
                singen@mgv-seeboden.at
              </a>
            </p>
          </motion.div>

          {/* ── Seitenbereich: Nächster Termin + Rückblick ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Nächster Termin */}
            {nextEvent && (
              <a
                href="#termine"
                className="mgv-card rounded-[var(--radius-card)] p-6 flex-1 group block"
                id="returning-next-event"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(198,162,90,.12), transparent 45%), linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",
                }}
              >
                <div className="kicker mb-3">
                  <span className="kicker-dot" />
                  Nächster Termin
                </div>
                <h3
                  className="font-serif mb-2"
                  style={{
                    fontSize: "1.2rem",
                    color: "var(--color-ink)",
                    lineHeight: 1.2,
                  }}
                >
                  {nextEvent.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <CalendarDays size={13} style={{ color: "var(--color-gold)" }} />
                  <span className="text-[13px]" style={{ color: "var(--color-gold-2)" }}>
                    {formatEventDate(nextEvent.date)}
                    {nextEvent.time ? ` · ${nextEvent.time} Uhr` : ""}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} style={{ color: "var(--color-muted)" }} />
                  <span className="text-[13px]" style={{ color: "var(--color-muted)" }}>
                    {nextEvent.location}
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-4 text-[12px] tracking-wide group-hover:gap-3 transition-all" style={{ color: "var(--color-gold)" }}>
                  Details & Tickets <ArrowRight size={13} />
                </div>
              </a>
            )}

            {/* Rückblick */}
            {lastEvent && (
              <a
                href="#chronik"
                className="mgv-card rounded-[var(--radius-card)] overflow-hidden group block"
                id="returning-last-event"
              >
                <div className="relative h-28">
                  <img
                    src={lastEvent.imageUrl || "https://picsum.photos/seed/rueckblick/600/200"}
                    alt={`Rückblick: ${lastEvent.title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.5) saturate(0.7)" }}
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(0deg, rgba(7,8,11,.80), transparent)" }}
                  />
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-[10px] uppercase tracking-[1.4px] mb-1" style={{ color: "var(--color-gold)" }}>
                      Rückblick
                    </p>
                    <p className="text-[14px] font-bold leading-tight" style={{ color: "var(--color-ink)" }}>
                      {lastEvent.title}
                    </p>
                    <p className="text-[11px] mt-1" style={{ color: "var(--color-muted)" }}>
                      {formatEventDate(lastEvent.date)}
                    </p>
                  </div>
                </div>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
