import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Routes} from "@/lib/routes";

export default function MetadataPage() {
  return (
    <PageLayout title="metadata" backTo={Routes.settings}>
      <Section id="filename-style" title="filename style">
        {null}
      </Section>
      <Section id="saving-method" title="saving method">
        {null}
      </Section>
      <Section id="subtitles" title="subtitles">
        {null}
      </Section>
      <Section id="file-metadata" title="file metadata">
        {null}
      </Section>
    </PageLayout>
  );
}
