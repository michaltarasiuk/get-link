import {FieldContainer, FieldLabelContainer} from "@/components/FieldContainer";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Field, FieldDescription} from "@/components/ui/field";
import {NativeSelect, NativeSelectOption} from "@/components/ui/native-select";
import {Switch} from "@/components/ui/switch";

export default function MetadataPage() {
  return (
    <PageLayout title="metadata" backTo="/settings">
      <Section id="filename-style" title="filename style">
        <Field>
          <FieldContainer>{null}</FieldContainer>
          <FieldDescription>
            filename style will only be used for files tunneled by cobalt. some
            services don&apos;t support filename styles other than classic.
          </FieldDescription>
        </Field>
      </Section>
      <Section id="saving-method" title="saving method">
        <Field>
          <FieldContainer>{null}</FieldContainer>
          <FieldDescription>
            preferred way of saving the file or link from cobalt. if preferred
            method is unavailable or something goes wrong, cobalt will ask you
            what to do next.
          </FieldDescription>
        </Field>
      </Section>
      <Section id="subtitles" title="subtitles">
        <Field>
          <FieldLabelContainer>
            preferred subtitle language
            <NativeSelect>
              <NativeSelectOption>none</NativeSelectOption>
            </NativeSelect>
          </FieldLabelContainer>
          <FieldDescription>
            subtitles will be added to the downloaded file in the preferred
            language if they&apos;re available. some services don&apos;t have a
            language selection, and if that&apos;s the case, the only available
            subtitle track will be added if you have any language selected.
          </FieldDescription>
        </Field>
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
