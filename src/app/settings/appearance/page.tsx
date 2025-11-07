import {FieldLabelContainer} from "@/components/FieldLabelContainer";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Field, FieldDescription} from "@/components/ui/field";
import {Switch} from "@/components/ui/switch";
import {Routes} from "@/lib/routes";

export default function AppearancePage() {
  return (
    <PageLayout title="appearance" backTo={Routes.settings}>
      <Section id="theme" title="theme">
        {null}
      </Section>
      <Section id="language" title="language">
        <Field>
          <FieldLabelContainer>
            automatic selection
            <Switch />
          </FieldLabelContainer>
          <FieldDescription>
            the app will use your browser&apos;s default language if translation
            is available. if not, english will be used instead.
          </FieldDescription>
        </Field>
      </Section>
    </PageLayout>
  );
}
