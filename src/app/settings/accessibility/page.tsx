import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Routes} from "@/lib/routes";

export default function AccessibilityPage() {
  return (
    <PageLayout title="accessibility" backTo={Routes.settings}>
      <Section id="visual" title="visual">
        {null}
      </Section>
      <Section id="behavior" title="behavior">
        {null}
      </Section>
      <Section id="haptics" title="haptics">
        {null}
      </Section>
    </PageLayout>
  );
}
