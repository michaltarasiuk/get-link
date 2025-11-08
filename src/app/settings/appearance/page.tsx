import {FieldLabelContainer} from "@/components/FieldLabelContainer";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Field, FieldDescription} from "@/components/ui/field";
import {NativeSelect, NativeSelectOption} from "@/components/ui/native-select";
import {Switch} from "@/components/ui/switch";

export default function AppearancePage() {
  return (
    <PageLayout title="appearance" backTo="/settings">
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
        <Field>
          <FieldLabelContainer>
            preferred language
            <NativeSelect>
              <NativeSelectOption>english</NativeSelectOption>
            </NativeSelect>
          </FieldLabelContainer>
          <FieldDescription>
            this language will be used when automatic selection is disabled. any
            text that isn&apos;t translated will be displayed in english.
            <br />
            <br />
            some languages use community-sourced translations, they may be
            inaccurate or incomplete.
          </FieldDescription>
        </Field>
      </Section>
    </PageLayout>
  );
}
