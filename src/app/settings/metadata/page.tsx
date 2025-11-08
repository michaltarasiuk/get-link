import {FieldLabelContainer} from "@/components/FieldLabelContainer";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Field, FieldDescription} from "@/components/ui/field";
import {Switch} from "@/components/ui/switch";

export default function MetadataPage() {
  return (
    <PageLayout title="metadata" backTo="/settings">
      <Section id="filename-style" title="filename style">
        {null}
      </Section>
      <Section id="saving-method" title="saving method">
        {null}
      </Section>
      <Section id="subtitles" title="subtitles">
        {null}
      </Section>
      <Section id="file-metadata" title="file metadata">
        <Field>
          <FieldLabelContainer>
            disable file metadata
            <Switch />
          </FieldLabelContainer>
          <FieldDescription>
            title, artist, and other info will not be added to the file.
          </FieldDescription>
        </Field>
      </Section>
    </PageLayout>
  );
}
