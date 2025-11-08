import {FieldLabelContainer} from "@/components/FieldLabelContainer";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Field, FieldDescription} from "@/components/ui/field";
import {Switch} from "@/components/ui/switch";

export default function VideoPage() {
  return (
    <PageLayout title="video" backTo="/settings">
      <Section id="video-quality" title="video quality">
        {null}
      </Section>
      <Section
        id="preferred-youtube-video-codec"
        title="preferred youtube video codec">
        {null}
      </Section>
      <Section id="youtube-file-container" title="youtube file container">
        {null}
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
