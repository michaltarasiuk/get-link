import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Routes} from "@/lib/routes";

export default function PrivacyPage() {
  return (
    <PageLayout title="privacy" backTo={Routes.settings}>
      <Section id="tunneling" title="tunneling">
        {null}
      </Section>
    </PageLayout>
  );
}
