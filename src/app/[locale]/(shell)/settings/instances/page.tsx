"use client";

import {useAtom} from "jotai/react";
import {useExtracted} from "next-intl";

import {PageLayout} from "@/components/PageLayout";
import {LinkSection} from "@/components/Section";
import {
  Field,
  FieldBackground,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import {Switch} from "@/components/ui/switch";
import {Routes} from "@/lib/routes";
import {instancesAtom} from "@/lib/storage";

export default function InstancesPage() {
  const [instances, setInstances] = useAtom(instancesAtom);
  const t = useExtracted();
  return (
    <PageLayout title={t("instances")} backTo={Routes.settings.root}>
      <LinkSection id="community-instances" title={t("community instances")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("use a custom processing server")}
              <Switch
                checked={instances.useCustomProcessingServer}
                onCheckedChange={(checked) =>
                  setInstances((instances) => ({
                    ...instances,
                    useCustomProcessingServer: checked,
                  }))
                }
              />
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
      </LinkSection>
      <LinkSection id="instance-access-key" title={t("instance access key")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("use an instance access key")}
              <Switch
                checked={instances.useInstanceAccessKey}
                onCheckedChange={(checked) =>
                  setInstances((instances) => ({
                    ...instances,
                    useInstanceAccessKey: checked,
                  }))
                }
              />
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "the app will use this key to make requests to the processing instance instead of other authentication methods. make sure the instance supports api keys!",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
    </PageLayout>
  );
}
