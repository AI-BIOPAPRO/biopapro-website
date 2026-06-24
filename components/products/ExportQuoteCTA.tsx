"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Mail, Globe, Clock } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const ASSURANCES = [
  { icon: Mail,  text: "Response within 24 hours"  },
  { icon: Globe, text: "Export to 18+ countries"   },
  { icon: Clock, text: "Lead time from 3–5 weeks"  },
];

export default function ExportQuoteCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    // Deep forest green — breaks the dark-dark stretch after Certifications
    <section
      className="relative overflow-hidden"
      style={{ background: "#2D5228" }}
      aria-labelledby="cta-heading"
    >
      {/* Top accent — lighter green line */}
      <div
        className="h-[2px] w-full"
        style={{ background: "linear-gradient(90deg, transparent 0%, #4A7A3D 35%, #7AAE6B 60%, transparent 100%)" }}
      />

      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-[800px] mx-auto text-center">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
            className="font-mono text-[8px] uppercase tracking-[0.36em] mb-8"
            style={{ color: "rgba(200,230,185,0.65)" }}
          >
            Ready to source?
          </motion.p>

          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, ease: EASE, delay: 0.08 }}
            className="font-display font-light leading-[0.9] mb-8"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", color: "#F6F1E8" }}
          >
            Start your supply{" "}
            <em
              className="not-italic"
              style={{ color: "#A8C686", fontStyle: "italic", fontFamily: "inherit" }}
            >
              partnership
            </em>
            <br />
            with Biopapro.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE, delay: 0.16 }}
            className="font-sans font-light text-base leading-relaxed mb-12 mx-auto"
            style={{ color: "rgba(200,230,185,0.65)", maxWidth: "520px" }}
          >
            Tell us what you need — product, quantity, packaging, and destination.
            Our export team responds with a tailored quotation within 24 hours.
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
              style={{ background: "#F6F1E8", color: "#2D5228" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#F6F1E8";
              }}
            >
              Request Export Quotation
              <ArrowUpRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>

            <a
              href="mailto:export@biopapro.com"
              className="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] transition-colors duration-200"
              style={{ color: "rgba(168,198,134,0.75)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(168,198,134,1)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(168,198,134,0.75)")}
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
                    className="w-7 h-7 flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(168,198,134,0.15)", border: "1px solid rgba(168,198,134,0.3)" }}
                  >
                    <Icon size={11} style={{ color: "#A8C686" }} />
                  </div>
                  <span
                    className="font-mono text-[8px] uppercase tracking-[0.18em]"
                    style={{ color: "rgba(200,230,185,0.55)" }}
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
