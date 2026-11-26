import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Biopapro — Our Story, Team & Mission",
  description:
    "Founded in 2019 in Mumbai by Yash Chandan, Nikunj Bhansali and Kushal Bhansali, Biopapro is India's largest wooden cutlery manufacturer. 380+ employees, 70%+ women, 100M+ pieces/month, supplying 18+ countries.",
  keywords: [
    "about biopapro",
    "biopapro founders",
    "biopapro team",
    "wooden cutlery manufacturer India story",
    "eco cutlery company India",
    "sustainable tableware company India",
    "biopapro history",
    "biopapro mission",
    "biopapro about us",
  ],
  openGraph: {
    title: "About Biopapro — Wooden Cutlery Manufacturer Since 2019",
    description:
      "Founded in Mumbai in 2019 to end single-use plastic. 380+ employees. 100M+ pieces/month. 18+ export markets. India's eco cutlery manufacturer.",
    type: "website",
    url: "/about",
    images: ["/opengraph-image"],
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutClient />;
}
