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

export default async function VideoPage() {
  const t = await getExtracted();
  return (
    <PageLayout title={t("video")} backTo={Routes.settings.root}>
      <LinkSection id="video-quality" title={t("video quality")}>
        <Field>
          <FieldBackground>{null}</FieldBackground>
          <FieldDescription>
            {t(
              "if preferred video quality isn't available, next best is picked instead.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
      <LinkSection
        id="preferred-youtube-video-codec"
        title={t("preferred youtube video codec")}>
        <Field>
          <FieldBackground>{null}</FieldBackground>
          <FieldDescription>
            {t(
              "h264: best compatibility, average quality. max quality is 1080p. av1: best quality and efficiency. supports 8k & HDR. vp9: same quality as av1, but file is ~2x bigger. supports 4k & HDR.",
            )}
            <br />
            <br />
            {t(
              "av1 and vp9 aren't widely supported, you might have to use additional software to play/edit them. cobalt picks next best codec if preferred one isn't available.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
      <LinkSection
        id="youtube-file-container"
        title={t("youtube file container")}>
        <Field>
          <FieldBackground>{null}</FieldBackground>
          <FieldDescription>
            {t(
              "when 'auto' is selected, cobalt will pick the best container automatically depending on selected codec: mp4 for h264; webm for vp9/av1.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
      <LinkSection
        id="high-efficiency-video-codec"
        title={t("high efficiency video codec")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("allow h265 for videos")}
              <Switch />
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "allows downloading videos from platforms like tiktok and xiaohongshu in higher quality at cost of compatibility.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
      <LinkSection id="twitter-x" title={t("twitter/x")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("convert looping videos to GIF")}
              <Switch />
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "GIF conversion is inefficient, converted file may be obnoxiously big and low quality.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
    </PageLayout>
  );
}
