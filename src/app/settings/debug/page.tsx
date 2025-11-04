import {PageLayout} from "@/components/PageLayout";
import {Routes} from "@/lib/routes";

export default function DebugPage() {
  return (
    <PageLayout title="info for nerds" backTo={Routes.settings}>
      {null}
    </PageLayout>
  );
}
