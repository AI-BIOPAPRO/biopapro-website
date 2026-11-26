"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ContactFinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#F5F0E6" }} aria-labelledby="final-cta-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-[860px]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] mb-6"
            style={{ color: "#7A6B54" }}
          >
            08 · Start Sourcing
          </motion.p>

          <motion.h2
            id="final-cta-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
                        style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 900, letterSpacing: "-0.035em", fontSize: "clamp(2.4rem, 5vw, 4.6rem)", color: "#1A1208" }}
          >
            Your next order
            <br />
            starts with a conversation.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.68, ease: EASE, delay: 0.18 }}
            className="font-sans font-light leading-relaxed max-w-[560px] mb-12"
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", color: "#7A6B54" }}
          >
            Speak directly with our procurement team and receive
            procurement-ready information — catalogue, specifications,
            certifications, and pricing — within 24–48 hours, whether
            you're sourcing within India or importing internationally.
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
              style={{ background: "#1A4731", color: "#F5F0E6" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#E97316";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#1A4731";
              }}
            >
              Source for India
              <ArrowUpRight size={14} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
            <a
              href="#inquiry-form"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.14em] transition-all duration-300"
              style={{ border: "1px solid rgba(26,71,49,0.2)", color: "#7A6B54" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#1A4731";
                el.style.color = "#1A1208";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(26,71,49,0.2)";
                el.style.color = "#7A6B54";
              }}
            >
              Source for Your Market
              <ArrowUpRight size={14} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
            <a
              href="mailto:export@biopapro.com"
              className="inline-flex items-center gap-2.5 px-4 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] transition-all duration-300"
              style={{ color: "#7A6B54" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#1A1208"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#7A6B54"; }}
            >
              <Mail size={14} strokeWidth={2} />
              Email Us
            </a>
          </motion.div>

          {/* Bottom contact strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
            style={{ borderColor: "rgba(26,71,49,0.1)" }}
          >
            {[
              { region: "India — Sourcing Enquiries", email: "export@biopapro.com", phone: "+91 70211 03763", note: "Mon–Sat · IST" },
            ].map((o) => (
              <div key={o.region}>
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] mb-2" style={{ color: "#7A6B54" }}>
                  {o.region}
                </p>
                <a href={`mailto:${o.email}`} className="block font-sans text-[14px] mb-1 hover:opacity-80 transition-opacity" style={{ color: "#1A4731" }}>
                  {o.email}
                </a>
                <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="block font-sans text-[14px] hover:opacity-80 transition-opacity" style={{ color: "#1A4731" }}>
                  {o.phone}
                </a>
                <p className="font-sans text-[12px] mt-1" style={{ color: "#7A6B54" }}>{o.note}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
