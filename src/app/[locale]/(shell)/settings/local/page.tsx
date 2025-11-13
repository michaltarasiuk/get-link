import {getExtracted} from "next-intl/server";

import {PageLayout} from "@/components/PageLayout";
import {LinkSection} from "@/components/Section";
import {Field, FieldBackground, FieldDescription} from "@/components/ui/field";
import {Routes} from "@/lib/routes";

export default async function LocalPage() {
  const t = await getExtracted();
  return (
    <PageLayout title={t("local processing")} backTo={Routes.settings.root}>
      <LinkSection
        id="local-media-processing"
        title={t("local media processing")}>
        <Field>
          <FieldBackground>{null}</FieldBackground>
          <FieldDescription>
            {t(
              "when downloading media, remuxing and transcoding will be done on-device instead of the cloud. you'll see detailed progress in the processing queue.",
            )}
            <br />
            <br />
            {t(
              "disabled: local processing will not be used. processing instances can enforce local processing, so this option may not have effect. preferred: media that requires extra processing will be downloaded through the processing queue, but the rest of media will be downloaded by your browser's download manager. forced: all media will always be proxied and downloaded through the processing queue.",
            )}
            <br />
            <br />
            {t(
              "exclusive on-device features are not affected by this setting, they always run locally.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
    </PageLayout>
  );
}
