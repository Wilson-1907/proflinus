import { sources } from "./sources";

export const researchSnapshot = {
  framing:
    "The official university biography states that Prof. Gitonga is ranked in AD Scientific Index rankings and Kenya Scientist and University Rankings. No numerical scores are reproduced here, because third-party indices change and this archive will not present aggregator figures as permanent facts.",
  notes: [
    {
      label: "AD Scientific Index",
      value: "Listed",
      sourceName: "Karatina University Vice-Chancellor biography",
      date: "Accessed 25 September 2026",
      source: sources.karuVc,
    },
    {
      label: "Kenya Scientist and University Rankings",
      value: "Listed",
      sourceName: "Karatina University Vice-Chancellor biography",
      date: "Accessed 25 September 2026",
      source: sources.karuVc,
    },
    {
      label: "Google Scholar",
      value: "Institutional email verified",
      sourceName: "Google Scholar author profile",
      date: "Checked 25 September 2026",
      source: sources.scholar,
    },
  ],
};

export const archiveDocuments = [
  {
    title: "Vice-Chancellor biography",
    date: "Current institutional page",
    type: "Biography",
    institution: "Karatina University",
    url: sources.karuVc.url,
  },
  {
    title: "University Council record — appointment, 12 September 2023",
    date: "2023-09-12",
    type: "Appointment record",
    institution: "Karatina University",
    url: sources.karuCouncil.url,
  },
  {
    title: "University Management Board",
    date: "Current institutional page",
    type: "Governance",
    institution: "Karatina University",
    url: sources.karuUmb.url,
  },
  {
    title: "Handing over of Office of the Vice-Chancellor",
    date: "2023-06-05",
    type: "Institutional news",
    institution: "Karatina University",
    url: sources.karuHandover.url,
  },
  {
    title: "Inauguration and 11th Graduation",
    date: "2023-11-24",
    type: "Institutional news",
    institution: "Karatina University",
    url: sources.karuMilestones.url,
  },
  {
    title: "13th Graduation and Chancellor installation",
    date: "2025-10-16",
    type: "Institutional news",
    institution: "Karatina University",
    url: sources.karuGraduation13.url,
  },
  {
    title: "Bioecology of Thrips — ICIPE dissertation record",
    date: "2012 record of 1996–2000 doctoral work",
    type: "Dissertation",
    institution: "ICIPE",
    url: sources.icipeDissertation.url,
  },
  {
    title: "Karatina University Repository — dissertation",
    date: "Repository record",
    type: "Repository",
    institution: "Karatina University",
    url: sources.karuSpaceDissertation.url,
  },
  {
    title: "JKUAT Institutional Repository — dissertation",
    date: "2012-10-31 deposit record",
    type: "Repository",
    institution: "JKUAT",
    url: sources.jkuatDissertation.url,
  },
  {
    title: "China visit and Hikvision engagement",
    date: "2026-01",
    type: "Institutional news",
    institution: "Karatina University",
    url: sources.karuChina.url,
  },
  {
    title: "First-year address — Architect of the Future",
    date: "2026-08-27",
    type: "Address",
    institution: "Karatina University",
    url: sources.karuArchitect.url,
  },
  {
    title: "14th Annual Career Week",
    date: "2026-05-21",
    type: "Institutional news",
    institution: "Karatina University",
    url: sources.karuCareerWeek.url,
  },
  {
    title: "Faculty of Computer Science and Informatics session",
    date: "2025-10",
    type: "Institutional news",
    institution: "Karatina University",
    url: sources.karuCsi.url,
  },
];
