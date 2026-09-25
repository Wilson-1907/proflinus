import { sources } from "./sources";

export const ecosystemNodes = [
  {
    id: "thrips",
    label: "Thrips",
    summary:
      "Two species dominated the French-bean crop throughout the year at Machakos, Kaguru and JKUAT: Megalurothrips sjostedti and Frankliniella occidentalis.",
    detail:
      "M. sjostedti populations peaked after the rains. F. occidentalis peaked in hot, dry months. Both colonised the crop soon after germination and preferred flowers; F. occidentalis also thrived on leaves, while M. sjostedti was largely confined to flower buds and flowers.",
    source: sources.icipeDissertation,
  },
  {
    id: "french-bean",
    label: "French Bean",
    summary:
      "Phaseolus vulgaris — the crop at the centre of the doctoral agro-ecosystem studies.",
    detail:
      "Fieldwork examined how thrips moved into and through the crop. Flowers were the preferred plant part. Petioles, leaves, flower buds, flowers and pods were used as oviposition substrates to varying extents. Both species were significantly aggregated in those plant parts.",
    source: sources.icipeDissertation,
  },
  {
    id: "natural-enemies",
    label: "Natural Enemies",
    summary:
      "Two indigenous natural enemies were documented across all three field sites.",
    detail:
      "Orius albidipennis, an anthocorid predator, occurred throughout the year. Ceranisus menes, a larval endoparasitoid, peaked from October to April. At JKUAT, percentage parasitism over the crop cycle ranged from 3.5% to 19.5% and peaked in March–April.",
    source: sources.icipeDissertation,
  },
  {
    id: "biological-control",
    label: "Biological Control",
    summary:
      "Using living natural enemies — predators, parasitoids and entomopathogens — to suppress pest populations.",
    detail:
      "Laboratory work showed that O. albidipennis killed more second-instar larvae than adult M. sjostedti, and that attack rates rose with temperature. Later collaborative papers evaluated Metarhizium anisopliae in autoinoculation devices and isolate selection against F. occidentalis.",
    source: sources.icipeFunctional,
  },
  {
    id: "ipm",
    label: "Integrated Pest Management",
    summary:
      "Biological control as one element within a broader, evidence-based pest-management strategy.",
    detail:
      "The official university biography records specialisation in biological control and IPM. Related papers on onion thrips examine selective protection of susceptible growth stages and alternatives to routine foliar sprays — IPM questions beyond the French-bean system.",
    source: sources.karuVc,
  },
  {
    id: "sustainable",
    label: "Sustainable Agriculture",
    summary:
      "The practical horizon of the research: protecting crops while working with, rather than against, agro-ecosystem relationships.",
    detail:
      "The dissertation and later papers treat temperature, season, plant part and natural-enemy biology as the conditions under which pest management must operate. The portfolio presents this as documented science, not as a personal slogan.",
    source: sources.icipeDissertation,
  },
];

export const doctoralInquiry = {
  title: "Bioecology of Thrips in French Bean Growing Agroecosystems in Kenya",
  researcher: "Linus Muthuri Gitonga",
  period: "1996–2000 (doctoral study); ICIPE record dated 2012",
  institutions: ["ICIPE", "JKUAT, Department of Zoology"],
  locations: ["Machakos", "Kaguru", "JKUAT"],
  organisms: [
    "Megalurothrips sjostedti",
    "Frankliniella occidentalis",
    "Orius albidipennis",
    "Ceranisus menes",
    "Phaseolus vulgaris",
  ],
  methodology:
    "Field studies of species identity, movement, spatial distribution and population dynamics, together with laboratory work on temperature-dependent development, functional response of O. albidipennis, and parasitism by C. menes.",
  findings: [
    "Both thrips species were present year-round at all three localities, with different seasonal peaks.",
    "Colonisation began soon after germination; flowers were preferred.",
    "Developmental period decreased as temperature increased. Thresholds were calculated as 9.6°C (M. sjostedti) and 9.0°C (F. occidentalis); egg-to-adult required 212.0 and 256.8 degree-days respectively.",
    "O. albidipennis occurred year-round; more second-instar larvae than adults were killed at all temperatures and densities tested.",
    "C. menes parasitised both thrips species; developmental times in the two hosts were not significantly different.",
  ],
  implications:
    "The work identified indigenous natural enemies and temperature-dependent biology that later papers developed toward biological control and IPM of thrips on French beans.",
  sources: [
    sources.icipeDissertation,
    sources.karuSpaceDissertation,
    sources.jkuatDissertation,
  ],
};
