import {notFound} from "next/navigation";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {setRequestLocale} from "next-intl/server";

import {routing} from "@/i18n/routing";

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}

export const dynamic = "force-static";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
