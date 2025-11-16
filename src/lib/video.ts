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
];
export const PreferredVideoQuality = VideoQualities[3];

export const VideoCodecs = ["h264 + aac", "av1 + opus", "vp9 + opus"];
export const PreferredVideoCodec = VideoCodecs[0];

export const VideoContainers = ["auto", "mp4", "webm", "mkv"];
export const PreferredVideoContainer = VideoContainers[0];
