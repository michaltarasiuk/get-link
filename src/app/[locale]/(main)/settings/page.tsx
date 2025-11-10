"use client";

import {useExtracted} from "next-intl";
import {useEffect} from "react";

import {PageLayout} from "@/components/PageLayout";
import {useRouter} from "@/i18n/navigation";
import {Routes} from "@/lib/routes";

export default function SettingsPage() {
  const router = useRouter();
  const t = useExtracted();
  useEffect(() => {
    const mobileMedia = matchMedia("(max-width: 48rem)");
    handleMediaChange(mobileMedia);
    mobileMedia.addEventListener("change", handleMediaChange);
    return () => {
      mobileMedia.removeEventListener("change", handleMediaChange);
    };
    function handleMediaChange(e: MediaQueryList | MediaQueryListEvent) {
      if (!e.matches) {
        router.replace(Routes.settings.appearance);
      }
    }
  }, [router]);
  return <PageLayout title={t("settings")}>{null}</PageLayout>;
}
