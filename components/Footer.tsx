import { TitleBlock } from "./TitleBlock";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink border-t border-line/15">
      <div className="max-w-[90rem] mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute mb-2">
            End of set
          </p>
          <p className="text-sm text-mute max-w-sm leading-relaxed">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js
            and Tailwind CSS. {profile.location}.
          </p>
        </div>
        <TitleBlock sheet="05" />
      </div>
    </footer>
  );
}
