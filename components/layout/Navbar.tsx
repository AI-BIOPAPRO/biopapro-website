"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY_FACTS } from "@/lib/company-facts";
import { useScrollLock } from "@/lib/use-scroll-lock";

const NAV_LINKS = [
  { label: "Home",             href: "/"                },
  { label: "Products",        href: "/products"        },
  { label: "Manufacturing",   href: "/manufacturing"   },
  { label: "Sustainability",  href: "/sustainability"  },
  { label: "Global Presence", href: "/global-presence" },
  { label: "Certifications",  href: "/certifications"  },
  { label: "Blog",            href: "/blog"            },
  { label: "Contact",         href: "/contact"         },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const mobileNavRef = useRef<HTMLElement>(null);

  // Background stays locked; the menu's own nav list (mobileNavRef) keeps
  // scrolling normally — see lib/use-scroll-lock.ts.
  useScrollLock(menuOpen, mobileNavRef);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      {/* ── Scroll-progress bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
        style={{ scaleX: scrollYProgress, background: "#E97316" }}
      />

      {/* ── Header ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: "#F5F0E6",
          borderBottom: scrolled ? "1px solid rgba(5,46,22,0.12)" : "1px solid rgba(5,46,22,0.06)",
          boxShadow: scrolled ? "0 2px 16px rgba(5,46,22,0.08)" : "none",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-5 xl:px-20">
          <div className="flex items-center justify-between h-[72px]">

            {/* ── Logo — actual Biopapro brand mark ── */}
            <Link
              href="/"
              className="flex items-center flex-shrink-0 group"
              aria-label="Biopapro — home"
            >
              <div className="relative" style={{ height: 44, width: 160 }}>
                <Image
                  src="https://biopapro.com/cdn/shop/files/BioPapro_logo-8.png?v=1663665457"
                  alt="Biopapro — biodegradable tableware manufacturer"
                  fill
                  className="object-contain object-left"
                  sizes="160px"
                  priority
                />
              </div>
            </Link>

            {/* ── Desktop navigation ── */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-8" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative whitespace-nowrap text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-200 py-1 group"
                  style={{
                    color: pathname === link.href ? "#E97316" : "#1A1208",
                  }}
                  onMouseEnter={(e) => {
                    if (pathname !== link.href)
                      (e.currentTarget as HTMLElement).style.color = "#E97316";
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== link.href)
                      (e.currentTarget as HTMLElement).style.color = "#1A1208";
                  }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 h-px transition-all duration-300"
                    style={{
                      background: "#E97316",
                      width: pathname === link.href ? "100%" : "0",
                    }}
                  />
                </Link>
              ))}
            </nav>

            {/* ── CTA + mobile toggle ── */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] flex-shrink-0 transition-colors duration-200"
                style={{ background: "#E97316", color: "#FFFFFF", borderRadius: "6px" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#C4580A"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#E97316"; }}
              >
                Request Quote
                <ArrowUpRight size={11} strokeWidth={2.5} />
              </Link>

              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden w-11 h-11 flex items-center justify-center transition-colors duration-200 text-ink-light hover:text-emerald"
                style={{ color: "#4A3D32" }}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {menuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate:   0, opacity: 1 }}
                      exit={{   rotate:  90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <X size={20} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ rotate:  90, opacity: 0 }}
                      animate={{ rotate:   0, opacity: 1 }}
                      exit={{   rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Menu size={20} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════
          MOBILE MENU
          Clean white/green — fresh, natural, modern.
          Large Cormorant Garamond links on white bg.
          ═══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{   opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col paper"
          >
            {/* Mirror header */}
            <div className="flex items-center justify-between h-[72px] px-6 border-b border-border flex-shrink-0">
              <Link href="/" className="flex items-center flex-shrink-0" onClick={() => setMenuOpen(false)}>
                <div className="relative" style={{ height: 44, width: 160 }}>
                  <Image
                    src="https://biopapro.com/cdn/shop/files/BioPapro_logo-8.png?v=1663665457"
                    alt="Biopapro"
                    fill
                    className="object-contain object-left"
                    sizes="160px"
                  />
                </div>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-11 h-11 flex items-center justify-center text-ink-light hover:text-ink"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <nav ref={mobileNavRef} className="flex-1 flex flex-col justify-center px-8 py-10 overflow-y-auto" aria-label="Mobile navigation">
              <div className="space-y-0.5">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x:   0 }}
                    transition={{ delay: 0.04 + i * 0.065, duration: 0.42, ease: [0.16,1,0.3,1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-5 border-b border-border group transition-colors duration-200",
                        pathname === link.href
                          ? "text-green-deep"
                          : "text-ink-light hover:text-ink"
                      )}
                    >
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, letterSpacing: "-0.01em" }}>
                        {link.label}
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="opacity-0 group-hover:opacity-100 text-green transition-opacity duration-200"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y:  0 }}
                transition={{ delay: 0.04 + NAV_LINKS.length * 0.065 + 0.08, duration: 0.42, ease: [0.16,1,0.3,1] }}
                className="mt-10"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] transition-colors duration-200"
                  style={{ background: "#E97316", color: "#FFFFFF", borderRadius: "6px" }}
                >
                  Request Quote
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </Link>
              </motion.div>
            </nav>

            {/* Footer strip */}
            <div className="px-8 py-5 bg-green-pale/40 border-t border-border flex-shrink-0">
              <p className="font-mono text-[11px] text-ink-muted tracking-[0.2em] uppercase">
                FSC® Certified &nbsp;·&nbsp; ISO 9001:2015 &nbsp;·&nbsp; BRCGS Certified &nbsp;·&nbsp; Est. {COMPANY_FACTS.founded}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
