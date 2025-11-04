import {BackLink} from "@/components/BackLink";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Routes} from "@/lib/routes";

export default function VideoPage() {
  return (
    <PageLayout title="video" header={<BackLink href={Routes.settings.root} />}>
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
        {null}
      </Section>
      <Section id="twitter-x" title="twitter/x">
        {null}
      </Section>
    </PageLayout>
  );
}
