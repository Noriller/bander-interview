import React from 'react';
import { State } from '../types/State';
import { Actions } from '../types/Actions';
import { Video } from '../types/Video';
import { offsetIndex } from '../helpers/offsetIndex';

export function makeReducer(
  refs: React.RefObject<HTMLVideoElement>[],
) {
  return (state: State, action: Actions) => {
    switch (action.type) {
      case 'playToggle':
        action.payload
          ? refs[
              state.currentVideoPlayer
            ].current!.play()
          : refs[
              state.currentVideoPlayer
            ].current!.pause();

        return {
          ...state,
          isPlaying: action.payload,
        };
      case 'prepareNext':
        const children =
          state.currentVideo.children;
        if (!children) {
          return {
            ...state,
            finished: true,
          };
        }

        children.forEach(
          (child: Video, index: number) => {
            const newIndex = offsetIndex(
              refs.length,
              state.currentVideoPlayer,
              index + 1,
            );
            refs[newIndex].current!.src =
              child.videoSrc ||
              'http://127.0.0.1:8081/timeline/vid04.mp4';
          },
        );

        return {
          ...state,
          showChoices: true,
        };
      case 'changeCurrent':
        refs.forEach((ref, index) => {
          if (
            index === action.payload.nextIndex
          ) {
            ref.current!.preload = 'auto';
            ref.current!.currentTime = 0.1;
            ref.current!.play();
            ref.current!.style.display = 'block';
          } else {
            ref.current!.pause();
            ref.current!.style.display = 'none';
            ref.current!.preload = 'metadata';
            ref.current!.ontimeupdate = null;
            ref.current!.src = '';
          }
        });

        return {
          ...state,
          currentVideoPlayer:
            action.payload.nextIndex,
          currentVideo:
            action.payload.nextCurrentVideo,
          showChoices: false,
        };
      case 'changeToVideo':
        refs.forEach((ref, index) => {
          if (index === 0) {
            ref.current!.src =
              action.payload.video.videoSrc ||
              'http://127.0.0.1:8081/timeline/vid04.mp4';
            ref.current!.preload = 'auto';
            ref.current!.currentTime = 0.1;
            ref.current!.style.display = 'block';
          } else {
            ref.current!.pause();
            ref.current!.style.display = 'none';
            ref.current!.preload = 'metadata';
            ref.current!.ontimeupdate = null;
            ref.current!.src = '';
          }
        });

        return {
          ...state,
          currentVideoPlayer: 0,
          currentVideo: action.payload.video,
          isPlaying: false,
          showChoices: false,
        };
      default:
        throw new Error();
    }
  };
}
