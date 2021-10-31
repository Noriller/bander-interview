import {
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import { makeKeydownEvents } from './handlers/makeKeydownEvents';
import { makeReducer } from './handlers/makeReducer';
import { offsetIndex } from './helpers/offsetIndex';
import { makeHandlers } from './handlers/makeHandlers';
import { PlayButton } from './components/PlayButton';
import { QuestionTimer } from './components/QuestionTimer';
import { FullscreenButton } from './components/FullscreenButton';
import { initialReducerState } from './helpers/initialReducerState';
import { mockVideos, mockOptions } from './mocks';
import { usePageListeners } from './handlers/usePageListeners';
declare const window: any;

export function VideoPlayer({
  videos = mockVideos,
  options = mockOptions,
}) {
  const ref0 = useRef<HTMLVideoElement>(null);
  const ref1 = useRef<HTMLVideoElement>(null);
  const ref2 = useRef<HTMLVideoElement>(null);
  const ref3 = useRef<HTMLVideoElement>(null);

  const container = useRef<HTMLDivElement>(null);

  const [isFullscreen, setFullscreen] =
    useState(false);
  const [selected, setSelected] = useState(0);

  const refs = useMemo(
    () => [ref0, ref1, ref2, ref3],
    [],
  );

  const reducer = makeReducer(refs);
  const [
    { isPlaying, showChoices, currentVideo },
    dispatch,
  ] = useReducer(reducer, initialReducerState);

  usePageListeners(setFullscreen, container);

  const {
    toggleFullscreen,
    togglePlay,
    handleRightClick,
    handleOnVideoClick,
  } = makeHandlers(
    dispatch,
    isPlaying,
    isFullscreen,
    container,
  );

  const keydownEvents = makeKeydownEvents(
    toggleFullscreen,
    togglePlay,
    setSelected,
    offsetIndex,
    options,
  );

  return (
    <Flex
      ref={container}
      flexDirection='column'
      position='relative'
      justifyContent='center'
      tabIndex={0}
      onKeyDown={keydownEvents}
      onDoubleClick={toggleFullscreen}
      onContextMenu={handleRightClick}
      onClick={handleOnVideoClick}>
      <Box
        w='100%'
        h='100%'
        position='absolute'
        pointerEvents='none'
      />
      <Flex
        position='absolute'
        top='0'
        left='0'
        w='100%'
        h='100%'
        flexDirection='column'
        justifyContent='space-between'
        zIndex='10'
        sx={{
          '&:hover .controls': {
            opacity: 1,
          },
        }}>
        <Flex
          justifyContent='space-between'
          className='controls'
          pointerEvents='none'
          opacity='0'>
          <PlayButton
            togglePlay={togglePlay}
            isPlaying={isPlaying}
          />
          {/* <Button bg='complementary' onClick={handleNext}>
            NEXT
          </Button> */}
          <FullscreenButton
            toggleFullscreen={toggleFullscreen}
            isFullscreen={isFullscreen}
          />
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
          <QuestionTimer timerActive={true} />
          {options.map((op, index) => (
            <Box
              key={op}
              onClick={() => setSelected(index)}
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
