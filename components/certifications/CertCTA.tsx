"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CertCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#1A4731" }} aria-labelledby="cert-cta-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
              className="font-mono text-[11px] uppercase tracking-[0.28em] mb-5"
              style={{ color: "rgba(245,240,230,0.5)" }}
            >
              05 · Request Documentation
            </motion.p>

            <motion.h2
              id="cert-cta-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.035em",
                fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)",
                color: "#F5F0E6",
                lineHeight: 0.92,
                marginBottom: "1.5rem",
              }}
            >
              Need certificate
              <br />
              copies for your
              <br />
              compliance team?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light leading-relaxed max-w-[480px] mb-10"
              style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)", color: "rgba(245,240,230,0.7)" }}
            >
              Contact us with your destination market and required certifications.
              We issue a full documentation package — FSC®, ISO 9001, ISO 14001,
              ISO 45001, BRCGS — within 2–3 business days.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.22 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-300"
                style={{ background: "#E97316", color: "#FFFFFF", borderRadius: "4px" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#C4580A"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#E97316"; }}
              >
                Request Certificate Package
                <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
              <Link
                href="/products"
                className="font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-200"
                style={{ color: "rgba(245,240,230,0.5)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(245,240,230,0.9)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(245,240,230,0.5)")}
              >
                Browse products →
              </Link>
            </motion.div>
          </div>

          {/* Right — office contacts */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          >
            {[
              {
                label: "India — Compliance & Export",
                contact: "Yash Chandan / Nikunj Bhansali",
                email: "export@biopapro.com",
                phone: "+91 70211 03763",
                note: "Mumbai HQ · Available Mon–Sat IST",
              },
            ].map((office, i) => (
              <motion.div
                key={office.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease: EASE, delay: 0.3 + i * 0.1 }}
                className="p-6"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "8px" }}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] mb-1" style={{ color: "rgba(245,240,230,0.45)" }}>
                  {office.label}
                </p>
                <p className="font-sans font-semibold text-[13px] mb-4" style={{ color: "#F5F0E6" }}>
                  {office.contact}
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-2 group transition-opacity duration-200 hover:opacity-80"
                  >
                    <Mail size={11} style={{ color: "rgba(245,240,230,0.5)" }} />
                    <span className="font-mono text-[11px]" style={{ color: "rgba(245,240,230,0.7)" }}>
                      {office.email}
                    </span>
                  </a>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 group transition-opacity duration-200 hover:opacity-80"
                  >
                    <Phone size={11} style={{ color: "rgba(245,240,230,0.5)" }} />
                    <span className="font-mono text-[11px]" style={{ color: "rgba(245,240,230,0.7)" }}>
                      {office.phone}
                    </span>
                  </a>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] mt-4" style={{ color: "rgba(245,240,230,0.3)" }}>
                  {office.note}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
