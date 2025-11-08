import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";

export default function LocalPage() {
  return (
    <PageLayout title="local processing" backTo="/settings">
      <Section id="local-media-processing" title="local media processing">
        {null}
      </Section>
    </PageLayout>
  );
}
