"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MemberModal from "./MemberModal";

const VOICE_GROUPS = [
  {
    label: "TENOR I",
    members: [
      { id: 1, name: "Hans", image: "/portrait.png", detailImage: "/nature-detail.png", email: "hans@mgv-seeboden.at" },
      { id: 2, name: "Sepp", image: "/portrait.png", detailImage: "/nature-detail.png", email: "sepp@mgv-seeboden.at" },
    ],
  },
  {
    label: "TENOR II",
    members: [
      { id: 3, name: "Franz", image: "/portrait.png", detailImage: "/nature-detail.png", email: "franz@mgv-seeboden.at" },
      { id: 4, name: "Michael", image: "/portrait.png", detailImage: "/nature-detail.png", email: "michael@mgv-seeboden.at" },
    ],
  },
  {
    label: "BASS I",
    members: [
      { id: 5, name: "Karl", image: "/portrait.png", detailImage: "/nature-detail.png", email: "karl@mgv-seeboden.at" },
      { id: 6, name: "Georg", image: "/portrait.png", detailImage: "/nature-detail.png", email: "georg@mgv-seeboden.at" },
    ],
  },
  {
    label: "BASS II",
    members: [
      { id: 7, name: "Werner", image: "/portrait.png", detailImage: "/nature-detail.png", email: "werner@mgv-seeboden.at" },
      { id: 8, name: "Peter", image: "/portrait.png", detailImage: "/nature-detail.png", email: "peter@mgv-seeboden.at" },
    ],
  },
];

type Singer = {
  id: number;
  name: string;
  voice: string;
  image: string;
  detailImage: string;
  email: string;
};

export default function EnsembleSection() {
  const [selectedSinger, setSelectedSinger] = useState<Singer | null>(null);

  return (
    <section id="mitglieder" className="mgv-section bg-[var(--color-forest)] overflow-hidden">
      <div className="mgv-wrap">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-[10px] font-bold tracking-[3px] text-[var(--color-gold)] uppercase mb-4">
            Unsere Stimmen
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Der Chor
          </h2>
          <div className="w-10 h-px bg-[var(--color-gold)] mx-auto mb-6" />
          <p className="text-white/60 text-[15px] max-w-lg mx-auto">
            Vier Stimmgruppen, eine Leidenschaft. Lernen Sie die Sänger des MGV Seeboden kennen.
          </p>
        </motion.div>

        {/* Voice Groups */}
        <div className="space-y-16">
          {VOICE_GROUPS.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              {/* Voice Group Label */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-px h-5 bg-[var(--color-gold)]" />
                <h3 className="text-[11px] font-bold tracking-[3px] text-white/50 uppercase">
                  {group.label}
                </h3>
                <div className="flex-grow h-px bg-white/10" />
              </div>

              {/* Members Grid */}
              <div className="flex flex-wrap gap-8 md:gap-12">
                {group.members.map((member, memberIndex) => (
                  <motion.button
                    key={member.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: memberIndex * 0.08 }}
                    onClick={() =>
                      setSelectedSinger({
                        ...member,
                        voice: group.label,
                      })
                    }
                    className="flex flex-col items-center group focus:outline-none"
                  >
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white/10 mb-4 transition-all duration-500 group-hover:border-[var(--color-gold)]/50 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-black/20">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-700"
                      />
                    </div>
                    <h4 className="font-serif text-lg text-white/90 mb-1 group-hover:text-white transition-colors">
                      {member.name}
                    </h4>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <MemberModal
        isOpen={!!selectedSinger}
        onClose={() => setSelectedSinger(null)}
        singer={selectedSinger}
      />
    </section>
  );
}
