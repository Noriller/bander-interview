import { VideoQuality } from './State';
import { Video } from './Video';

export type Actions =
  | {
      type: 'playToggle';
      payload: boolean;
    }
  | {
      type: 'prepareNext';
    }
  | {
      type: 'changeCurrent';
      payload: {
        nextIndex: number;
        nextCurrentVideo: Video;
      };
    }
  | {
      type: 'changeToVideo';
      payload: {
        video: Video;
      };
    }
  | {
      type: 'changeQuality';
      payload: {
        quality: VideoQuality;
      };
    };
