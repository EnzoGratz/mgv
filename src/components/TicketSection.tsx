"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ─── Sample ticket data ─────────────────────────────────────────────────── */
const tickets = [
  {
    id: 1,
    tag: "Frühlingskonzert",
    title: "Stimmen im Erwachen",
    date: "Sa, 21. März 2026",
    time: "19:30 Uhr",
    location: "Kulturhaus Seeboden",
    price: "ab 12 €",
    href: "#ticketshop",
  },
  {
    id: 2,
    tag: "Sommerabend",
    title: "Open Air am See",
    date: "Sa, 27. Juni 2026",
    time: "17:00 Uhr",
    location: "Uferpromenade Seeboden",
    price: "Eintritt frei",
    href: "#termine",
  },
];

/* ─── Animation variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

/* ═══════════════════════════════════════════════════════════════════════════ */

export default function TicketSection() {
  return (
    <section
      id="tickets"
      className="relative py-24 md:py-32"
      aria-label="Tickets und Reservierung"
      style={{ background: "#ffffff" }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* ── Section header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
          className="mb-16 text-center"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-forest)",
              lineHeight: 1.15,
            }}
          >
            Tickets &amp; Reservierung
          </h2>

          {/* Gold underline bar */}
          <div
            className="mx-auto mb-6 rounded-full"
            style={{
              width: 64,
              height: 3,
              background: "var(--color-gold)",
            }}
          />

          <p
            className="mx-auto max-w-xl text-base md:text-lg italic"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--color-ink)",
              opacity: 0.7,
              lineHeight: 1.7,
            }}
          >
            Erleben Sie unvergessliche Konzertabende –&nbsp;sichern Sie sich
            jetzt Ihre Plätze für die kommenden Highlights des MGV&nbsp;Seeboden.
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* LEFT — Atmospheric image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="relative min-h-[360px] md:min-h-[480px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/hero-music.png"
              alt="Atmosphärisches Konzertbild des MGV Seeboden"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)",
              }}
            />
            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <span
                className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] mb-3 px-3 py-1 rounded-full"
                style={{
                  fontFamily: "var(--font-sans)",
                  background: "var(--color-gold)",
                  color: "#1a1a1a",
                }}
              >
                Nächstes Konzert
              </span>
              <h3
                className="text-2xl md:text-3xl text-white mb-2"
                style={{
                  fontFamily: "var(--font-serif)",
                  lineHeight: 1.2,
                }}
              >
                Stimmen im Erwachen
              </h3>
              <p
                className="text-sm text-white/75"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                21. März 2026 · Kulturhaus Seeboden
              </p>
            </div>
          </motion.div>

          {/* RIGHT — Ticket cards stack */}
          <div className="flex flex-col gap-6">
            {tickets.map((ticket, i) => (
              <motion.div
                key={ticket.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={i + 1}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: "var(--color-bg-alt, #f8f7f4)",
                  border: "1px solid var(--color-border, #e8e5dd)",
                }}
              >
                <div className="p-6 md:p-8 flex-grow">
                  {/* Tag + Price row */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                      style={{
                        fontFamily: "var(--font-sans)",
                        background: "var(--color-forest)",
                        color: "#ffffff",
                      }}
                    >
                      {ticket.tag}
                    </span>
                    <span
                      className="text-sm font-semibold px-3 py-1 rounded-full"
                      style={{
                        fontFamily: "var(--font-sans)",
                        background: "var(--color-gold)",
                        color: "#1a1a1a",
                      }}
                    >
                      {ticket.price}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl md:text-2xl mb-3"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "var(--color-ink)",
                      lineHeight: 1.25,
                    }}
                  >
                    {ticket.title}
                  </h3>

                  {/* Meta details */}
                  <div
                    className="flex flex-wrap gap-x-4 gap-y-1 text-[13px]"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "var(--color-ink)",
                      opacity: 0.55,
                    }}
                  >
                    <span>{ticket.date}</span>
                    <span>·</span>
                    <span>{ticket.time}</span>
                    <span>·</span>
                    <span>{ticket.location}</span>
                  </div>
                </div>

                {/* CTA button */}
                <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                  <a
                    href={ticket.href}
                    className="flex items-center justify-center w-full gap-2 rounded-lg py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-sans)",
                      background: "var(--color-forest)",
                      color: "#ffffff",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "var(--color-forest-dark)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "var(--color-forest)")
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                      <path d="M13 5v2" />
                      <path d="M13 17v2" />
                      <path d="M13 11v2" />
                    </svg>
                    Tickets kaufen
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Info bar ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          custom={3}
          className="mt-14 rounded-xl py-4 px-6 text-center"
          style={{
            background: "var(--color-bg-alt, #f8f7f4)",
            border: "1px solid var(--color-border, #e8e5dd)",
          }}
        >
          <p
            className="text-[13px] md:text-sm"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--color-ink)",
              opacity: 0.6,
            }}
          >
            Weitere Informationen unter{" "}
            <a
              href="mailto:singen@mgv-seeboden.at"
              className="underline underline-offset-2 transition-colors duration-200"
              style={{ color: "var(--color-forest)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-gold)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-forest)")
              }
            >
              singen@mgv-seeboden.at
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
