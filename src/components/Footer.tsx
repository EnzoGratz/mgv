"use client";

import { motion } from "framer-motion";
import { CookieSettingsLink } from "@/components/CookieBanner";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-[#E5E0D8] pt-32 pb-12 overflow-hidden relative">
      {/* Huge Graphic Element in Background */}
      <div 
        className="absolute bottom-0 left-0 w-full pointer-events-none opacity-[0.03] flex justify-center"
        style={{ transform: "translateY(25%)" }}
      >
        <span className="font-serif leading-none whitespace-nowrap" style={{ fontSize: "clamp(10rem, 25vw, 30rem)" }}>
          MGV Seeboden
        </span>
      </div>

      <div className="mgv-wrap relative z-10">
        
        {/* Top: Massive Call to Action */}
        <div className="mb-24 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-white text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-tight mb-8"
          >
            Singen ist<br />
            <span className="text-[var(--color-accent)]">Heimat.</span>
          </motion.h2>
          <a href="mailto:obmann@mgv-seeboden.at" className="inline-flex items-center gap-4 text-xl md:text-2xl text-white hover:text-[var(--color-accent)] transition-colors group">
            <span className="border-b-2 border-white/30 group-hover:border-[var(--color-accent)] pb-1 transition-colors">
              obmann@mgv-seeboden.at
            </span>
            <span className="transform group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>

        {/* Middle: Clean, minimal grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-24 text-sm md:text-base">
          {/* Col 1 */}
          <div>
            <h4 className="text-[var(--color-accent)] text-[10px] md:text-[11px] font-bold tracking-[3px] uppercase mb-4">Kontakt</h4>
            <ul className="space-y-2 opacity-80">
              <li>Obmann: +43 664 2828082</li>
              <li>Chorleiter: +43 664 73485201</li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-[var(--color-accent)] text-[10px] md:text-[11px] font-bold tracking-[3px] uppercase mb-4">Proben</h4>
            <ul className="space-y-2 opacity-80">
              <li>Donnerstag, 19:30 Uhr</li>
              <li>Kulturhaus Seeboden</li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-[var(--color-accent)] text-[10px] md:text-[11px] font-bold tracking-[3px] uppercase mb-4">Social</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-[var(--color-accent)] text-[10px] md:text-[11px] font-bold tracking-[3px] uppercase mb-4">Rechtliches</h4>
            <ul className="space-y-2 opacity-80 flex flex-col">
              <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
              <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
              <div className="mt-2"><CookieSettingsLink /></div>
            </ul>
          </div>
        </div>

        {/* Bottom: Minimal Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-[11px] md:text-xs opacity-50 tracking-wider uppercase">
          <p>MGV Seeboden © {new Date().getFullYear()}</p>
          <p>Seit 1908</p>
        </div>

      </div>
    </footer>
  );
}
