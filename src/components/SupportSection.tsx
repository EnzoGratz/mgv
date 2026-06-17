"use client";

import { motion } from "framer-motion";
import { Heart, Handshake, ArrowRight } from "lucide-react";

export default function SupportSection() {
  return (
    <section id="unterstuetzen" className="relative overflow-hidden">
      {/* Background: Split layout with image */}
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        
        {/* LEFT: Image Side */}
        <div className="relative h-64 lg:h-auto overflow-hidden">
          <img
            src="/nature-detail.png"
            alt="Vereinsleben"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.7) saturate(1.1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-forest)]/30" />
          
          {/* Overlay Text on Image */}
          <div className="absolute bottom-8 left-8 right-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white/90 font-serif text-3xl md:text-4xl leading-tight drop-shadow-lg">
                Tradition braucht<br />Unterstützung.
              </p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT: Content Side */}
        <div className="bg-[var(--color-bg-alt)] p-10 md:p-16 lg:p-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] font-bold tracking-[3px] text-[var(--color-gold)] uppercase mb-4">
              Klangpate werden
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-ink)] mb-6 leading-tight">
              Unterstützen Sie den<br />Klang Seebodens
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-md">
              Der MGV Seeboden lebt von der Leidenschaft seiner Sänger und der Unterstützung seiner Freunde. 
              Tragen Sie dazu bei, unsere über 100-jährige Tradition lebendig zu halten.
            </p>
          </motion.div>

          {/* Two options stacked */}
          <div className="space-y-5">
            <motion.a
              href="mailto:obmann@mgv-seeboden.at?subject=Förderndes Mitglied"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-center gap-5 p-5 border border-[var(--color-border)] bg-white hover:border-[var(--color-forest)] transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-forest)] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                <Heart size={20} />
              </div>
              <div className="flex-grow">
                <h3 className="font-serif text-lg text-[var(--color-ink)] mb-0.5">Förderndes Mitglied</h3>
                <p className="text-[13px] text-gray-400">Jährlicher Beitrag · Exklusive Einblicke</p>
              </div>
              <ArrowRight size={18} className="text-gray-300 group-hover:text-[var(--color-forest)] group-hover:translate-x-1 transition-all" />
            </motion.a>

            <motion.a
              href="mailto:obmann@mgv-seeboden.at?subject=Sponsoring Anfrage"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-5 p-5 border border-[var(--color-border)] bg-white hover:border-[var(--color-forest)] transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-forest)] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                <Handshake size={20} />
              </div>
              <div className="flex-grow">
                <h3 className="font-serif text-lg text-[var(--color-ink)] mb-0.5">Sponsor werden</h3>
                <p className="text-[13px] text-gray-400">Logoplatzierung · VIP-Karten · Partnerstatus</p>
              </div>
              <ArrowRight size={18} className="text-gray-300 group-hover:text-[var(--color-forest)] group-hover:translate-x-1 transition-all" />
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}
