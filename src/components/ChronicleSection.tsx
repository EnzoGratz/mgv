"use client";

import { motion } from "framer-motion";
import { getPastEvents, HISTORIC_ENTRIES, formatEventDate, getCategoryLabel } from "@/data/events";

// ─── Chronik: Vergangene Termine + Historische Vereinsgeschichte ─────────────
// Automatisch: vergangene Termine aus events.ts + feste historische Einträge

export default function ChronicleSection() {
  const pastEvents = getPastEvents(); // absteigend sortiert (neueste zuerst)

  return (
    <section
      id="chronik"
      className="mgv-section bg-[var(--color-bg-alt)]"
      aria-label="Chronik des MGV Seeboden"
    >
      <div className="mgv-wrap">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mgv-section-header centered mb-16"
        >
          <div className="kicker">
            <span className="kicker-dot" />
            Chronik
          </div>
          <h2 className="mgv-section-title">Ein Erbe aus Stimmen</h2>
          <p className="mgv-section-lead" style={{ textAlign: "center" }}>
            Vergangene Konzerte und besondere Momente aus der 130-jährigen Geschichte
            des MGV Seeboden – ein Rückblick in Bildern und Geschichten.
          </p>
        </motion.div>

        {/* ── Vergangene Termine (automatisch aus events.ts) ── */}
        {pastEvents.length > 0 && (
          <div className="mb-20">
            <div className="kicker mb-8">
              <span className="kicker-dot" />
              Vergangene Veranstaltungen
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((evt, index) => (
                <motion.article
                  key={evt.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: (index % 3) * 0.08 }}
                  className="mgv-card rounded-[var(--radius-card)] overflow-hidden group"
                >
                  {/* Bild */}
                  <div className="relative" style={{ aspectRatio: "16/10" }}>
                    <img
                      src={evt.imageUrl || `https://picsum.photos/seed/${evt.id}/600/375`}
                      alt={`Rückblick: ${evt.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: "saturate(0.8) brightness(0.65)" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(0deg, rgba(7,8,11,.75) 0%, transparent 55%)" }}
                    />

                    {/* Kategorie-Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="mgv-pill text-[10px]">{getCategoryLabel(evt.category)}</span>
                    </div>

                    {/* Datum auf Bild */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-[11px] uppercase tracking-[1.4px] mb-1" style={{ color: "var(--color-gold)" }}>
                        {formatEventDate(evt.date)}
                      </p>
                      <h4 className="font-serif text-lg leading-tight" style={{ color: "var(--color-ink)" }}>
                        {evt.title}
                      </h4>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-5">
                    <p className="text-[14px] leading-relaxed line-clamp-3" style={{ color: "var(--color-muted)" }}>
                      {evt.description}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="w-1 h-1 rounded-full" style={{ background: "var(--color-gold)" }} />
                      <span className="text-[11px] tracking-wider" style={{ color: "rgba(201,196,184,.50)" }}>
                        {evt.location}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* ── Vereinsgeschichte (feste historische Einträge) ── */}
        <div>
          <div className="kicker mb-8">
            <span className="kicker-dot" />
            Vereinsgeschichte
          </div>

          {/* Vertikale Timeline */}
          <div className="relative">
            {/* Timeline-Linie */}
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 hidden md:block"
              style={{
                width: "1px",
                background: "linear-gradient(180deg, var(--color-line), transparent)",
                transform: "translateX(-50%)",
              }}
            />

            <div className="flex flex-col gap-16 md:gap-24">
              {HISTORIC_ENTRIES.map((entry, index) => (
                <motion.div
                  key={entry.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8 md:gap-16 relative`}
                >
                  {/* Jahreszahl */}
                  <div className="w-full md:w-1/2 flex flex-col items-center md:items-end md:text-right">
                    <span
                      className="font-serif leading-none"
                      style={{
                        fontSize: "clamp(4rem, 8vw, 7rem)",
                        color: "rgba(198,162,90,.10)",
                      }}
                    >
                      {entry.year}
                    </span>
                  </div>

                  {/* Timeline-Punkt */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10 hidden md:block"
                    style={{
                      background: "var(--color-gold)",
                      border: "4px solid var(--color-bg)",
                    }}
                  />

                  {/* Inhalt */}
                  <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                    {/* Bild */}
                    <div className="img-card rounded-2xl overflow-hidden" style={{ aspectRatio: "16/10" }}>
                      <img
                        src={entry.imageUrl}
                        alt={`Chronik: ${entry.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        style={{ filter: "sepia(15%) brightness(0.7)" }}
                      />
                      <div className="img-card-overlay" />
                      <div className="img-card-label">{entry.year}</div>
                    </div>

                    <h3
                      className="font-serif italic gold-print"
                      style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
                    >
                      {entry.title}
                    </h3>
                    <p
                      className="max-w-md mx-auto md:mx-0"
                      style={{
                        color: "var(--color-muted)",
                        fontSize: "15px",
                        lineHeight: 1.75,
                      }}
                    >
                      {entry.description}
                    </p>
                    <div className="flex justify-center md:justify-start">
                      <div style={{ width: "40px", height: "1px", background: "rgba(198,162,90,.25)" }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
