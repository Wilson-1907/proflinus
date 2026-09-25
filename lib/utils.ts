import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatYearRange(start: number, end?: number | "present") {
  if (!end) return `${start}`;
  if (end === "present") return `${start}–present`;
  return `${start}–${end}`;
}

export function doiUrl(doi: string) {
  return `https://doi.org/${doi.replace(/^https?:\/\/doi\.org\//i, "")}`;
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://linusgitonga.karu.ac.ke";
