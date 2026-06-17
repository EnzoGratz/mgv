"use client";

import { motion } from "framer-motion";

const singers = Array.from({ length: 17 }, (_, i) => ({
    id: i + 1,
    name: `Sänger ${i + 1}`,
    voice: i % 4 === 0 ? "1. Tenor" : i % 4 === 1 ? "2. Tenor" : i % 4 === 2 ? "1. Bass" : "2. Bass",
}));

export default function Gallery() {
    return (
        <section className="relative py-32 bg-parchment text-fir-green overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-accent-gold font-sans tracking-[0.3em] uppercase text-xs mb-4"
                    >
                        Das Ensemble
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif text-center"
                    >
                        Stolze Tradition
                    </motion.h2>
                    <div className="mt-8 w-12 h-[1px] bg-accent-gold/40" />
                    <p className="mt-8 text-fir-green/60 font-sans max-w-lg text-center leading-relaxed italic">
                        Siebzehn Stimmen, eine Gemeinschaft. Gesichter, die unsere Geschichte und unser Liedgut mit Leidenschaft tragen.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-16">
                    {singers.map((singer) => (
                        <motion.div
                            key={singer.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex flex-col items-center group"
                        >
                            {/* Portrait Placeholder */}
                            <div className="relative w-full aspect-[4/5] bg-fir-green mb-6 overflow-hidden heritage-border">
                                <div className="absolute inset-0 opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <div className="w-full h-full bg-accent-gold/10" />
                                </div>
                                {/* Decorative Frame Inner */}
                                <div className="absolute inset-4 border border-accent-gold/20 pointer-events-none" />
                            </div>

                            <div className="text-center space-y-1">
                                <p className="text-[10px] font-sans tracking-[0.2em] text-accent-gold uppercase font-bold">{singer.voice}</p>
                                <h4 className="text-xl font-serif text-fir-green tracking-tight">{singer.name}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-multiply parchment-overlay" />
        </section>
    );
}
