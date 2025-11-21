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
import {NativeSelect, NativeSelectOption} from "@/components/ui/native-select";
import {Switch} from "@/components/ui/switch";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {assertNever} from "@/lib/assert";
import {cn} from "@/lib/cn";
import {
  type FilenameStyle,
  FilenameStyles,
  type SavingMethod,
  SavingMethods,
  type SubtitleLanguage,
  SubtitleLanguages,
} from "@/lib/metadata";
import {Routes} from "@/lib/routes";
import {metadataAtom} from "@/lib/storage";

export default function MetadataPage() {
  const [metadata, setMetadata] = useAtom(metadataAtom);
  const t = useExtracted();
  return (
    <PageLayout title={t("metadata")} backTo={Routes.settings.root}>
      <LinkSection id="filename-style" title={t("filename style")}>
        <Field>
          <FieldBackground>
            <ToggleGroup
              type="single"
              value={metadata.filenameStyle}
              spacing={2}
              className={cn("grid w-full grid-cols-4")}
              onValueChange={(value) =>
                setMetadata((metadata) => ({
                  ...metadata,
                  filenameStyle: value as FilenameStyle,
                }))
              }>
              {FilenameStyles.map((s) => (
                <ToggleGroupItem key={s} value={s}>
                  {s}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </FieldBackground>
          <FieldDescription>
            {t(
              "filename style will only be used for files tunneled by cobalt. some services don't support filename styles other than classic.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
      <LinkSection id="saving-method" title={t("saving method")}>
        <Field>
          <FieldBackground>
            <ToggleGroup
              type="single"
              value={metadata.savingMethod}
              spacing={2}
              className={cn("grid w-full grid-cols-4")}
              onValueChange={(value) =>
                setMetadata((metadata) => ({
                  ...metadata,
                  savingMethod: value as SavingMethod,
                }))
              }>
              {SavingMethods.map((m) => (
                <ToggleGroupItem key={m} value={m}>
                  {m}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </FieldBackground>
          <FieldDescription>
            {t(
              "preferred way of saving the file or link from cobalt. if preferred method is unavailable or something goes wrong, cobalt will ask you what to do next.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
      <LinkSection id="subtitles" title={t("subtitles")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("preferred subtitle language")}
              <NativeSelect
                value={metadata.subtitleLanguage}
                onValueChange={(value) =>
                  setMetadata((metadata) => ({
                    ...metadata,
                    subtitleLanguage: value as SubtitleLanguage,
                  }))
                }>
                {SubtitleLanguages.map((l) => {
                  let label: string;
                  switch (l) {
                    case "none":
                      label = t("none");
                      break;
                    default:
                      assertNever(l);
                  }
                  return (
                    <NativeSelectOption key={l}>{label}</NativeSelectOption>
                  );
                })}
              </NativeSelect>
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "subtitles will be added to the downloaded file in the preferred language if they're available. some services don't have a language selection, and if that's the case, the only available subtitle track will be added if you have any language selected.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
      <LinkSection id="file-metadata" title={t("file metadata")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("disable file metadata")}
              <Switch
                checked={metadata.disableFileMetadata}
                onCheckedChange={(checked) =>
                  setMetadata((metadata) => ({
                    ...metadata,
                    disableFileMetadata: checked,
                  }))
                }
              />
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t("title, artist, and other info will not be added to the file.")}
          </FieldDescription>
        </Field>
      </LinkSection>
    </PageLayout>
  );
}
