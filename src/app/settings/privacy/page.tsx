import {BackLink} from "@/components/BackLink";
import {PageLayout} from "@/components/PageLayout";
import {Routes} from "@/lib/routes";

export default function PrivacyPage() {
  return (
    <PageLayout
      title="privacy"
      header={<BackLink href={Routes.settings.root} />}>
      {null}
    </PageLayout>
  );
}
