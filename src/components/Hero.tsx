import { motion } from "framer-motion";
import { Button, EASE } from "./ui";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-sky pt-32">
      <div className="relative mx-auto flex max-w-[680px] flex-col items-center px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="bg-gradient-to-r from-black to-[#666] bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl">
          Learn smarter.<br />Grow faster.<br />Succeed anywhere.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: EASE }} className="mt-6 max-w-[680px] text-base text-slate-700">
          Inventum Education runs small group courses in English, IT, design and exam prep. Teachers who work in the field, classes of 8 to 12, and a certificate you can show employers.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: EASE }} className="mt-8">
          <Button href="#enroll">Book a free trial lesson</Button>
        </motion.div>
      </div>

      {/* full width, static, flush with the bottom of the hero so nobody is boxed in */}
      <img
        src="/students.png"
        alt="A group of nine cheerful students with backpacks pointing up and smiling"
        className="relative -mb-px mt-[-24px] block w-full select-none"
        draggable={false}
      />
    </section>
  );
}
