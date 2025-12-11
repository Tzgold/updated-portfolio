
export interface SocialLink {
  icon: string;
  href: string;
}

export interface CreativityItem {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  image?: string;
  logo?: string; // If it's an SVG or Icon
  linkLive?: string;
  linkSource?: string;
  technologies?: string[];
}

export interface TimelineItem {
  date: string;
  title: string;
  subtitle?: string;
  description: string;
  bullets?: string[];
  logo?: string;
}
