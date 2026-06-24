"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATIONS, COMPLIANCE_STATS } from "@/lib/certifications-data";
import { CERT_LOGOS } from "@/components/certifications/CertLogos";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CertHero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden paper pt-[72px]"
      style={{ background: "#F6F1E8" }}
      aria-labelledby="cert-hero-heading"
    >
      <div
        className="h-[2px] w-full"
        style={{ background: "linear-gradient(90deg, transparent 0%, #C89A5B 30%, #8C6239 60%, transparent 100%)" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-0 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">

          {/* Left — copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
              className="mb-8"
            >
              <SectionLabel index="01" label="Certifications" />
            </motion.div>

            <motion.h1
              id="cert-hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.92] mb-8"
              style={{ fontSize: "clamp(2.6rem, 4.5vw, 4.4rem)" }}
            >
              Every certification
              <br />
              is a{" "}
              <em className="not-italic" style={{ color: "#C89A5B", fontStyle: "italic", fontFamily: "inherit" }}>
                promise kept.
              </em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light leading-relaxed max-w-[500px] mb-10"
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)" }}
            >
              Biopapro holds nine independently verified certifications covering sustainable
              sourcing, quality management, food safety, environmental compliance,
              compostability, and ethical production. Every shipment ships documented.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.22 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-px mb-10"
              style={{ background: "#DDD3C5", border: "1px solid #DDD3C5" }}
            >
              {COMPLIANCE_STATS.map((s) => (
                <div key={s.label} className="flex flex-col px-5 py-4" style={{ background: "#F6F1E8" }}>
                  <span className="font-mono font-bold text-[1.5rem] leading-none mb-1" style={{ color: "#C89A5B" }}>
                    {s.value}
                  </span>
                  <span className="font-sans text-[13px] font-semibold text-ink leading-tight mb-1">
                    {s.label}
                  </span>
                  <span className="font-mono text-[11px] text-ink-muted leading-snug">
                    {s.sub}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] text-white transition-colors duration-300"
                style={{ background: "#4A7A3D" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#2D5228")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#4A7A3D")}
              >
                Request Certificate Package
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </Link>
              <a
                href="#certifications"
                className="font-sans text-[13px] text-ink-muted hover:text-ink transition-colors duration-200"
              >
                View all certifications →
              </a>
            </motion.div>
          </div>

          {/* Right — cert badge grid: 9 certs in 3×3 */}
          <motion.div
            className="lg:col-span-6 flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            <div className="grid grid-cols-3 gap-2.5 w-full">
              {CERTIFICATIONS.map((cert, i) => {
                const Logo = CERT_LOGOS[cert.id];
                return (
                  <motion.a
                    key={cert.id}
                    href={`#cert-${cert.id}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.28 + i * 0.055 }}
                    className="flex flex-col items-center justify-center text-center px-3 py-5 group"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #DDD3C5",
                      transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(200,154,91,0.5)";
                      el.style.boxShadow = "0 6px 20px rgba(44,36,27,0.09)";
                      el.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "#DDD3C5";
                      el.style.boxShadow = "none";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    <div className="flex items-center justify-center mb-2.5" style={{ width: 58, height: 58 }}>
                      <Logo size={54} />
                    </div>
                    <p className="font-sans text-[11px] font-medium text-ink-muted leading-snug">
                      {cert.tag}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom standards strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
          className="border-t pb-8 pt-5 flex flex-wrap items-center gap-x-6 gap-y-2"
          style={{ borderColor: "#DDD3C5" }}
        >
          <span className="font-sans text-[12px] font-medium text-ink-muted">
            Certifications held:
          </span>
          {CERTIFICATIONS.map((c) => (
            <span key={c.id} className="font-mono text-[11px] text-ink-muted opacity-70">
              {c.standard}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
