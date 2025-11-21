export type LocalProcessingMediaMode =
  (typeof LocalProcessingMediaModes)[number];

export const LocalProcessingMediaModes = [
  "disabled",
  "preferred",
  "forced",
] as const;
export const PreferredLocalProcessingMediaMode: LocalProcessingMediaMode =
  "preferred";
