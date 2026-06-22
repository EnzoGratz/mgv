"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/hero-lake.png"
          alt="Millstätter See"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 wrap flex flex-col items-center text-center pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0, 1] }}
          className="max-w-3xl flex flex-col items-center"
        >
          <p className="text-[#D4922A] text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-semibold drop-shadow-md">
            Männergesangsverein seit 1894
          </p>
          <h1
            className="font-serif text-white mb-8 leading-[1.0] drop-shadow-2xl"
            style={{ fontSize: "clamp(4rem, 12vw, 8rem)", textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
          >
            MGV Seeboden
          </h1>
          <p className="text-white/90 text-lg md:text-2xl max-w-2xl mb-12 leading-relaxed font-light drop-shadow-md">
            Vierstimmiger Chorgesang am Millstätter See — getragen von Kameradschaft, Heimatliebe und höchster musikalischer Qualität.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <a href="#termine" className="btn bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 backdrop-blur-md px-8 py-4 text-sm tracking-wide">
              Nächste Auftritte
            </a>
            <a href="#mitsingen" className="btn bg-[#D4922A] border-[#D4922A] text-white hover:bg-[#b57a20] hover:border-[#b57a20] px-8 py-4 text-sm tracking-wide shadow-lg shadow-[#D4922A]/20">
              Mitsingen
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
