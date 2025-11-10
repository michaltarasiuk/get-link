import {getExtracted} from "next-intl/server";

import {FieldContainer, FieldLabelContainer} from "@/components/FieldContainer";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Field, FieldDescription} from "@/components/ui/field";
import {NativeSelect, NativeSelectOption} from "@/components/ui/native-select";
import {Switch} from "@/components/ui/switch";
import {Routes} from "@/lib/routes";

export default async function AppearancePage() {
  const t = await getExtracted();
  return (
    <PageLayout title={t("appearance")} backTo={Routes.settings.root}>
      <Section id="theme" title={t("theme")}>
        <Field>
          <FieldContainer>{null}</FieldContainer>
          <FieldDescription>
            {t(
              "auto theme switches between light and dark themes depending on your device's display mode.",
            )}
          </FieldDescription>
        </Field>
      </Section>
      <Section id="language" title={t("language")}>
        <Field>
          <FieldLabelContainer>
            {t("automatic selection")}
            <Switch />
          </FieldLabelContainer>
          <FieldDescription>
            {t(
              "the app will use your browser's default language if translation is available. if not, english will be used instead.",
            )}
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabelContainer>
            {t("preferred language")}
            <NativeSelect>
              <NativeSelectOption>{t("english")}</NativeSelectOption>
            </NativeSelect>
          </FieldLabelContainer>
          <FieldDescription>
            {t(
              "this language will be used when automatic selection is disabled. any text that isn't translated will be displayed in english.",
            )}
            <br />
            <br />
            {t(
              "some languages use community-sourced translations, they may be inaccurate or incomplete.",
            )}
          </FieldDescription>
        </Field>
      </Section>
    </PageLayout>
  );
}
