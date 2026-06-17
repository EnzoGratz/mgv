"use client";

import { motion } from "framer-motion";

export default function JoinSection() {
  return (
    <section id="mitsingen" className="bg-[#1B5E3B] text-white py-16 md:py-24">
      <div className="wrap">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#D4922A] text-sm font-semibold tracking-wider uppercase mb-3">
              Mitsingen
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-5 leading-tight">
              Hast du Lust<br />mitzusingen?
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-3">
              Du brauchst keine Notenkenntnisse und keine perfekte Stimme — nur Freude am Singen.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              Komm einfach an einem Donnerstag um 19:30 Uhr ins Kulturhaus Seeboden. Unverbindlich, ohne Anmeldung.
            </p>
          </motion.div>

          {/* Right: Action */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/10 rounded-xl p-8 backdrop-blur-sm"
          >
            <p className="text-white font-semibold text-lg mb-2">Erste Schritte</p>
            <p className="text-white/60 text-sm mb-6">Melde dich einfach — wir freuen uns auf dich.</p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:obmann@mgv-seeboden.at?subject=Ich möchte mitsingen!"
                className="btn bg-[#D4922A] border-[#D4922A] text-white hover:bg-[#c0841f] hover:border-[#c0841f] w-full justify-center"
              >
                Schreib uns eine E-Mail
              </a>
              <a
                href="tel:+436642828082"
                className="btn bg-transparent border-white/30 text-white hover:bg-white/10 w-full justify-center"
              >
                Anrufen: +43 664 2828082
              </a>
            </div>

            <p className="text-white/40 text-xs mt-5 text-center">
              Obmann Franz Platzhalter · Chorleiter Max Platzhalter
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
