type LocalProcessingMode = (typeof LocalProcessingModes)[number];

export const LocalProcessingModes = [
  "disabled",
  "preferred",
  "forced",
] as const;
export const PreferredLocalProcessingMode: LocalProcessingMode = "preferred";
