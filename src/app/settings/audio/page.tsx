import {FieldLabelContainer} from "@/components/FieldLabelContainer";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Field, FieldDescription} from "@/components/ui/field";
import {Switch} from "@/components/ui/switch";
import {Routes} from "@/lib/routes";

export default function AudioPage() {
  return (
    <PageLayout title="audio" backTo={Routes.settings}>
      <Section id="audio-format" title="audio format">
        {null}
      </Section>
      <Section id="audio-bitrate" title="audio bitrate">
        {null}
      </Section>
      <Section id="youtube-audio-quality" title="youtube audio quality">
        {null}
      </Section>
      <Section id="youtube-audio-track" title="youtube audio track">
        <Field>
          <FieldLabelContainer>
            prefer better quality
            <Switch />
          </FieldLabelContainer>
          <FieldDescription>
            cobalt will use a dubbed audio track for selected language if
            it&apos;s available. if not, original will be used instead.
          </FieldDescription>
        </Field>
      </Section>
      <Section id="tiktok" title="tiktok">
        <Field>
          <FieldLabelContainer>
            download original sound
            <Switch />
          </FieldLabelContainer>
          <FieldDescription>
            cobalt will download the sound from the video without any changes by
            the post&apos;s author.
          </FieldDescription>
        </Field>
      </Section>
    </PageLayout>
  );
}
