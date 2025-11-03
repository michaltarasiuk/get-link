import {BackLink} from "@/components/BackLink";
import {PageLayout} from "@/components/PageLayout";
import {Routes} from "@/lib/routes";

export default function AccessibilityPage() {
  return (
    <PageLayout
      title="accessibility"
      header={<BackLink href={Routes.settings.root} />}>
      {null}
    </PageLayout>
  );
}
