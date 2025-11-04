import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Routes} from "@/lib/routes";

export default function InstancesPage() {
  return (
    <PageLayout title="instances" backTo={Routes.settings}>
      <Section id="community-instances" title="community instances">
        {null}
      </Section>
      <Section id="instance-access-key" title="instance access key">
        {null}
      </Section>
    </PageLayout>
  );
}
