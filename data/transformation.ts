import { sources } from "./sources";

export const transformationMap = [
  {
    id: "digital",
    title: "Digital Transformation",
    items: [
      {
        text: "Public remarks at the 11th Graduation referred to continued investment in technology and more programmes on ODeL, alongside physical infrastructure.",
        source: sources.karuMilestones,
        status: "historical" as const,
      },
    ],
  },
  {
    id: "research",
    title: "Research & Innovation",
    items: [
      {
        text: "The 13th Graduation address reaffirmed a commitment to academic excellence and innovation and to promoting a culture of research and creativity.",
        source: sources.karuGraduation13,
        status: "historical" as const,
      },
    ],
  },
  {
    id: "partnerships",
    title: "Global Partnerships",
    items: [
      {
        text: "January 2026 China visit with a Hikvision-organised delegation, building on an existing MoU and exploring further collaboration in teaching, learning, research, innovation and mobility.",
        source: sources.karuChina,
        status: "historical" as const,
      },
    ],
  },
  {
    id: "computing",
    title: "Computing & Technology",
    items: [
      {
        text: "The University established a School of Computing and Informatics and, at the time of the China visit, was building an Innovation Hub. A faculty session discussed a long-term computing complex. These are institutional developments, not presented as personal creations.",
        source: sources.karuChina,
        status: "current" as const,
      },
    ],
  },
  {
    id: "students",
    title: "Student Development",
    items: [
      {
        text: "The August 2026 first-year address urged students to use the library, laboratories, innovation spaces, clubs, sports and the Employability Centre, and named Discipline, Practice and Persistence as guiding words.",
        source: sources.karuArchitect,
        status: "historical" as const,
      },
    ],
  },
  {
    id: "career",
    title: "Career & Employability",
    items: [
      {
        text: "The 14th Annual Career Week (May 2026) focused on education–industry linkages, internships, entrepreneurship and digital literacy. The Vice-Chancellor emphasised early career exposure and mentorship.",
        source: sources.karuCareerWeek,
        status: "historical" as const,
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    items: [
      {
        text: "The PFA portfolio included general infrastructural growth. Later graduation remarks referred to continued enhancement of facilities for quality teaching.",
        source: sources.karuCouncil,
        status: "historical" as const,
      },
    ],
  },
  {
    id: "sport",
    title: "Sport & Talent",
    items: [
      {
        text: "The first-year address explicitly named sports among university resources students should use. No separate sport-policy claim is made beyond that documented invitation.",
        source: sources.karuArchitect,
        status: "historical" as const,
      },
    ],
  },
  {
    id: "community",
    title: "Community Engagement",
    items: [
      {
        text: "The official biography records farmer-group training, pest identification, community capacity building, schools and church groups. The 11th Graduation speech also referred to community outreach as part of the way forward.",
        source: sources.karuVc,
        status: "historical" as const,
      },
    ],
  },
  {
    id: "academic",
    title: "Academic Excellence",
    items: [
      {
        text: "Inauguration and graduation addresses consistently return to teaching quality, research, staff development and an environment in which members of the University can reach their potential.",
        source: sources.karuMilestones,
        status: "current" as const,
      },
    ],
  },
];

export const chinaPartnership = {
  existing: [
    "An existing Memorandum of Understanding between Karatina University and Hikvision, as stated in the university news report.",
    "Establishment of the School of Computing and Informatics, noted as already in place at the time of the visit.",
  ],
  explored: [
    "Smart technology to support teaching, learning, research and innovation.",
    "Staff and student mobility.",
    "Discussions with Xidian University on joint programmes, research and exchange.",
    "Meetings with leaders from the University of Electronic Science and Technology of China, Hangzhou University of Science and Technology, and Zhejiang Normal University regarding potential collaborations.",
  ],
  inProgress: [
    "A state-of-the-art Innovation Hub, described in the university report as then being built.",
  ],
  source: sources.karuChina,
};

export const studentThemes = [
  { word: "Discipline", source: sources.karuArchitect },
  { word: "Practice", source: sources.karuArchitect },
  { word: "Persistence", source: sources.karuArchitect },
  { word: "Integrity", source: sources.karuArchitect },
  { word: "Responsibility", source: sources.karuArchitect },
  { word: "Mentorship", source: sources.karuCareerWeek },
  { word: "Academic excellence", source: sources.karuArchitect },
  { word: "Innovation", source: sources.karuCareerWeek },
];
