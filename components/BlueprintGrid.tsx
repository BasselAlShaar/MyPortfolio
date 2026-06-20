"use client";

import { useEffect, useRef } from "react";

/**
 * A faint drafting grid with a crosshair that tracks the pointer, like a
 * cursor on a CAD canvas. One orchestrated motion moment for the hero —
 * deliberately quiet everywhere else on the page.
 */
export function BlueprintGrid() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const crosshairRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const crosshair = crosshairRef.current;
    if (!wrap || !crosshair) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      crosshair.style.display = "none";
      return;
    }

    let raf = 0;
    const handle = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        crosshair.style.transform = `translate(${x}px, ${y}px)`;
        crosshair.style.opacity = "1";
      });
    };
    const leave = () => {
      crosshair.style.opacity = "0";
    };

    wrap.addEventListener("pointermove", handle);
    wrap.addEventListener("pointerleave", leave);
    return () => {
      wrap.removeEventListener("pointermove", handle);
      wrap.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 overflow-hidden bg-grid-dark bg-grid"
      style={{
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
      }}
    >
      {/* vertical scan sweep */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-line/10 to-transparent animate-scan" />

      {/* pointer-tracked crosshair */}
      <div
        ref={crosshairRef}
        className="absolute top-0 left-0 w-10 h-10 -ml-5 -mt-5 opacity-0 transition-opacity duration-300 pointer-events-none"
      >
        <div className="absolute left-1/2 top-0 h-full w-px bg-accent/70" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-accent/70" />
        <div className="absolute left-1/2 top-1/2 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full border border-accent" />
      </div>
    </div>
  );
}
