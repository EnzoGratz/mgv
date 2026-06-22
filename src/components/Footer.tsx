"use client";

import { CookieSettingsLink } from "@/components/CookieBanner";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#aaa] pb-12 pt-24 border-t border-black/10 text-center">
      <div className="wrap max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Brand */}
        <div className="mb-20 flex flex-col items-center">
          <h3 className="font-serif text-white text-3xl md:text-4xl mb-6 tracking-widest">MGV Seeboden</h3>
          <p className="leading-relaxed font-light text-[#777] max-w-md text-sm md:text-base">
            Vierstimmiger Chorgesang in Perfektion. Harte Arbeit, Kameradschaft und die Liebe zum Kärntner Liedgut seit 1894.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 w-full mb-24 border-t border-white/5 pt-16">
          <div className="flex flex-col items-center">
            <p className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-8">Kontakt</p>
            <ul className="space-y-6 font-light text-sm">
              <li className="flex flex-col items-center">
                <span className="block text-[#444] text-[10px] font-bold tracking-widest uppercase mb-1">Telefon</span>
                <a href="tel:+436642828082" className="hover:text-white transition-colors text-[#bbb]">+43 664 2828082</a>
              </li>
              <li className="flex flex-col items-center">
                <span className="block text-[#444] text-[10px] font-bold tracking-widest uppercase mb-1">E-Mail</span>
                <a href="mailto:singen@mgv-seeboden.at" className="hover:text-white transition-colors text-[#bbb]">
                  singen@mgv-seeboden.at
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-8">Rechtliches</p>
            <ul className="space-y-4 font-light text-sm text-[#bbb]">
              <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
              <li className="pt-2"><CookieSettingsLink /></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col items-center gap-2 text-[11px] font-light tracking-wider text-[#444]">
          <p>© {new Date().getFullYear()} Männergesangverein Seeboden.</p>
          <p>Exzellenz aus Seeboden am Millstätter See.</p>
        </div>
      </div>
    </footer>
  );
}
