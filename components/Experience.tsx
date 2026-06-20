"use client";

import { motion } from "framer-motion";
import { Sheet } from "./Sheet";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Sheet id="experience" number="04" label="Experience" tone="light">
      <h2 className="font-display text-3xl md:text-4xl font-medium text-ink mb-12">
        Where I&rsquo;ve worked.
      </h2>

      <div className="relative pl-8 md:pl-10">
        <div className="absolute left-[3px] md:left-1 top-2 bottom-2 w-px bg-ink/15" />

        <div className="space-y-12">
          {experience.map((e, i) => (
            <motion.div
              key={e.org}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="relative grid md:grid-cols-[180px_1fr] gap-2 md:gap-10"
            >
              <span className="absolute -left-8 md:-left-10 top-1.5 w-[7px] h-[7px] rounded-full bg-accent ring-4 ring-paper" />
              <span className="font-mono text-xs tracking-wide text-mute2 font-feature-tnum pt-0.5">
                {e.period}
              </span>
              <div>
                <h3 className="font-display text-xl font-medium text-ink">
                  {e.role}{" "}
                  <span className="text-mute2 font-body font-normal">
                    · {e.org}
                  </span>
                </h3>
                <p className="mt-2 text-sm md:text-base text-mute2 leading-relaxed max-w-2xl">
                  {e.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Sheet>
  );
}
