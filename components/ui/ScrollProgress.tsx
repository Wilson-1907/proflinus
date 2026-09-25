"use client";

import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useScrollProgress } from "@/lib/use-scroll-progress";
import { cn } from "@/lib/utils";

const SIZE = 64;
const STROKE = 1.25;
const RADIUS = (SIZE - STROKE * 2) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScrollProgress() {
  const progress = useScrollProgress();
  const pathname = usePathname();
  const atEnd = progress > 0.94;
  const underway = progress > 0.04;

  const onActivate = () => {
    if (atEnd) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const about = document.getElementById("about");
    if (pathname === "/" && about && window.scrollY < window.innerHeight * 0.7) {
      about.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollBy({ top: window.innerHeight * 0.88, behavior: "smooth" });
  };

  return (
    <div className="pointer-events-none fixed right-4 bottom-5 z-40 md:right-8 md:bottom-8">
      <button
        type="button"
        onClick={onActivate}
        className="pointer-events-auto group flex flex-col items-center gap-2"
        aria-label={atEnd ? "Return to the top of the archive" : "Continue through the archive"}
      >
        <span
          className={cn(
            "text-[10px] tracking-[0.38em] text-forest-800 uppercase transition-opacity duration-500",
            underway && !atEnd ? "opacity-0" : "opacity-80",
          )}
        >
          {atEnd ? "Top" : "Discover"}
        </span>
        <span className="relative grid h-16 w-16 place-items-center rounded-full bg-ivory/90 shadow-[0_12px_40px_rgba(18,53,36,0.12)] ring-1 ring-forest-900/10 backdrop-blur-sm">
          <svg
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="absolute inset-0 h-full w-full -rotate-90"
            aria-hidden
          >
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              stroke="rgba(18,53,36,0.12)"
              strokeWidth={STROKE}
            />
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              stroke="#C9A227"
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
              className="transition-[stroke-dashoffset] duration-150 ease-out"
            />
          </svg>
          <span
            className={cn(
              "text-forest-900 transition-transform duration-500",
              !underway && !atEnd && "scroll-arrow",
            )}
          >
            {atEnd ? <ChevronUp size={18} strokeWidth={1.25} /> : <ChevronDown size={18} strokeWidth={1.25} />}
          </span>
        </span>
      </button>
    </div>
  );
}
