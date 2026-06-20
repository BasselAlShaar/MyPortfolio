"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Sheet } from "./Sheet";
import { profile } from "@/lib/data";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}`, Icon: Phone },
  { label: "GitHub", value: "View profile", href: profile.github, Icon: Github },
  { label: "LinkedIn", value: "View profile", href: profile.linkedin, Icon: Linkedin },
];

export function Contact() {
  return (
    <Sheet id="contact" number="05" label="Contact" tone="dark">
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-medium text-paperwhite leading-tight mb-6">
            Have a project worth
            <br />
            <span className="text-accent">drafting properly?</span>
          </h2>
          <p className="text-mute text-base md:text-lg max-w-md mb-8 leading-relaxed">
            I take on a small number of engagements at a time — product
            builds, technical audits, and the occasional fractional CTO
            role. Tell me what you&rsquo;re working on.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-accent text-ink font-mono text-xs tracking-[0.14em] uppercase px-5 py-3.5 hover:bg-accent2 transition-colors"
          >
            Start a conversation
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="border border-line/25 h-fit"
        >
          <div className="px-5 py-3 border-b border-line/25 font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
            Channels
          </div>
          {channels.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label === "Email" || c.label === "Phone" ? undefined : "_blank"}
              rel={c.label === "Email" || c.label === "Phone" ? undefined : "noreferrer"}
              className={`flex items-center justify-between px-5 py-4 group hover:bg-ink2 transition-colors ${
                i !== channels.length - 1 ? "border-b border-line/15" : ""
              }`}
            >
              <span className="flex items-center gap-3">
                <c.Icon size={15} className="text-mute group-hover:text-accent transition-colors" />
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-mute">
                  {c.label}
                </span>
              </span>
              <span className="text-sm text-paperwhite font-medium">{c.value}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </Sheet>
  );
}
