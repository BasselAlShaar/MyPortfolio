import { profile } from "@/lib/data";

export function TitleBlock({
  sheet = "01",
  className = "",
  dark = true,
}: {
  sheet?: string;
  className?: string;
  dark?: boolean;
}) {
  const border = dark ? "border-line/30" : "border-ink/25";
  const label = dark ? "text-mute" : "text-mute2";
  const value = dark ? "text-paperwhite" : "text-ink";

  const cells: [string, string][] = [
    ["DRAWN BY", profile.initials],
    ["STATUS", profile.status],
    ["SHEET", `${sheet} / 05`],
    ["DATE", new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })],
  ];

  return (
    <div
      className={`font-mono text-[10px] tracking-wide border ${border} ${className}`}
      aria-hidden="true"
    >
      <div className={`px-3 py-2 border-b ${border} ${label} uppercase tracking-[0.18em]`}>
        {profile.name} — {profile.role}
      </div>
      <div className="grid grid-cols-4">
        {cells.map(([k, v], i) => (
          <div
            key={k}
            className={`px-3 py-2 ${i !== 0 ? `border-l ${border}` : ""}`}
          >
            <div className={`${label} uppercase tracking-[0.14em] mb-1`}>{k}</div>
            <div className={`${value} font-medium`}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}