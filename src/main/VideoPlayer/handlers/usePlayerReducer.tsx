import { RefObject, useReducer } from 'react';
import { makeReducer } from './makeReducer';
import { initialReducerState } from '../helpers/initialReducerState';
import { Video } from '../types/Video';

export function usePlayerReducer(
  refs: RefObject<HTMLVideoElement>[],
  video: Video,
  finished: boolean,
) {
  const reducer = makeReducer(refs);
  const [
    {
      isPlaying,
      showChoices,
      currentVideoPlayer,
      currentVideo,
      isFinished,
    },
    playerDispatch,
  ] = useReducer(reducer, {
    ...initialReducerState,
    currentVideo: video,
    isFinished: finished,
  });

  return {
    isPlaying,
    showChoices,
    currentVideoPlayer,
    currentVideo,
    isFinished,
    playerDispatch,
  };
}
