"use client";

import {useAtom} from "jotai/react";
import {useExtracted} from "next-intl";

import {PageLayout} from "@/components/PageLayout";
import {LinkSection} from "@/components/Section";
import {
  Field,
  FieldBackground,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import {Switch} from "@/components/ui/switch";
import {Routes} from "@/lib/routes";
import {privacyAtom} from "@/lib/storage";

export default function PrivacyPage() {
  const [privacy, setPrivacy] = useAtom(privacyAtom);
  const t = useExtracted();
  return (
    <PageLayout title={t("privacy")} backTo={Routes.settings.root}>
      <LinkSection id="tunneling" title={t("tunneling")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("always tunnel files")}
              <Switch
                checked={privacy.alwaysTunnelFiles}
                onCheckedChange={(checked) =>
                  setPrivacy((privacy) => ({
                    ...privacy,
                    alwaysTunnelFiles: checked,
                  }))
                }
              />
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "this will hide your ip address, browser info, and bypass local network restrictions. when enabled, files will also have readable filenames that otherwise would be gibberish.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
    </PageLayout>
  );
}
