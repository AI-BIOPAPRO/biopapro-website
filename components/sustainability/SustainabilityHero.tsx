"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function SustainabilityHero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden grain pt-[72px]"
      style={{ background: "#1D1610" }}
      aria-labelledby="sus-hero-heading"
    >
      {/* Sustainability video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0.22 }}
        >
          <source src="/videos/Sustainibilty 1-2.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(29,22,16,0.55) 0%, rgba(29,22,16,0.88) 100%)" }}
        />
      </div>

      <div
        className="relative z-10 h-[2px] w-full"
        style={{ background: "linear-gradient(90deg, transparent 0%, #4A7A3D 40%, #2D5228 70%, transparent 100%)" }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left — headline */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
              className="mb-8"
            >
              <SectionLabel index="01" label="Sustainability" />
            </motion.div>

            <motion.h1
              id="sus-hero-heading"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
              className="font-display font-light leading-[0.92] mb-8"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)", color: "#F6F1E8" }}
            >
              6,500kg of plastic.
              <br />
              <em className="not-italic" style={{ color: "#7DB870", fontStyle: "italic", fontFamily: "inherit" }}>
                Not today.
              </em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
              className="font-sans font-light leading-relaxed max-w-[560px] mb-10"
              style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", color: "rgba(230,210,185,0.70)" }}
            >
              Every day, Biopapro's birchwood tableware displaces 6,500kg of single-use
              plastic from the global supply chain. FSC-certified. BPI compostable.
              ISO 14001 environmental management. This is not a brand position — it is
              what the product does.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.26 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] transition-colors duration-300"
                style={{ background: "#4A7A3D", color: "#F6F1E8" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#2D5228")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#4A7A3D")}
              >
                Source Sustainably
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </Link>
              <Link
                href="/certifications"
                className="font-sans text-[13px] transition-colors duration-200"
                style={{ color: "rgba(230,210,185,0.5)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,210,185,0.9)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,210,185,0.5)")}
              >
                View certifications →
              </Link>
            </motion.div>
          </div>

          {/* Right — impact statement */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.16 }}
          >
            <div className="flex flex-col gap-3">
              {[
                { value: "6,500kg",  label: "Plastic displaced every single day"         },
                { value: "100M+",    label: "Units shipped per month, replacing plastic"  },
                { value: "FSC® 100%",label: "Certified sustainable sourcing"              },
                { value: "BPI",      label: "Third-party verified compostability"         },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.3 + i * 0.07 }}
                  className="flex items-center gap-5 p-5"
                  style={{ border: "1px solid #3D2E22", background: "rgba(255,255,255,0.02)" }}
                >
                  <span className="font-mono font-bold flex-shrink-0" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", color: "#7DB870", minWidth: "90px" }}>
                    {item.value}
                  </span>
                  <span className="font-sans text-[14px]" style={{ color: "rgba(230,210,185,0.65)" }}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
