# Blueprint Portfolio

A responsive, professional portfolio site built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Design concept

Instead of a generic template look, the site borrows its visual language from
technical drafting: a faint blueprint grid, registration/crosshair marks at
section corners, a drafting **title block** stamp (drawn by / scale / sheet /
revision) repeated as a signature element, and a "sheet" numbering system
(`01–05`) that mirrors a real architectural drawing set. Section 04
(Experience) is the one place numbering reflects an actual sequence — career
chronology — which is why it's the only timeline in the page.

- **Display type:** Space Grotesk (geometric, technical)
- **Body type:** Inter
- **Utility/mono type:** JetBrains Mono (labels, tags, the title block)
- **Palette:** deep blueprint navy `#0E1A2B`, cyan-blue lines `#5B9BEF`, safety-orange accent `#FF6A39`, pale drafting paper `#EDEFF3`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The font files are
fetched from Google Fonts at build time, so an internet connection is needed
for `npm run dev` / `npm run build`.

To build for production:

```bash
npm run build
npm start
```

## Customizing the content

Almost everything you'll want to change lives in **`lib/data.ts`**:

- `profile` — your name, role, location, email, and social links
- `projects` — your three (or more) featured projects
- `capabilities` — your skills, grouped
- `experience` — your work history

Update those, swap the headline copy in `components/Hero.tsx` and
`components/About.tsx` to match your own story, and you're set.

## Structure

```
app/
  layout.tsx       Fonts, metadata, global wrapper
  page.tsx          Assembles all sections
  globals.css       Base styles, focus states, signature CSS utilities
components/
  Nav.tsx           Responsive header + mobile menu
  Hero.tsx          Headline, CTA, animated blueprint grid
  BlueprintGrid.tsx Pointer-tracked crosshair background
  Sheet.tsx         Reusable section wrapper (registration marks + numbering)
  TitleBlock.tsx    The drafting-sheet info stamp (signature element)
  About.tsx
  Projects.tsx
  Capabilities.tsx
  Experience.tsx
  Contact.tsx
  Footer.tsx
lib/
  data.ts           All editable content
```

## Notes

- Fully responsive from 360px mobile widths up through large desktop.
- Honors `prefers-reduced-motion` (animations are disabled/cut short).
- Visible keyboard focus states throughout for accessibility.
- No images required to run — all visuals are CSS/SVG, so there's nothing to swap out unless you want to add photography.
