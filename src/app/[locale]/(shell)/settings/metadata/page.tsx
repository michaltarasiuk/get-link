import {getExtracted} from "next-intl/server";

import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {
  Field,
  FieldBackground,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import {NativeSelect, NativeSelectOption} from "@/components/ui/native-select";
import {Switch} from "@/components/ui/switch";
import {Routes} from "@/lib/routes";

export default async function MetadataPage() {
  const t = await getExtracted();
  return (
    <PageLayout title={t("metadata")} backTo={Routes.settings.root}>
      <Section id="filename-style" title={t("filename style")}>
        <Field>
          <FieldBackground>{null}</FieldBackground>
          <FieldDescription>
            {t(
              "filename style will only be used for files tunneled by cobalt. some services don't support filename styles other than classic.",
            )}
          </FieldDescription>
        </Field>
      </Section>
      <Section id="saving-method" title={t("saving method")}>
        <Field>
          <FieldBackground>{null}</FieldBackground>
          <FieldDescription>
            {t(
              "preferred way of saving the file or link from cobalt. if preferred method is unavailable or something goes wrong, cobalt will ask you what to do next.",
            )}
          </FieldDescription>
        </Field>
      </Section>
      <Section id="subtitles" title={t("subtitles")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("preferred subtitle language")}
              <NativeSelect>
                <NativeSelectOption>{t("none")}</NativeSelectOption>
              </NativeSelect>
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "subtitles will be added to the downloaded file in the preferred language if they're available. some services don't have a language selection, and if that's the case, the only available subtitle track will be added if you have any language selected.",
            )}
          </FieldDescription>
        </Field>
      </Section>
      <Section id="file-metadata" title={t("file metadata")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("disable file metadata")}
              <Switch />
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t("title, artist, and other info will not be added to the file.")}
          </FieldDescription>
        </Field>
      </Section>
    </PageLayout>
  );
}
