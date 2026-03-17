export interface AboutHeroLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface AboutProfileBlock {
  title: string;
  subtitle: string;
  summaryLines: string[];
}

export interface AboutProjectItem {
  title: string;
  bullets: string[];
  tech?: string[];
}

export interface AboutSkillGroup {
  title: string;
  items: string[];
}

export interface AboutProfile {
  profileTitle: string;
  profileSubtitle: string;
  profileSummaryLines: string[];
  portraitAlt: string;
  heroLinks: AboutHeroLink[];
  aboutMe: AboutProfileBlock;
  projectsTitle: string;
  projectItems: AboutProjectItem[];
  skillsTitle: string;
  skillGroups: AboutSkillGroup[];
}
