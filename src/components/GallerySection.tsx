"use client";

import { motion } from "framer-motion";

const images = [
  { src: "/gallery-choir-color.png", alt: "Chorkonzert" },
  { src: "/hero-lake.png", alt: "Millstätter See" },
  { src: "/gallery-beer.png", alt: "Gemeinschaft" },
  { src: "/gallery-church.png", alt: "In der Kirche" },
  { src: "/gallery-concert.png", alt: "Auf der Bühne" },
  { src: "/hero-music.png", alt: "Noten" },
];

export default function GallerySection() {
  return (
    <section id="galerie" className="section bg-white">
      <div className="wrap">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#1B5E3B] text-sm font-semibold tracking-wider uppercase mb-3">
            Einblicke
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1C1C] mb-4">
            Galerie
          </h2>
          <p className="text-[#717171] text-lg max-w-xl mx-auto">
            Momente aus dem Vereinsleben — auf der Bühne und abseits davon.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`overflow-hidden rounded-xl group cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  i === 0 ? "h-64 md:h-full" : "h-48 md:h-56"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
