"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ManufacturingCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#2D5228" }} aria-labelledby="mfg-cta-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
              className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] mb-5"
              style={{ color: "rgba(200,230,190,0.55)" }}
            >
              09 · Start the Conversation
            </motion.p>

            <motion.h2
              id="mfg-cta-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
              className="font-display font-light leading-[0.92] mb-8"
              style={{ fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)", color: "#F6F1E8" }}
            >
              Ready to source at scale?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light leading-relaxed max-w-[500px] mb-10"
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.05rem)", color: "rgba(200,230,190,0.75)" }}
            >
              Share your volume requirements and target market. We will respond with
              production availability, lead times, packaging options, and a preliminary quotation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.22 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] transition-all duration-300"
                style={{ background: "#F6F1E8", color: "#2D5228" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#FBF8F2";
                  el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#F6F1E8";
                  el.style.boxShadow = "none";
                }}
              >
                Request Export Quote
                <ArrowUpRight size={13} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
              <Link
                href="/certifications"
                className="font-sans text-[13px] transition-colors duration-200"
                style={{ color: "rgba(200,230,190,0.65)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(200,230,190,1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(200,230,190,0.65)")}
              >
                View certifications →
              </Link>
            </motion.div>
          </div>

          {/* Right — contacts */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          >
            {[
              {
                label: "India — Manufacturing & Export",
                contact: "Yash Chandan / Nikunj Bhansali",
                email: "export@biopapro.com",
                phone: "+91 70211 03763",
                note: "Mumbai HQ · Mon–Sat IST",
              },
            ].map((office, i) => (
              <motion.div
                key={office.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease: EASE, delay: 0.3 + i * 0.1 }}
                className="p-5"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(200,230,190,0.15)" }}
              >
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] mb-1" style={{ color: "rgba(200,230,190,0.45)" }}>
                  {office.label}
                </p>
                <p className="font-sans font-semibold text-[14px] mb-3" style={{ color: "#F6F1E8" }}>
                  {office.contact}
                </p>
                <div className="flex flex-col gap-2">
                  <a href={`mailto:${office.email}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Mail size={12} style={{ color: "rgba(200,230,190,0.5)", flexShrink: 0 }} />
                    <span className="font-sans text-[13px]" style={{ color: "rgba(200,230,190,0.70)" }}>{office.email}</span>
                  </a>
                  <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Phone size={12} style={{ color: "rgba(200,230,190,0.5)", flexShrink: 0 }} />
                    <span className="font-sans text-[13px]" style={{ color: "rgba(200,230,190,0.70)" }}>{office.phone}</span>
                  </a>
                </div>
                <p className="font-sans text-[12px] mt-3" style={{ color: "rgba(200,230,190,0.35)" }}>{office.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
