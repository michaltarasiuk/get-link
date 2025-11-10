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

export default async function InstancesPage() {
  const t = await getExtracted();
  return (
    <PageLayout title={t("instances")} backTo={Routes.settings.root}>
      <Section id="community-instances" title={t("community instances")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("use a custom processing server")}
              <Switch />
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "you can use a custom processing instance if you choose to. even though there are some security measures in place, we are not responsible for any damages done via a community instance, as we have no control over them.",
            )}
            <br />
            <br />
            {t(
              "please be mindful of what instances you use and make sure they're hosted by people you trust.",
            )}
          </FieldDescription>
        </Field>
      </Section>
      <Section id="instance-access-key" title={t("instance access key")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("use an instance access key")}
              <Switch />
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "the app will use this key to make requests to the processing instance instead of other authentication methods. make sure the instance supports api keys!",
            )}
          </FieldDescription>
        </Field>
      </Section>
    </PageLayout>
  );
}
