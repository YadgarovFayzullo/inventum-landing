import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, Sparkle } from "@phosphor-icons/react";
import { EASE, Button } from "./ui";

const links = [
  { href: "#home", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#why", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav aria-label="Main" className="flex w-full max-w-5xl items-center justify-between rounded-full bg-white/75 py-2 pl-4 pr-2 shadow-[0_8px_32px_-12px_rgba(11,18,32,0.25)] backdrop-blur-xl">
          <a href="#home" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="grid size-8 place-items-center rounded-full bg-ink text-amber-300"><Sparkle weight="fill" size={16} /></span>
            Inventum
          </a>
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((l, i) => (
              <li key={l.href}>
                <a href={l.href} aria-current={i === 0 ? "page" : undefined} className={`text-sm font-medium transition duration-300 ease-out-soft hover:text-ink ${i === 0 ? "text-ink" : "text-slate-500"}`}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a href="#enroll" className="hidden px-3 text-sm font-semibold sm:block">Log in</a>
            <a href="#enroll" className="hidden rounded-full bg-ink px-3 py-2 text-sm font-semibold text-white transition duration-300 ease-out-soft hover:-translate-y-0.5 active:scale-[0.98] sm:block">Book a free trial</a>
            <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-full bg-slate-100 md:hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={open ? "x" : "m"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.3, ease: EASE }}>
                  {open ? <X size={20} /> : <List size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: EASE }} className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-white/95 px-8 backdrop-blur-2xl md:hidden">
            {links.map((l, i) => (
              <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.4), ease: EASE }} className="py-2 text-4xl font-semibold">{l.label}</motion.a>
            ))}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4, ease: EASE }} className="mt-6">
              <Button href="#enroll">Book a free trial</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
