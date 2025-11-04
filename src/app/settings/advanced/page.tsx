import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Routes} from "@/lib/routes";

export default function AdvancedPage() {
  return (
    <PageLayout title="advanced" backTo={Routes.settings}>
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
