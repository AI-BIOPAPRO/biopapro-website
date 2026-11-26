"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { OFFICES } from "@/lib/contact-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function GlobalContactNetwork() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#EDE5D4" }} aria-labelledby="offices-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="04" label="Global Contact Network" />
          </motion.div>
          <motion.h2
            id="offices-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
                        style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 900, letterSpacing: "-0.035em", fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
          >
            Speak directly
            <br />
            <span style={{ color: "#E97316" }}>with our team.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {OFFICES.map((office, i) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: EASE, delay: 0.12 + i * 0.12 }}
              className="p-7"
              style={{ background: "#F5F0E6", border: "1px solid rgba(26,71,49,0.12)" }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6 pb-5 border-b" style={{ borderColor: "rgba(26,71,49,0.1)" }}>
                <div>
                  <span
                    className="inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 mb-2"
                    style={{
                      background: office.type === "origin" ? "rgba(200,154,91,0.1)" : "rgba(74,122,61,0.1)",
                      border: `1px solid ${office.type === "origin" ? "rgba(200,154,91,0.3)" : "rgba(74,122,61,0.3)"}`,
                      color: office.type === "origin" ? "#7A6B54" : "#1A4731",
                    }}
                  >
                    {office.type === "origin" ? "Manufacturing HQ" : "Regional Office"}
                  </span>
                  <h3 className="font-sans font-semibold text-ink" style={{ fontSize: "16px" }}>
                    {office.region}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[12px] text-ink-muted">{office.timezone}</p>
                </div>
              </div>

              {/* Contacts */}
              <div className="mb-5">
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-3">
                  Direct Contacts
                </p>
                {office.contacts.map((c) => (
                  <div key={c.name} className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#E97316" }} />
                    <span className="font-sans font-semibold text-[14px] text-ink">{c.name}</span>
                    <span className="font-sans text-[13px] text-ink-muted">— {c.role}</span>
                  </div>
                ))}
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-3 mb-5">
                <a href={`mailto:${office.email}`} className="flex items-center gap-3 group">
                  <Mail size={15} style={{ color: "#E97316", flexShrink: 0 }} />
                  <span className="font-sans text-[14px] text-ink group-hover:text-ink-muted transition-colors">{office.email}</span>
                </a>
                <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 group">
                  <Phone size={15} style={{ color: "#E97316", flexShrink: 0 }} />
                  <span className="font-sans text-[14px] text-ink group-hover:text-ink-muted transition-colors">{office.phone}</span>
                </a>
                <div className="flex items-start gap-3">
                  <Clock size={15} style={{ color: "#E97316", flexShrink: 0, marginTop: 2 }} />
                  <span className="font-sans text-[14px] text-ink-light">{office.hours}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={15} style={{ color: "#E97316", flexShrink: 0, marginTop: 2 }} />
                  <span className="font-sans text-[13px] text-ink-muted leading-snug">{office.address}</span>
                </div>
              </div>

              {/* Note */}
              <p className="font-sans text-[13px] text-ink-muted leading-relaxed pt-4 border-t" style={{ borderColor: "rgba(26,71,49,0.1)" }}>
                {office.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
