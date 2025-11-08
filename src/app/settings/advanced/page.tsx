"use client";

import {
  FileDownIcon,
  FileUpIcon,
  RefreshCcwDot,
  ShredderIcon,
} from "lucide-react";

import {FieldLabelContainer} from "@/components/FieldContainer";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Button} from "@/components/ui/button";
import {Field, FieldDescription} from "@/components/ui/field";
import {Switch} from "@/components/ui/switch";
import {cn} from "@/lib/cn";

import {ClearCacheAlert} from "../_components/ClearCacheAlert";
import {ResetSettingsDataAlert} from "../_components/ResetSettingsDataAlert";

export default function AdvancedPage() {
  return (
    <PageLayout title="advanced" backTo="/settings">
      <Section id="debug" title="debug">
        <Field>
          <FieldLabelContainer>
            enable features for nerds
            <Switch />
          </FieldLabelContainer>
          <FieldDescription>
            gives you easy access to app info that can be useful for debugging.
            enabling this does not affect functionality of the app in any way.
          </FieldDescription>
        </Field>
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
