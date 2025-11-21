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
import {
  type AudioBitrate,
  AudioBitrates,
  type AudioFormat,
  AudioFormats,
  type DubLanguage,
  DubLanguages,
} from "@/lib/audio";
import {cn} from "@/lib/cn";
import {Routes} from "@/lib/routes";
import {audioAtom} from "@/lib/storage";

export default function AudioPage() {
  const [audio, setAudio] = useAtom(audioAtom);
  const t = useExtracted();
  return (
    <PageLayout title={t("audio")} backTo={Routes.settings.root}>
      <LinkSection id="audio-format" title={t("audio format")}>
        <Field>
          <FieldBackground>
            <ToggleGroup
              type="single"
              value={audio.format}
              spacing={2}
              className={cn("grid w-full grid-cols-5")}
              onValueChange={(value) =>
                setAudio((audio) => ({
                  ...audio,
                  format: value as AudioFormat,
                }))
              }>
              {AudioFormats.map((f) => (
                <ToggleGroupItem key={f} value={f}>
                  {f}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </FieldBackground>
          <FieldDescription>
            {t(
              "all formats but 'best' are converted from the source format, there will be some quality loss. when 'best' format is selected, the audio is kept in its original format whenever possible.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
      <LinkSection id="audio-bitrate" title={t("audio bitrate")}>
        <Field>
          <FieldBackground>
            <ToggleGroup
              type="single"
              value={audio.bitrate}
              spacing={2}
              onValueChange={(value) =>
                setAudio((audio) => ({
                  ...audio,
                  bitrate: value as AudioBitrate,
                }))
              }>
              {AudioBitrates.map((b) => (
                <ToggleGroupItem key={b} value={b}>
                  {b}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </FieldBackground>
          <FieldDescription>
            {t(
              "bitrate is applied only when converting audio to a lossy format. cobalt can't improve the source audio quality, so choosing a bitrate over 128kbps may inflate the file size with no audible difference. perceived quality may vary by format.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
      <LinkSection
        id="youtube-audio-quality"
        title={t("youtube audio quality")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("prefer better quality")}
              <Switch
                checked={audio.betterQuality}
                onCheckedChange={(checked) =>
                  setAudio((audio) => ({
                    ...audio,
                    betterQuality: checked,
                  }))
                }
              />
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "a dubbed audio track for the selected language will be used if available; otherwise, the original will be used.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
      <LinkSection id="youtube-audio-track" title={t("youtube audio track")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("preferred dub language")}
              <NativeSelect
                value={audio.dubLanguage}
                onValueChange={(value) =>
                  setAudio((audio) => ({
                    ...audio,
                    dubLanguage: value as DubLanguage,
                  }))
                }>
                {DubLanguages.map((l) => {
                  let label: string;
                  switch (l) {
                    case "orginal":
                      label = t("orginal");
                      break;
                    default:
                      assertNever(l);
                  }
                  return (
                    <NativeSelectOption key={l} value={l}>
                      {label}
                    </NativeSelectOption>
                  );
                })}
              </NativeSelect>
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "a dubbed audio track for the selected language will be used if available; otherwise, the original will be used.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
      <LinkSection id="tiktok" title={t("tiktok")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("download original sound")}
              <Switch
                checked={audio.downloadOrginalSound}
                onCheckedChange={(checked) =>
                  setAudio((audio) => ({
                    ...audio,
                    downloadOrginalSound: checked,
                  }))
                }
              />
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "the sound will be downloaded from the video without any changes by the post's author.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
    </PageLayout>
  );
}
