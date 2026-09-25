import { sources } from "./sources";

export const person = {
  honorific: "Prof.",
  givenNames: "Linus Muthuri",
  familyName: "Gitonga",
  fullName: "Prof. Linus Muthuri Gitonga",
  shortName: "Prof. Linus M. Gitonga",
  degrees: "PhD, MSc, BEd (Sc.) Hons",
  title: "Vice-Chancellor, Karatina University",
  academicRank: "Professor of Entomology",
  department: "Department of Biological Sciences",
  school: "School of Pure and Applied Sciences",
  institution: "Karatina University",
  specializations: [
    "Entomology",
    "Biological Control",
    "Integrated Pest Management",
    "Agricultural Pests",
    "Thrips",
    "Natural Enemies",
    "Insect Ecology",
    "Population Dynamics",
    "Sustainable Agriculture",
  ],
  narrative:
    "Professor of Entomology and Vice-Chancellor of Karatina University, whose career spans biological research, academic leadership, institutional planning, innovation and university transformation.",
  heroStatement: "From scientific discovery to institutional transformation.",
  eyebrow: "Vice-Chancellor  ·  Professor of Entomology",
  origin: {
    place: "Rugomo village",
    story:
      "Prof. Gitonga grew up at Rugomo village, where, while still a boy, his dream was to become a Professor, simply because, “a Professor has read everything there is and there’s nothing more to read”.",
    quote: "a Professor has read everything there is and there’s nothing more to read",
    source: sources.karuVc,
  },
  contact: {
    office: "Office of the Vice-Chancellor",
    email: "vc@karu.ac.ke",
    institution: "Karatina University",
    address: "P.O. Box 1957–10101, Karatina, Kenya",
    telephone: "+254 20 2176 713",
    mobile: "+254 729 721 200",
    website: "https://karu.ac.ke",
    source: sources.karuContact,
  },
  affiliations: [
    {
      name: "Entomological Society of America",
      abbreviation: "ESA",
      source: sources.karuVc,
    },
    {
      name: "Association of African Insect Scientists",
      abbreviation: "AAIS",
      source: sources.karuVc,
    },
  ],
  professorSince: {
    date: "January 2018",
    status: "current" as const,
    source: sources.karuVc,
  },
  vcAppointment: {
    date: "12 September 2023",
    actingFrom: "5 June 2023",
    status: "current" as const,
    source: sources.karuCouncil,
  },
} as const;
