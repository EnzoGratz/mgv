"use client";

import { CookieSettingsLink } from "@/components/CookieBanner";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-[#aaa] pb-12 pt-20 border-t border-white/10">
      <div className="wrap max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="font-serif text-white text-3xl mb-6 tracking-wide">MGV Seeboden</h3>
            <p className="leading-relaxed font-light text-[#888]">
              Vierstimmiger Chorgesang in Perfektion. Harte Arbeit, Kameradschaft und die Liebe zum Kärntner Liedgut seit 1894.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex flex-col sm:flex-row gap-16 md:gap-24">
            <div>
              <p className="text-white text-xs font-bold tracking-[0.15em] uppercase mb-6">Kontakt</p>
              <ul className="space-y-4 font-light text-sm">
                <li>
                  <span className="block text-[#666] text-xs mb-1">Telefon</span>
                  <a href="tel:+436642828082" className="hover:text-white transition-colors">+43 664 2828082</a>
                </li>
                <li>
                  <span className="block text-[#666] text-xs mb-1">E-Mail</span>
                  <a href="mailto:singen@mgv-seeboden.at" className="hover:text-white transition-colors">
                    singen@mgv-seeboden.at
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-white text-xs font-bold tracking-[0.15em] uppercase mb-6">Rechtliches</p>
              <ul className="space-y-4 font-light text-sm">
                <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li className="pt-2"><CookieSettingsLink /></li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light tracking-wide text-[#666]">
          <p>© {new Date().getFullYear()} Männergesangverein Seeboden. Alle Rechte vorbehalten.</p>
          <p>Exzellenz aus Seeboden am Millstätter See.</p>
        </div>
      </div>
    </footer>
  );
}
