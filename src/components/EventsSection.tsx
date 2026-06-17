"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

const EVENTS = [
  {
    title: "Frühlingssingen",
    date: "21. März 2026",
    time: "19:30 Uhr",
    location: "Kulturhaus Seeboden",
    description: "Wir begrüßen den Frühling mit Liedern aus dem Kärntner Liedgut und Gastchören aus der Region.",
  },
  {
    title: "Seefest am See",
    date: "15. Juli 2026",
    time: "18:00 Uhr",
    location: "Promenade am Millstätter See",
    description: "Open-Air Singen direkt am Wasser. Mit Bier, Brezen und bestem Blick auf die Berge.",
  },
  {
    title: "Adventskonzert",
    date: "12. Dezember 2026",
    time: "17:00 Uhr",
    location: "Pfarrkirche Seeboden",
    description: "Besinnliche Chorwerke und Kärntner Weihnachtslieder in der stimmungsvollen Pfarrkirche.",
  },
];

export default function EventsSection() {
  return (
    <section id="termine" className="section bg-[#F8F8F6]">
      <div className="wrap">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#D4922A] text-sm font-semibold tracking-wider uppercase mb-3">
            Termine
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1C1C] mb-4">
            Nächste Auftritte
          </h2>
          <p className="text-[#717171] text-lg max-w-xl mx-auto">
            Komm vorbei und erlebe unseren vierstimmigen Klang live.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {EVENTS.map((event, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-8 border border-[#E8E8E8] hover:shadow-lg transition-shadow"
            >
              {/* Date */}
              <div className="flex items-center gap-2 text-[#1B5E3B] mb-5">
                <Calendar size={16} />
                <span className="text-sm font-semibold">{event.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl text-[#1C1C1C] mb-3">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-[#717171] text-sm leading-relaxed mb-6">
                {event.description}
              </p>

              {/* Meta */}
              <div className="flex flex-col gap-2 pt-5 border-t border-[#E8E8E8]">
                <div className="flex items-center gap-2 text-[#717171] text-sm">
                  <MapPin size={14} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-[#717171] text-sm">
                  <Clock size={14} />
                  <span>{event.time}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
