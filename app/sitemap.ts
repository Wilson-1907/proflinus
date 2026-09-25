import type { MetadataRoute } from "next";
import { publications } from "@/data/publications";
import { SITE_URL } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/journey",
    "/research",
    "/publications",
    "/leadership",
    "/impact",
    "/media",
    "/contact",
    "/identity",
    "/sources",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date("2026-09-25"),
  }));

  const pubRoutes = publications.map((p) => ({
    url: `${SITE_URL}/publications/${p.slug}`,
    lastModified: new Date("2026-09-25"),
  }));

  return [...staticRoutes, ...pubRoutes];
}
