import {getExtracted} from "next-intl/server";

import {PageLayout} from "@/components/PageLayout";
import {LinkSection} from "@/components/Section";
import {
  Field,
  FieldBackground,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import {NativeSelect, NativeSelectOption} from "@/components/ui/native-select";
import {Switch} from "@/components/ui/switch";
import {Routes} from "@/lib/routes";

export default async function AppearancePage() {
  const t = await getExtracted();
  return (
    <PageLayout title={t("appearance")} backTo={Routes.settings.root}>
      <LinkSection id="theme" title={t("theme")}>
        <Field>
          <FieldBackground>{null}</FieldBackground>
          <FieldDescription>
            {t(
              "auto theme switches between light and dark themes depending on your device's display mode.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
      <LinkSection id="language" title={t("language")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("automatic selection")}
              <Switch />
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "the app will use your browser's default language if translation is available. if not, english will be used instead.",
            )}
          </FieldDescription>
        </Field>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("preferred language")}
              <NativeSelect>
                <NativeSelectOption>{t("english")}</NativeSelectOption>
              </NativeSelect>
            </FieldLabel>
          </FieldBackground>
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
      </LinkSection>
    </PageLayout>
  );
}
