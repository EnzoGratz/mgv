"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const EVENTS = [
  { date: "21. MÄR", title: "Frühlingssingen", location: "Kulturhaus Seeboden", time: "19:30" },
  { date: "15. JUL", title: "Seefest am See", location: "Promenade Seeboden", time: "18:00" },
  { date: "12. DEZ", title: "Adventskonzert", location: "Pfarrkirche Seeboden", time: "17:00" },
];

export default function KlangSection() {
  return (
    <section id="klang" className="overflow-hidden">

      {/* ── TEIL 1: Split-Screen "Seit 1894" ── */}
      <div className="grid lg:grid-cols-2 min-h-[80vh]">

        {/* LEFT: Typografie */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 lg:py-32 bg-[var(--color-bg)]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[var(--color-accent)] text-[11px] font-bold tracking-[4px] uppercase mb-6">
              Unser Klang
            </p>

            {/* Die Jahreszahl — RIESIG, als grafisches Element */}
            <div className="font-serif text-[var(--color-primary)] leading-none mb-8" style={{ fontSize: "clamp(4rem, 10vw, 8rem)", opacity: 0.15 }}>
              1894
            </div>

            <h2 className="font-serif text-[var(--color-ink)] text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 -mt-12 md:-mt-16">
              Vier Stimmen.<br />Ein Klang.<br />
              <span className="text-[var(--color-primary)]">Eine Heimat.</span>
            </h2>

            {/* Notenlinien-Trenner */}
            <div className="w-24 h-[20px] mb-6" style={{
              background: "repeating-linear-gradient(to bottom, var(--color-border) 0px, var(--color-border) 1px, transparent 1px, transparent 4px)"
            }} />

            <p className="text-[var(--color-muted)] text-lg leading-relaxed max-w-md mb-8">
              Wir sind ein Haufen Männer aus Seeboden und Umgebung. Uns verbindet nicht die perfekte Stimme, sondern die Freude am gemeinsamen Klang — und das Bier danach.
            </p>

            <p className="text-[var(--color-muted)] text-lg leading-relaxed max-w-md">
              Egal ob Tenor oder Bass, Handwerker oder Pensionist — Donnerstag um halb acht sind wir alle gleich.
            </p>
          </motion.div>
        </div>

        {/* RIGHT: Full-Bleed Bild */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative min-h-[50vh] lg:min-h-full"
        >
          <img
            src="/gallery-choir-color.png"
            alt="MGV Seeboden beim Singen"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--color-bg)]/10" />
        </motion.div>
      </div>

      {/* ── TEIL 2: Termine als horizontale Leiste ── */}
      <div className="bg-[var(--color-primary)] py-16 md:py-20">
        <div className="mgv-wrap-wide">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
            <h3 className="font-serif text-white text-2xl md:text-3xl">Nächste Auftritte</h3>
            <a href="mailto:singen@mgv-seeboden.at" className="text-[var(--color-accent)] text-sm font-bold tracking-wider uppercase flex items-center gap-2 hover:gap-3 transition-all">
              Alle Termine <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden">
            {EVENTS.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[var(--color-primary-dark)] p-8 hover:bg-[#1f3d49] transition-colors group"
              >
                {/* Date — big, bold */}
                <div className="text-[var(--color-accent)] font-bold text-2xl md:text-3xl font-serif mb-3">
                  {event.date}
                </div>
                <h4 className="text-white font-serif text-xl mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                  {event.title}
                </h4>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <MapPin size={13} />
                  <span>{event.location} · {event.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
