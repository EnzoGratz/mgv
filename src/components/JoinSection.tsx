"use client";

import { motion } from "framer-motion";

export default function JoinSection() {
  return (
    <section id="mitsingen" className="bg-[#fafafa] text-[#111] pt-32 pb-32 md:pt-48 md:pb-48 relative overflow-hidden border-b border-gray-200">
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/5 to-transparent" />

      {/* Premium ambient glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-[#D4922A]/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="wrap relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0, 1] }}
            className="flex flex-col items-center"
          >
            {/* Elegant visual separator */}
            <div className="w-[2px] h-12 bg-gradient-to-b from-transparent to-[#D4922A] mb-8" />

            <p className="text-[#D4922A] text-sm font-semibold tracking-[0.25em] uppercase mb-8">
              Teil der Tradition Werden
            </p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] tracking-tight text-[#1c1c1c] max-w-3xl mx-auto">
              Wir suchen Stimmen <span className="text-[#D4922A]">mit Leidenschaft.</span>
            </h2>
            <p className="text-[#666] text-lg md:text-xl leading-relaxed mb-16 max-w-2xl mx-auto font-light">
              Qualität, Kameradschaft und die Hingabe zur Musik machen uns aus. Du brauchst keine perfekten Notenkenntnisse — aber den Willen, Teil von etwas Besonderem zu sein.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0, 1] }}
            className="flex flex-col sm:flex-row justify-center gap-6 w-full"
          >
            {/* Email Action */}
            <a
              href="mailto:singen@mgv-seeboden.at?subject=Ich möchte mitsingen!"
              className="group relative flex flex-col items-center justify-center py-6 px-8 bg-white hover:bg-gray-50 border border-gray-200 hover:border-[#D4922A]/50 rounded-2xl transition-all duration-500 shadow-xl shadow-black/5 hover:shadow-[#D4922A]/10 w-full sm:w-[320px] overflow-hidden"
            >
              <span className="text-[#111] font-medium text-lg mb-1 relative z-10">Nachricht senden</span>
              <span className="text-[#888] text-sm group-hover:text-[#666] transition-colors relative z-10">singen@mgv-seeboden.at</span>
            </a>

            {/* Phone Action */}
            <a
              href="tel:+436642828082"
              className="group relative flex flex-col items-center justify-center py-6 px-8 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-400 rounded-2xl transition-all duration-500 shadow-xl shadow-black/5 hover:shadow-black/10 w-full sm:w-[320px] overflow-hidden"
            >
              <span className="text-[#111] font-medium text-lg mb-1 relative z-10">Persönlich anrufen</span>
              <span className="text-[#888] text-sm group-hover:text-[#666] transition-colors relative z-10">+43 664 2828082</span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 flex flex-col items-center"
          >
             <div className="w-12 h-[1px] bg-gray-300 mb-6" />
             <p className="text-[#888] text-sm font-medium tracking-widest uppercase">
               Jeden Donnerstag · 19:30 Uhr · Kulturhaus Seeboden
             </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
