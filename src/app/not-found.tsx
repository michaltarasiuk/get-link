import {getExtracted} from "next-intl/server";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import {cn} from "@/lib/cn";

export default async function NotFound() {
  const t = await getExtracted();
  return (
    <div className={cn("flex min-h-dvh items-center justify-center")}>
      <Empty>
        <EmptyHeader>
          <EmptyTitle>{t("404 - Not Found")}</EmptyTitle>
          <EmptyDescription>
            {t("The page you're looking for doesn't exist.")}
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  );
}
