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
