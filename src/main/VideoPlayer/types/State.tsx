import { Video } from './Video';

export type VideoQuality = 720 | 360 | 144;

export interface State {
  isPlaying: boolean;
  showChoices: boolean;
  currentVideoPlayer: number;
  currentVideo: Video;
  quality: VideoQuality;
  isFinished: boolean;
}
