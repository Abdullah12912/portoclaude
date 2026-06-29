export type ProjectStatus = "active" | "planning" | "paused" | "completed";

export interface Project {
  title: string;
  slug: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  github?: string;
  website?: string;
  tech: string[];
  roadmap: { title: string; done: boolean }[];
  date: string;
}

export interface Note {
  title: string;
  slug: string;
  category: string;
  tags: string[];
  date: string;
  summary?: string;
  content: string;
}

export interface Article {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  summary: string;
  readingTime: string;
  content: string;
}

export interface TimelineEntry {
  year: number;
  month?: number;
  title: string;
  description: string;
  category: "education" | "work" | "achievement" | "personal" | "project";
  highlight?: boolean;
}

export type AlbumCategory = "Pesantren" | "Kampus" | "Documentary" | "Street" | "Portrait";

export interface AlbumPhoto {
  id: string;
  src: string;           // path relatif, misal /photos/raker/01.jpg
  alt: string;
  caption: string;
  place?: string;
  date?: string;
  aspectRatio?: "landscape" | "portrait" | "wide";
}

export interface Album {
  title: string;
  slug: string;
  category: AlbumCategory;
  location: string;
  date: string;           // "April 2026"
  coverPhoto: string;     // path ke cover
  coverAspect?: "wide" | "normal";  // wide = 16/9, normal = 4/3
  narasi: string;
  photos: AlbumPhoto[];
}
