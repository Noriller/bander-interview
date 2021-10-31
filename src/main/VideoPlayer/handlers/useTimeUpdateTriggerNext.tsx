import {
  Dispatch,
  RefObject,
  useEffect,
} from 'react';
import { mockVideos } from '../mocks';
import { Actions } from '../types/Actions';

export function useTimeUpdateTriggerNext(
  refs: RefObject<HTMLVideoElement>[],
  currentVideo: number,
  dispatch: Dispatch<Actions>,
  showChoices: boolean,
) {
  useEffect(() => {
    refs[currentVideo].current!.ontimeupdate =
      () => {
        const leftDuration =
          refs[currentVideo].current!.duration -
          refs[currentVideo].current!.currentTime;
        if (leftDuration < 4) {
          refs[
            currentVideo
          ].current!.ontimeupdate = null;
          dispatch({
            type: 'prepareNext',
            payload: mockVideos,
          });
        }
      };
  }, [currentVideo, dispatch, refs, showChoices]);
}
