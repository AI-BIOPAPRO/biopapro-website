"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function SustainabilityCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#2D5228" }} aria-labelledby="sus-cta-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-[800px]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] mb-5"
            style={{ color: "rgba(200,230,190,0.55)" }}
          >
            07 · Sustainable Procurement
          </motion.p>

          <motion.h2
            id="sus-cta-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
            className="font-display font-light leading-[0.92] mb-8"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 4.2rem)", color: "#F6F1E8" }}
          >
            Replace plastic in your
            <br />
            supply chain. Today.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
            className="font-sans font-light leading-relaxed max-w-[560px] mb-10"
            style={{ fontSize: "clamp(1rem, 1.2vw, 1.05rem)", color: "rgba(200,230,190,0.75)" }}
          >
            Share your current cutlery volumes and markets. We will respond with
            a product recommendation, sustainability documentation package, and
            export quotation — within one business day.
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
              Request Sustainability Package
              <ArrowUpRight size={13} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/products"
              className="font-sans text-[13px] transition-colors duration-200"
              style={{ color: "rgba(200,230,190,0.60)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(200,230,190,1)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(200,230,190,0.60)")}
            >
              Browse products →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
