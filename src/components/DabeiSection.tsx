"use client";

import { motion } from "framer-motion";

export default function DabeiSection() {
  return (
    <section id="dabei" className="relative overflow-hidden">
      {/* Full-width image with overlay */}
      <div className="relative min-h-[70vh] flex items-center">
        <img
          src="/gallery-beer.png"
          alt="Kameradschaft beim MGV Seeboden"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)]/80 via-[var(--color-ink)]/50 to-transparent" />

        <div className="relative z-10 mgv-wrap py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-[var(--color-accent)] text-[11px] font-bold tracking-[4px] uppercase mb-6">
              Komm dazu
            </p>

            <h2 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              Du brauchst<br />keine Noten.<br />
              <span className="text-[var(--color-accent)]">Nur Freude.</span>
            </h2>

            {/* Notenlinien */}
            <div className="w-20 h-[20px] mb-8" style={{
              background: "repeating-linear-gradient(to bottom, rgba(255,255,255,.3) 0px, rgba(255,255,255,.3) 1px, transparent 1px, transparent 4px)"
            }} />

            <p className="text-white/70 text-lg leading-relaxed mb-4">
              Jeden Donnerstag, 19:30 Uhr im Kulturhaus Seeboden.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Schau einfach vorbei — unverbindlich, ohne Anmeldung. Wir freuen uns auf dich.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:obmann@mgv-seeboden.at?subject=Ich möchte mitsingen!" className="mgv-btn mgv-btn-accent">
                MELD DICH BEI UNS
              </a>
              <a href="tel:+436642828082" className="mgv-btn mgv-btn-ghost">
                ANRUFEN
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Galerie-Streifen darunter */}
      <div className="bg-[var(--color-bg)] py-20">
        <div className="mgv-wrap-wide">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-serif text-[var(--color-primary)] text-2xl md:text-3xl">Einblicke</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "/gallery-choir-color.png",
              "/hero-lake.png",
              "/gallery-beer.png",
              "/gallery-church.png",
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="aspect-square overflow-hidden rounded-2xl group cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Galerie ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
