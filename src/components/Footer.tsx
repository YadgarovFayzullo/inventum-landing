import { Brain, Flag, XLogo, YoutubeLogo, LinkedinLogo } from "@phosphor-icons/react";
import { SkyPhoto, SkyBirds } from "./SkyBirds";
import { Reveal, Torn, Button } from "./ui";

const cards = [
  { Icon: Brain, tone: "bg-sky text-blue-600", t: "Learn by doing", d: "Hands on lessons and real world projects help you apply skills immediately." },
  { Icon: Flag, tone: "bg-amber-100 text-amber-600", t: "Progress that is clear", d: "Track your growth, build confidence, and move forward with purpose." },
];
const nav = ["Home", "Courses", "About", "Reviews", "FAQ"];
const hrefs = ["#home", "#courses", "#why", "#reviews", "#faq"];

export default function Footer() {
  return (
    <footer className="relative -mt-12 overflow-hidden rounded-t-[48px] bg-sky">
      <SkyPhoto />
      <div className="relative flex aspect-[2/3] min-h-[900px] flex-col justify-between px-4 pb-8 pt-24 sm:aspect-[4/5] lg:aspect-[5/6]">
        <div>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-base text-slate-700">Our philosophy</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl"><Torn>More than courses</Torn><br />A smarter way to learn</h2>
            <p className="mx-auto mt-6 max-w-[680px] text-base text-slate-700">Practical, industry ready lessons taught by expert instructors. Learn at your own pace or live online from anywhere.</p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <div className="flex h-full flex-col items-center rounded-3xl bg-white p-6 text-center shadow-[0_24px_48px_-24px_rgba(11,18,32,0.35)]">
                  <div className={`grid size-24 place-items-center rounded-3xl ${c.tone}`}><c.Icon size={56} weight="duotone" /></div>
                  <h3 className="mt-6 text-xl font-medium">{c.t}</h3>
                  <p className="mt-2 text-sm text-slate-600">{c.d}</p>
                  <div className="mt-6"><Button href="#enroll" className="!py-2 !text-sm">Join course</Button></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <p aria-hidden className="select-none text-center text-5xl font-bold uppercase tracking-tight text-white drop-shadow-[0_8px_32px_rgba(40,90,10,0.45)] sm:text-8xl lg:text-9xl">Inventum</p>
          <nav aria-label="Footer" className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-full bg-white/30 px-6 py-3 backdrop-blur-md">
            {nav.map((n, i) => (
              <a key={n} href={hrefs[i]} className="text-sm font-medium text-white transition duration-300 ease-out-soft hover:-translate-y-0.5">{n}</a>
            ))}
          </nav>
          <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center justify-between gap-3 text-sm text-white sm:flex-row">
            <p>© 2026 Inventum Education. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:underline">Privacy policy</a>
              <a href="#terms" className="hover:underline">Terms</a>
              <span className="flex items-center gap-3">
                <a href="#" aria-label="X"><XLogo size={20} /></a>
                <a href="#" aria-label="YouTube"><YoutubeLogo size={20} /></a>
                <a href="#" aria-label="LinkedIn"><LinkedinLogo size={20} /></a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <SkyBirds />
    </footer>
  );
}
