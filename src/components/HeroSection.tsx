"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[500px] flex items-center overflow-hidden">
      {/* Background */}
      <img
        src="/hero-lake.png"
        alt="Millstätter See"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <p className="text-white/70 text-sm tracking-widest uppercase mb-4">
            Männergesangverein · Seit 1908
          </p>
          <h1
            className="font-serif text-white mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Singen verbindet.<br />Seit Generationen.
          </h1>
          <p className="text-white/80 text-lg max-w-lg mb-8 leading-relaxed">
            Vierstimmiger Chorgesang am Millstätter See — getragen von Kameradschaft, Heimatliebe und der Freude an der Musik.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#termine" className="btn">
              Nächste Termine
            </a>
            <a href="#mitsingen" className="btn btn-outline border-white text-white hover:bg-white hover:text-[#1C1C1C]">
              Mitsingen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
