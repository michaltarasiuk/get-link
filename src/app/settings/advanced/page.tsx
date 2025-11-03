import {BackLink} from "@/components/BackLink";
import {PageLayout} from "@/components/PageLayout";
import {Routes} from "@/lib/routes";

export default function AdvancedPage() {
  return (
    <PageLayout
      title="advanced"
      header={<BackLink href={Routes.settings.root} />}>
      {null}
    </PageLayout>
  );
}
