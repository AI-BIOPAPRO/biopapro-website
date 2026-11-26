"use client";

/**
 * Certifications — 5 bold shield cards on dark background
 */

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const E = [0.16, 1, 0.3, 1] as const;

const CERTS = [
  {
    id:        "fsc",
    logo:      "/certifications/fsc.png",
    badge:     "FSC®",
    name:      "Forest Stewardship Council",
    code:      "Chain of Custody",
    scope:     "Responsible birchwood sourcing from certified forests",
    accent:    "#E97316",
  },
  {
    id:        "iso9001",
    logo:      null,
    badge:     "ISO 9001",
    name:      "Quality Management",
    code:      ":2015",
    scope:     "Consistent product quality across every production run",
    accent:    "#E97316",
  },
  {
    id:        "iso14001",
    logo:      null,
    badge:     "ISO 14001",
    name:      "Environmental Management",
    code:      ":2015",
    scope:     "Minimised environmental impact throughout manufacturing",
    accent:    "#E97316",
  },
  {
    id:        "iso45001",
    logo:      null,
    badge:     "ISO 45001",
    name:      "Occupational Health & Safety",
    code:      ":2018",
    scope:     "Safe and healthy working conditions for every employee",
    accent:    "#E97316",
  },
  {
    id:        "brcgs",
    logo:      "/certifications/brcgs.png",
    badge:     "BRCGS",
    name:      "Global Food Safety Standard",
    code:      "AA Grade",
    scope:     "Export-ready food contact material safety certification",
    accent:    "#E97316",
  },
] as const;

export default function Certifications() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#F5F0E6" }}
      aria-label="Biopapro certifications"
    >
      {/* Top accent line */}
      <div
        className="h-[2px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(26,71,49,0.1) 25%, #E97316 55%, rgba(26,71,49,0.1) 80%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-28 pb-20 md:pb-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: E }}
          className="mb-14 md:mb-18"
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: "#E97316" }}>09</span>
            <span className="w-5 h-px" style={{ background: "rgba(233,115,22,0.3)" }} />
            <span className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: "#7A6B54" }}>Certifications</span>
          </div>
          <h2
            style={{
              fontFamily:    "'Outfit', sans-serif",
              fontWeight:    900,
              fontSize:      "clamp(2.8rem, 6vw, 6rem)",
              lineHeight:    0.9,
              letterSpacing: "-0.03em",
              color:         "#1A1208",
            }}
          >
            CERTIFIED
            <br />
            <span style={{ color: "#E97316" }}>TO EXPORT.</span>
          </h2>
          <p className="font-sans text-sm leading-relaxed mt-5 max-w-[480px]" style={{ color: "#7A6B54" }}>
            Five globally recognised certifications that every importing country, retailer, and distributor requires.
          </p>
        </motion.div>

        {/* 5 cert cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.65, ease: E }}
              className="group relative flex flex-col p-6 md:p-7 transition-all duration-300 cursor-pointer"
              style={{
                background:   "#EDE5D4",
                border:       `1px solid rgba(26,71,49,0.1)`,
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background    = "rgba(233,115,22,0.07)";
                (e.currentTarget as HTMLElement).style.borderColor   = "rgba(233,115,22,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background  = "#EDE5D4";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,71,49,0.1)";
              }}
            >
              {/* Logo or shield */}
              <div className="mb-5 h-10 flex items-center">
                {cert.logo ? (
                  <div className="relative h-9 w-20">
                    <Image
                      src={cert.logo}
                      alt={cert.badge}
                      fill
                      className="object-contain object-left opacity-80"
                      sizes="80px"
                    />
                  </div>
                ) : (
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded"
                    style={{ background: `${cert.accent}1A` }}
                  >
                    <ShieldCheck size={18} strokeWidth={2} style={{ color: cert.accent }} />
                  </div>
                )}
              </div>

              {/* Badge */}
              <span
                className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-1"
                style={{ color: cert.accent }}
              >
                {cert.badge}{cert.code}
              </span>

              {/* Name */}
              <p className="font-sans font-semibold text-sm leading-snug mb-3" style={{ color: "#1A1208" }}>
                {cert.name}
              </p>

              {/* Scope */}
              <p className="font-sans text-xs leading-relaxed mt-auto" style={{ color: "#7A6B54" }}>
                {cert.scope}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-12 flex items-center justify-between gap-6 flex-wrap"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "#7A6B54" }}>
            All certificates available for download on request
          </p>
          <Link
            href="/certifications"
            className="group inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-200"
            style={{ color: "#E97316" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#E97316"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#E97316"; }}
          >
            View All Certificates
            <ArrowUpRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
