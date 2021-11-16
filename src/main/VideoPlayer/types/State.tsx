import { Video } from './Video';

export type VideoQuality =
  | 1080
  | 720
  | 480
  | 360
  | 144;

export interface State {
  isPlaying: boolean;
  showChoices: boolean;
  currentVideoPlayer: number;
  currentVideo: Video;
  quality: VideoQuality;
  isFinished: boolean;
}
