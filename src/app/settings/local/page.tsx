import {BackLink} from "@/components/BackLink";
import {PageLayout} from "@/components/PageLayout";
import {Routes} from "@/lib/routes";

export default function LocalPage() {
  return (
    <PageLayout
      title="local processing"
      header={<BackLink href={Routes.settings.root} />}>
      {null}
    </PageLayout>
  );
}
