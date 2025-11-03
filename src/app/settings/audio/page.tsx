import {BackLink} from "@/components/BackLink";
import {PageLayout} from "@/components/PageLayout";
import {Routes} from "@/lib/routes";

export default function AudioPage() {
  return (
    <PageLayout title="audio" header={<BackLink href={Routes.settings.root} />}>
      {null}
    </PageLayout>
  );
}
