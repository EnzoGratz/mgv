"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, MessageSquare } from "lucide-react";
import { useEffect } from "react";

interface Singer {
  id: number;
  name: string;
  voice: string;
  image: string;
  detailImage: string;
  email: string;
}

interface MemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  singer: Singer | null;
}

export default function MemberModal({ isOpen, onClose, singer }: MemberModalProps) {
  // Verhindere Scrollen des Bodys, wenn Modal offen ist
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!singer) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
          />

          {/* Modal Container (Side-Panel Style) */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full md:w-[800px] bg-white z-[101] shadow-2xl flex flex-col md:flex-row overflow-y-auto"
          >
            {/* Close Button (Mobile & Desktop) */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-800 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Left: Detail Image */}
            <div className="w-full md:w-1/2 h-64 md:h-full relative">
              <img
                src={singer.detailImage}
                alt={singer.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
              
              <div className="mb-10 mt-4">
                <p className="text-[10px] font-bold tracking-[2px] text-[var(--color-gold)] uppercase mb-2">
                  Mitglied kontaktieren
                </p>
                <h2 className="font-serif text-5xl text-[var(--color-forest)] mb-2">
                  {singer.name}
                </h2>
                <p className="text-gray-500 italic text-[15px]">
                  {singer.voice}
                </p>
              </div>

              {/* Contact Boxes */}
              <div className="space-y-4 flex-grow">
                {/* Email Box */}
                <a href={`mailto:${singer.email}`} className="flex items-center gap-6 p-6 border border-[var(--color-border)] rounded-sm hover:border-[var(--color-forest)] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-forest)] flex items-center justify-center text-white flex-shrink-0 group-hover:bg-[var(--color-forest-dark)] transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">E-Mail</p>
                    <p className="font-bold text-[14px] text-[var(--color-ink)]">{singer.email}</p>
                  </div>
                </a>

                {/* Chat Box (Platzhalter) */}
                <button className="w-full flex items-center gap-6 p-6 border border-[var(--color-border)] rounded-sm hover:border-[var(--color-forest)] transition-colors group text-left">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-forest)] flex items-center justify-center text-white flex-shrink-0 group-hover:bg-[var(--color-forest-dark)] transition-colors">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Chat</p>
                    <p className="font-bold text-[14px] text-[var(--color-ink)]">Nachricht senden</p>
                  </div>
                </button>
              </div>

              {/* Bottom Info */}
              <div className="mt-12 pt-6 border-t border-[var(--color-border)]">
                <p className="text-[11px] tracking-widest text-gray-400 uppercase">
                  MGV SEEBODEN • SEIT 2015 AKTIV
                </p>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
