import {BackLink} from "@/components/BackLink";
import {PageLayout} from "@/components/PageLayout";
import {Routes} from "@/lib/routes";

export default function MetadataPage() {
  return (
    <PageLayout
      title="metadata"
      header={<BackLink href={Routes.settings.root} />}>
      {null}
    </PageLayout>
  );
}
