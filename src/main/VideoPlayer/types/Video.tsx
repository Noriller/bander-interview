export interface Video {
  videoSrc: string;
  videoTitle: string;
  wasSeen: boolean;
  children?: Video[];
}

export interface VideoData {
  /**
   * The initial video that will be displayed.
   */
  entryVideo: Video;
  /**
   * The list of videos that will be displayed after the initial video.
   * The list will be shuffled.
   */
  firstPartVideos: Video[];
  /**
   * The list of videos that will be displayed after the first part videos.
   * The list will be shuffled.
   */
  secondPartVideos: Video[];
  /**
   * The list of videos that will not be shown in the normal flow.
   * It will be displayed separately.
   */
  extraVideos: Video[];
  /**
   * Additional videos that will be added to the normal flow.
   */
  bloopersVideos: Video[];
  /**
   * The last video that will be displayed.
   */
  finalVideo: Video;
}
