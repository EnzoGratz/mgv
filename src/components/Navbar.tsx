"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Termine", href: "#termine" },
  { label: "Galerie", href: "#galerie" },
  { label: "Mitsingen", href: "#mitsingen" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_#E8E8E8]" : "bg-transparent"
        }`}
      >
        <div className="wrap flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className={`font-serif text-lg md:text-xl transition-colors ${
              scrolled ? "text-[#1C1C1C]" : "text-white"
            }`}
          >
            MGV Seeboden
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`text-sm transition-colors hover:text-[#1B5E3B] ${
                  scrolled ? "text-[#717171]" : "text-white/80"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a href="#mitsingen" className="btn text-[13px] py-2.5 px-5">
              Komm dazu
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(true)}
            className={`md:hidden ${scrolled ? "text-[#1C1C1C]" : "text-white"}`}
            aria-label="Menü"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            <div className="flex justify-between items-center px-6 h-16 md:h-20">
              <span className="font-serif text-lg text-[#1C1C1C]">MGV Seeboden</span>
              <button onClick={() => setOpen(false)} aria-label="Schließen">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, ease: "easeOut" }}
                  onClick={() => setOpen(false)}
                  className="text-2xl text-[#1C1C1C] hover:text-[#1B5E3B] transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
