"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-fir-green">
            {/* Background Video - Stillness and Community */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-50"
                    >
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-mountain-lake-at-sunset-40294-large.mp4" type="video/mp4" />
                    </video>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-fir-green/40 via-transparent to-fir-green/60" />
            </div>

            {/* Content - Static Erhabenheit */}
            <div className="relative z-20 text-center px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <span className="block text-accent-gold font-sans tracking-[0.4em] uppercase text-xs mb-8">
                        Seit 1894
                    </span>

                    <h1 className="text-6xl md:text-9xl font-serif text-parchment leading-none mb-10">
                        MGV <span className="italic">Seeboden</span>
                    </h1>

                    <div className="w-24 h-[1px] bg-accent-gold/40 mx-auto mb-10" />

                    <p className="max-w-2xl mx-auto text-parchment/70 text-lg md:text-xl font-sans leading-relaxed mb-16 tracking-wide">
                        Bodenständigkeit, Kameradschaft und höchste musikalische Qualität.
                        Eine 130-jährige Chronik der Stimmen, die unsere Heimat bewegen.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button className="px-12 py-5 bg-accent-gold text-fir-green font-sans font-bold uppercase tracking-[0.2em] text-sm hover:bg-parchment transition-colors duration-500 heritage-border shadow-2xl">
                            Chronik Ansehen
                        </button>
                        <button className="px-12 py-5 border border-parchment/20 text-parchment font-sans font-bold uppercase tracking-[0.2em] text-sm hover:bg-parchment/10 transition-colors duration-500">
                            Unser Ensemble
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay loden-texture" />

            {/* Scroll Indicator - Minimalist */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
                <div className="w-[1px] h-12 bg-gradient-to-b from-accent-gold to-transparent" />
            </div>
        </section>
    );
}
