import {BackLink} from "@/components/BackLink";
import {PageLayout} from "@/components/PageLayout";
import {Routes} from "@/lib/routes";

export default function InstancesPage() {
  return (
    <PageLayout
      title="instances"
      header={<BackLink href={Routes.settings.root} />}>
      {null}
    </PageLayout>
  );
}
