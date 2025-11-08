import {FieldLabelContainer} from "@/components/FieldContainer";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Field, FieldDescription} from "@/components/ui/field";
import {Switch} from "@/components/ui/switch";

export default function InstancesPage() {
  return (
    <PageLayout title="instances" backTo="/settings">
      <Section id="community-instances" title="community instances">
        <Field>
          <FieldLabelContainer>
            use a custom processing server
            <Switch />
          </FieldLabelContainer>
          <FieldDescription>
            you can use a custom processing instance if you choose to. even
            though there are some security measures in place, we are not
            responsible for any damages done via a community instance, as we
            have no control over them.
            <br />
            <br />
            please be mindful of what instances you use and make sure
            they&apos;re hosted by people you trust.
          </FieldDescription>
        </Field>
      </Section>
      <Section id="instance-access-key" title="instance access key">
        <Field>
          <FieldLabelContainer>
            use an instance access key
            <Switch />
          </FieldLabelContainer>
          <FieldDescription>
            the app will use this key to make requests to the processing
            instance instead of other authentication methods. make sure the
            instance supports api keys!
          </FieldDescription>
        </Field>
      </Section>
    </PageLayout>
  );
}
