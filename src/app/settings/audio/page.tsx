import {BackLink} from "@/components/BackLink";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Routes} from "@/lib/routes";

export default function AudioPage() {
  return (
    <PageLayout title="audio" header={<BackLink href={Routes.settings.root} />}>
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
        {null}
      </Section>
      <Section id="tiktok" title="tiktok">
        {null}
      </Section>
    </PageLayout>
  );
}
