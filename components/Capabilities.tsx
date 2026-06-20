"use client";

import { motion } from "framer-motion";
import { Sheet } from "./Sheet";
import { capabilities } from "@/lib/data";

export function Capabilities() {
  return (
    <Sheet id="capabilities" number="03" label="Capabilities — Legend" tone="dark">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-medium text-paperwhite">
          What I bring to a project.
        </h2>
        <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-mute">
          Key to symbols used throughout this set
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line/15">
        {capabilities.map((c, i) => (
          <motion.div
            key={c.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            className="bg-ink p-6"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2.5 h-2.5 border border-accent rotate-45" />
              <h3 className="font-mono text-xs tracking-[0.16em] uppercase text-accent">
                {c.group}
              </h3>
            </div>
            <ul className="space-y-3">
              {c.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-mute leading-relaxed flex items-start gap-2"
                >
                  <span className="mt-2 w-1 h-1 bg-line shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Sheet>
  );
}
