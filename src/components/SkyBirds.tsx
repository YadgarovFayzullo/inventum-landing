import { useRef } from "react";
import { useInView } from "framer-motion";

/** Footer photo with its painted birds replaced by flapping, drifting SVG gulls.
 *  The SVG shares the photo's 1024x1536 coordinate space, so birds stay locked to the sky at any size. */
// s = size (smaller = further away), blur adds atmospheric depth to the distant ones
const birds = [
  { x: 629, y: 360, s: 0.72, blur: 0, dur: 46, flap: 0.62, delay: -4 },
  { x: 593, y: 362, s: 0.46, blur: 0.5, dur: 52, flap: 0.7, delay: -18 },
  { x: 528, y: 379, s: 0.56, blur: 0.3, dur: 44, flap: 0.66, delay: -30 },
  { x: 576, y: 388, s: 0.68, blur: 0, dur: 50, flap: 0.58, delay: -9 },
  { x: 658, y: 390, s: 0.42, blur: 0.6, dur: 56, flap: 0.74, delay: -24 },
  { x: 620, y: 400, s: 0.52, blur: 0.3, dur: 48, flap: 0.68, delay: -36 },
  { x: 558, y: 407, s: 0.44, blur: 0.5, dur: 54, flap: 0.72, delay: -14 },
  { x: 645, y: 419, s: 0.4, blur: 0.6, dur: 58, flap: 0.64, delay: -42 },
];

export function SkyPhoto() {
  return (
    <svg role="img" aria-label="Three students sitting in a sunny park with a laptop" viewBox="0 0 1024 1536" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
      <image href="/footer.png" width="1024" height="1536" />
    </svg>
  );
}

/** Drawn above the footer content so the flock stays visible while it crosses the sky. */
export function SkyBirds() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { margin: "100px" });
  return (
    <svg ref={ref} aria-hidden viewBox="0 0 1024 1536" preserveAspectRatio="xMidYMid slice" className="sky-birds pointer-events-none absolute inset-0 z-20 size-full" data-play={inView}>
      <defs>
        <linearGradient id="wingL" x1="0" y1="0" x2="1" y2="0.2">
          <stop offset="0" stopColor="#c9d8ea" /><stop offset="0.45" stopColor="#ffffff" /><stop offset="1" stopColor="#f1f6fc" />
        </linearGradient>
        <linearGradient id="wingR" x1="1" y1="0" x2="0" y2="0.2">
          <stop offset="0" stopColor="#c9d8ea" /><stop offset="0.45" stopColor="#ffffff" /><stop offset="1" stopColor="#f1f6fc" />
        </linearGradient>
        <radialGradient id="body" cx="0.4" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#b9cbe2" />
        </radialGradient>
        <filter id="birdShadow" x="-40%" y="-40%" width="180%" height="220%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="1.6" floodColor="#2f5f9c" floodOpacity="0.35" />
        </filter>
      </defs>
      {birds.map((b, i) => (
        <g key={i} transform={`translate(${b.x} ${b.y})`}>
          <g className="bird-drift" style={{ animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }}>
            <g transform={`scale(${b.s})`} filter="url(#birdShadow)" style={b.blur ? { filter: `blur(${b.blur}px) drop-shadow(0 2px 1.5px rgba(47,95,156,0.35))` } : undefined}>
              {/* tail and body sit still; only the wings beat */}
              <path d="M-1.5 5 L0 13 L1.5 5 Z" fill="#dfe9f5" />
              <ellipse cx="0" cy="3" rx="3.4" ry="5.4" fill="url(#body)" />
              <circle cx="0" cy="-3.2" r="2.3" fill="url(#body)" />
              <path d="M-0.6 -4.6 L0 -7.6 L0.6 -4.6 Z" fill="#f6c76b" />
              <g className="bird-flap" style={{ animationDuration: `${b.flap}s`, animationDelay: `${(i * 0.17).toFixed(2)}s` }}>
                <path d="M-1.5 1 C -5 -7 -15 -11 -27 -6 C -20 -4.5 -13 -1 -9 3.5 C -6 4.5 -3 4 -1.5 3 Z" fill="url(#wingL)" />
                <path d="M1.5 1 C 5 -7 15 -11 27 -6 C 20 -4.5 13 -1 9 3.5 C 6 4.5 3 4 1.5 3 Z" fill="url(#wingR)" />
                <path d="M-27 -6 C -20 -7 -14 -5 -10 -1.5" fill="none" stroke="#9fb6d3" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
                <path d="M27 -6 C 20 -7 14 -5 10 -1.5" fill="none" stroke="#9fb6d3" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
              </g>
            </g>
          </g>
        </g>
      ))}
    </svg>
  );
}
