"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ContactFinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#2D5228" }} aria-labelledby="final-cta-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-[860px]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] mb-6"
            style={{ color: "rgba(200,230,190,0.55)" }}
          >
            08 · Start Sourcing
          </motion.p>

          <motion.h2
            id="final-cta-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
            className="font-display font-light leading-[0.92] mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.6rem)", color: "#F6F1E8" }}
          >
            Your next shipment
            <br />
            starts with a conversation.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.68, ease: EASE, delay: 0.18 }}
            className="font-sans font-light leading-relaxed max-w-[560px] mb-12"
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", color: "rgba(200,230,190,0.75)" }}
          >
            Speak directly with Biopapro's export team and receive
            procurement-ready information — catalogue, specifications,
            certifications, and pricing — within 24–48 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.26 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <a
              href="#inquiry-form"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.14em] transition-all duration-300"
              style={{ background: "#F6F1E8", color: "#2D5228" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#FBF8F2";
                el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#F6F1E8";
                el.style.boxShadow = "none";
              }}
            >
              Request Export Quote
              <ArrowUpRight size={14} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
            <a
              href="mailto:export@biopapro.com"
              className="inline-flex items-center gap-2.5 px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] transition-all duration-300"
              style={{ border: "1px solid rgba(200,230,190,0.3)", color: "rgba(200,230,190,0.85)" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(200,230,190,0.6)";
                el.style.color = "rgba(200,230,190,1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(200,230,190,0.3)";
                el.style.color = "rgba(200,230,190,0.85)";
              }}
            >
              <Mail size={14} strokeWidth={2} />
              Email Export Team
            </a>
          </motion.div>

          {/* Bottom contact strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
            style={{ borderColor: "rgba(200,230,190,0.15)" }}
          >
            {[
              { region: "India — Export Team", email: "export@biopapro.com", phone: "+91 70211 03763", note: "Mon–Sat · IST" },
            ].map((o) => (
              <div key={o.region}>
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] mb-2" style={{ color: "rgba(200,230,190,0.45)" }}>
                  {o.region}
                </p>
                <a href={`mailto:${o.email}`} className="block font-sans text-[14px] mb-1 hover:opacity-80 transition-opacity" style={{ color: "rgba(200,230,190,0.80)" }}>
                  {o.email}
                </a>
                <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="block font-sans text-[14px] hover:opacity-80 transition-opacity" style={{ color: "rgba(200,230,190,0.80)" }}>
                  {o.phone}
                </a>
                <p className="font-sans text-[12px] mt-1" style={{ color: "rgba(200,230,190,0.35)" }}>{o.note}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
