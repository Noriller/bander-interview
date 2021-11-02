import { Video } from './Video';

export interface State {
  isPlaying: boolean;
  showChoices: boolean;
  currentVideoPlayer: number;
  currentVideo: Video;
}
