import type { QuoteRecord } from "./types";
import { sources } from "./sources";

export const quotes: QuoteRecord[] = [
  {
    id: "rugomo-dream",
    text: "a Professor has read everything there is and there’s nothing more to read",
    speaker: "Prof. Linus Muthuri Gitonga",
    date: "Childhood recollection, published in official university biography",
    event: "Official Vice-Chancellor biography",
    source: sources.karuVc,
  },
  {
    id: "inauguration-2023",
    text: "I am committed to leading Karatina University with resilience, innovation, and a steadfast dedication to the pursuit of knowledge. Together, we will navigate the changing landscape of academia, embracing new ideas and technologies to enhance the learning experience for our students.",
    speaker: "Prof. Linus M. Gitonga",
    date: "24 November 2023",
    event: "Inauguration as second Vice-Chancellor, Graduation Square",
    source: sources.karuMilestones,
  },
  {
    id: "full-potential-2023",
    text: "Let us strive for an environment where every member of the University community can reach their full potential.",
    speaker: "Prof. Linus M. Gitonga",
    date: "24 November 2023",
    event: "Inauguration as second Vice-Chancellor",
    source: sources.karuMilestones,
  },
  {
    id: "graduation-13-2025",
    text: "Your determination has yielded rewards. Today, you stand as a testament that diligence, excellence, and community service bear fruit.",
    speaker: "Prof. Linus M. Gitonga",
    date: "16 October 2025",
    event: "13th Graduation Ceremony",
    source: sources.karuGraduation13,
  },
  {
    id: "csi-2025",
    text: "Build your dream structure. Walk and work together for growth. The journey towards your destination rests upon all of us -not only for yourselves, but also for the students you serve.",
    speaker: "Prof. Linus M. Gitonga",
    date: "1 October 2025",
    event: "Interactive session with Faculty of Computer Science and Informatics",
    source: sources.karuCsi,
  },
  {
    id: "architect-2026",
    text: "The ground is ready. The tools are here. The opportunity is yours.",
    speaker: "Prof. Linus M. Gitonga",
    date: "27 August 2026",
    event: "Vice-Chancellor’s Address to first-year students, Graduation Square",
    source: sources.karuArchitect,
  },
];
