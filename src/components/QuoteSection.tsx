"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const QUOTES = [
  {
    text: "Ein Chor, der tiefe Tradition mit beeindruckender stimmlicher Präzision verbindet.",
    source: "Kärntner Kulturpresse",
  },
  {
    text: "Wenn der MGV Seeboden singt, hört man die Berge.",
    source: "Millstätter See Journal",
  },
];

export default function QuoteSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden flex items-center justify-center py-32 md:py-48"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <img
          src="/gallery-bw.png"
          alt=""
          className="w-full h-[140%] object-cover"
          style={{ filter: "brightness(0.25) grayscale(0.5)" }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-[var(--color-forest)]/70" />

      <div className="mgv-wrap max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Decorative Quote Mark */}
          <div className="flex justify-center mb-8">
            <span className="font-serif text-[120px] md:text-[180px] text-[var(--color-gold)] leading-none opacity-30 select-none" aria-hidden="true">
              &ldquo;
            </span>
          </div>

          <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl text-white leading-snug mb-12 -mt-16 md:-mt-24">
            {QUOTES[0].text}
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-px bg-[var(--color-gold)]" />
            <cite className="text-[12px] tracking-[3px] text-white/60 uppercase font-bold not-italic">
              {QUOTES[0].source}
            </cite>
            <div className="w-8 h-px bg-[var(--color-gold)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
