import {FieldLabelContainer} from "@/components/FieldLabelContainer";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Field, FieldDescription} from "@/components/ui/field";
import {Switch} from "@/components/ui/switch";
import {Routes} from "@/lib/routes";

export default function PrivacyPage() {
  return (
    <PageLayout title="privacy" backTo={Routes.settings}>
      <Section id="tunneling" title="tunneling">
        <Field>
          <FieldLabelContainer>
            always tunnel files
            <Switch />
          </FieldLabelContainer>
          <FieldDescription>
            this will hide your ip address, browser info, and bypass local
            network restrictions. when enabled, files will also have readable
            filenames that otherwise would be gibberish.
          </FieldDescription>
        </Field>
      </Section>
    </PageLayout>
  );
}
