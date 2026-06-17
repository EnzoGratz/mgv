"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.6], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden flex items-end pb-20 md:pb-28">
      {/* Full-Bleed Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY }}>
        <img
          src="/hero-lake.png"
          alt="Millstätter See"
          className="w-full h-[120%] object-cover"
        />
        {/* Gradient: Bottom fades to our cream bg color */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent" />
      </motion.div>

      {/* Notenlinien-Motiv im Hero — ganz subtil */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-[1] opacity-10">
        <div className="w-full h-full" style={{
          background: "repeating-linear-gradient(to bottom, #fff 0px, #fff 1px, transparent 1px, transparent 8px)"
        }} />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 mgv-wrap-wide w-full"
        style={{ opacity: textOpacity, y: textY }}
      >
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[#DDA15E] text-[11px] md:text-[13px] font-bold tracking-[4px] uppercase mb-6"
        >
          Männergesangverein Seeboden · Seit 1908
        </motion.p>

        {/* MASSIVE headline — this IS the design */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="font-serif text-white leading-[0.9] tracking-tight mb-8"
          style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)" }}
        >
          Singen<br />am See.
        </motion.h1>

        {/* Subtext + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-12"
        >
          <p className="text-white/70 text-lg md:text-xl max-w-md leading-relaxed">
            Vier Stimmen, ein Klang. Kameradschaft, die über Generationen trägt.
          </p>
          <div className="flex gap-4">
            <a href="#klang" className="mgv-btn-ghost mgv-btn">Entdecken</a>
            <a href="#dabei" className="mgv-btn mgv-btn-accent">Mitsingen</a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
