"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="section bg-white">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Images */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="/gallery-choir-color.png"
              alt="MGV Seeboden beim Singen"
              className="rounded-xl object-cover w-full h-64 lg:h-80"
            />
            <img
              src="/gallery-beer.png"
              alt="Gemeinschaft nach der Probe"
              className="rounded-xl object-cover w-full h-64 lg:h-80 mt-8"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#1B5E3B] text-sm font-semibold tracking-wider uppercase mb-3">
              Über uns
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1C1C1C] mb-6">
              Mehr als ein Chor.
            </h2>
            <div className="w-12 h-[2px] bg-[#1B5E3B] mb-8" />

            <p className="text-[#717171] text-[17px] leading-relaxed mb-5">
              Der MGV Seeboden ist ein Haufen Männer aus Seeboden und Umgebung, die eines verbindet: die Freude am gemeinsamen Klang. Seit 1908 pflegen wir das Kärntner Liedgut, geistliche Chormusik und die Gemeinschaft untereinander.
            </p>
            <p className="text-[#717171] text-[17px] leading-relaxed mb-8">
              Egal ob Tenor oder Bass, ob Handwerker oder Pensionist — Donnerstag um halb acht sind wir alle gleich. Nach der Probe sitzen wir zusammen, lachen und genießen ein Glaserl. Das gehört bei uns einfach dazu.
            </p>

            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-serif text-[#1B5E3B]">30+</p>
                <p className="text-sm text-[#717171] mt-1">Aktive Sänger</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-[#1B5E3B]">1908</p>
                <p className="text-sm text-[#717171] mt-1">Gegründet</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-[#1B5E3B]">4</p>
                <p className="text-sm text-[#717171] mt-1">Stimmen</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
