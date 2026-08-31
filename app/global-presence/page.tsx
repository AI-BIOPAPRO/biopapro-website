import type { Metadata } from "next";
import GlobalPresenceClient from "./GlobalPresenceClient";

export const metadata: Metadata = {
  title: "Wooden Cutlery Exporter India — 18+ Countries | Biopapro Mumbai",
  description:
    "Biopapro exports FSC-certified birchwood tableware from Mumbai to 18+ countries across Europe, Americas, Middle East, and Asia-Pacific. Also supplying Indian domestic market. Airlines, hospitality, food service, distributors. Request export quotation.",
  keywords: [
    // Export
    "wooden cutlery exporter India",
    "birchwood tableware exporter",
    "FSC certified cutlery exporter",
    "wooden cutlery export India",
    "wooden tableware exporter Mumbai",
    "eco cutlery exporter India",
    "birchwood cutlery global supplier",
    "wooden cutlery Europe supplier",
    "wooden cutlery USA supplier",
    // International buyer terms
    "birchwood tableware distributor",
    "wooden cutlery importer",
    "sustainable cutlery wholesale export",
    "wooden cutlery manufacturer India export",
  ],
  openGraph: {
    title: "Wooden Cutlery Exporter India — Biopapro Mumbai",
    description:
      "FSC-certified birchwood tableware exported from Mumbai to 18+ countries. Airlines, hospitality, food service. Request your export quotation.",
    type: "website",
    url: "/global-presence",
  },
  alternates: { canonical: "/global-presence" },
};

export default function GlobalPresencePage() {
  return <GlobalPresenceClient />;
}
