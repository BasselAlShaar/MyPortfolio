import { ReactNode } from "react";

export function RegMarks({ color = "currentColor" }: { color?: string }) {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ color }}>
      <span className="reg-mark reg-mark--tl" />
      <span className="reg-mark reg-mark--tr" />
      <span className="reg-mark reg-mark--bl" />
      <span className="reg-mark reg-mark--br" />
    </div>
  );
}

export function Sheet({
  id,
  number,
  label,
  children,
  tone = "dark",
  className = "",
}: {
  id: string;
  number: string;
  label: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <section
      id={id}
      className={`relative w-full border-t ${
        isDark ? "border-line/15 bg-ink text-paperwhite" : "border-ink/10 bg-paper text-ink"
      } ${className}`}
    >
      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-10">
        <RegMarks color={isDark ? "#5B9BEF" : "#0E1A2B"} />
        <div
          className={`flex items-center gap-3 pt-8 font-mono text-[11px] tracking-[0.18em] uppercase ${
            isDark ? "text-mute" : "text-mute2"
          }`}
        >
          <span className={isDark ? "text-accent" : "text-accent"}>{number}</span>
          <span className="opacity-50">—</span>
          <span>{label}</span>
          <span className={`tick-rule flex-1 ${isDark ? "text-line" : "text-ink"}`} />
        </div>
        <div className="pb-20 pt-8 md:pb-28 md:pt-10">{children}</div>
      </div>
    </section>
  );
}
