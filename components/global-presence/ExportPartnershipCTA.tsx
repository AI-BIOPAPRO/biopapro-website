"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { OFFICES } from "@/lib/global-presence-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ExportPartnershipCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#2D5228" }}
      aria-labelledby="export-cta-heading"
    >
      <div
        className="h-[2px] w-full"
        style={{ background: "linear-gradient(90deg, transparent 0%, #4A7A3D 35%, #7AAE6B 60%, transparent 100%)" }}
      />

      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — Headline + CTAs */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE }}
              className="font-mono text-[8px] uppercase tracking-[0.36em] mb-8"
              style={{ color: "rgba(168,198,134,0.65)" }}
            >
              Ready to source?
            </motion.p>

            <motion.h2
              id="export-cta-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.72, ease: EASE, delay: 0.08 }}
              className="font-display font-light leading-[0.9] mb-8"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.4rem)", color: "#F6F1E8" }}
            >
              Ready to supply
              <br />
              <em className="not-italic" style={{ color: "#A8C686", fontStyle: "italic", fontFamily: "inherit" }}>
                your market.
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-base leading-relaxed mb-10"
              style={{ color: "rgba(200,230,185,0.65)", maxWidth: 460 }}
            >
              Tell us your market, required volume, and product categories.
              Our export team — based in Mumbai — responds within
              24 hours with a tailored supply proposal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.24 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300"
                style={{ background: "#F6F1E8", color: "#2D5228" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#FFFFFF")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#F6F1E8")}
              >
                Request Export Quotation
                <ArrowUpRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] transition-colors duration-200"
                style={{ color: "rgba(168,198,134,0.75)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(168,198,134,1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(168,198,134,0.75)")}
              >
                Browse full catalog →
              </Link>
            </motion.div>
          </div>

          {/* Right — Office contacts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="flex flex-col gap-4 justify-center"
          >
            {OFFICES.map((office, i) => (
              <motion.div
                key={office.region}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE, delay: 0.3 + i * 0.1 }}
                className="p-6"
                style={{
                  background: office.type === "origin"
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(255,255,255,0.04)",
                  border: `1px solid ${office.type === "origin" ? "rgba(168,198,134,0.35)" : "rgba(168,198,134,0.18)"}`,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: office.type === "origin" ? "#7AAE6B" : "#A8C686" }}
                  />
                  <p className="font-mono text-[8px] uppercase tracking-[0.22em]" style={{ color: "rgba(168,198,134,0.8)" }}>
                    {office.region}
                  </p>
                </div>

                <p className="font-sans text-[11.5px] font-light mb-3" style={{ color: "rgba(246,241,232,0.65)" }}>
                  {office.address}
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  <a
                    href={`mailto:${office.email}`}
                    className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.16em] transition-colors duration-200"
                    style={{ color: "rgba(168,198,134,0.8)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(168,198,134,1)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(168,198,134,0.8)")}
                  >
                    <Mail size={9} />
                    {office.email}
                  </a>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.16em] transition-colors duration-200"
                    style={{ color: "rgba(246,241,232,0.45)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(246,241,232,0.75)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(246,241,232,0.45)")}
                  >
                    <Phone size={9} />
                    {office.phone}
                  </a>
                </div>
                {"contact" in office && (
                  <p className="font-mono text-[7px] uppercase tracking-[0.14em] mt-2" style={{ color: "rgba(168,198,134,0.45)" }}>
                    Contact: {(office as { contact: string }).contact}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
