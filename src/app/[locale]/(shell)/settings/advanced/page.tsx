import {
  FileDownIcon,
  FileUpIcon,
  RefreshCcwDot,
  ShredderIcon,
} from "lucide-react";
import {getExtracted} from "next-intl/server";

import {FieldLabelContainer} from "@/components/FieldContainer";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {Button} from "@/components/ui/button";
import {Field, FieldDescription} from "@/components/ui/field";
import {Switch} from "@/components/ui/switch";
import {cn} from "@/lib/cn";
import {Routes} from "@/lib/routes";

export default async function AdvancedPage() {
  const t = await getExtracted();
  return (
    <PageLayout title={t("advanced")} backTo={Routes.settings.root}>
      <Section id="debug" title={t("debug")}>
        <Field>
          <FieldLabelContainer>
            {t("enable features for nerds")}
            <Switch />
          </FieldLabelContainer>
          <FieldDescription>
            {t(
              "gives you easy access to app info that can be useful for debugging. enabling this does not affect functionality of the app in any way.",
            )}
          </FieldDescription>
        </Field>
      </Section>
      <Section id="settings-data" title={t("settings data")}>
        <div className={cn("flex gap-3")}>
          <Button variant="outline" size="lg">
            <FileDownIcon className={cn("size-5")} />
            {t("import")}
          </Button>
          <Button variant="outline" size="lg">
            <FileUpIcon className={cn("size-5")} />
            {t("export")}
          </Button>
          <ResetSettingsDataAlertDialog />
        </div>
      </Section>
      <Section id="local-storage" title={t("local storage")}>
        <ClearCacheAlertDialog />
      </Section>
    </PageLayout>
  );
}

async function ResetSettingsDataAlertDialog() {
  const t = await getExtracted();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="lg">
          <RefreshCcwDot className={cn("size-5")} />
          {t("reset")}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("reset all settings?")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t(
              "are you sure you want to reset all settings? this action is immediate and irreversible.",
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
          <AlertDialogAction>{t("reset")}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

async function ClearCacheAlertDialog() {
  const t = await getExtracted();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="lg">
          <ShredderIcon className={cn("size-5")} />
          {t("clear cache")}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("clear all cache")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t(
              "all files from the processing queue will be removed and on-device features will take longer to load. this action is immediate and irreversible.",
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
          <AlertDialogAction>{t("clear")}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
