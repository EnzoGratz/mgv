"use client";

import { MessageCircle } from "lucide-react";
import { markIntroAsSeen } from "@/lib/visitorState";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FirstVisitHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax Werte: Bild scrollt langsamer (y: 0 -> 50%), Text scrollt normal
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleSkip = () => {
    markIntroAsSeen();
    window.location.reload();
  };

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image (Parallax) */}
      <motion.div 
        className="absolute inset-0 z-0 origin-top"
        style={{ y: backgroundY }}
      >
        <img
          src="/hero-music.png"
          alt="Notenblatt Hintergrund"
          className="w-full h-[120%] object-cover"
          style={{ filter: "brightness(0.4) grayscale(0.2)" }}
        />
      </motion.div>

      <motion.div 
        className="relative z-10 mgv-wrap flex flex-col items-center mt-16"
        style={{ y: textY, opacity }}
      >
        <h1 
          className="font-serif text-white mb-6 drop-shadow-2xl"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.1 }}
        >
          Tradition verbindet.
        </h1>
        <p 
          className="text-white tracking-[3px] uppercase font-bold mb-12 drop-shadow-lg"
          style={{ fontSize: "clamp(0.8rem, 2vw, 1.1rem)" }}
        >
          SEIT 1894 – MÄNNERGESANGSVEREIN SEEBODEN
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#termine" className="mgv-btn">
            NÄCHSTE TERMINE
          </a>
          <a href="#galerie" className="mgv-btn mgv-btn-outline">
            GALERIE ANSEHEN
          </a>
        </div>
      </motion.div>

      {/* Intro Skippen (unten links) */}
      <div className="absolute bottom-6 left-6 z-10">
        <button 
          onClick={handleSkip}
          className="text-white/60 hover:text-white text-[11px] tracking-widest uppercase transition-colors"
        >
          Intro künftig überspringen →
        </button>
      </div>

      {/* Chat Button (unten rechts wie in Screenshot 1) */}
      <div className="absolute bottom-6 right-6 z-10">
         <button className="flex items-center justify-center gap-2 bg-[var(--color-forest)] text-white px-5 py-3 rounded-full hover:bg-[var(--color-forest-dark)] transition-colors shadow-lg">
           <MessageCircle size={18} />
           <span className="text-[13px] font-bold">Chat</span>
         </button>
      </div>
    </section>
  );
}
