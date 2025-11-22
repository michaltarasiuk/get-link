import {useSetAtom} from "jotai/react";
import {atomWithStorage} from "jotai/utils";
import {focusAtom} from "jotai-optics";

import {isDefined} from "./is-defined";
import {jotaiStore} from "./jotai";
import {formatJson} from "./json";
import {PreferredSettings, SettingsSchema} from "./settings";

export const settingsAtom = atomWithStorage("settings", PreferredSettings);

export function useResetSettings() {
  const setSettings = useSetAtom(settingsAtom);
  function resetSettings() {
    setSettings(PreferredSettings);
    window.__setPreferredTheme(PreferredSettings.appearance.theme);
  }
  return resetSettings;
}

export const appearanceAtom = focusAtom(settingsAtom, (optic) =>
  optic.prop("appearance"),
);
export const accessibilityAtom = focusAtom(settingsAtom, (optic) =>
  optic.prop("accessibility"),
);
export const videoAtom = focusAtom(settingsAtom, (optic) =>
  optic.prop("video"),
);
export const audioAtom = focusAtom(settingsAtom, (optic) =>
  optic.prop("audio"),
);
export const metadataAtom = focusAtom(settingsAtom, (optic) =>
  optic.prop("metadata"),
);
export const localProcessingAtom = focusAtom(settingsAtom, (optic) =>
  optic.prop("localProcessing"),
);
export const instancesAtom = focusAtom(settingsAtom, (optic) =>
  optic.prop("instances"),
);
export const privacyAtom = focusAtom(settingsAtom, (optic) =>
  optic.prop("privacy"),
);
export const advancedAtom = focusAtom(settingsAtom, (optic) =>
  optic.prop("advanced"),
);

export function importSettings() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = (e) => {
    const fileReader = getSettingsFileReader();
    if (e.target instanceof HTMLInputElement) {
      const [file] = e.target.files ?? [];
      if (isDefined(file)) {
        fileReader.readAsText(file);
      }
    }
  };
  input.click();
}

export function exportSettings() {
  const settings = jotaiStore.get(settingsAtom);
  const blob = new Blob([formatJson(settings)], {
    type: "application/json",
  });
  const a = document.createElement("a");
  const url = URL.createObjectURL(blob);
  a.href = url;
  a.download = "settings.json";
  a.click();
  URL.revokeObjectURL(url);
}

function getSettingsFileReader() {
  const fileReader = new FileReader();
  fileReader.addEventListener("load", () => {
    if (typeof fileReader.result === "string") {
      const parsed = JSON.parse(fileReader.result);
      const settings = SettingsSchema.safeParse(parsed);
      if (settings.success) {
        jotaiStore.set(settingsAtom, settings.data);
        window.__setPreferredTheme(settings.data.appearance.theme);
      }
    }
  });
  return fileReader;
}
