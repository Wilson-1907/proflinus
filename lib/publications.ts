import { publications, topicLabels } from "@/data/publications";
import type { Publication, ResearchTopic } from "@/data/types";

export type SortKey = "newest" | "oldest" | "title" | "area";

export function getPublication(slug: string) {
  return publications.find((p) => p.slug === slug);
}

export function searchPublications(
  query: string,
  topic: "all" | ResearchTopic,
  sort: SortKey,
): Publication[] {
  const q = query.trim().toLowerCase();
  let list = publications.filter((p) => {
    const topicOk = topic === "all" || p.topics.includes(topic);
    if (!q) return topicOk;
    const hay = [
      p.title,
      p.authors.join(" "),
      p.journal ?? "",
      p.year.toString(),
      p.keywords.join(" "),
      p.topics.map((t) => topicLabels[t]).join(" "),
      p.doi ?? "",
    ]
      .join(" ")
      .toLowerCase();
    return topicOk && hay.includes(q);
  });

  list = [...list].sort((a, b) => {
    if (sort === "newest") return b.year - a.year || a.title.localeCompare(b.title);
    if (sort === "oldest") return a.year - b.year || a.title.localeCompare(b.title);
    if (sort === "title") return a.title.localeCompare(b.title);
    return (topicLabels[a.topics[0]] ?? "").localeCompare(topicLabels[b.topics[0]] ?? "");
  });

  return list;
}

export function relatedPublications(pub: Publication, limit = 3) {
  return publications
    .filter((p) => p.id !== pub.id)
    .map((p) => ({
      p,
      score: p.topics.filter((t) => pub.topics.includes(t)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || b.p.year - a.p.year)
    .slice(0, limit)
    .map((x) => x.p);
}
