"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { BlueprintGrid } from "./BlueprintGrid";
import { TitleBlock } from "./TitleBlock";
import { profile } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-ink">
      <BlueprintGrid />

      <div className="relative flex-1 flex items-center">
        <div className="max-w-6xl w-full mx-auto px-6 md:px-10 pt-28 pb-16">
          <motion.p
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-6"
          >
            Introduction
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="font-display font-medium text-[2.0rem] leading-[1.05] sm:text-3xl md:text-4xl max-w-4xl text-paperwhite"
          >
            I build software the way engineers draft blueprints —
            <span className="text-line"> precise</span>,
            <span className="text-accent"> considered</span>, built to last.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-7 max-w-xl text-base md:text-lg text-mute leading-relaxed"
          >
            I&rsquo;m {profile.name}, a {profile.role.toLowerCase()}. I spend
            most of my time turning rough ideas into working products —
            full-stack apps, AI-powered tools, the occasional game built
            just to see if I could.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-accent text-ink font-mono text-xs tracking-[0.14em] uppercase px-5 py-3.5 hover:bg-accent2 transition-colors"
            >
              View selected work
              <ArrowUpRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-line/40 text-paperwhite font-mono text-xs tracking-[0.14em] uppercase px-5 py-3.5 hover:border-accent hover:text-accent transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>

      <div className="relative max-w-6xl w-full mx-auto px-6 md:px-10 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-mute"
        >
          <ArrowDown size={13} className="animate-blink" />
          Scroll to explore the set
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
        >
          <TitleBlock sheet="01" />
        </motion.div>
      </div>
    </section>
  );
}
