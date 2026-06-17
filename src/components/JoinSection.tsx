"use client";

import { motion } from "framer-motion";
import { Music } from "lucide-react";

export default function JoinSection() {
  return (
    <section id="mitsingen" className="section bg-[#1B5E3B] text-white">
      <div className="wrap text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-8">
            <Music size={24} className="text-white/80" />
          </div>

          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Hast du Lust<br />mitzusingen?
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-4">
            Du brauchst keine Notenkenntnisse und keine perfekte Stimme — nur Freude am Singen.
          </p>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            Komm einfach an einem Donnerstag um 19:30 Uhr im Kulturhaus Seeboden vorbei. Unverbindlich, ohne Anmeldung. Wir freuen uns auf dich.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:obmann@mgv-seeboden.at?subject=Ich möchte mitsingen!"
              className="btn bg-white text-[#1B5E3B] border-white hover:bg-white/90"
            >
              Schreib uns
            </a>
            <a
              href="tel:+436642828082"
              className="btn bg-transparent border-white/40 text-white hover:bg-white/10"
            >
              +43 664 2828082
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
