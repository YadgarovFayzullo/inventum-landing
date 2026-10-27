import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function Torn({ children, tone = "sky" }: { children: ReactNode; tone?: "sky" | "white" }) {
  return (
    <span className={`torn inline-block px-3 py-1 ${tone === "sky" ? "bg-sky" : "bg-white"}`}>{children}</span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-base text-slate-600">{children}</p>;
}

export function Button({
  children, href, variant = "dark", className = "", type, onClick,
}: {
  children: ReactNode; href?: string; variant?: "dark" | "light"; className?: string;
  type?: "button" | "submit"; onClick?: () => void;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-semibold shadow-[0_12px_24px_-12px_rgba(0,0,0,0.5)] transition duration-300 ease-out-soft hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
    variant === "dark" ? "bg-ink text-white hover:bg-black" : "bg-white text-ink border border-slate-200 hover:bg-slate-50"
  } ${className}`;
  return href ? (
    <a href={href} className={cls}>{children}</a>
  ) : (
    <button type={type ?? "button"} onClick={onClick} className={cls}>{children}</button>
  );
}

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.3, 1]);
  return <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">{word}</motion.span>;
}

/** Tagline reveal: each word moves from muted to full colour as the block scrolls through the viewport. */
export function WordReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, Math.min(1, (i + 1) / words.length)]} />
      ))}
    </p>
  );
}
