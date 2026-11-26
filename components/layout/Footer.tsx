"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { COMPANY_FACTS } from "@/lib/company-facts";

const NAV = {
  Products: [
    { label: "Birchwood Cutlery",   href: "/products#cutlery"   },
    { label: "Coffee Stirrers",     href: "/products#cafe"       },
    { label: "Ice Cream Sticks",    href: "/products#dairy"      },
    { label: "BBQ Skewers",         href: "/products#grill"      },
    { label: "Custom / OEM",        href: "/contact"             },
    { label: "Full Catalog",        href: "/products"            },
  ],
  Company: [
    { label: "Manufacturing",       href: "/manufacturing"       },
    { label: "Sustainability",      href: "/sustainability"       },
    { label: "Global Presence",     href: "/global-presence"     },
    { label: "Certifications",      href: "/certifications"      },
    { label: "Our People",          href: "/manufacturing#people"},
  ],
  Resources: [
    { label: "Blog & News",            href: "/blog"             },
    { label: "Partner With Us",        href: "/contact"          },
    { label: "Request Samples",        href: "/contact#samples"  },
    { label: "Certificate Downloads",  href: "/certifications"   },
  ],
} as const;

const CERTS = ["FSCÂ® 100%", "ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "BRCGS Certified"] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#EDE5D4" }}
      aria-label="Site footer"
    >
      {/* Top accent */}
      <div
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(26,71,49,0.1) 25%, #E97316 55%, rgba(26,71,49,0.1) 80%, transparent 100%)",
        }}
      />

      {/* â”€â”€ Main grid â”€â”€ */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Logo */}
            <Link href="/" aria-label="Biopapro home">
              <div className="relative h-9 w-[148px]">
                <Image
                  src="https://biopapro.com/cdn/shop/files/BioPapro_logo-8.png?v=1663665457"
                  alt="Biopapro"
                  fill
                  className="object-contain object-left"
                  sizes="148px"
                />
              </div>
            </Link>

            {/* Tagline */}
            <p
              className="font-sans font-light text-sm leading-relaxed max-w-[280px]"
              style={{ color: "#7A6B54" }}
            >
              Indian FSC-certified birchwood tableware manufacturer.
              Supplying India and exporting to {COMPANY_FACTS.exportMarkets}+ countries since {COMPANY_FACTS.founded}.
            </p>

            {/* Cert strip */}
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {CERTS.map((c) => (
                <span
                  key={c}
                  className="font-mono text-[11px] uppercase tracking-[0.18em]"
                  style={{ color: "rgba(26,71,49,0.5)" }}
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2.5 mt-1">
              <a
                href="mailto:export@biopapro.com"
                className="inline-flex items-center gap-2.5 group"
              >
                <Mail size={12} style={{ color: "#E97316", flexShrink: 0 }} />
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.16em] group-hover:underline"
                  style={{ color: "#7A6B54" }}
                >
                  export@biopapro.com
                </span>
              </a>
              <div className="inline-flex items-center gap-2.5">
                <MapPin size={12} style={{ color: "#E97316", flexShrink: 0 }} />
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.16em]"
                  style={{ color: "#7A6B54" }}
                >
                  India Â· Exporting globally
                </span>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {(Object.entries(NAV) as [string, readonly { label: string; href: string }[]][]).map(([group, links]) => (
            <div key={group} className="lg:col-span-2 flex flex-col gap-4">
              <span
                className="font-mono text-[11px] uppercase tracking-[0.28em] font-bold"
                style={{ color: "#1A4731" }}
              >
                {group}
              </span>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-[13px] transition-colors duration-200"
                      style={{ color: "#7A6B54" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#1A1208";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#7A6B54";
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <span
              className="font-mono text-[11px] uppercase tracking-[0.28em] font-bold"
              style={{ color: "#1A4731" }}
            >
              Partner With Us
            </span>
            <p
              className="font-sans text-[13px] font-light leading-relaxed"
              style={{ color: "#7A6B54" }}
            >
              Ready to source FSC-certified birchwood tableware at scale?
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 self-start"
              style={{ background: "#E97316", color: "#FFFFFF", borderRadius: "6px" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#C4580A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#E97316";
              }}
            >
              Request Quote
              <ArrowUpRight
                size={11}
                strokeWidth={2.5}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </Link>
          </div>

        </div>

        {/* â”€â”€ Bottom strip â”€â”€ */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderColor: "rgba(26,71,49,0.1)" }}
        >
          <p
            className="font-mono text-[11px] uppercase tracking-[0.16em]"
            style={{ color: "#7A6B54" }}
          >
            Â© {year} Biopapro Pvt. Ltd. Â· All rights reserved
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((label) => (
              <Link
                key={label}
                href="/contact"
                className="font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-200"
                style={{ color: "#7A6B54" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#1A1208";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#7A6B54";
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

