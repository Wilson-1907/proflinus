"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { mediaItems } from "@/data/media";
import { Lightbox } from "@/components/ui/Lightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = [
  "all",
  "portraits",
  "leadership",
  "students",
  "graduation",
  "events",
] as const;

export function PhotoGallery() {
  const [cat, setCat] = useState<(typeof categories)[number]>("all");
  const [open, setOpen] = useState<number | null>(null);
  const items = useMemo(
    () => (cat === "all" ? mediaItems : mediaItems.filter((m) => m.category === cat)),
    [cat],
  );

  return (
    <section id="media" className="bg-white py-24 md:py-32">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Photo story"
          title="An image archive"
          lede="Authentic university photographs only. Captions, dates and sources travel with every image."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`px-3 py-1 text-[11px] tracking-[0.16em] uppercase ${cat === c ? "bg-forest-900 text-white" : "border border-line text-forest-800"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group block w-full text-left"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={900}
                    height={600}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-3 font-serif text-lg text-forest-900">{item.event}</p>
                <p className="text-xs tracking-[0.14em] text-muted uppercase">{item.date}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {open !== null ? (
        <Lightbox
          items={items}
          index={open}
          onClose={() => setOpen(null)}
          onPrev={() => setOpen((open - 1 + items.length) % items.length)}
          onNext={() => setOpen((open + 1) % items.length)}
        />
      ) : null}
    </section>
  );
}
