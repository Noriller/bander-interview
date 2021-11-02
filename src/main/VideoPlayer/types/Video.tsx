export interface Video {
  videoSrc: string;
  videoTitle: string;
  wasSeen: boolean;
  children?: Video[];
}

export interface VideoData {
  entryVideo: Video;
  firstPartVideos: Video[];
  secondPartVideos: Video[];
  extraVideos: Video[];
  finalVideo: Video;
}
