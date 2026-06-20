"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Sheet } from "./Sheet";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Sheet id="work" number="02" label="Selected Work" tone="light">
      <h2 className="font-display text-3xl md:text-4xl font-medium text-ink mb-3">
        A few things I&rsquo;ve shipped.
      </h2>
      <p className="text-mute2 text-base md:text-lg max-w-2xl mb-12">
        Six projects that show how I think through a problem end to end —
        from the first schema decision to the model or feature that proved
        it worked.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
            className="group relative flex flex-col border border-ink/15 bg-paperwhite hover:border-accent transition-colors"
          >
            <div className="px-5 py-3 border-b border-ink/10">
              <span className="font-mono text-[11px] tracking-[0.16em] text-mute2">
                {p.fig}
              </span>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-display text-xl font-medium text-ink mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-mute2 leading-relaxed mb-6 flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-wide uppercase border border-ink/15 text-mute2 px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-ink/10">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display text-2xl font-medium text-accent">
                    {p.metric.value}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-mute2">
                    {p.metric.label}
                  </span>
                </div>

                {/* Two independent destinations — never nest <a> tags, so
                    these live as siblings rather than wrapping the card. */}
                <div className="flex items-center gap-5">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-mute2 hover:text-accent transition-colors"
                    >
                      <ArrowUpRight size={13} />
                      Live site
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-mute2 hover:text-accent transition-colors"
                    >
                      <Github size={13} />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Sheet>
  );
}
