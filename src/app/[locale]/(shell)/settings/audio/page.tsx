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

export default async function AudioPage() {
  const t = await getExtracted();
  return (
    <PageLayout title={t("audio")} backTo={Routes.settings.root}>
      <Section id="audio-format" title={t("audio format")}>
        <Field>
          <FieldBackground>{null}</FieldBackground>
          <FieldDescription>
            {t(
              "all formats but 'best' are converted from the source format, there will be some quality loss. when 'best' format is selected, the audio is kept in its original format whenever possible.",
            )}
          </FieldDescription>
        </Field>
      </Section>
      <Section id="audio-bitrate" title={t("audio bitrate")}>
        <Field>
          <FieldBackground>{null}</FieldBackground>
          <FieldDescription>
            {t(
              "bitrate is applied only when converting audio to a lossy format. cobalt can't improve the source audio quality, so choosing a bitrate over 128kbps may inflate the file size with no audible difference. perceived quality may vary by format.",
            )}
          </FieldDescription>
        </Field>
      </Section>
      <Section id="youtube-audio-quality" title={t("youtube audio quality")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("prefer better quality")}
              <Switch />
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "a dubbed audio track for the selected language will be used if available; otherwise, the original will be used.",
            )}
          </FieldDescription>
        </Field>
      </Section>
      <Section id="youtube-audio-track" title={t("youtube audio track")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("preferred dub language")}
              <NativeSelect>
                <NativeSelectOption>{t("orginal")}</NativeSelectOption>
              </NativeSelect>
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "a dubbed audio track for the selected language will be used if available; otherwise, the original will be used.",
            )}
          </FieldDescription>
        </Field>
      </Section>
      <Section id="tiktok" title={t("tiktok")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("download original sound")}
              <Switch />
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "the sound will be downloaded from the video without any changes by the post's author.",
            )}
          </FieldDescription>
        </Field>
      </Section>
    </PageLayout>
  );
}
