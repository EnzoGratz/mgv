"use client";

import { motion } from "framer-motion";

const events = [
    { year: "1894", title: "Gründung", description: "Die Geburtsstunde des MGV Seeboden. Ein Versprechen an die Heimat und das Kärntner Liedgut." },
    { year: "1924", title: "Erste Fahnenweihe", description: "Dreißig Jahre Gemeinschaft. Ein Fest, das die Verbundenheit zum Millstätter See besiegelte." },
    { year: "1950", title: "Stimmen der Rückkehr", description: "Neubeginn in schweren Zeiten. Der Chor als Ankerpunkt für Identität und Kameradschaft." },
    { year: "1984", title: "Goldene Ära", description: "Verleihung des Goldenen Verdienstzeichens für unermüdlichen Einsatz um die Kultur." },
    { year: "2024", title: "130 Jahre Stolz", description: "Eine Chronik, die weiterlebt. Erhalten des Erbes für die kommenden Generationen." },
];

export default function Timeline() {
    return (
        <section className="relative py-32 bg-fir-green text-parchment overflow-hidden">
            <div className="container mx-auto px-4 relative">
                <div className="flex flex-col items-center mb-24">
                    <span className="text-accent-gold font-sans tracking-[0.3em] uppercase text-xs mb-4">Chronik</span>
                    <h2 className="text-5xl md:text-6xl font-serif text-center mb-8">Ein Erbe aus Stimmen</h2>
                    <div className="w-16 h-[1px] bg-accent-gold/40" />
                </div>

                {/* Vertical Line */}
                <div className="absolute left-1/2 top-48 bottom-32 w-[0.5px] bg-accent-gold/20 -translate-x-1/2 hidden md:block" />

                <div className="space-y-24 md:space-y-48">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className={`relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-24`}
                        >
                            {/* Year - Erhaben */}
                            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end md:text-right">
                                <span className="text-7xl md:text-9xl font-serif text-accent-gold/10 leading-none">
                                    {event.year}
                                </span>
                            </div>

                            {/* Point on Line */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-accent-gold border-4 border-fir-green rounded-full z-10 hidden md:block" />

                            {/* Content */}
                            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                                <h3 className="text-3xl font-serif text-accent-gold gold-print italic">{event.title}</h3>
                                <p className="max-w-md mx-auto md:mx-0 text-parchment/60 font-sans text-lg leading-relaxed">
                                    {event.description}
                                </p>
                                <div className="pt-4 flex justify-center md:justify-start">
                                    <div className="w-12 h-[1px] bg-accent-gold/20" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Texture Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay loden-texture" />
        </section>
    );
}
