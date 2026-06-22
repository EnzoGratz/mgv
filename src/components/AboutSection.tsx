"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="section bg-white">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Images Collage */}
          <div className="relative h-[400px] lg:h-[500px] w-full hidden md:block">
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-0 right-0 w-[85%] h-[80%] rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="/gallery-choir-color.png"
                alt="MGV Seeboden beim Singen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="absolute bottom-0 left-0 w-[75%] h-[65%] rounded-2xl overflow-hidden shadow-2xl z-20 ring-4 ring-white"
            >
              <Image
                src="/gallery-beer.png"
                alt="Gemeinschaft nach der Probe"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
          {/* Mobile Fallback */}
          <div className="md:hidden flex flex-col gap-4">
             <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-xl">
               <Image src="/gallery-choir-color.png" alt="Singen" fill className="object-cover" />
             </div>
             <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-xl">
               <Image src="/gallery-beer.png" alt="Gemeinschaft" fill className="object-cover" />
             </div>
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-wider uppercase mb-3">
              Über uns
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-ink)] mb-6">
              Mehr als ein Chor.
            </h2>
            <div className="w-12 h-[2px] bg-[var(--color-accent)] mb-8" />

            <p className="text-[var(--color-muted)] text-[17px] leading-relaxed mb-5">
              Am 7. Oktober 1894 gründeten 16 sangesfreudige Männer den MGV Seeboden-Unterhaus, heute schlicht MGV Seeboden. Seither pflegen wir das Kärntner Liedgut, geistliche und weltliche Chormusik und die Gemeinschaft untereinander. Als Mitglied des Kärntner Sängerbundes sind wir fest im kulturellen Leben der Region verankert.
            </p>
            <p className="text-[var(--color-muted)] text-[17px] leading-relaxed mb-8">
              Unser Repertoire reicht vom traditionellen Kärntnerlied über geistliche und weltliche Literatur bis zu modernen, vielsprachigen Werken und humorigen Kabarett-im-Konzert-Programmen. Jeden Donnerstag um 19:30 Uhr proben wir im Kulturhaus Seeboden, und danach wird gemütlich beisammen gesessen.
            </p>

            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-serif text-[var(--color-green)]">17</p>
                <p className="text-sm text-[var(--color-muted)] mt-1">Aktive Sänger</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-[var(--color-green)]">1894</p>
                <p className="text-sm text-[var(--color-muted)] mt-1">Gegründet</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-[var(--color-green)]">4</p>
                <p className="text-sm text-[var(--color-muted)] mt-1">Stimmen</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
