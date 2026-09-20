export type TimelineEntryType = "work" | "education";

export interface TimelineHighlight {
  title: string;
  description: string;
}

export interface TimelineEntry {
  id: string;
  type: TimelineEntryType;
  organization: string;
  role: string;
  startDate: string;
  endDate: string | "present";
  summary?: string;
  highlights?: TimelineHighlight[];
}

export interface CapabilityGroup {
  id: string;
  label: string;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
}

export type ProjectCategory = "film" | "3d" | "animation" | "ai" | "generative" | "interactive";

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface ProjectMediaItem {
  type: "image" | "video" | "embed" | "model";
  src: string;
  alt?: string;
  poster?: string;
}

export interface Project {
  slug: string;
  title: string;
  client?: string;
  year: string;
  category: ProjectCategory[];
  description: string;
  responsibilities?: string[];
  thumbnail?: string;
  media?: ProjectMediaItem[];
  credits?: ProjectCredit[];
  tools?: string[];
  tags?: string[];
  featured?: boolean;
}
