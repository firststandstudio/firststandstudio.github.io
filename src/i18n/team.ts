/* Date: 4/20/2026 | Developer: Yahia Saad | License: First Stand Studio. All rights reserved. */
import { team } from "../data/team";
import type { TeamMember } from "../data/types";
import { defaultLocale, type SupportedLocale } from "./config";

const roleTranslations: Record<string, Record<SupportedLocale, string>> = {
  CEO: {
    en: "CEO",
    ar: "المدير التنفيذي",
    fr: "PDG",
    ru: "CEO",
    ja: "CEO"
  }
};

export function getLocalizedTeam(locale: SupportedLocale): TeamMember[] {
  return team.map((member) => ({
    ...member,
    role: roleTranslations[member.role]?.[locale] ?? roleTranslations[member.role]?.[defaultLocale] ?? member.role
  }));
}
