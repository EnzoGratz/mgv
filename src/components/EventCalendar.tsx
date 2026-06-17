"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const EVENTS = [
  {
    id: 1,
    title: "Frühlingssingen",
    date: "21. März 2026",
    time: "19:30 Uhr",
    location: "Kulturhaus Seeboden",
    description: "Wir begrüßen den Frühling mit frischen Kärntner Liedern und Gastchören aus der Region.",
  },
  {
    id: 2,
    title: "Seefest Seeboden",
    date: "15. Juli 2026",
    time: "18:00 Uhr",
    location: "Promenade am Millstätter See",
    description: "Gemütliches Beisammensein mit Gesang, Bier und Brezen direkt am See.",
  },
  {
    id: 3,
    title: "Adventskonzert",
    date: "12. Dezember 2026",
    time: "17:00 Uhr",
    location: "Pfarrkirche Seeboden",
    description: "Stimmungsvolle, besinnliche Chorwerke zur Vorweihnachtszeit.",
  },
];

export default function EventCalendar() {
  return (
    <section id="termine" className="mgv-section bg-[#F2EFE9]">
      <div className="mgv-wrap">
        <div className="mgv-section-header">
          <h2 className="mgv-section-title">Nächste Auftritte</h2>
          <div className="title-underline" />
          <p className="mgv-section-lead">
            Komm vorbei und erlebe unseren Klang live. Wir freuen uns auf dich!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[16px] p-8 shadow-sm hover:shadow-md transition-shadow border border-[#E5E0D8]"
            >
              <div className="flex items-center gap-2 text-[#C89F59] font-bold text-sm mb-3">
                <Calendar size={16} />
                <span>{event.date}</span>
              </div>
              <h3 className="font-serif text-2xl text-[#2A5A75] mb-2">{event.title}</h3>
              <div className="flex items-center gap-2 text-[#78716C] text-sm mb-4">
                <MapPin size={14} />
                <span>{event.location} • {event.time}</span>
              </div>
              <p className="text-[#2C2C2C] text-sm leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="mailto:singen@mgv-seeboden.at" className="mgv-btn">
            TICKETS ANFRAGEN
          </a>
        </div>
      </div>
    </section>
  );
}
