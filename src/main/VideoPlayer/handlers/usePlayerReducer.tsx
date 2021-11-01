import { RefObject, useReducer } from 'react';
import { makeReducer } from './makeReducer';
import { initialReducerState } from '../helpers/initialReducerState';

export function usePlayerReducer(
  refs: RefObject<HTMLVideoElement>[],
) {
  const reducer = makeReducer(refs);
  const [
    { isPlaying, showChoices, currentVideo },
    playerDispatch,
  ] = useReducer(reducer, initialReducerState);

  return {
    isPlaying,
    showChoices,
    currentVideo,
    playerDispatch,
  };
}
