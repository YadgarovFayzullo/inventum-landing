import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Translate, Code, PaintBrush, ChartLineUp, Exam, Brain, BookOpenText, Hammer, Medal, Rocket,
  Star, Clock, Certificate, Plus, Minus, CheckCircle, WarningCircle, Quotes,
} from "@phosphor-icons/react";
import { Reveal, Torn, Eyebrow, Button, WordReveal, EASE } from "./ui";

/* ---------- Partners marquee ---------- */
const partners = ["Northgate University", "Silkroad Digital", "Bukhara Labs", "Orbit Language Board", "Samarkand Tech Hub", "Pamir Design Guild"];
export function Partners() {
  return (
    <section aria-label="Partners and accreditations" className="border-b border-slate-100 bg-white py-8">
      <p className="mb-6 text-center text-sm text-slate-500">Our graduates study and work with</p>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="marquee flex w-max gap-12 pr-12">
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className="text-2xl font-bold tracking-tight text-slate-400">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tagline reveal ---------- */
export function Tagline() {
  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Quotes size={40} weight="fill" className="mx-auto mb-6 text-slate-300" />
        <WordReveal
          className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          text="A learning center where curious minds build real skills, finish with projects they are proud of, and walk into interviews ready."
        />
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-8 text-left sm:grid-cols-3">
          {[["2.4x", "faster progress than self study, measured on 412 learners"], ["87.3%", "of students complete their course"], ["9 / 10", "graduates recommend us to a friend"]].map(([n, t]) => (
            <Reveal key={n}>
              <p className="text-4xl font-medium">{n}</p>
              <p className="mt-2 text-sm text-slate-500">{t}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why / four pillars ---------- */
const pillars = [
  { k: "Build your foundation", t: "Courses", d: "Structured lessons from level zero, with homework checked within 24 hours.", Icon: BookOpenText, tone: "bg-amber-100 text-amber-600" },
  { k: "Apply what you learn", t: "Projects", d: "Every module ends with a real task: a website, a speech, a portfolio piece.", Icon: Hammer, tone: "bg-emerald-100 text-emerald-600" },
  { k: "See your improvement", t: "Progress", d: "Monthly level checks and a personal dashboard so you always know where you stand.", Icon: ChartLineUp, tone: "bg-sky text-blue-600" },
  { k: "Grow without limits", t: "Outcomes", d: "Certificates, exam results and career support from our partner companies.", Icon: Medal, tone: "bg-rose-100 text-rose-500" },
];
export function Why() {
  return (
    <section id="why" className="relative overflow-hidden bg-sky-soft px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why Inventum</Eyebrow>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl"><Torn>Education built</Torn><br />for real growth</h2>
          <p className="mt-6 text-base text-slate-600">We teach in small groups, so every student speaks, builds and gets feedback in every single lesson.</p>
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <div className="group h-full rounded-3xl bg-white p-6 transition duration-500 ease-out-soft hover:-translate-y-2 hover:shadow-[0_24px_48px_-24px_rgba(11,18,32,0.3)]">
                <p className="text-sm text-slate-500">{p.k}</p>
                <h3 className="mt-2 text-2xl font-medium">{p.t}</h3>
                <div className={`mt-6 grid size-20 place-items-center rounded-2xl transition duration-500 ease-out-soft group-hover:rotate-6 group-hover:scale-110 ${p.tone}`}><p.Icon size={40} weight="duotone" /></div>
                <p className="mt-6 text-sm text-slate-600">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center"><Button href="#enroll">Start learning</Button></Reveal>
      </div>
    </section>
  );
}

/* ---------- Courses ---------- */
const courses = [
  { t: "General English A1 to B2", d: "Speak from the first lesson with a certified teacher and a group of ten.", r: "4.8", n: "1,467", h: "96h", by: "Malika Rakhimova", Icon: Translate, bg: "bg-emerald-100", fg: "text-emerald-600" },
  { t: "IELTS intensive", d: "Eight weeks of timed practice, speaking mocks and a personal band 7 plan.", r: "4.7", n: "1,654", h: "64h", by: "Daniel Whitford", Icon: Exam, bg: "bg-lime-100", fg: "text-lime-600" },
  { t: "Frontend development", d: "Build three responsive sites with HTML, CSS, JavaScript and React.", r: "4.9", n: "932", h: "120h", by: "Timur Saidov", Icon: Code, bg: "bg-indigo-100", fg: "text-indigo-600" },
  { t: "UI/UX design basics", d: "From user research to a clickable Figma prototype you can put in a portfolio.", r: "4.8", n: "1,102", h: "72h", by: "Nigora Ergasheva", Icon: PaintBrush, bg: "bg-rose-100", fg: "text-rose-500" },
  { t: "Math and logic for school", d: "Grades 7 to 11. Exam prep, olympiad problems and weekly progress reports.", r: "4.6", n: "850", h: "80h", by: "Bobur Karimov", Icon: Brain, bg: "bg-amber-100", fg: "text-amber-600" },
  { t: "Data analytics for beginners", d: "Clean data, build dashboards and present findings using Excel, SQL and Python.", r: "4.7", n: "671", h: "88h", by: "Sevara Yuldasheva", Icon: ChartLineUp, bg: "bg-violet-100", fg: "text-violet-600" },
];
export function Courses() {
  return (
    <section id="courses" className="bg-white px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our courses</Eyebrow>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl"><Torn>Skills that matter</Torn><br />in the real world</h2>
          <p className="mt-6 text-base text-slate-600">From beginner to advanced, every course ends with a project and a certificate.</p>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <Reveal key={c.t} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_8px_24px_-16px_rgba(11,18,32,0.2)] transition duration-500 ease-out-soft hover:-translate-y-2 hover:shadow-[0_28px_48px_-24px_rgba(11,18,32,0.35)]">
                <div className={`relative grid h-48 place-items-center ${c.bg}`}>
                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="rounded-full bg-white px-3 py-1 text-sm">Popular</span>
                    <span className="rounded-full bg-white px-3 py-1 text-sm">Offline and online</span>
                  </div>
                  <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }} className={c.fg}>
                    <c.Icon size={88} weight="duotone" />
                  </motion.div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-medium">{c.t}</h3>
                  <p className="mt-2 text-sm text-slate-500">{c.d}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1"><Star size={16} weight="fill" className="text-amber-400" />{c.r} <span className="text-xs text-slate-400">({c.n})</span></span>
                    <span className="flex items-center gap-1"><Clock size={16} />{c.h}</span>
                    <span className="flex items-center gap-1"><Certificate size={16} className="text-amber-500" />Certificate</span>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div>
                      <p className="text-sm font-medium">{c.by}</p>
                      <p className="text-xs text-slate-500">Instructor</p>
                    </div>
                    <a href="#enroll" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold transition duration-300 ease-out-soft group-hover:border-ink group-hover:bg-ink group-hover:text-white active:scale-[0.98]">Join course</a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
export function Steps() {
  const steps = [
    { Icon: Exam, t: "Take a free level test", d: "Fifteen minutes in the center or online. We place you in the right group." },
    { Icon: Rocket, t: "Join a small group", d: "Eight to twelve students, two or three lessons a week, evenings and weekends available." },
    { Icon: Medal, t: "Finish with a certificate", d: "Pass the final project, collect your certificate and get career support." },
  ];
  return (
    <section className="bg-sky-soft px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center"><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Start in three steps</h2></Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.1}>
              <div className="h-full rounded-3xl bg-white p-6">
                <div className="flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-2xl bg-ink text-white"><s.Icon size={24} /></div>
                  <span className="text-5xl font-semibold text-slate-200">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-medium">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
const reviews = [
  { q: "I finally feel confident speaking.", b: "After four months I passed IELTS with 7.0. The mock speaking tests made the real one feel easy.", n: "Aziza Normatova", r: "IELTS student", rot: -4, c: "bg-amber-200" },
  { q: "Real skills, not just theory.", b: "I built my first React app in week six and used it in my job interview. I got the offer.", n: "Jasur Tursunov", r: "Frontend graduate", rot: 0, c: "bg-sky" },
  { q: "My daughter asks for extra homework.", b: "Her math grade moved from 3 to 5 in one term. The monthly reports are clear and honest.", n: "Dilfuza Hamidova", r: "Parent, grade 9", rot: 4, c: "bg-rose-200" },
];
function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <figure className="relative h-full bg-white p-5 shadow-[0_24px_48px_-24px_rgba(11,18,32,0.35)]">
      <Star size={36} weight="fill" className="absolute -left-3 -top-4 -rotate-12 text-amber-400" />
      <blockquote>
        <p className="text-lg font-semibold">{r.q}</p>
        <p className="mt-2 text-sm text-slate-600">{r.b}</p>
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <span className={`grid size-10 place-items-center rounded-full text-base font-semibold ${r.c}`}>{r.n[0]}</span>
        <span><span className="block text-base font-medium">{r.n}</span><span className="text-sm text-slate-500">{r.r}</span></span>
      </figcaption>
    </figure>
  );
}

const cardSlots = [
  { left: "19%", top: "51%", rot: -5 },
  { left: "39.5%", top: "47%", rot: 0 },
  { left: "60%", top: "51%", rot: 5 },
];

// front flaps of the envelope as a % polygon of the 1536x1024 artwork, redrawn above the cards so they tuck inside
const frontFlaps = "polygon(15% 67.2%, 47.9% 89%, 49.8% 88.5%, 52.1% 89%, 84.5% 67.2%, 84.5% 100%, 15% 100%)";

export function Reviews() {
  const art = { backgroundImage: "url(/envelope.png)" };
  return (
    <section id="reviews" className="relative overflow-hidden bg-white">
      <div className="relative w-full bg-sky bg-cover bg-bottom bg-no-repeat px-4 pb-16 pt-28 lg:aspect-[3/2] lg:p-0" style={art}>
        <Reveal className="mx-auto max-w-2xl text-center lg:absolute lg:inset-x-0 lg:top-[17%] lg:mx-auto">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl"><Torn tone="white">Inventum helped me build</Torn><br /><Torn tone="white">real skills, not just theory</Torn></h2>
        </Reveal>

        {/* mobile and tablet: simple stack */}
        <div className="relative mx-auto mt-12 grid max-w-2xl gap-6 lg:hidden">
          {reviews.map((r) => <Reveal key={r.n}><ReviewCard r={r} /></Reveal>)}
        </div>

        {/* desktop: cards sit in the pocket, the artwork's front flaps are drawn over them */}
        <div className="hidden lg:block">
          {cardSlots.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: EASE }}
              className="absolute z-10 w-[21.5%]" style={{ left: c.left, top: c.top }}>
              <div style={{ transform: `rotate(${c.rot}deg)` }}><ReviewCard r={reviews[i]} /></div>
            </motion.div>
          ))}
          <div aria-hidden className="pointer-events-none absolute inset-0 z-20 bg-cover bg-bottom bg-no-repeat" style={{ ...art, clipPath: frontFlaps }} />
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faqs = [
  ["How does the free trial lesson work?", "Book a slot, attend one full lesson in a real group, and decide afterwards. There is no payment and no obligation."],
  ["How big are the groups?", "Between 8 and 12 students. We cap it so each person speaks and gets feedback in every lesson."],
  ["Can I study online?", "Yes. Most courses run both in the center and live online, with recordings available for 30 days."],
  ["Do I get a certificate?", "Every course ends with a final project. Pass it and you receive an Inventum certificate. IELTS and exam courses also prepare you for the official exam."],
  ["What if the level is wrong for me?", "We move you to a better group in the first two weeks at no cost."],
  ["How much does it cost?", "Courses start from 390,000 UZS per month. Payment in monthly instalments, and sibling discounts are available."],
];
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center"><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Questions, answered</h2></Reveal>
        <div className="mt-12 divide-y divide-slate-200 rounded-3xl border border-slate-200">
          {faqs.map(([q, a], i) => (
            <div key={q}>
              <button aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-6 text-left text-lg font-medium transition duration-300 ease-out-soft hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-blue-600">
                {q}{open === i ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: EASE }} className="overflow-hidden">
                    <p className="px-6 pb-6 text-base text-slate-600">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Enroll CTA with validation ---------- */
export function Enroll() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const phone = String(f.get("phone") || "").replace(/[^\d+]/g, "");
    const next: typeof errors = {};
    if (name.length < 2) next.name = "Enter your name so we know who to ask for.";
    if (!/^\+?\d{9,13}$/.test(phone)) next.phone = "Enter a phone number with 9 to 13 digits.";
    setErrors(next);
    if (!Object.keys(next).length) setStatus("sent");
  };
  const field = "w-full rounded-xl border bg-white px-4 py-3 text-base outline-none transition duration-300 ease-out-soft focus:border-blue-600 focus:ring-2 focus:ring-blue-200";
  return (
    <section id="enroll" className="bg-ink px-4 py-24 text-white">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Your next big step deserves a good teacher</h2>
          <p className="mt-6 text-base text-slate-300">Book a free trial lesson and a level test. We call you within one working day.</p>
          <ul className="mt-8 space-y-3 text-base text-slate-200">
            {["No payment before you decide", "Switch groups free in the first two weeks", "Online or at the center"].map((t) => (
              <li key={t} className="flex items-center gap-2"><CheckCircle size={20} weight="fill" className="text-emerald-400" />{t}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-white p-6 text-ink">
            {status === "sent" ? (
              <div role="status" className="py-12 text-center">
                <CheckCircle size={48} weight="fill" className="mx-auto text-emerald-500" />
                <p className="mt-4 text-xl font-semibold">Request received</p>
                <p className="mt-2 text-sm text-slate-600">We will call you within one working day to confirm your trial lesson.</p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium">Full name</label>
                  <input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} className={`${field} ${errors.name ? "border-red-500" : "border-slate-200"}`} placeholder="Aziza Normatova" />
                  {errors.name && <p className="mt-1 flex items-center gap-1 text-sm text-red-600"><WarningCircle size={16} />{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium">Phone number</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} className={`${field} ${errors.phone ? "border-red-500" : "border-slate-200"}`} placeholder="+998 90 123 45 67" />
                  {errors.phone && <p className="mt-1 flex items-center gap-1 text-sm text-red-600"><WarningCircle size={16} />{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="course" className="mb-1 block text-sm font-medium">Course</label>
                  <select id="course" name="course" className={`${field} border-slate-200`}>
                    {courses.map((c) => <option key={c.t}>{c.t}</option>)}
                  </select>
                </div>
                <Button type="submit" className="w-full">Book my free lesson</Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
