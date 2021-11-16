import { VideoQuality } from '../types/State';

export const initialReducerState = {
  isPlaying: false,
  showChoices: false,
  currentVideoPlayer: 0,
  quality: 1080 as VideoQuality,
};
