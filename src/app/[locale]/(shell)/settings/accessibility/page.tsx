import {getExtracted} from "next-intl/server";

import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {
  Field,
  FieldBackground,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import {Switch} from "@/components/ui/switch";
import {Routes} from "@/lib/routes";

export default async function AccessibilityPage() {
  const t = await getExtracted();
  return (
    <PageLayout title={t("accessibility")} backTo={Routes.settings.root}>
      <Section id="visual" title={t("visual")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("reduce motion")}
              <Switch />
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "animations and transitions will be disabled whenever possible.",
            )}
          </FieldDescription>
        </Field>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("reduce visual transparency")}
              <Switch />
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "transparency of surfaces will be reduced and all blur effects will be disabled. may also improve ui performance on less powerful devices.",
            )}
          </FieldDescription>
        </Field>
      </Section>
      <Section id="behavior" title={t("behavior")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("don't open the queue automatically")}
              <Switch />
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "the processing queue will not be opened automatically whenever a new item is added to it. progress will still be displayed and you will still be able to open it manually.",
            )}
          </FieldDescription>
        </Field>
      </Section>
    </PageLayout>
  );
}
