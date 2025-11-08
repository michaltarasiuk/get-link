import {FieldContainer, FieldLabelContainer} from "@/components/FieldContainer";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Field, FieldDescription} from "@/components/ui/field";
import {Switch} from "@/components/ui/switch";

export default function VideoPage() {
  return (
    <PageLayout title="video" backTo="/settings">
      <Section id="video-quality" title="video quality">
        <Field>
          <FieldContainer>{null}</FieldContainer>
          <FieldDescription>
            if preferred video quality isn&apos;t available, next best is picked
            instead.
          </FieldDescription>
        </Field>
      </Section>
      <Section
        id="preferred-youtube-video-codec"
        title="preferred youtube video codec">
        <Field>
          <FieldContainer>{null}</FieldContainer>
          <FieldDescription>
            h264: best compatibility, average quality. max quality is 1080p.
            av1: best quality and efficiency. supports 8k & HDR. vp9: same
            quality as av1, but file is ~2x bigger. supports 4k & HDR.
            <br />
            <br />
            av1 and vp9 aren&apos;t widely supported, you might have to use
            additional software to play/edit them. cobalt picks next best codec
            if preferred one isn&apos;t available.
          </FieldDescription>
        </Field>
      </Section>
      <Section id="youtube-file-container" title="youtube file container">
        <Field>
          <FieldContainer>{null}</FieldContainer>
          <FieldDescription>
            when &quot;auto&quot; is selected, cobalt will pick the best
            container automatically depending on selected codec: mp4 for h264;
            webm for vp9/av1.
          </FieldDescription>
        </Field>
      </Section>
      <Section
        id="high-efficiency-video-codec"
        title="high efficiency video codec">
        <Field>
          <FieldLabelContainer>
            allow h265 for videos
            <Switch />
          </FieldLabelContainer>
          <FieldDescription>
            allows downloading videos from platforms like tiktok and xiaohongshu
            in higher quality at cost of compatibility.
          </FieldDescription>
        </Field>
      </Section>
      <Section id="twitter-x" title="twitter/x">
        <Field>
          <FieldLabelContainer>
            convert looping videos to GIF
            <Switch />
          </FieldLabelContainer>
          <FieldDescription>
            GIF conversion is inefficient, converted file may be obnoxiously big
            and low quality.
          </FieldDescription>
        </Field>
      </Section>
    </PageLayout>
  );
}
