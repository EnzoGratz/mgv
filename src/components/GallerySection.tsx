"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const images = [
  { src: "/gallery-choir-color.png", alt: "Chorkonzert" },
  { src: "/hero-lake.png", alt: "Millstätter See" },
  { src: "/gallery-beer.png", alt: "Gemeinschaft" },
  { src: "/gallery-church.png", alt: "In der Kirche" },
  { src: "/gallery-concert.png", alt: "Auf der Bühne" },
  { src: "/hero-music.png", alt: "Noten" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galerie" className="section bg-white">
      <div className="wrap">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#D4922A] text-sm font-semibold tracking-wider uppercase mb-3">
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
              onClick={() => setSelectedImage(img.src)}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-2 h-64 md:h-[464px]" : "h-48 md:h-56"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
            >
              <button
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={36} />
              </button>
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-6xl aspect-[4/3] md:aspect-[16/9] overflow-hidden cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Galerie Bild"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
