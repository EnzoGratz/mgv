"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "UNSER KLANG", href: "#klang" },
  { label: "DABEI SEIN", href: "#dabei" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F5F0EB]/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}>
        <div className="mgv-wrap-wide flex items-center justify-between">
          {/* Logo */}
          <a href="#" className={`font-serif text-xl md:text-2xl tracking-tight transition-colors duration-300 ${
            scrolled ? "text-[#264653]" : "text-white"
          }`}>
            MGV Seeboden
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[11px] font-bold tracking-[2px] transition-colors duration-300 hover:text-[#DDA15E] ${
                  scrolled ? "text-[#1A1A1A]" : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#dabei" className={`mgv-btn text-[11px] py-3 px-6 ${scrolled ? "mgv-btn-accent" : "mgv-btn-ghost"}`}>
              MITSINGEN
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden transition-colors ${scrolled ? "text-[#264653]" : "text-white"}`}
            aria-label="Menü öffnen"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#264653] flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white"
              aria-label="Menü schließen"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="font-serif text-white text-4xl hover:text-[#DDA15E] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#dabei"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-serif text-[#DDA15E] text-4xl"
              >
                MITSINGEN
              </motion.a>
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 text-white/30 text-[11px] tracking-[3px] uppercase"
            >
              Seit 1908
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
