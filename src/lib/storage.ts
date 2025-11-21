import {atomWithStorage} from "jotai/utils";
import {focusAtom} from "jotai-optics";

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
} from "./appearance";
import {
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
import {PreferredLocalProcessingMediaMode} from "./local-processing";
import {
  PreferredDisableFileMetadata,
  PreferredFilenameStyle,
  PreferredSavingMethod,
  PreferredSubtitleLanguage,
} from "./metadata";
import {PreferredAlwaysTunnelFiles} from "./privacy";
import {
  PreferredAllowH265ForVideos,
  PreferredConvertLoopingVideosToGIF,
  PreferredVideoCodec,
  PreferredVideoContainer,
  PreferredVideoQuality,
} from "./video";

const settingsAtom = atomWithStorage("settings", {
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
});

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
