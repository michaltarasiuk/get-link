import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Routes} from "@/lib/routes";

export default function LocalPage() {
  return (
    <PageLayout title="local processing" backTo={Routes.settings}>
      <Section id="local-media-processing" title="local media processing">
        {null}
      </Section>
    </PageLayout>
  );
}
