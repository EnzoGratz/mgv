"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section id="das-sind-wir" className="mgv-section bg-white overflow-hidden">
      <div className="mgv-wrap">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="/gallery-church.png" 
                alt="Chor in der Kirche" 
                className="rounded-2xl object-cover h-64 w-full shadow-lg"
              />
              <motion.img 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                src="/gallery-concert.png" 
                alt="Konzert" 
                className="rounded-2xl object-cover h-64 w-full shadow-lg mt-8"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 -inset-4 bg-[#F2EFE9] rounded-[30px] rotate-3" />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#C89F59] font-bold tracking-[2px] uppercase text-sm mb-4">
              Wer wir sind
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#2A5A75] mb-6 leading-tight">
              Singen ist bei uns<br />gelebte Freundschaft.
            </h2>
            <div className="w-16 h-1 bg-[#C89F59] mb-8 rounded-full" />
            
            <p className="text-[#78716C] text-lg mb-6 leading-relaxed">
              Wir sind ein bunter Haufen von Männern aus Seeboden und Umgebung. Uns verbindet nicht nur die Liebe zum vierstimmigen Gesang, sondern vor allem die Freude am Miteinander.
            </p>
            <p className="text-[#78716C] text-lg mb-10 leading-relaxed">
              Egal ob alt oder jung, Handwerker oder Lehrer – bei der wöchentlichen Probe am Donnerstag sind wir alle gleich. Nach dem Singen sitzen wir gerne noch auf ein Glaserl zusammen. Das gehört bei uns einfach dazu!
            </p>

            <div id="mitsingen" className="bg-[#F2EFE9] p-8 rounded-2xl border border-[#E5E0D8]">
              <h3 className="font-serif text-2xl text-[#2C2C2C] mb-2">Hast du Lust mitzusingen?</h3>
              <p className="text-[#78716C] text-sm mb-6">
                Du brauchst keine Notenkenntnisse, nur Freude am Singen. Komm einfach unverbindlich bei einer Probe vorbei!
              </p>
              <a href="mailto:obmann@mgv-seeboden.at?subject=Ich möchte mitsingen!" className="mgv-btn">
                MELD DICH BEI UNS
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
