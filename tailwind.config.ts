import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E1A2B",       // primary deep blueprint navy
        ink2: "#142640",      // secondary navy, panels on dark
        paper: "#EDEFF3",     // light section background
        paperwhite: "#F7F8FA",
        line: "#5B9BEF",      // blueprint cyan-blue (lines, grid)
        linedim: "rgba(91,155,239,0.18)",
        accent: "#FF6A39",    // safety-orange stamp / CTA accent
        accent2: "#FFB84D",   // warm secondary accent
        mute: "#8C9BB5",      // muted slate text on dark
        mute2: "#5C6B85",     // muted slate text on light
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(rgba(91,155,239,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(91,155,239,0.10) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(rgba(14,26,43,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(14,26,43,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
        "grid-sm": "20px 20px",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
      animation: {
        scan: "scan 8s linear infinite",
        dash: "dash 1.4s ease-out forwards",
        blink: "blink 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
