import {BackLink} from "@/components/BackLink";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Routes} from "@/lib/routes";

export default function AppearancePage() {
  return (
    <PageLayout
      title="appearance"
      header={<BackLink href={Routes.settings.root} />}>
      <Section id="theme" title="theme">
        {null}
      </Section>
      <Section id="language" title="language">
        {null}
      </Section>
    </PageLayout>
  );
}
