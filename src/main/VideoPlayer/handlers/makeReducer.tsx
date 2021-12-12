import React from 'react';
import { State } from '../types/State';
import { Actions } from '../types/Actions';
import { Video } from '../types/Video';
import { offsetIndex } from '../helpers/offsetIndex';

const API =
  'https://d9qqq9nymqb2i.cloudfront.net/';

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
        if (!state.currentVideo.children) {
          return {
            ...state,
            isFinished: true,
          };
        }

        while (
          state.currentVideo.children?.length > 3
        ) {
          state.currentVideo.children?.pop();
        }

        state.currentVideo.children.forEach(
          (child: Video, index: number) => {
            const newIndex = offsetIndex(
              refs.length,
              state.currentVideoPlayer,
              index + 1,
            );
            refs[
              newIndex
            ].current!.src = `${API}/${state.quality}/${child.videoSrc}`;
            // child.videoSrc || `/mockVideos/${state.quality}/mock.mp4`;
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
            ref.current!.src = `${API}/${state.quality}/${action.payload.video.videoSrc}`;
            // action.payload.video.videoSrc ||
            // `/mockVideos/${state.quality}/mock.mp4`;
            ref.current!.preload = 'auto';
            ref.current!.currentTime = 0;
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
      case 'changeQuality':
        refs.forEach(ref => {
          if (ref.current!.src == '') return;
          ref.current!.pause();

          ref.current!.src =
            ref.current!.src.replace(
              state.quality.toString(),
              action.payload.quality.toString(),
            );
        });

        return {
          ...state,
          isPlaying: false,
          quality: action.payload.quality,
        };
      default:
        throw new Error();
    }
  };
}
