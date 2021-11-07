import React, {
  Dispatch,
  SetStateAction,
} from 'react';
import { Actions } from '../types/Actions';

export function makeHandlers(
  playerDispatch: Dispatch<Actions>,
  setStarted: Dispatch<SetStateAction<boolean>>,
  started: boolean,
  isPlaying: boolean,
  isFullscreen: boolean,
  container: React.RefObject<HTMLDivElement>,
) {
  const togglePlay = () => {
    if (!started) setStarted(true);

    playerDispatch({
      type: 'playToggle',
      payload: !isPlaying,
    });
  };

  const toggleFullscreen = () => {
    isFullscreen
      ? document.exitFullscreen()
      : container.current!.requestFullscreen();
  };

  const handleOnVideoClick = (
    e: React.MouseEvent<
      HTMLDivElement,
      MouseEvent
    >,
  ): void => {
    if (
      e.target == container.current?.children[1]
    )
      togglePlay();
  };

  const handleRightClick = (
    e: React.MouseEvent<
      HTMLDivElement,
      MouseEvent
    >,
  ): void => e.preventDefault();
  return {
    toggleFullscreen,
    togglePlay,
    handleRightClick,
    handleOnVideoClick,
  };
}
