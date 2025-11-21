type VideoQuality = (typeof VideoQualities)[number];

export const VideoQualities = [
  "8k+",
  "4k",
  "1440p",
  "1080p",
  "720p",
  "480p",
  "360p",
  "240p",
  "144p",
] as const;
export const PreferredVideoQuality: VideoQuality = "1080p";

type VideoCodec = (typeof VideoCodecs)[number];

export const VideoCodecs = ["h264 + aac", "av1 + opus", "vp9 + opus"] as const;
export const PreferredVideoCodec: VideoCodec = "h264 + aac";

type VideoContainer = (typeof VideoContainers)[number];

export const VideoContainers = ["auto", "mp4", "webm", "mkv"] as const;
export const PreferredVideoContainer: VideoContainer = "auto";

export const PreferredAllowH265ForVideos = false;

export const PreferredConvertLoopingVideosToGIF = false;
