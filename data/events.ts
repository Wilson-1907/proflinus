import type { EventRecord } from "./types";
import { sources } from "./sources";

export const vcEvents: EventRecord[] = [
  {
    id: "handover-2023",
    date: "2023-06-05",
    title: "Acting Vice-Chancellor — office handover",
    summary:
      "Council Chair Prof. Francis Gichaga presided as outgoing Vice-Chancellor Prof. Mucai Muchiri handed over office to Prof. Gitonga as Acting Vice-Chancellor.",
    location: "Karatina University",
    source: sources.karuHandover,
    category: "appointment",
    temporalStatus: "historical",
  },
  {
    id: "appointed-2023",
    date: "2023-09-12",
    title: "Appointed Vice-Chancellor",
    summary:
      "The University Council records that Prof. Linus M. Gitonga was appointed Vice-Chancellor on 12 September 2023.",
    location: "Karatina University",
    source: sources.karuCouncil,
    category: "appointment",
    temporalStatus: "historical",
  },
  {
    id: "inauguration-2023",
    date: "2023-11-24",
    title: "Inauguration and 11th Graduation",
    summary:
      "Inaugurated as second Vice-Chancellor under the theme “The Beginning of a New Decade,” received the Instruments of Authority, and declared the 11th Graduation. 1,054 students were conferred; 3,320 first-year students had been admitted — the highest number in the University’s history at that date.",
    location: "Graduation Square",
    source: sources.karuMilestones,
    photo: "/images/graduation-regalia.png",
    category: "graduation",
    temporalStatus: "historical",
  },
  {
    id: "csi-2025",
    date: "2025-10-01",
    title: "Faculty of Computer Science and Informatics session",
    summary:
      "With the DVC (PFA) and Registrar (P&A), the Vice-Chancellor met the faculty to discuss academic programmes, research and innovation, and a long-term plan for a computing complex. He urged colleagues to define niche areas and work together for students.",
    location: "Boardroom, Karatina University",
    source: sources.karuCsi,
    category: "computing",
    temporalStatus: "historical",
  },
  {
    id: "graduation-13-2025",
    date: "2025-10-16",
    title: "13th Graduation and installation of the 2nd Chancellor",
    summary:
      "Declared the assembly a congregation of the 13th Graduation, at which more than 1,800 graduands were conferred. The same day saw the installation of Prof. Isaac Muthure Macharia as 2nd Chancellor. The Vice-Chancellor highlighted the School of Computing and Informatics among recent institutional strides.",
    location: "Karatina University",
    source: sources.karuGraduation13,
    category: "graduation",
    temporalStatus: "historical",
  },
  {
    id: "china-2026",
    date: "2026-01-04",
    title: "China visit — Hangzhou and Hikvision",
    summary:
      "A two-week programme from 4 January 2026, with Dr Kennedy Malanga, Dean of the School of Computing and Informatics, as part of a Hikvision-organised delegation. The visit built on an existing MoU with Hikvision and explored teaching, learning, research, innovation, and staff and student mobility. Meetings included Xidian University and other Chinese universities. Areas identified for future collaboration are distinguished from the existing MoU.",
    location: "Hangzhou, China",
    source: sources.karuChina,
    category: "partnerships",
    temporalStatus: "historical",
  },
  {
    id: "first-years-2026",
    date: "2026-08-27",
    title: "First-year address — Architect of the Future",
    summary:
      "Address themed “You are the Architect of the Future You Envision,” using a blueprint and construction analogy. Guiding words recorded: Discipline, Practice and Persistence. Students were urged to use the library, laboratories, innovation spaces, clubs, sports and the Employability Centre.",
    location: "Graduation Square",
    source: sources.karuArchitect,
    photo: "/images/first-year-address.png",
    category: "students",
    temporalStatus: "historical",
  },
];
