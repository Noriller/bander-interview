import {
  Dispatch,
  RefObject,
  useEffect,
} from 'react';
import { mockVideos } from '../mocks';
import { Actions } from '../types/Actions';

export function useTimeUpdateTriggerNext(
  refs: RefObject<HTMLVideoElement>[],
  currentVideoPlayer: number,
  playerDispatch: Dispatch<Actions>,
  showChoices: boolean,
) {
  useEffect(() => {
    refs[
      currentVideoPlayer
    ].current!.ontimeupdate = () => {
      const leftDuration =
        refs[currentVideoPlayer].current!
          .duration -
        refs[currentVideoPlayer].current!
          .currentTime;
      if (leftDuration < 4) {
        refs[
          currentVideoPlayer
        ].current!.ontimeupdate = null;
        playerDispatch({
          type: 'prepareNext',
        });
      }
    };
  }, [
    currentVideoPlayer,
    playerDispatch,
    refs,
    showChoices,
  ]);
}
