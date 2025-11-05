"use client";

import {
  FileDownIcon,
  FileUpIcon,
  RefreshCcwDot,
  ShredderIcon,
} from "lucide-react";

import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/cn";
import {Routes} from "@/lib/routes";

import {ClearCacheAlert} from "../_components/ClearCacheAlert";
import {ResetSettingsDataAlert} from "../_components/ResetSettingsDataAlert";

export default function AdvancedPage() {
  return (
    <PageLayout title="advanced" backTo={Routes.settings}>
      <Section id="debug" title="debug">
        {null}
      </Section>
      <Section id="settings-data" title="settings data">
        <div className={cn("flex gap-3")}>
          <Button variant="outline" size="lg">
            <FileDownIcon className={cn("size-5")} />
            import
          </Button>
          <Button variant="outline" size="lg">
            <FileUpIcon className={cn("size-5")} />
            export
          </Button>
          <ResetSettingsDataAlert
            trigger={
              <Button variant="destructive" size="lg">
                <RefreshCcwDot className={cn("size-5")} />
                reset
              </Button>
            }
          />
        </div>
      </Section>
      <Section id="local-storage" title="local storage">
        <ClearCacheAlert
          trigger={
            <Button variant="destructive" size="lg">
              <ShredderIcon className={cn("size-5")} />
              clear cache
            </Button>
          }
        />
      </Section>
    </PageLayout>
  );
}
