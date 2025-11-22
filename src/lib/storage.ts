import {useSetAtom} from "jotai/react";
import {atomWithStorage} from "jotai/utils";
import {focusAtom} from "jotai-optics";

import {PreferredSettings} from "./settings";

export const settingsAtom = atomWithStorage("settings", PreferredSettings);

export function useResetSettings() {
  const setSettings = useSetAtom(settingsAtom);
  function resetSettings() {
    setSettings(PreferredSettings);
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
