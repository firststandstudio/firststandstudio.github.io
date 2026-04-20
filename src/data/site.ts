/* Date: 4/20/2026 | Developer: Yahia Saad | License: First Stand Studio. All rights reserved. */
import type { SocialLink } from "./types";

export const contactLinks = {
  email: {
    href: "mailto:yahiasaad.work@gmail.com",
    value: "yahiasaad.work@gmail.com"
  },
  github: {
    href: "https://github.com/yahiawork",
    value: "github.com/yahiawork"
  },
  portfolio: {
    href: "https://yahiawork.github.io",
    value: "yahiawork.github.io"
  }
} as const;

export const profileLinks = [
  { label: "Portfolio", href: "https://yahiawork.github.io" },
  { label: "EduPlatform", href: "https://yahiadev.pythonanywhere.com/" },
  { label: "WaterIt", href: "https://water252it.pythonanywhere.com/" }
] as const;

export const capabilityTags = [
  "Software",
  "Frontend",
  "Backend",
  "AI / ML",
  "Games",
  "Systems",
  "Cybersecurity"
] as const;

export const socialLinks: SocialLink[] = [
  { label: "GMAIL", href: contactLinks.email.href },
  { label: "GITHUB", href: contactLinks.github.href },
  { label: "PORTFOLIO", href: contactLinks.portfolio.href }
];

export const siteConfig = {
  studioName: "First Stand Studio",
  founder: "Yahia Saad",
  owner: "Yahia Saad",
  location: "Fes, Morocco",
  year: 2026,
  tagline: "Something endures.",
  defaultTitle: "First Stand Studio",
  titleTemplate: "%s | First Stand Studio",
  defaultDescription:
    "Official website of First Stand Studio, a solo indie studio by Yahia Saad focused on original projects, clear identity, and enduring work.",
  siteUrl: "https://example.com",
  locale: "en_US",
  socialImage: "/social/studio-card.svg",
  favicon: "/favicons/favicon.svg",
  faviconPng: "/favicons/favicon.png",
  heroDescriptor: "Official studio website",
  skillSummary: "14 languages · 7 engines · 4 frameworks",
  focusSummary: "Software, AI, games, systems, security",
  aboutText:
    "First Stand Studio is a solo indie studio focused on original projects. We build around strong ideas, clear identity, and things that refuse to stop. No hype, no noise, just projects worth making.",
  manifesto: "Every project is a proof of existence.",
  foundation: "FOUNDED IN FES, MOROCCO"
} as const;
