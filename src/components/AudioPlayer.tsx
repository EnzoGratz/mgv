"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Music, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Platzhalter-Audio (Remote URL für freie Klassik)
  const audioSrc = "https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3"; // Royalty Free Choral/Classical

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="fixed bottom-6 left-6 z-[90]">
      <audio ref={audioRef} src={audioSrc} loop preload="none" />

      <motion.div
        layout
        initial={{ borderRadius: 50 }}
        className="bg-white border border-[var(--color-border)] shadow-xl overflow-hidden flex items-center"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-14 h-14 flex items-center justify-center bg-[var(--color-forest)] text-white hover:bg-[var(--color-forest-dark)] transition-colors flex-shrink-0"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="flex items-center px-4 py-2 gap-4 whitespace-nowrap"
            >
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-widest text-[var(--color-gold)] uppercase">
                  Hörprobe
                </span>
                <span className="text-[13px] font-serif text-[var(--color-ink)] flex items-center gap-2">
                  Kärntnerlied – MGV Seeboden
                  {isPlaying && (
                    <span className="flex gap-[2px] items-center h-3">
                      <motion.span animate={{ height: [4, 10, 4] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-[var(--color-forest)]" />
                      <motion.span animate={{ height: [8, 4, 8] }} transition={{ repeat: Infinity, duration: 0.9 }} className="w-1 bg-[var(--color-forest)]" />
                      <motion.span animate={{ height: [5, 12, 5] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-1 bg-[var(--color-forest)]" />
                    </span>
                  )}
                </span>
              </div>

              <button 
                onClick={() => setIsMuted(!isMuted)}
                className="ml-2 text-gray-400 hover:text-[var(--color-forest)] transition-colors"
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
