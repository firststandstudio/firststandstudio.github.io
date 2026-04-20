/* Date: 4/20/2026 | Developer: Yahia Saad | License: First Stand Studio. All rights reserved. */
export const supportedLocales = ["en", "ar", "fr", "ru", "ja"] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

export const defaultLocale: SupportedLocale = "en";

export const localeMeta = {
  en: {
    lang: "en",
    intl: "en-US",
    og: "en_US",
    dir: "ltr",
    label: "English",
    nativeLabel: "English",
    shortLabel: "EN"
  },
  ar: {
    lang: "ar",
    intl: "ar-MA",
    og: "ar_MA",
    dir: "rtl",
    label: "Arabic",
    nativeLabel: "العربية",
    shortLabel: "AR"
  },
  fr: {
    lang: "fr",
    intl: "fr-FR",
    og: "fr_FR",
    dir: "ltr",
    label: "French",
    nativeLabel: "Français",
    shortLabel: "FR"
  },
  ru: {
    lang: "ru",
    intl: "ru-RU",
    og: "ru_RU",
    dir: "ltr",
    label: "Russian",
    nativeLabel: "Русский",
    shortLabel: "RU"
  },
  ja: {
    lang: "ja",
    intl: "ja-JP",
    og: "ja_JP",
    dir: "ltr",
    label: "Japanese",
    nativeLabel: "日本語",
    shortLabel: "JA"
  }
} as const;

export function isSupportedLocale(value: string): value is SupportedLocale {
  return supportedLocales.includes(value as SupportedLocale);
}

export function getLocaleFromPath(pathname: string): SupportedLocale {
  const segment = pathname.split("/").filter(Boolean)[0];

  if (segment && isSupportedLocale(segment)) {
    return segment;
  }

  return defaultLocale;
}

export function stripLocaleFromPath(pathname: string) {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const segments = normalized.split("/").filter(Boolean);

  if (segments[0] && isSupportedLocale(segments[0])) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}/`.replace(/\/+/g, "/") : "/";
  }

  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

export function localizePath(path: string, locale: SupportedLocale) {
  const cleanPath = stripLocaleFromPath(path);

  if (locale === defaultLocale) {
    return cleanPath;
  }

  return cleanPath === "/" ? `/${locale}/` : `/${locale}${cleanPath}`;
}

export function swapLocale(pathname: string, locale: SupportedLocale) {
  return localizePath(stripLocaleFromPath(pathname), locale);
}

export function getSecondaryLocales() {
  return supportedLocales.filter((locale) => locale !== defaultLocale);
}
