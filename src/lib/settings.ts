import * as z from "zod";

import {Locales} from "@/i18n/routing";

import {
  PreferredAutoOpenQueue,
  PreferredReduceMotion,
  PreferredReduceVisualTransparency,
} from "./accessibility";
import {PreferredEnableFeatureForNerds} from "./advanced";
import {
  PreferredAutomaticLanguageSelection,
  PreferredLanguage,
  PreferredTheme,
  Themes,
} from "./appearance";
import {
  AudioBitrates,
  AudioFormats,
  DubLanguages,
  PreferredAudioBitrate,
  PreferredAudioFormat,
  PreferredBetterQuality,
  PreferredDownloadOrginalSound,
  PreferredDubLanguage,
} from "./audio";
import {
  PreferredUseCustomProcessingServer,
  PreferredUseInstanceAccessKey,
} from "./instances";
import {
  LocalProcessingMediaModes,
  PreferredLocalProcessingMediaMode,
} from "./local-processing";
import {
  FilenameStyles,
  PreferredDisableFileMetadata,
  PreferredFilenameStyle,
  PreferredSavingMethod,
  PreferredSubtitleLanguage,
  SavingMethods,
  SubtitleLanguages,
} from "./metadata";
import {PreferredAlwaysTunnelFiles} from "./privacy";
import {
  PreferredAllowH265ForVideos,
  PreferredConvertLoopingVideosToGIF,
  PreferredVideoCodec,
  PreferredVideoContainer,
  PreferredVideoQuality,
  VideoCodecs,
  VideoContainers,
  VideoQualities,
} from "./video";

export const SettingsSchema = z.object({
  appearance: z.object({
    theme: z.union(Themes.map((t) => z.literal(t))),
    automaticLanguageSelection: z.boolean(),
    preferredLanguage: z.union(Locales.map((l) => z.literal(l))),
  }),
  accessibility: z.object({
    reduceMotion: z.boolean(),
    reduceVisualTransparency: z.boolean(),
    autoOpenQueue: z.boolean(),
  }),
  video: z.object({
    quality: z.union(VideoQualities.map((q) => z.literal(q))),
    codec: z.union(VideoCodecs.map((c) => z.literal(c))),
    container: z.union(VideoContainers.map((c) => z.literal(c))),
    allowH265: z.boolean(),
    convertLoopingToGIF: z.boolean(),
  }),
  audio: z.object({
    format: z.union(AudioFormats.map((f) => z.literal(f))),
    bitrate: z.union(AudioBitrates.map((b) => z.literal(b))),
    betterQuality: z.boolean(),
    dubLanguage: z.union(DubLanguages.map((l) => z.literal(l))),
    downloadOrginalSound: z.boolean(),
  }),
  metadata: z.object({
    filenameStyle: z.union(FilenameStyles.map((s) => z.literal(s))),
    savingMethod: z.union(SavingMethods.map((m) => z.literal(m))),
    subtitleLanguage: z.union(SubtitleLanguages.map((l) => z.literal(l))),
    disableFileMetadata: z.boolean(),
  }),
  localProcessing: z.object({
    media: z.union(LocalProcessingMediaModes.map((m) => z.literal(m))),
  }),
  instances: z.object({
    useCustomProcessingServer: z.boolean(),
    customProcessingServerUrl: z.url().nullable(),
    useInstanceAccessKey: z.boolean(),
    instanceAccessKey: z.string().nullable(),
  }),
  privacy: z.object({
    alwaysTunnelFiles: z.boolean(),
  }),
  advanced: z.object({
    enableFeatureForNerds: z.boolean(),
  }),
});

export const PreferredSettings: z.infer<typeof SettingsSchema> = {
  appearance: {
    theme: PreferredTheme,
    automaticLanguageSelection: PreferredAutomaticLanguageSelection,
    preferredLanguage: PreferredLanguage,
  },
  accessibility: {
    reduceMotion: PreferredReduceMotion,
    reduceVisualTransparency: PreferredReduceVisualTransparency,
    autoOpenQueue: PreferredAutoOpenQueue,
  },
  video: {
    quality: PreferredVideoQuality,
    codec: PreferredVideoCodec,
    container: PreferredVideoContainer,
    allowH265: PreferredAllowH265ForVideos,
    convertLoopingToGIF: PreferredConvertLoopingVideosToGIF,
  },
  audio: {
    format: PreferredAudioFormat,
    bitrate: PreferredAudioBitrate,
    betterQuality: PreferredBetterQuality,
    dubLanguage: PreferredDubLanguage,
    downloadOrginalSound: PreferredDownloadOrginalSound,
  },
  metadata: {
    filenameStyle: PreferredFilenameStyle,
    savingMethod: PreferredSavingMethod,
    subtitleLanguage: PreferredSubtitleLanguage,
    disableFileMetadata: PreferredDisableFileMetadata,
  },
  localProcessing: {
    media: PreferredLocalProcessingMediaMode,
  },
  instances: {
    useCustomProcessingServer: PreferredUseCustomProcessingServer,
    customProcessingServerUrl: null,
    useInstanceAccessKey: PreferredUseInstanceAccessKey,
    instanceAccessKey: null,
  },
  privacy: {
    alwaysTunnelFiles: PreferredAlwaysTunnelFiles,
  },
  advanced: {
    enableFeatureForNerds: PreferredEnableFeatureForNerds,
  },
};
