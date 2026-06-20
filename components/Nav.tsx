"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#experience", label: "Experience" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line/15 bg-ink/85 backdrop-blur supports-[backdrop-filter]:bg-ink/70">
      <div className="max-w-[90rem] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm tracking-[0.18em] text-paperwhite border border-line/40 px-2.5 py-1.5 leading-none hover:border-accent hover:text-accent transition-colors"
        >
          {profile.initials}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs tracking-[0.14em] uppercase text-mute hover:text-paperwhite transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] uppercase bg-accent text-ink px-4 py-2.5 hover:bg-accent2 transition-colors"
        >
          Let&rsquo;s talk
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-paperwhite border border-line/30"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-t border-line/15 bg-ink"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm tracking-[0.1em] uppercase text-mute hover:text-paperwhite py-3 border-b border-line/10"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 text-center font-mono text-xs tracking-[0.14em] uppercase bg-accent text-ink px-4 py-3"
              >
                Let&rsquo;s talk
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
