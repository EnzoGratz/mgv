"use client";

import { motion } from "framer-motion";

export default function JoinSection() {
  return (
    <section id="mitsingen" className="bg-[#111] text-white py-24 md:py-32 relative overflow-hidden">
      {/* Premium ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#D4922A]/5 blur-[120px] pointer-events-none" />
      
      <div className="wrap relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0, 1] }}
          >
            <p className="text-[#D4922A] text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Teil der Tradition Werden
            </p>
            <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight tracking-tight">
              Wir suchen Stimmen<br />mit Leidenschaft.
            </h2>
            <p className="text-[#aaa] text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-light">
              Qualität, Kameradschaft und die Hingabe zur Musik machen uns aus. Du brauchst keine perfekten Notenkenntnisse — aber den Willen, Teil von etwas Besonderem zu sein.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0, 1] }}
            className="grid md:grid-cols-2 gap-6 w-full max-w-2xl"
          >
            {/* Email Action */}
            <a
              href="mailto:obmann@mgv-seeboden.at?subject=Ich möchte mitsingen!"
              className="group relative flex flex-col items-center justify-center p-8 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition-all duration-300 shadow-lg"
            >
              <span className="text-white font-medium text-lg mb-2">Nachricht senden</span>
              <span className="text-[#888] text-sm group-hover:text-[#aaa] transition-colors">obmann@mgv-seeboden.at</span>
            </a>

            {/* Phone Action */}
            <a
              href="tel:+436642828082"
              className="group relative flex flex-col items-center justify-center p-8 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition-all duration-300 shadow-lg"
            >
              <span className="text-white font-medium text-lg mb-2">Persönlich anrufen</span>
              <span className="text-[#888] text-sm group-hover:text-[#aaa] transition-colors">+43 664 2828082</span>
            </a>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[#555] text-sm mt-16 font-light tracking-wide"
          >
            Jeden Donnerstag um 19:30 Uhr · Kulturhaus Seeboden
          </motion.p>
          
        </div>
      </div>
    </section>
  );
}
