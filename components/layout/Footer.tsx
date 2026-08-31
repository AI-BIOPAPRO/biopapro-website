"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

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
    { label: "Export Partnership",     href: "/contact"          },
    { label: "Request Samples",        href: "/contact#samples"  },
    { label: "Certificate Downloads",  href: "/certifications"   },
  ],
} as const;

const CERTS = ["FSC® 100%", "ISO 9001:2015", "FDA CFR 21", "BPI Compostable", "BSCI Audited"] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#1D1610" }}
      aria-label="Site footer"
    >
      {/* Top accent */}
      <div
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #4A7A3D 35%, #2D5228 65%, transparent 100%)",
        }}
      />

      {/* ── Main grid ── */}
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
                  className="object-contain object-left brightness-0 invert"
                  sizes="148px"
                />
              </div>
            </Link>

            {/* Tagline */}
            <p
              className="font-sans font-light text-sm leading-relaxed max-w-[280px]"
              style={{ color: "rgba(230,220,205,0.65)" }}
            >
              Global FSC-certified birchwood tableware manufacturer.
              Exporting to 18+ countries since 2019.
            </p>

            {/* Cert strip */}
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {CERTS.map((c) => (
                <span
                  key={c}
                  className="font-mono text-[8px] uppercase tracking-[0.18em]"
                  style={{ color: "rgba(160,215,135,0.55)" }}
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
                <Mail size={12} style={{ color: "rgba(160,215,135,0.5)", flexShrink: 0 }} />
                <span
                  className="font-mono text-[9px] uppercase tracking-[0.16em] group-hover:underline"
                  style={{ color: "rgba(220,215,205,0.7)" }}
                >
                  export@biopapro.com
                </span>
              </a>
              <div className="inline-flex items-center gap-2.5">
                <MapPin size={12} style={{ color: "rgba(160,215,135,0.5)", flexShrink: 0 }} />
                <span
                  className="font-mono text-[9px] uppercase tracking-[0.16em]"
                  style={{ color: "rgba(220,215,205,0.6)" }}
                >
                  India · Exporting globally
                </span>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {(Object.entries(NAV) as [string, readonly { label: string; href: string }[]][]).map(([group, links]) => (
            <div key={group} className="lg:col-span-2 flex flex-col gap-4">
              <span
                className="font-mono text-[9px] uppercase tracking-[0.28em] font-bold"
                style={{ color: "rgba(160,215,135,0.6)" }}
              >
                {group}
              </span>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-[13px] transition-colors duration-200"
                      style={{ color: "rgba(220,215,205,0.6)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "rgba(220,215,205,0.95)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "rgba(220,215,205,0.6)";
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
              className="font-mono text-[9px] uppercase tracking-[0.28em] font-bold"
              style={{ color: "rgba(160,215,135,0.6)" }}
            >
              Export Partnership
            </span>
            <p
              className="font-sans text-[13px] font-light leading-relaxed"
              style={{ color: "rgba(220,215,205,0.6)" }}
            >
              Ready to source FSC-certified birchwood tableware at scale?
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 self-start"
              style={{ background: "#4A7A3D", color: "#FFFFFF" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#2D5228";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#4A7A3D";
              }}
            >
              Request Export Quote
              <ArrowUpRight
                size={11}
                strokeWidth={2.5}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </Link>
          </div>

        </div>

        {/* ── Bottom strip ── */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p
            className="font-mono text-[8.5px] uppercase tracking-[0.16em]"
            style={{ color: "rgba(180,170,155,0.4)" }}
          >
            © {year} Biopapro Pvt. Ltd. · All rights reserved
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((label) => (
              <Link
                key={label}
                href="/contact"
                className="font-mono text-[8.5px] uppercase tracking-[0.14em] transition-colors duration-200"
                style={{ color: "rgba(180,170,155,0.4)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(180,170,155,0.75)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(180,170,155,0.4)";
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
