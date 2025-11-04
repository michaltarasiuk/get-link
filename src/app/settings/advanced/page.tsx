import {BackLink} from "@/components/BackLink";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Routes} from "@/lib/routes";

export default function AdvancedPage() {
  return (
    <PageLayout
      title="advanced"
      header={<BackLink href={Routes.settings.root} />}>
      <Section id="debug" title="debug">
        {null}
      </Section>
      <Section id="settings-data" title="settings data">
        {null}
      </Section>
      <Section id="local-storage" title="local storage">
        {null}
      </Section>
    </PageLayout>
  );
}
