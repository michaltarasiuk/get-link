import type {Locale} from "next-intl";

export function getLanguageDisplayName(locale: Locale) {
  const displayNames = new Intl.DisplayNames([locale], {
    type: "language",
  });
  return displayNames.of(locale);
}
