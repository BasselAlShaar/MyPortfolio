"use client";

import { motion } from "framer-motion";
import { Sheet } from "./Sheet";
import { profile } from "@/lib/data";

const specs = [
  ["LOCATION", "Beirut, Lebanon"],
  ["FOCUS", "Full-stack & AI-powered apps"],
  ["EDUCATION", "B.S. Computer Science, AUST"],
  ["AVAILABILITY", "Open to new opportunities"],
];

export function About() {
  return (
    <Sheet id="about" number="01" label="About" tone="dark">
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-medium text-paperwhite mb-6">
            I like building things that actually ship.
          </h2>
          <div className="space-y-5 text-mute text-base md:text-lg leading-relaxed">
            <p>
              I&rsquo;m a Computer Science graduate from AUST with a habit of
              finishing what I start — from freelance client sites to a
              CNN-GRU model that classifies music by genre. I&rsquo;m most
              comfortable moving across the stack: React or Flutter on the
              front, Node.js, Laravel, or Flask underneath, whatever the
              project actually needs.
            </p>
            <p>
              Outside of client work, I build for the sake of building: a
              cryptography toolkit with an AI cipher-breaker, a real-time
              World Cup tracker, a collaborative code editor. That habit
              earned a 2nd-place finish at the AUST Hackathon and a top-five
              placement for my senior project, an AI-powered smart wardrobe
              app. I also spent two years behind a camera shooting weddings
              and events, which is where I actually learned to work fast
              under pressure.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="border border-line/25 h-fit"
        >
          <div className="px-5 py-3 border-b border-line/25 font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
            Spec — {profile.name}
          </div>
          <dl>
            {specs.map(([k, v], i) => (
              <div
                key={k}
                className={`flex items-center justify-between px-5 py-4 ${
                  i !== specs.length - 1 ? "border-b border-line/15" : ""
                }`}
              >
                <dt className="font-mono text-[11px] tracking-[0.14em] uppercase text-mute">
                  {k}
                </dt>
                <dd className="text-sm text-paperwhite font-medium text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </Sheet>
  );
}
