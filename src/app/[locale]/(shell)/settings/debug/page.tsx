"use client";

import {useAtomValue} from "jotai/react";
import {useExtracted} from "next-intl";

import {JsonBlock} from "@/components/JsonBlock";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {formatJson} from "@/lib/json";
import {Routes} from "@/lib/routes";
import {settingsAtom} from "@/lib/storage";

export default function DebugPage() {
  const settings = useAtomValue(settingsAtom);
  const t = useExtracted();
  const formattedSettings = formatJson(settings);
  return (
    <PageLayout title={t("info for nerds")} backTo={Routes.settings.root}>
      <Section title={t("settings")} text={formattedSettings}>
        <JsonBlock>{formattedSettings}</JsonBlock>
      </Section>
    </PageLayout>
  );
}
