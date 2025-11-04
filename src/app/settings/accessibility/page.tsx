import {BackLink} from "@/components/BackLink";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Routes} from "@/lib/routes";

export default function AccessibilityPage() {
  return (
    <PageLayout
      title="accessibility"
      header={<BackLink href={Routes.settings.root} />}>
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
