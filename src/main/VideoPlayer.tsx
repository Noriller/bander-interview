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
import { Progress } from '@chakra-ui/react';
declare const window: any;

export function VideoPlayer() {
  const videos = [
    'http://127.0.0.1:8081/timeline/vid01.mp4',
    'http://127.0.0.1:8081/timeline/vid02.mp4',
    'http://127.0.0.1:8081/timeline/vid03.mp4',
    'http://127.0.0.1:8081/timeline/vid04.mp4',
  ];
  const options = [
    '1. option 1 lorem ipsum',
    '2. option 2 lorem ipsum',
    '3. option 3 lorem ipsum',
  ];

  const ref0 = useRef<HTMLVideoElement>(null);
  const ref1 = useRef<HTMLVideoElement>(null);
  const ref2 = useRef<HTMLVideoElement>(null);
  const ref3 = useRef<HTMLVideoElement>(null);

  const container = useRef<HTMLDivElement>(null);
  const [isFullscreen, setFullscreen] =
    useState(false);

  const [selected, setSelected] = useState(0);

  const keydownEvents = (
    event: React.KeyboardEvent,
  ): void => {
    if (event.key === 'f') toggleFullscreen();
    if (event.key === ' ') togglePlay();
    if (event.key === 'ArrowUp')
      setSelected(cur =>
        offsetIndex(options.length, cur, -1),
      );
    if (event.key === 'ArrowDown')
      setSelected(cur =>
        offsetIndex(options.length, cur, 1),
      );
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

  function offsetIndex(
    length: number,
    currentIndex: number,
    offset: number,
  ) {
    const newIndex =
      (currentIndex + offset) % length;
    return newIndex < 0
      ? newIndex + length
      : newIndex;
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

  const [progress, setProgress] = useState(3000);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('oi', progress);
      if (progress > 0) {
        setProgress(x => x - 10);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <Flex
      ref={container}
      flexDirection='column'
      position='relative'
      justifyContent='center'
      tabIndex={0}
      onKeyDown={keydownEvents}>
      <Box
        w='100%'
        h='100%'
        opacity='0.5'
        // bg='red'
        position='absolute'
      />
      <Flex
        position='absolute'
        top='0'
        left='0'
        w='100%'
        h='100%'
        flexDirection='column'
        justifyContent='space-between'
        zIndex='10'>
        <Flex justifyContent='space-between'>
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
        </Flex>
        <Box
          bg='primary'
          opacity='0.7'
          zIndex='20'
          textAlign='center'
          fontWeight='bold'
          color='complementary'
          fontSize={[
            '1.2em',
            '1.2em',
            '1.3em',
            '1.5em',
            '2rem',
          ]}
          visibility={
            !showChoices ? 'visible' : 'hidden'
          }>
          <Flex>
            <Progress
              flexGrow={1}
              max={3000}
              min={0}
              size='xs'
              colorScheme='gray'
              transform='scaleX(-1)'
              value={progress}
            />
            <Progress
              flexGrow={1}
              max={3000}
              min={0}
              size='xs'
              colorScheme='gray'
              value={progress}
            />
          </Flex>
          {options.map((op, index) => (
            <Box
              key={op}
              filter={
                index == selected
                  ? 'drop-shadow(0 0 0.75rem yellow);'
                  : ''
              }>
              {op}
            </Box>
          ))}
        </Box>
      </Flex>
      <Box zIndex='-1'>
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
