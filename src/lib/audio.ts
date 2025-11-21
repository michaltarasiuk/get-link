type AudioFormat = (typeof AudioFormats)[number];

export const AudioFormats = ["best", "mp3", "ogg", "wav", "opus"] as const;
export const PreferredAudioFormat: AudioFormat = "mp3";

type AudioBitrate = (typeof AudioBitrates)[number];

export const AudioBitrates = [
  "320kb/s",
  "256kb/s",
  "128kb/s",
  "96kb/s",
  "64kb/s",
  "8kb/s",
] as const;
export const PreferredAudioBitrate: AudioBitrate = "128kb/s";

export const PreferredBetterQuality = false;

type DubLanguage = (typeof DubLanguages)[number];

export const DubLanguages = ["orginal"] as const;
export const PreferredDubLanguage: DubLanguage = "orginal";

export const PreferredDownloadOrginalSound = false;
