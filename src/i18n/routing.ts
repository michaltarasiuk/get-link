import {defineRouting} from "next-intl/routing";

type Locale = (typeof Locales)[number];

export const Locales = ["en"] as const;
export const DefaultLocale: Locale = "en";

export const routing = defineRouting({
  locales: Locales,
  defaultLocale: DefaultLocale,
});
