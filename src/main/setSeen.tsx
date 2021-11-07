import { mockShenanigans } from './VideoPlayer/mocks';
import {
  Video,
  VideoData,
} from './VideoPlayer/types/Video';

export function setSeen(
  seenVideosFromStorage: string[],
): VideoData {
  const {
    entryVideo,
    firstPartVideos,
    secondPartVideos,
    extraVideos,
    bloopersVideos,
    finalVideo,
  } = mockShenanigans;

  return {
    entryVideo: setVideoSeenWrapper(entryVideo),
    firstPartVideos: setVideoSeenWrapper(
      firstPartVideos,
    ),
    secondPartVideos: setVideoSeenWrapper(
      secondPartVideos,
    ),
    extraVideos: setVideoSeenWrapper(extraVideos),
    bloopersVideos: setVideoSeenWrapper(
      bloopersVideos,
    ),
    finalVideo: setVideoSeenWrapper(finalVideo),
  } as VideoData;

  function setVideoSeenWrapper(
    video: Video | Video[],
  ) {
    if (Array.isArray(video)) {
      return video.map(setVideoSeen);
    }
    return setVideoSeen(video);
  }

  function setVideoSeen(video: Video) {
    if (video.children) {
      video.children =
        video.children.map(setVideoSeen);
    }

    return {
      ...video,
      wasSeen: seenVideosFromStorage.includes(
        video.videoTitle,
      ),
    };
  }
}
