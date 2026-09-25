export type TemporalStatus = "historical" | "current" | "planned" | "future";

export type PublicationType =
  | "journal-article"
  | "dissertation"
  | "thesis"
  | "conference-paper"
  | "book-chapter";

export type ResearchTopic =
  | "biological-control"
  | "entomology"
  | "thrips"
  | "agriculture"
  | "ecology"
  | "integrated-pest-management"
  | "natural-enemies"
  | "other";

export type SourceLevel = 1 | 2 | 3 | 4;

export interface SourceRef {
  id: string;
  name: string;
  url: string;
  accessed: string;
  level: SourceLevel;
  type:
    | "university"
    | "repository"
    | "publisher"
    | "doi"
    | "news"
    | "profile"
    | "index";
}

export interface Publication {
  id: string;
  slug: string;
  title: string;
  authors: string[];
  year: number;
  journal?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  doiVerified: boolean;
  abstract?: string;
  topics: ResearchTopic[];
  publicationType: PublicationType;
  keywords: string[];
  source: SourceRef;
  additionalSources?: SourceRef[];
  externalUrl: string;
  featured?: boolean;
  temporalStatus: TemporalStatus;
}

export interface JourneyMilestone {
  id: string;
  period: string;
  startYear: number;
  endYear?: number;
  title: string;
  role?: string;
  institution: string;
  significance: string;
  source: SourceRef;
  photo?: string;
  category: "education" | "research" | "academic" | "administration" | "vc";
}

export interface QuoteRecord {
  id: string;
  text: string;
  speaker: string;
  date: string;
  event: string;
  source: SourceRef;
}

export interface MediaItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  date: string;
  event: string;
  location: string;
  source: SourceRef;
  category:
    | "portraits"
    | "leadership"
    | "students"
    | "research"
    | "graduation"
    | "partnerships"
    | "campus"
    | "innovation"
    | "community"
    | "events";
}

export type IdentityStatus =
  | "verified"
  | "identity-matched"
  | "source-record"
  | "discovery"
  | "unconfirmed";

export interface IdentityProfile {
  id: string;
  platform: string;
  description: string;
  status: IdentityStatus;
  url?: string;
  identifier?: string;
  lastChecked: string;
  verificationSource: string;
  evidence: string[];
  public: boolean;
}

export interface EventRecord {
  id: string;
  date: string;
  title: string;
  summary: string;
  location?: string;
  source: SourceRef;
  photo?: string;
  category: string;
  temporalStatus: TemporalStatus;
}
