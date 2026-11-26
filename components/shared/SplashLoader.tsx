"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const TAGLINES = [
  "Crafted from Birch",
  "100M+ Units / Month",
  "FSC® 100% Certified",
  "18+ Export Markets",
];

const GLYPHS: { cls: string; clip: string }[] = [
  { cls: "bp-cup-body", clip: "inset(30.05% 39.7%  31.55% 37.1%)" },
  { cls: "bp-straw",    clip: "inset(0%     39.7%  69.95% 37.1%)" },
  { cls: "bp-letter-b", clip: "inset(0%     62.9%  31.55% 0%)"    },
  { cls: "bp-letter-o", clip: "inset(14%    0%     31.55% 60.25%)" },
  { cls: "bp-reg-mark", clip: "inset(0%     0%     76%    84%)"   },
  { cls: "bp-papro-p1", clip: "inset(68.45% 82.2%  0%     0%)"    },
  { cls: "bp-papro-a",  clip: "inset(68.45% 61.8%  0%     17.8%)" },
  { cls: "bp-papro-p2", clip: "inset(68.45% 43.4%  0%     38.2%)" },
  { cls: "bp-papro-r",  clip: "inset(68.45% 24.4%  0%     56.6%)" },
  { cls: "bp-papro-o",  clip: "inset(68.45% 0%     0%     75.6%)" },
];

const SPLASH_CSS = `
.bp-ghost {
  position:fixed; top:50%; left:50%;
  transform:translate(-50%,-50%);
  font-family:var(--font-outfit,sans-serif); font-weight:900;
  font-size:clamp(72px,20vw,220px); letter-spacing:-0.04em;
  color:#1A4731; opacity:.04; white-space:nowrap;
  pointer-events:none; user-select:none;
  animation:bp-ghost-pulse 7s ease-in-out infinite; z-index:0;
}
@keyframes bp-ghost-pulse{0%,100%{opacity:.028}55%{opacity:.058}}

.bp-vignette {
  position:fixed; inset:0;
  background:radial-gradient(ellipse at center,transparent 38%,rgba(220,205,175,.42) 100%);
  pointer-events:none; z-index:0;
}

.bp-center {
  position:relative; z-index:1;
  display:flex; flex-direction:column; align-items:center; gap:28px;
}

.bp-logo-wrap {
  position:relative;
  width:clamp(calc(400px + 140px),calc(68vw + 140px),540px);
  height:clamp(calc(400px + 140px),calc(68vw + 140px),540px);
  display:flex; align-items:center; justify-content:center;
}

.bp-ring {
  position:absolute; border-radius:50%;
  border:1.5px solid rgba(26,71,49,.08);
  top:50%; left:50%;
}
.bp-ring-1 {
  width:min(490px,calc(68vw + 90px));
  height:min(490px,calc(68vw + 90px));
  transform:translate(-50%,-50%);
  animation:bp-orbit-cw 8s linear infinite;
}
.bp-ring-1::after {
  content:''; position:absolute;
  width:5px; height:5px;
  background:#1A4731; opacity:.5; border-radius:50%;
  top:-2.5px; left:50%; margin-left:-2.5px;
}
.bp-ring-2 {
  width:min(540px,calc(68vw + 140px));
  height:min(540px,calc(68vw + 140px));
  transform:translate(-50%,-50%);
  border-color:rgba(26,71,49,.045);
  animation:bp-orbit-ccw 14s linear infinite;
}
.bp-ring-2::after {
  content:''; position:absolute;
  width:3.5px; height:3.5px;
  background:#E97316; opacity:.55; border-radius:50%;
  bottom:-2px; left:28%; margin-left:-1.75px;
}
@keyframes bp-orbit-cw{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(360deg)}}
@keyframes bp-orbit-ccw{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(-360deg)}}

.bp-bloom {
  position:absolute; width:62%; height:62%;
  top:50%; left:50%; transform:translate(-50%,-50%);
  border-radius:50%;
  background:radial-gradient(ellipse at center,rgba(242,224,190,.6) 0%,rgba(237,214,170,.3) 38%,transparent 72%);
  pointer-events:none; z-index:0;
  animation:bp-bloom-pulse 4.2s ease-in-out infinite;
}
@keyframes bp-bloom-pulse{0%,100%{opacity:.65;transform:translate(-50%,-50%) scale(1)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.12)}}

.bp-logo {
  position:relative;
  width:min(400px,68vw); height:min(400px,68vw);
  z-index:1;
}

.bp-glyph {
  position:absolute; inset:0;
}

.bp-logo:not(.playing) .bp-glyph { opacity:0; }

/* Entry + idle animations */
.bp-logo.playing .bp-letter-b {
  animation:
    bp-enter-b    .65s cubic-bezier(.16,1,.3,1) .05s both,
    bp-float-y    4.2s ease-in-out .75s infinite;
}
@keyframes bp-enter-b{from{transform:translateX(-62vw);opacity:0}to{transform:translateX(0);opacity:1}}

.bp-logo.playing .bp-letter-o {
  animation:
    bp-enter-o    .65s cubic-bezier(.16,1,.3,1) .05s both,
    bp-float-y    4.2s ease-in-out .75s infinite;
}
@keyframes bp-enter-o{from{transform:translateX(62vw);opacity:0}to{transform:translateX(0);opacity:1}}

.bp-logo.playing .bp-cup-body {
  animation:
    bp-enter-cup  .6s  cubic-bezier(.16,1,.3,1) .18s both,
    bp-float-y    4.2s ease-in-out .82s infinite;
}
@keyframes bp-enter-cup{from{transform:translateY(55vh);opacity:0}to{transform:translateY(0);opacity:1}}

.bp-logo.playing .bp-straw {
  animation:
    bp-enter-straw .52s cubic-bezier(.16,1,.3,1) .08s both,
    bp-straw-sway  3.8s ease-in-out .65s infinite;
}
@keyframes bp-enter-straw{from{transform:translateY(-48vh) rotate(-18deg) scaleX(.8);opacity:0}to{transform:translateY(0) rotate(0deg) scaleX(1);opacity:1}}
@keyframes bp-straw-sway{0%,100%{transform:rotate(0deg) translateY(0)}28%{transform:rotate(-3.5deg) translateY(-3px)}65%{transform:rotate(2.5deg) translateY(2px)}}

.bp-logo.playing .bp-reg-mark {
  animation:bp-enter-reg .42s cubic-bezier(.34,1.56,.64,1) .42s both;
}
@keyframes bp-enter-reg{from{transform:scale(.1);opacity:0}to{transform:scale(1);opacity:1}}

.bp-logo.playing .bp-papro-p1{animation:bp-enter-papro .55s cubic-bezier(.16,1,.3,1) .28s both,bp-float-y 4.2s ease-in-out .9s  infinite}
.bp-logo.playing .bp-papro-a {animation:bp-enter-papro .55s cubic-bezier(.16,1,.3,1) .33s both,bp-float-y 4.2s ease-in-out .95s infinite}
.bp-logo.playing .bp-papro-p2{animation:bp-enter-papro .55s cubic-bezier(.16,1,.3,1) .38s both,bp-float-y 4.2s ease-in-out 1.0s  infinite}
.bp-logo.playing .bp-papro-r {animation:bp-enter-papro .55s cubic-bezier(.16,1,.3,1) .43s both,bp-float-y 4.2s ease-in-out 1.05s infinite}
.bp-logo.playing .bp-papro-o {animation:bp-enter-papro .55s cubic-bezier(.16,1,.3,1) .48s both,bp-float-y 4.2s ease-in-out 1.1s  infinite}

@keyframes bp-enter-papro{from{transform:translateY(45vh);opacity:0}to{transform:translateY(0);opacity:1}}
@keyframes bp-float-y{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}

/* Taglines */
.bp-taglines{position:relative;height:20px}
.bp-tagline {
  position:absolute; left:50%; transform:translateX(-50%) translateY(5px);
  font-family:var(--font-jetbrains,monospace); font-size:10px;
  letter-spacing:.3em; text-transform:uppercase;
  color:#7A6B54; white-space:nowrap; opacity:0;
  transition:opacity .6s ease,transform .6s ease;
}
.bp-tagline.active{opacity:1;transform:translateX(-50%) translateY(0)}

/* Full-width progress */
.bp-progress-track {
  position:fixed; bottom:0; left:0; right:0;
  height:2px; background:rgba(26,71,49,.07);
  overflow:hidden; z-index:10;
}
.bp-progress-bar {
  height:100%; width:35%;
  background:linear-gradient(to right,rgba(27,59,47,.18) 0%,#1B3B2F 50%,#8D5432 100%);
  animation:bp-sweep 1.75s cubic-bezier(.37,0,.63,1) infinite;
}
@keyframes bp-sweep{from{transform:translateX(-115%)}to{transform:translateX(400%)}}
`;

export default function SplashLoader({ onDone }: { onDone?: () => void }) {
  const [tagIdx, setTagIdx]   = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tagTimer  = setInterval(() => setTagIdx(i => (i + 1) % TAGLINES.length), 2500);
    const exitTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onDone?.(), 600);
    }, 2300);
    return () => { clearInterval(tagTimer); clearTimeout(exitTimer); };
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "#F5F0E6",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
          role="status"
          aria-label="Loading Biopapro"
        >
          {/* Scoped CSS */}
          <style>{SPLASH_CSS}</style>

          {/* Ghost watermark */}
          <div className="bp-ghost" aria-hidden="true">BIOPAPRO</div>

          {/* Vignette */}
          <div className="bp-vignette" aria-hidden="true" />

          {/* Center stage */}
          <div className="bp-center">
            <div className="bp-logo-wrap">
              <div className="bp-ring bp-ring-1" />
              <div className="bp-ring bp-ring-2" />
              <div className="bp-bloom" aria-hidden="true" />

              {/* Logo — clip-path glyphs */}
              <div className="bp-logo playing">
                {GLYPHS.map(({ cls, clip }) => (
                  <div key={cls} className={`bp-glyph ${cls}`} style={{ clipPath: clip }}>
                    <Image
                      src="/biopapro-logo.png"
                      alt=""
                      fill
                      priority
                      sizes="min(400px, 68vw)"
                      style={{ objectFit: "contain", objectPosition: "left top" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Cycling taglines */}
            <div className="bp-taglines" aria-live="polite">
              {TAGLINES.map((t, i) => (
                <div key={t} className={`bp-tagline${i === tagIdx ? " active" : ""}`}>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Full-width progress bar */}
          <div className="bp-progress-track">
            <div className="bp-progress-bar" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
