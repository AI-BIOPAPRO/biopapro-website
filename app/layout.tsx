import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/shared/StructuredData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Biopapro — Wooden Cutlery Manufacturer India",
    default: "Biopapro — Wooden Cutlery Manufacturer in India | Domestic & Export Supply",
  },
  description:
    "Biopapro manufactures FSC-certified birchwood cutlery in Mumbai, India. 100M+ units/month. Supplying restaurants, hotels, caterers, and food chains across India — and exporting to 18+ countries worldwide. Wholesale and bulk supply available.",
  keywords: [
    // Manufacturing
    "wooden cutlery manufacturer India",
    "birchwood cutlery manufacturer",
    "sustainable tableware manufacturer",
    "FSC certified cutlery manufacturer",
    "wooden cutlery manufacturer Mumbai",
    // Domestic India
    "wooden spoons supplier India",
    "wooden forks supplier India",
    "wooden cutlery wholesaler India",
    "disposable wooden cutlery India",
    "eco friendly cutlery supplier India",
    "biodegradable cutlery India",
    "wooden cutlery bulk India",
    "sustainable disposable cutlery India",
    "wooden tableware supplier India",
    // Export
    "FSC certified tableware exporter",
    "wooden cutlery exporter India",
    "birchwood tableware supplier",
    "sustainable cutlery manufacturer export",
    "birchwood cutlery wholesale",
    // Use cases
    "wooden cutlery restaurants",
    "disposable wooden cutlery hotels",
    "eco friendly catering cutlery",
    "birchwood spoons forks knives",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US", "en_GB"],
    url: "https://biopapro.com",
    siteName: "Biopapro",
    title: "Biopapro — Wooden Cutlery Manufacturer India | Domestic & Export",
    description:
      "FSC-certified birchwood cutlery manufactured in Mumbai. Supplying restaurants, hotels, caterers across India and exporting to 18+ countries. 100M+ units/month.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biopapro — Wooden Cutlery Manufacturer India",
    description:
      "FSC-certified birchwood cutlery. Mumbai manufacturer. Domestic India supply + 18+ country export. 100M+ units/month.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", // Add Google Search Console verification token here
  },
  alternates: {
    canonical: "https://biopapro.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        {/* Preconnect to CDN so image requests don't wait on DNS + TLS */}
        <link rel="preconnect" href="https://biopapro.com" />
        <link rel="dns-prefetch" href="https://biopapro.com" />
        <link rel="prefetch" href="/world-110m.json" as="fetch" crossOrigin="anonymous" />
      </head>
      <body>
        <StructuredData />
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
