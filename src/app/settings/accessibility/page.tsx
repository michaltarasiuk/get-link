import {FieldLabelContainer} from "@/components/FieldLabelContainer";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Field, FieldDescription} from "@/components/ui/field";
import {Switch} from "@/components/ui/switch";
import {Routes} from "@/lib/routes";

export default function AccessibilityPage() {
  return (
    <PageLayout title="accessibility" backTo={Routes.settings}>
      <Section id="visual" title="visual">
        <Field>
          <FieldLabelContainer>
            reduce motion
            <Switch />
          </FieldLabelContainer>
          <FieldDescription>
            animations and transitions will be disabled whenever possible.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabelContainer>
            reduce visual transparency
            <Switch />
          </FieldLabelContainer>
          <FieldDescription>
            transparency of surfaces will be reduced and all blur effects will
            be disabled. may also improve ui performance on less powerful
            devices.
          </FieldDescription>
        </Field>
      </Section>
      <Section id="behavior" title="behavior">
        <Field>
          <FieldLabelContainer>
            don&apos;t open the queue automatically
            <Switch />
          </FieldLabelContainer>
          <FieldDescription>
            the processing queue will not be opened automatically whenever a new
            item is added to it. progress will still be displayed and you will
            still be able to open it manually.
          </FieldDescription>
        </Field>
      </Section>
    </PageLayout>
  );
}
