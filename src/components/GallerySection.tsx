"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FILTERS = ["Alle", "Konzerte", "Kirchtag", "Ausflüge"];

const IMAGES = [
  { id: 1, category: "Konzerte", src: "/gallery-choir-color.png", label: "Sommerkonzert" },
  { id: 2, category: "Ausflüge", src: "/hero-lake.png", label: "Millstätter See" },
  { id: 3, category: "Kirchtag", src: "/gallery-beer.png", label: "Kirchtag St. Peter" },
  { id: 4, category: "Konzerte", src: "/gallery-choir-color.png", label: "Open Air am See" },
  { id: 5, category: "Ausflüge", src: "/hero-lake.png", label: "Chorausflug Nockberge" },
  { id: 6, category: "Kirchtag", src: "/gallery-beer.png", label: "Ausklang" },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("Alle");

  const filteredImages =
    activeFilter === "Alle"
      ? IMAGES
      : IMAGES.filter((img) => img.category === activeFilter);

  return (
    <section id="galerie" className="mgv-section bg-white">
      <div className="mgv-wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mgv-section-header"
        >
          <h2 className="mgv-section-title">Galerie</h2>
          <div className="title-underline" />
          <p className="mgv-section-lead">
            Einblicke in unser Vereinsleben, unsere Proben und feierliche Konzerte.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-6 md:gap-10 mb-14">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative pb-2 text-[15px] font-serif transition-colors ${
                activeFilter === filter
                  ? "text-[var(--color-forest)]"
                  : "text-gray-400 hover:text-[var(--color-ink)]"
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.span
                  layoutId="gallery-filter-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-gold)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`relative overflow-hidden group cursor-pointer ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                style={{
                  aspectRatio: index === 0 ? "16/10" : "4/3",
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[10px] tracking-[2px] text-[var(--color-gold)] uppercase font-bold mb-1">
                    {img.category}
                  </p>
                  <p className="text-white font-serif text-lg">
                    {img.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
