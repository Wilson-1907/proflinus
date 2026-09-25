import { sources } from "./sources";

export const administratorThemes = [
  {
    title: "Planning",
    text: "The University Council record states that, as head of Planning, Finance and Administration, he was responsible for overseeing preparation and implementation of budgets, performance contracting and general infrastructural growth.",
    source: sources.karuCouncil,
  },
  {
    title: "Budgeting and coordination",
    text: "The official biography lists planning, organising, budgeting, coordinating and supervising among documented professional skills, presented as a profile of responsibility rather than a catalogue of personal claims.",
    source: sources.karuVc,
  },
  {
    title: "Infrastructure",
    text: "Infrastructural growth of the University is named as part of the PFA portfolio. Later public remarks refer to continued investment in facilities, technology and ODeL — as institutional work, not as individual construction credits.",
    source: sources.karuCouncil,
  },
  {
    title: "Performance management and quality",
    text: "Performance contracting is explicitly listed in the Council biography. The official profile also records skills in monitoring and evaluation and quality control.",
    source: sources.karuVc,
  },
  {
    title: "Curriculum and projects",
    text: "The official biography records curriculum development and review; project development, management, monitoring and evaluation; and a multidisciplinary, multi-stakeholder approach to problem solving.",
    source: sources.karuVc,
  },
  {
    title: "Mentorship and team building",
    text: "The same profile describes him as an organised supervisor, mentor and coach, skilled in team building and in working with people from diverse cultures and nationalities.",
    source: sources.karuVc,
  },
];

export const leadershipProgression = [
  { role: "Pioneering Director, JKUAT IT Centre", years: "2002–2005", source: sources.karuVc },
  { role: "Director, Academic Programmes — Taita Taveta Campus, JKUAT", years: "2008–2009", source: sources.karuVc },
  { role: "Director, Academic Programmes — MUCST", years: "2009–2010", source: sources.karuVc },
  { role: "Deputy Principal (PFA), Karatina University College", years: "2011–2013", source: sources.karuVc },
  { role: "Deputy Vice-Chancellor (PFA), Karatina University", years: "2013–2023", source: sources.karuVc },
  { role: "Acting Vice-Chancellor", years: "June 2023", source: sources.karuHandover },
  { role: "Vice-Chancellor, Karatina University", years: "September 2023–present", source: sources.karuCouncil },
];

export const documentedSupport = {
  framing:
    "Documented research support and collaborative relationships include the following organisations, as listed on the official university biography. This is not a claim that every source was personally secured by Prof. Gitonga.",
  organisations: ["GTZ", "JKUAT", "BECANET", "DAAD", "Prince Foundation (Haggai Institute)", "NRF"],
  source: sources.karuVc,
};

export const communityService = {
  framing:
    "The official biography records community service in the following areas. The section is presented as documented service, not as a corporate impact claim.",
  areas: [
    "Identification of agricultural pests, beneficial insects and their management (SACDEP)",
    "Community capacity-building initiative — resource person / consultant",
    "ICIPE: training of farmer groups and training-materials development / consultancy",
    "Motivational speaking engagements",
    "Schools and church groups",
    "Panelist: DAAD Pre-Selection Board for PhD scholars",
  ],
  source: sources.karuVc,
};

export const supervision = {
  framing:
    "The official university biography, accessed 25 September 2026, states that he has supervised and examined PhD and MSc students to completion, and several undergraduate research projects jointly with other supervisors, and has been a reviewer for journals in his area of expertise. No current numerical totals are published on that page; none are invented here.",
  source: sources.karuVc,
  dateLabel: "As stated on the official biography, accessed 25 September 2026",
};

export const certificates = [
  {
    title: "Certificate in Higher Education Management",
    place: "Galilee International Management Institute (GIMI), Israel",
    year: "2014",
    source: sources.karuVc,
  },
  {
    title: "Certificate in Environmental Impact Assessment and Environmental Audit, Lead Auditor",
    place: "JKUAT",
    year: "2010",
    source: sources.karuVc,
  },
  {
    title: "Leadership training",
    place: "Haggai Institute, Hawaii, USA",
    year: "17 February–12 March 2004",
    source: sources.karuVc,
  },
];
