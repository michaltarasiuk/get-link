import {BackLink} from "@/components/BackLink";
import {PageLayout} from "@/components/PageLayout";
import {Routes} from "@/lib/routes";

export default function DebugPage() {
  return (
    <PageLayout
      title="info for nerds"
      header={<BackLink href={Routes.settings.root} />}>
      {null}
    </PageLayout>
  );
}
