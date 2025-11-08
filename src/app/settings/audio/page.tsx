import {FieldContainer, FieldLabelContainer} from "@/components/FieldContainer";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Field, FieldDescription} from "@/components/ui/field";
import {NativeSelect, NativeSelectOption} from "@/components/ui/native-select";
import {Switch} from "@/components/ui/switch";

export default function AudioPage() {
  return (
    <PageLayout title="audio" backTo="/settings">
      <Section id="audio-format" title="audio format">
        <Field>
          <FieldContainer>{null}</FieldContainer>
          <FieldDescription>
            all formats but &quot;best&quot; are converted from the source
            format, there will be some quality loss. when &quot;best&quot;
            format is selected, the audio is kept in its original format
            whenever possible.
          </FieldDescription>
        </Field>
      </Section>
      <Section id="audio-bitrate" title="audio bitrate">
        <Field>
          <FieldContainer>{null}</FieldContainer>
          <FieldDescription>
            bitrate is applied only when converting audio to a lossy format.
            cobalt can&apos;t improve the source audio quality, so choosing a
            bitrate over 128kbps may inflate the file size with no audible
            difference. perceived quality may vary by format.
          </FieldDescription>
        </Field>
      </Section>
      <Section id="youtube-audio-quality" title="youtube audio quality">
        <Field>
          <FieldLabelContainer>
            prefer better quality
            <Switch />
          </FieldLabelContainer>
          <FieldDescription>
            a dubbed audio track for the selected language will be used if
            available; otherwise, the original will be used.
          </FieldDescription>
        </Field>
      </Section>
      <Section id="youtube-audio-track" title="youtube audio track">
        <Field>
          <FieldLabelContainer>
            preferred dub language
            <NativeSelect>
              <NativeSelectOption>orginal</NativeSelectOption>
            </NativeSelect>
          </FieldLabelContainer>
          <FieldDescription>
            a dubbed audio track for the selected language will be used if
            available; otherwise, the original will be used.
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
            the sound will be downloaded from the video without any changes by
            the post&apos;s author.
          </FieldDescription>
        </Field>
      </Section>
    </PageLayout>
  );
}
