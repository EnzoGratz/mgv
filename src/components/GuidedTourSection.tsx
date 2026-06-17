"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Mic, BookOpen, Users, Music } from "lucide-react";

// ─── Kennenlerntour mit Erzählerfigur „Andreas" ──────────────────────────────
// Placeholder-Bilder: placeholder-andreas, placeholder-reiseblog

const STATIONS = [
  {
    id: 0,
    icon: <Mic size={22} />,
    step: "01",
    title: "Willkommen",
    subtitle: "Hallo, ich bin Andreas.",
    body: `Ich singe seit über zwanzig Jahren beim MGV Seeboden – Tenor, zweite Stimme.
      Wenn ich ehrlich bin: Der Chor ist meine zweite Familie.
      
      Lass mich dir zeigen, was uns ausmacht. Es dauert nur ein paar Minuten,
      aber vielleicht bleibst du länger. Die meisten tun es.`,
    image: "https://picsum.photos/seed/placeholder-andreas/600/700",
    imageAlt: "placeholder-andreas – Hier kommt später ein echtes Foto von Andreas hin",
  },
  {
    id: 1,
    icon: <BookOpen size={22} />,
    step: "02",
    title: "Unsere Geschichte",
    subtitle: "130 Jahre. Nicht wenig.",
    body: `1894 – das war die Gründung. Damals hieß der Kaiser noch Franz Joseph,
      und in Seeboden hatten zwölf Männer die Idee: Wir singen zusammen.
      
      Zwei Weltkriege, Wiederaufbau, Generationenwechsel – der MGV Seeboden
      hat alles überstanden. Nicht durch Sturheit, sondern durch echte Leidenschaft
      für die Musik und die Gemeinschaft.`,
    image: "https://picsum.photos/seed/placeholder-chronik/600/700",
    imageAlt: "placeholder-chronik – Hier kommt später ein historisches Foto hin",
  },
  {
    id: 2,
    icon: <Users size={22} />,
    step: "03",
    title: "Das Ensemble",
    subtitle: "Siebzehn Stimmen. Eine Seele.",
    body: `Wir sind gerade 17 aktive Sänger. Tenöre und Bässe, Junge und Erfahrene.
      Der älteste singt seit 40 Jahren mit, der Jüngste kam erst letzten Herbst.
      
      Bei uns zählt kein Diplom. Du brauchst nur Freude am Singen
      und ein bisschen Verlässlichkeit. Den Rest lernen wir gemeinsam.`,
    image: "https://picsum.photos/seed/placeholder-mitglieder/600/700",
    imageAlt: "placeholder-mitglieder – Hier kommt später ein Gruppenfoto des Chors hin",
  },
  {
    id: 3,
    icon: <Music size={22} />,
    step: "04",
    title: "Unsere Musik",
    subtitle: "Von Kärntnerlied bis Konzertsaal.",
    body: `Kärntnerlieder, Motetten, Volksweisen, konzertante Programme –
      unser Repertoire ist vielfältiger als man denkt. 
      
      Einmal im Jahr großes Konzert. Kirchenfeste. Ausflüge. 
      Und jeden Donnerstag um 19:30 Uhr die Probe. Die ist das Herz von allem.
      
      Willst du mitsingen? Dann komm einfach vorbei.
      Kein Vorsingen, keine Prüfung. Einfach da sein.`,
    image: "https://picsum.photos/seed/placeholder-reiseblog/600/700",
    imageAlt: "placeholder-reiseblog – Hier kommt später ein Konzert- oder Bühnenfoto hin",
  },
];

export default function GuidedTourSection() {
  const [active, setActive] = useState(0);

  const current = STATIONS[active];

  return (
    <section
      id="kennenlerntour"
      className="mgv-section bg-white"
      aria-label="Kennenlerntour mit Andreas"
    >
      <div className="mgv-wrap">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mgv-section-header centered mb-16"
        >
          <div className="kicker">
            <span className="kicker-dot" />
            Geführte Tour
          </div>
          <h2 className="mgv-section-title">
            Lerne den Chor kennen
          </h2>
          <p className="mgv-section-lead" style={{ textAlign: "center" }}>
            Andreas, einer unserer Sänger, nimmt dich mit auf eine kurze Reise
            durch den MGV Seeboden.
          </p>
        </motion.div>

        {/* ── Tour-Karte ── */}
        <div
          className="border border-[var(--color-border)] rounded-[0px] overflow-hidden shadow-sm"
          style={{ padding: 0 }}
        >
          <div className="grid lg:grid-cols-[1fr_2fr]">

            {/* Linke Spalte: Navigation */}
            <div
              className="flex flex-col justify-between p-8 lg:p-10"
              style={{
                background: "var(--color-bg-alt)",
                borderRight: "1px solid var(--color-border)",
              }}
            >
              <div className="flex flex-col gap-3">
                {STATIONS.map((station) => (
                  <button
                    key={station.id}
                    onClick={() => setActive(station.id)}
                    className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-left transition-all duration-300 ${
                      active === station.id
                        ? "bg-[rgba(198,162,90,.15)] border border-[rgba(198,162,90,.30)]"
                        : "hover:bg-[rgba(255,255,255,.05)] border border-transparent"
                    }`}
                    aria-pressed={active === station.id}
                    id={`tour-station-${station.id}`}
                  >
                    <span
                      className="flex-shrink-0 p-2 rounded-xl"
                      style={{
                        color: active === station.id ? "var(--color-gold)" : "var(--color-muted)",
                        background:
                          active === station.id
                            ? "rgba(198,162,90,.15)"
                            : "rgba(255,255,255,.05)",
                        border: "1px solid rgba(255,255,255,.08)",
                      }}
                    >
                      {station.icon}
                    </span>
                    <div className="min-w-0">
                      <p
                        className="text-[10px] uppercase tracking-[1.4px] mb-0.5"
                        style={{ color: "var(--color-gold)" }}
                      >
                        {station.step}
                      </p>
                      <p
                        className="text-[14px] font-bold leading-tight truncate"
                        style={{ color: active === station.id ? "var(--color-ink)" : "var(--color-muted)" }}
                      >
                        {station.title}
                      </p>
                    </div>
                    {active === station.id && (
                      <ChevronRight
                        size={16}
                        className="ml-auto flex-shrink-0"
                        style={{ color: "var(--color-gold)" }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Andreas Avatar Placeholder */}
              <div className="mt-8 flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0"
                  style={{ border: "2px solid rgba(198,162,90,.40)" }}
                >
                  <img
                    src="https://picsum.photos/seed/placeholder-andreas-avatar/100/100"
                    alt="placeholder-andreas-avatar – Hier kommt ein Foto von Andreas hin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p
                    className="text-[13px] font-bold"
                    style={{ color: "var(--color-ink)" }}
                  >
                    Andreas
                  </p>
                  <p
                    className="text-[11px] tracking-wide"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Tenor · 2. Stimme · 20 Jahre MGV
                  </p>
                </div>
              </div>
            </div>

            {/* Rechte Spalte: Inhalt */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="flex flex-col lg:flex-row"
              >
                {/* Text */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="kicker mb-5">
                    <span className="kicker-dot" />
                    Station {current.step}
                  </div>

                  <h3
                    className="font-serif mb-2"
                    style={{
                      fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                      lineHeight: 1.15,
                      color: "var(--color-ink)",
                    }}
                  >
                    {current.title}
                  </h3>
                  <p
                    className="font-serif italic mb-6"
                    style={{
                      fontSize: "1rem",
                      color: "var(--color-gold-2)",
                    }}
                  >
                    „{current.subtitle}"
                  </p>

                  <div className="mgv-divider" style={{ margin: "0 0 20px" }} />

                  {current.body.trim().split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="mb-4"
                      style={{
                        color: "var(--color-muted)",
                        fontSize: "15px",
                        lineHeight: 1.8,
                      }}
                    >
                      {para.trim()}
                    </p>
                  ))}

                  {/* Navigation Buttons */}
                  <div className="flex items-center gap-3 mt-8">
                    {active > 0 && (
                      <button
                        onClick={() => setActive((p) => p - 1)}
                        className="mgv-btn mgv-btn-secondary text-[12px] py-2 px-5"
                      >
                        ← Zurück
                      </button>
                    )}
                    {active < STATIONS.length - 1 ? (
                      <button
                        onClick={() => setActive((p) => p + 1)}
                        className="mgv-btn text-[12px] py-2 px-6"
                        id="tour-next-btn"
                      >
                        Weiter →
                      </button>
                    ) : (
                      <a
                        href="#mitglieder"
                        className="mgv-btn text-[12px] py-2 px-6"
                        id="tour-finish-btn"
                      >
                        Das Ensemble kennenlernen ♪
                      </a>
                    )}
                  </div>
                </div>

                {/* Stationsbild */}
                <div
                  className="lg:w-64 xl:w-80 flex-shrink-0 relative overflow-hidden"
                  style={{ minHeight: "280px" }}
                >
                  <img
                    src={current.image}
                    alt={current.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: "saturate(0.85) brightness(0.7)" }}
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(270deg, transparent 60%, rgba(13,14,20,.90) 100%)",
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Fortschritts-Punkte */}
        <div className="flex justify-center gap-3 mt-8">
          {STATIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className="transition-all duration-300"
              style={{
                width: active === s.id ? "24px" : "8px",
                height: "8px",
                borderRadius: "999px",
                background:
                  active === s.id
                    ? "var(--color-gold)"
                    : "rgba(255,255,255,.20)",
              }}
              aria-label={`Station ${s.id + 1}: ${s.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
