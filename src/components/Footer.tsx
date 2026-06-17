"use client";

import { CookieSettingsLink } from "@/components/CookieBanner";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white/60 pt-16 pb-8">
      <div className="wrap">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14 text-sm">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-white text-lg mb-3">MGV Seeboden</p>
            <p className="leading-relaxed">
              Vierstimmiger Chorgesang, Kameradschaft und Kärntner Liedgut seit 1908.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-white text-xs font-semibold tracking-wider uppercase mb-4">Kontakt</p>
            <ul className="space-y-2">
              <li>+43 664 2828082</li>
              <li>+43 664 73485201</li>
              <li>
                <a href="mailto:singen@mgv-seeboden.at" className="hover:text-white transition-colors">
                  singen@mgv-seeboden.at
                </a>
              </li>
            </ul>
          </div>

          {/* Proben */}
          <div>
            <p className="text-white text-xs font-semibold tracking-wider uppercase mb-4">Proben</p>
            <ul className="space-y-2">
              <li>Jeden Donnerstag</li>
              <li>19:30 Uhr</li>
              <li>Kulturhaus Seeboden</li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <p className="text-white text-xs font-semibold tracking-wider uppercase mb-4">Rechtliches</p>
            <ul className="space-y-2">
              <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
              <li><CookieSettingsLink /></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 text-xs flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} MGV Seeboden</p>
          <p>Seeboden am Millstätter See, Kärnten</p>
        </div>
      </div>
    </footer>
  );
}
