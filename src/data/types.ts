/* Date: 4/20/2026 | Developer: Yahia Saad | License: First Stand Studio. All rights reserved. */
import type { ImageMetadata } from "astro";

export interface NavItem {
  href: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface DevelopmentItem {
  message: string;
  committedAt: string;
  href?: string;
  hash?: string;
}

export interface GithubRepoConfig {
  owner: string;
  repo: string;
  branch?: string;
  fallback: DevelopmentItem[];
}

export interface ProjectFact {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectRecord {
  slug: string;
  label: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  status: string;
  type: string;
  atmosphere: string;
  accent: string;
  accentSoft: string;
  logo: ImageMetadata;
  favicon: ImageMetadata;
  seoImage?: string;
  facts: ProjectFact[];
  links: ProjectLink[];
  github: GithubRepoConfig;
}

export interface TeamMember {
  role: string;
  name: string;
  initials: string;
  image?: ImageMetadata;
}
