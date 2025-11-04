import {BackLink} from "@/components/BackLink";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Routes} from "@/lib/routes";

export default function LocalPage() {
  return (
    <PageLayout
      title="local processing"
      header={<BackLink href={Routes.settings.root} />}>
      <Section id="local-media-processing" title="local media processing">
        {null}
      </Section>
    </PageLayout>
  );
}
