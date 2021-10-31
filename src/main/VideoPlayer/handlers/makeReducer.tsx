import React from 'react';
import { State } from '../types/State';
import { Actions } from '../types/Actions';

export function makeReducer(
  refs: React.RefObject<HTMLVideoElement>[],
) {
  return (state: State, action: Actions) => {
    switch (action.type) {
      case 'playToggle':
        console.log(action);
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
      case 'initialize':
        return {
          ...state,
        };
      case 'prepareNext':
        // start loading all next videos
        // update options
        return {
          ...state,
        };
      case 'changeCurrent':
        // change current video
        // clear all the rest
        // show new current
        // hide previous
        // clear sources
        return {
          ...state,
        };
      default:
        throw new Error();
    }
  };
}
