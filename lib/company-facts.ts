/**
 * Biopapro Company Facts — single canonical source of truth.
 *
 * Every hardcoded company claim in this codebase (founding year, workforce,
 * production volume, location, etc.) should read from here instead of
 * redeclaring its own value. Verified against biopapro.com/pages/about-us
 * and the site's own JSON-LD structured data on 2026-08-26.
 *
 * Only add a field once its value is verified. Certification count/numbers
 * are deliberately NOT here yet — that set is unresolved (see docs/TASKS.md)
 * and is out of scope until the real certification documents are confirmed.
 */

export const COMPANY_FACTS = {
  founded:            2019,
  location:           "Mumbai, Maharashtra, India",
  employees:          380,
  womenPercent:       70,
  unitsPerMonth:      100_000_000,
  tonsPerMonth:       300,
  plasticSavedPerDay: 6500,
  exportMarkets:      18,
  certifications:     6, // unresolved 6-vs-9 discrepancy — see docs/TASKS.md, do not change without business confirmation
} as const;

export const OFFICES = [
  {
    region:  "India — Manufacturing HQ",
    address: "G1 Khetwadi, 12th Lane, Girgaon, Mumbai 400004, Maharashtra",
    email:   "yash@biopapro.com",
    phone:   "+91 70211 03763",
    type:    "origin" as const,
  },
];
