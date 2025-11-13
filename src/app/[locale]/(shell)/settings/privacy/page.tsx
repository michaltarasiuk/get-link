import {getExtracted} from "next-intl/server";

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

export default async function PrivacyPage() {
  const t = await getExtracted();
  return (
    <PageLayout title={t("privacy")} backTo={Routes.settings.root}>
      <LinkSection id="tunneling" title={t("tunneling")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("always tunnel files")}
              <Switch />
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
