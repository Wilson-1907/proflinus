import type { SourceRef } from "@/data/types";

export function SourceBadge({
  source,
  compact = false,
}: {
  source: SourceRef;
  compact?: boolean;
}) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-[11px] tracking-[0.12em] text-forest-700 uppercase underline-offset-4 hover:text-gold-600 hover:underline"
    >
      <span className="h-1 w-1 rounded-full bg-gold-500" aria-hidden />
      {compact ? source.name.split("—")[0].trim() : source.name}
    </a>
  );
}
