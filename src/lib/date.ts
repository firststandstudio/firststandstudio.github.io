/* Date: 4/20/2026 | Developer: Yahia Saad | License: First Stand Studio. All rights reserved. */
import { localeMeta, type SupportedLocale } from "../i18n/config";

const dateFormatters = new Map<string, Intl.DateTimeFormat>();
const relativeFormatters = new Map<string, Intl.RelativeTimeFormat>();

function getDateFormatter(locale: SupportedLocale) {
  const key = localeMeta[locale].intl;

  if (!dateFormatters.has(key)) {
    dateFormatters.set(
      key,
      new Intl.DateTimeFormat(key, {
        year: "numeric",
        month: "long",
        day: "numeric"
      })
    );
  }

  return dateFormatters.get(key)!;
}

function getRelativeFormatter(locale: SupportedLocale) {
  const key = localeMeta[locale].intl;

  if (!relativeFormatters.has(key)) {
    relativeFormatters.set(
      key,
      new Intl.RelativeTimeFormat(key, {
        numeric: "auto"
      })
    );
  }

  return relativeFormatters.get(key)!;
}

export function formatDate(value: Date | string, locale: SupportedLocale = "en") {
  return getDateFormatter(locale).format(new Date(value));
}

export function formatRelativeTime(value: Date | string, locale: SupportedLocale = "en") {
  const date = new Date(value);
  const diff = date.getTime() - Date.now();
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const formatter = getRelativeFormatter(locale);

  if (Math.abs(diff) < hour) {
    return formatter.format(Math.round(diff / minute), "minute");
  }

  if (Math.abs(diff) < day) {
    return formatter.format(Math.round(diff / hour), "hour");
  }

  return formatter.format(Math.round(diff / day), "day");
}
