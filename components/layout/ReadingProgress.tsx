"use client";

import { useScrollProgress } from "@/lib/use-scroll-progress";

export function ReadingProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-forest-900/10"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      aria-label="Reading progress"
    >
      <div
        className="h-full origin-left bg-gold-500 transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
