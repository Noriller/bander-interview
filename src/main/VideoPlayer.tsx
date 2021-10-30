import React, {
  RefObject,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
declare const window: any;

export function VideoPlayer() {
  const videos = [
    'http://127.0.0.1:8081/timeline/vid01.mp4',
    'http://127.0.0.1:8081/timeline/vid02.mp4',
    'http://127.0.0.1:8081/timeline/vid03.mp4',
    'http://127.0.0.1:8081/timeline/vid04.mp4',
  ];

  const ref0 = useRef<HTMLVideoElement>(null);
  const ref1 = useRef<HTMLVideoElement>(null);
  const ref2 = useRef<HTMLVideoElement>(null);
  const ref3 = useRef<HTMLVideoElement>(null);

  const container = useRef<HTMLDivElement>(null);
  const [isFullscreen, setFullscreen] =
    useState(false);

  const keydownEvents = (
    event: React.KeyboardEvent,
  ): void => {
    if (event.key === 'f') toggleFullscreen();
    if (event.key === ' ') togglePlay();
  };

  useEffect(() => {
    document.onfullscreenchange = () => {
      setFullscreen(
        Boolean(document.fullscreenElement),
      );
    };

    return () => {
      document.onfullscreenchange = null;
    };
  }, []);

  const refs = useMemo(
    () => [ref0, ref1, ref2, ref3],
    [],
  );

  function offsetRefsIndex(
    currentIndex: number,
    offset: number,
  ) {
    return (currentIndex + offset) % refs.length;
  }

  const reducer = makeReducer(refs);

  const initialState: State = {
    isPlaying: false,
    isFullscreen: false,
    showChoices: false,
    currentVideo: 0,
  };

  const [
    { isPlaying, showChoices, currentVideo },
    dispatch,
  ] = useReducer(reducer, initialState);

  const togglePlay = () => {
    dispatch({
      type: 'playToggle',
      payload: !isPlaying,
    });
  };

  const toggleFullscreen = () => {
    isFullscreen
      ? document.exitFullscreen()
      : container.current!.requestFullscreen();
  };

  return (
    <Flex
      ref={container}
      flexDirection='column'
      position='relative'
      justifyContent='center'
      tabIndex={0}
      onKeyDown={keydownEvents}>
      <Flex
        position='absolute'
        top='0'
        left='0'
        zIndex='10'>
        <Button bg='black' onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        <Button
          bg='black'
          onClick={toggleFullscreen}>
          {isFullscreen ? 'exit Full' : 'Full'}
        </Button>
        {/* <Button bg='black' onClick={handleNext}>
        NEXT
      </Button> */}
        <Box
          bg='tomato'
          visibility={
            showChoices ? 'visible' : 'hidden'
          }>
          OPTIONS!
        </Box>
      </Flex>
      <Box>
        <video
          ref={ref0}
          src={videos[0]}
          preload='auto'
          playsInline
          style={{
            display: 'block',
          }}
        />
        <video
          ref={ref1}
          src={videos[1]}
          preload='auto'
          playsInline
          style={{
            display: 'none',
          }}
        />
        <video
          ref={ref2}
          src={videos[2]}
          preload='auto'
          playsInline
          style={{
            display: 'none',
          }}
        />
        <video
          ref={ref3}
          src={videos[3]}
          preload='auto'
          playsInline
          style={{
            display: 'none',
          }}
        />
      </Box>
    </Flex>
  );
}

type Actions = {
  payload?: string | number | boolean;
  refs?: RefObject<HTMLVideoElement>[];
} & (
  | {
      type: 'playToggle';
      payload: boolean;
    }
  | {
      type: 'initialize';
      payload: never;
    }
  | {
      type: 'prepareNext';
      payload: never;
    }
  | {
      type: 'changeCurrent';
      payload: never;
    }
);

interface State {
  isPlaying: boolean;
  isFullscreen: boolean;
  showChoices: boolean;
  currentVideo: number;
}

function makeReducer(
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
