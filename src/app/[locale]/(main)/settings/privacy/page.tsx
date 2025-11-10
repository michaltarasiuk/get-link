import {getExtracted} from "next-intl/server";

import {FieldLabelContainer} from "@/components/FieldContainer";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Field, FieldDescription} from "@/components/ui/field";
import {Switch} from "@/components/ui/switch";
import {Routes} from "@/lib/routes";

export default async function PrivacyPage() {
  const t = await getExtracted();
  return (
    <PageLayout title={t("privacy")} backTo={Routes.settings.root}>
      <Section id="tunneling" title={t("tunneling")}>
        <Field>
          <FieldLabelContainer>
            {t("always tunnel files")}
            <Switch />
          </FieldLabelContainer>
          <FieldDescription>
            {t(
              "this will hide your ip address, browser info, and bypass local network restrictions. when enabled, files will also have readable filenames that otherwise would be gibberish.",
            )}
          </FieldDescription>
        </Field>
      </Section>
    </PageLayout>
  );
}
