import {BackLink} from "@/components/BackLink";
import {PageLayout} from "@/components/PageLayout";
import {Routes} from "@/lib/routes";

export default function AppearancePage() {
  return (
    <PageLayout
      title="appearance"
      header={<BackLink href={Routes.settings.root} />}>
      {null}
    </PageLayout>
  );
}
