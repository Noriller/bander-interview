import { RefObject, useReducer } from 'react';
import { makeReducer } from './makeReducer';
import { initialReducerState } from '../helpers/initialReducerState';
import { Video } from '../types/Video';

export function usePlayerReducer(
  refs: RefObject<HTMLVideoElement>[],
  video: Video,
) {
  const reducer = makeReducer(refs);
  const [
    {
      isPlaying,
      showChoices,
      currentVideoPlayer,
      currentVideo,
    },
    playerDispatch,
  ] = useReducer(reducer, {
    ...initialReducerState,
    currentVideo: video,
  });

  return {
    isPlaying,
    showChoices,
    currentVideoPlayer,
    currentVideo,
    playerDispatch,
  };
}
