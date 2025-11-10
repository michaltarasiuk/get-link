import {getExtracted} from "next-intl/server";

import {PageLayout} from "@/components/PageLayout";
import {Routes} from "@/lib/routes";

export default async function DebugPage() {
  const t = await getExtracted();
  return (
    <PageLayout title={t("info for nerds")} backTo={Routes.settings.root}>
      {null}
    </PageLayout>
  );
}
