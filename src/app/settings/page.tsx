"use client";

import {useRouter} from "next/navigation";
import {useEffect} from "react";

import {PageLayout} from "@/components/PageLayout";
import {getMobileMedia} from "@/lib/get-mobile-media.ts";

export default function SettingsPage() {
  const router = useRouter();
  useEffect(() => {
    const mobileMedia = getMobileMedia();
    handleMediaChange(mobileMedia);
    mobileMedia.addEventListener("change", handleMediaChange);
    return () => {
      mobileMedia.removeEventListener("change", handleMediaChange);
    };
    function handleMediaChange(e: MediaQueryList | MediaQueryListEvent) {
      if (!e.matches) {
        router.replace("/settings/appearance");
      }
    }
  }, [router]);
  return <PageLayout title="settings">{null}</PageLayout>;
}
