import React from 'react';
import { State } from '../types/State';
import { Actions } from '../types/Actions';

export function makeReducer(
  refs: React.RefObject<HTMLVideoElement>[],
) {
  return (state: State, action: Actions) => {
    switch (action.type) {
      case 'playToggle':
        action.payload
          ? refs[
              state.currentVideo
            ].current!.play()
          : refs[
              state.currentVideo
            ].current!.pause();

        return {
          ...state,
          isPlaying: action.payload,
        };
      case 'prepareNext':
        // start loading all next videos
        // update options
        return {
          ...state,
          showChoices: true,
        };
      case 'changeCurrent':
        refs.forEach((ref, index) => {
          if (index === action.payload) {
            ref.current!.currentTime = 0;
            ref.current!.play();
            ref.current!.style.display = 'block';
          } else {
            ref.current!.pause();
            ref.current!.style.display = 'none';
            ref.current!.ontimeupdate = null;
            // ref.current!.src = '';
          }
        });

        return {
          ...state,
          currentVideo: action.payload,
          showChoices: false,
        };
      default:
        throw new Error();
    }
  };
}
