type FilenameStyle = (typeof FilenameStyles)[number];

export const FilenameStyles = ["classic", "basic", "pretty", "nerdy"] as const;
export const PreferredFilenameStyle: FilenameStyle = "basic";

type SavingMethod = (typeof SavingMethods)[number];

export const SavingMethods = ["ask", "download", "share", "copy"] as const;
export const PreferredSavingMode: SavingMethod = "download";

type SubtitleLanguage = (typeof SubtitleLanguages)[number];

export const SubtitleLanguages = ["none"] as const;
export const PreferredSubtitleLanguage: SubtitleLanguage = "none";

export const PreferredDisableFileMetadata = false;
