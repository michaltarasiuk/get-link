import {BackLink} from "@/components/BackLink";
import {PageLayout} from "@/components/PageLayout";
import {Routes} from "@/lib/routes";

export default function VideoPage() {
  return (
    <PageLayout title="video" header={<BackLink href={Routes.settings.root} />}>
      {null}
    </PageLayout>
  );
}
