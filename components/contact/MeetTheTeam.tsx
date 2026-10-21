"use client";

/**
 * S4.5 — Meet the Team
 *
 * Horizontally scrollable strip of team cards, same visual language as
 * the Global Contact Network cards above it (parchment card, thin border,
 * gold accent). Currently placeholder slots — real photos (generated via
 * a consistent-background ChatGPT prompt), names, and titles go here once
 * the user sends them. Kept as a real, wired-up component (not commented
 * out) so swapping in real data later is a one-file data change, not a
 * rebuild.
 */

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { User } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

// Placeholder roster — replace `photo` with a real image path and fill in
// `name` once photos are ready. Add/remove entries freely; the strip
// scrolls horizontally regardless of count.
const TEAM = [
  { role: "Founder", name: null as string | null, photo: null as string | null },
  { role: "Co-Founder", name: null as string | null, photo: null as string | null },
  { role: "Sales Team", name: null as string | null, photo: null as string | null },
] as const;

function TeamCard({ member }: { member: (typeof TEAM)[number] }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center text-center p-6"
      style={{ width: 220, background: "#FBF8F2", border: "1px solid #DDD3C5" }}
    >
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center mb-4 flex-shrink-0"
        style={{ border: "1.5px dashed #DDD3C5", background: "#F6F1E8" }}
      >
        {member.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={member.photo} alt={member.name ?? member.role} className="w-full h-full rounded-full object-cover" />
        ) : (
          <User size={32} strokeWidth={1.5} style={{ color: "#B8A898" }} />
        )}
      </div>
      <p className="font-sans font-semibold text-[14px] text-ink mb-1">
        {member.name ?? "Photo coming soon"}
      </p>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: "#C89A5B" }}>
        {member.role}
      </p>
    </div>
  );
}

export default function MeetTheTeam() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#F6F1E8" }} className="paper" aria-labelledby="team-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="05" label="Meet the Team" />
          </motion.div>
          <motion.h2
            id="team-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="font-display font-light text-ink leading-[0.95] max-w-2xl"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
          >
            The people
            <br />
            <span style={{ color: "#C89A5B" }}>behind every shipment.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          className="flex gap-5 overflow-x-auto pb-4"
          style={{ scrollSnapType: "x proximity" }}
        >
          {TEAM.map((member) => (
            <div key={member.role} style={{ scrollSnapAlign: "start" }}>
              <TeamCard member={member} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
