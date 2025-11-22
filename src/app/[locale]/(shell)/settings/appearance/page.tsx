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
import {NativeSelect, NativeSelectOption} from "@/components/ui/native-select";
import {Switch} from "@/components/ui/switch";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import type {Locale} from "@/i18n/routing";
import {Languages, type Theme, Themes} from "@/lib/appearance";
import {assertNever} from "@/lib/assert";
import {cn} from "@/lib/cn";
import {Routes} from "@/lib/routes";
import {appearanceAtom} from "@/lib/storage";

export default function AppearancePage() {
  const [apperance, setApperance] = useAtom(appearanceAtom);
  const t = useExtracted();
  return (
    <PageLayout title={t("appearance")} backTo={Routes.settings.root}>
      <LinkSection id="theme" title={t("theme")}>
        <Field>
          <FieldBackground>
            <ToggleGroup
              type="single"
              value={apperance.theme}
              spacing={2}
              className={cn("grid w-full grid-cols-3")}
              onValueChange={(value) => {
                const theme = value as Theme;
                window.__setPreferredTheme(theme);
                setApperance((apperance) => ({
                  ...apperance,
                  theme,
                }));
              }}>
              {Themes.map((theme) => {
                let label: string;
                switch (theme) {
                  case "auto":
                    label = t("auto");
                    break;
                  case "light":
                    label = t("light");
                    break;
                  case "dark":
                    label = t("dark");
                    break;
                  default:
                    assertNever(theme);
                }
                return (
                  <ToggleGroupItem key={theme} value={theme}>
                    {label}
                  </ToggleGroupItem>
                );
              })}
            </ToggleGroup>
          </FieldBackground>
          <FieldDescription>
            {t(
              "auto theme switches between light and dark themes depending on your device's display mode.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
      <LinkSection id="language" title={t("language")}>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("automatic selection")}
              <Switch
                checked={apperance.automaticLanguageSelection}
                onCheckedChange={(checked) =>
                  setApperance((apperance) => ({
                    ...apperance,
                    automaticLanguageSelection: checked,
                  }))
                }
              />
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "the app will use your browser's default language if translation is available. if not, english will be used instead.",
            )}
          </FieldDescription>
        </Field>
        <Field>
          <FieldBackground asChild>
            <FieldLabel>
              {t("preferred language")}
              <NativeSelect
                value={apperance.preferredLanguage}
                onValueChange={(value) =>
                  setApperance((apperance) => ({
                    ...apperance,
                    preferredLanguage: value as Locale,
                  }))
                }>
                {Languages.map((l) => (
                  <NativeSelectOption key={l.value} value={l.value}>
                    {l.label}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            </FieldLabel>
          </FieldBackground>
          <FieldDescription>
            {t(
              "this language will be used when automatic selection is disabled. any text that isn't translated will be displayed in english.",
            )}
            <br />
            <br />
            {t(
              "some languages use community-sourced translations, they may be inaccurate or incomplete.",
            )}
          </FieldDescription>
        </Field>
      </LinkSection>
    </PageLayout>
  );
}
