"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EVENTS = [
  {
    title: "Seebodner Kirchtag — Auftakt",
    date: "25. Juli 2026",
    time: "Abends",
    location: "Festwiese Seeboden",
    description: "Feierlicher Auftakt zum traditionellen Seebodner Kirchtag auf der Festwiese — seit 1948 vom MGV Seeboden veranstaltet.",
  },
  {
    title: "Seebodner Kirchtag — Festkonzert",
    date: "26. Juli 2026",
    time: "Vormittags",
    location: "Festwiese Seeboden",
    description: "Festgottesdienst und Festkonzert beim Seebodner Kirchtag mit dem MGV Seeboden und Gastchören.",
  },
  {
    title: "Karntnarisch g'sungen",
    date: "30. Juli 2026",
    time: "19:00 Uhr",
    location: "Foyer Kulturhaus Seeboden",
    description: "Gemütliches Beisammensein mit Kärntner Liedern im stimmungsvollen Foyer des Kulturhauses.",
  },
  {
    title: "Jugendsingtag",
    date: "21. November 2026",
    time: "Ganztags",
    location: "Kulturhaus Seeboden",
    description: "Jugendsingtag unter Mitwirkung des MGV Seeboden und der Sängergemeinschaft Kärntner Oberland.",
  },
];

export default function EventsSection() {
  return (
    <section id="termine" className="section bg-white">
      <div className="wrap max-w-5xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-black/5 pb-8">
          <div>
            <p className="text-[#D4922A] text-xs font-bold tracking-[0.15em] uppercase mb-4">
              Termine
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#111] leading-tight">
              Nächste Auftritte
            </h2>
          </div>
          <p className="text-[#777] text-lg max-w-sm md:text-right">
            Erlebe die Qualität und Hingabe unseres Chores live in Seeboden.
          </p>
        </div>

        {/* Event List */}
        <div className="flex flex-col">
          {EVENTS.map((event, i) => (
            <motion.a
              href="#"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0, 1] }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 border-b border-black/5 hover:bg-black/[0.02] transition-colors px-4 -mx-4 rounded-xl"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-16 w-full">
                {/* Date / Location */}
                <div className="md:w-1/4 shrink-0">
                  <p className="text-[#111] font-semibold text-lg mb-1">{event.date}</p>
                  <p className="text-[#777] text-sm">{event.time} • {event.location}</p>
                </div>
                
                {/* Info */}
                <div className="md:w-2/4">
                  <h3 className="font-serif text-2xl text-[#111] mb-2 group-hover:text-[#D4922A] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-[#555] text-base leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="hidden md:flex items-center justify-end w-16 shrink-0 text-[#ccc] group-hover:text-[#D4922A] group-hover:translate-x-2 transition-all">
                <ArrowRight size={28} strokeWidth={1.5} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
