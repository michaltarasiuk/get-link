"use client";

import {useExtracted} from "next-intl";

import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Routes} from "@/lib/routes";

export default function DebugPage() {
  const t = useExtracted();
  return (
    <PageLayout title={t("info for nerds")} backTo={Routes.settings.root}>
      <Section title={t("device")} text="">
        {null}
      </Section>
      <Section title={t("app")} text="">
        {null}
      </Section>
      <Section title={t("settings")} text="">
        {null}
      </Section>
      <Section title={t("version")} text="">
        {null}
      </Section>
      <Section title={t("states")} text="">
        {null}
      </Section>
    </PageLayout>
  );
}
