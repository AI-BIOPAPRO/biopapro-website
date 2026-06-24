"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      {/* ── Scroll-progress bar — primary green ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-green"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ── Header ── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-bg/96 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-[72px]">

            {/* ── Logo — actual Biopapro brand mark ── */}
            <Link
              href="/"
              className="flex items-center flex-shrink-0 group"
              aria-label="Biopapro — home"
            >
              <div className="relative h-8 w-[140px]">
                <Image
                  src="https://biopapro.com/cdn/shop/files/BioPapro_logo-8.png?v=1663665457"
                  alt="Biopapro — biodegradable tableware manufacturer"
                  fill
                  className="object-contain object-left"
                  sizes="140px"
                  priority
                />
              </div>
            </Link>

            {/* ── Desktop navigation ── */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-200 py-1 group",
                    pathname === link.href
                      ? "text-green-deep"
                      : "text-ink-light hover:text-ink"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-px bg-green transition-all duration-300",
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              ))}
            </nav>

            {/* ── CTA + mobile toggle ── */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-green text-white text-[11px] font-bold uppercase tracking-[0.12em] hover:bg-green-deep transition-colors duration-200 flex-shrink-0"
              >
                Request Quote
                <ArrowUpRight size={11} strokeWidth={2.5} />
              </Link>

              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-ink hover:text-green-deep transition-colors duration-200"
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
                <div className="relative h-8 w-[140px]">
                  <Image
                    src="https://biopapro.com/cdn/shop/files/BioPapro_logo-8.png?v=1663665457"
                    alt="Biopapro"
                    fill
                    className="object-contain object-left"
                    sizes="140px"
                  />
                </div>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-ink-light hover:text-ink"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 flex flex-col justify-center px-8 py-10 overflow-y-auto" aria-label="Mobile navigation">
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
                      <span className="font-display font-light text-4xl tracking-tight">
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
                  className="inline-flex items-center gap-2 px-7 py-4 bg-green text-white text-sm font-bold uppercase tracking-[0.14em] hover:bg-green-deep transition-colors duration-200"
                >
                  Request Export Quote
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </Link>
              </motion.div>
            </nav>

            {/* Footer strip */}
            <div className="px-8 py-5 bg-green-pale/40 border-t border-border flex-shrink-0">
              <p className="font-mono text-[9.5px] text-ink-muted tracking-[0.2em] uppercase">
                FSC® Certified &nbsp;·&nbsp; ISO 9001:2015 &nbsp;·&nbsp; FDA CFR 21 &nbsp;·&nbsp; Est. 2018
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
