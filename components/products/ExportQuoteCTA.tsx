"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Mail, Globe, Clock } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const ASSURANCES = [
  { icon: Mail,  text: "Response within 24 hours" },
  { icon: Globe, text: "Export to 18+ countries"  },
  { icon: Clock, text: "Lead time from 3–5 weeks" },
];

export default function ExportQuoteCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#EDE5D4" }}
      aria-labelledby="cta-heading"
    >
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-[800px] mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ background: "rgba(26,71,49,0.08)", color: "#1A4731" }}
          >
            Ready to source?
          </motion.div>

          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, ease: EASE, delay: 0.08 }}
            style={{
              fontFamily:    "'Outfit', sans-serif",
              fontWeight:    900,
              fontSize:      "clamp(2.6rem, 6vw, 5rem)",
              lineHeight:    0.9,
              letterSpacing: "-0.03em",
              color:         "#1A1208",
              marginBottom:  "1.5rem",
            }}
          >
            START YOUR<br />
            <span style={{ color: "#E97316" }}>SUPPLY</span> PARTNERSHIP<br />
            WITH BIOPAPRO.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE, delay: 0.16 }}
            className="text-base leading-relaxed mb-12 mx-auto"
            style={{ color: "#7A6B54", maxWidth: "520px", fontFamily: "'Outfit', sans-serif" }}
          >
            Tell us what you need — product, quantity, packaging, and destination.
            Our team responds with a tailored quotation within 24 hours.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.62, ease: EASE, delay: 0.24 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-9 py-4 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300"
              style={{ background: "#E97316", color: "#FFFFFF", borderRadius: "8px" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#C4580A"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#E97316"; }}
            >
              Request Export Quotation
              <ArrowUpRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>

            <a
              href="mailto:export@biopapro.com"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-200"
              style={{ color: "#7A6B54" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#1A1208")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#7A6B54")}
            >
              <Mail size={10} />
              export@biopapro.com
            </a>
          </motion.div>

          {/* Assurances */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.58, ease: EASE, delay: 0.32 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            {ASSURANCES.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 flex items-center justify-center flex-shrink-0 rounded-lg"
                    style={{ background: "rgba(26,71,49,0.08)", border: "1px solid rgba(26,71,49,0.15)" }}
                  >
                    <Icon size={11} style={{ color: "#1A4731" }} />
                  </div>
                  <span
                    className="font-mono text-[11px] uppercase tracking-[0.18em]"
                    style={{ color: "#7A6B54" }}
                  >
                    {item.text}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
