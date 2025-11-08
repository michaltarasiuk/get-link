import {FieldContainer} from "@/components/FieldContainer";
import {PageLayout} from "@/components/PageLayout";
import {Section} from "@/components/Section";
import {Field, FieldDescription} from "@/components/ui/field";

export default function LocalPage() {
  return (
    <PageLayout title="local processing" backTo="/settings">
      <Section id="local-media-processing" title="local media processing">
        <Field>
          <FieldContainer>{null}</FieldContainer>
          <FieldDescription>
            when downloading media, remuxing and transcoding will be done
            on-device instead of the cloud. you&apos;ll see detailed progress in
            the processing queue.
            <br />
            <br />
            disabled: local processing will not be used. processing instances
            can enforce local processing, so this option may not have effect.
            preferred: media that requires extra processing will be downloaded
            through the processing queue, but the rest of media will be
            downloaded by your browser&apos;s download manager. forced: all
            media will always be proxied and downloaded through the processing
            queue.
            <br />
            <br />
            exclusive on-device features are not affected by this setting, they
            always run locally.
          </FieldDescription>
        </Field>
      </Section>
    </PageLayout>
  );
}
