"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { MediaItem } from "@/data/types";

export function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: MediaItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      className="fixed inset-0 z-80 flex items-center justify-center bg-charcoal/92 p-4"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 text-ivory"
        aria-label="Close"
      >
        <X />
      </button>
      <button
        type="button"
        onClick={onPrev}
        className="absolute top-1/2 left-3 -translate-y-1/2 text-ivory"
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        type="button"
        onClick={onNext}
        className="absolute top-1/2 right-3 -translate-y-1/2 text-ivory"
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>
      <figure className="max-h-[90vh] max-w-5xl">
        <Image
          src={item.src}
          alt={item.alt}
          width={1600}
          height={1066}
          className="max-h-[72vh] w-auto object-contain"
        />
        <figcaption className="mt-4 max-w-3xl text-sm text-ivory/85">
          <p>{item.caption}</p>
          <p className="mt-2 text-[11px] tracking-[0.16em] text-gold-400 uppercase">
            {item.date} · {item.event} · {item.location}
          </p>
          <p className="mt-1 text-xs text-ivory/55">Source: {item.source.name}</p>
        </figcaption>
      </figure>
    </div>
  );
}
