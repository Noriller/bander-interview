import { useMemo, useRef, useState } from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import { makeKeydownEvents } from './handlers/makeKeydownEvents';
import { offsetIndex } from './helpers/offsetIndex';
import { makeHandlers } from './handlers/makeHandlers';
import { PlayButton } from './components/PlayButton';
import { QuestionTimer } from './components/QuestionTimer';
import { FullscreenButton } from './components/FullscreenButton';
import { usePageListeners } from './handlers/usePageListeners';
import { useResetSelected } from './handlers/useResetSelected';
import { useTimeUpdateTriggerNext } from './handlers/useTimeUpdateTriggerNext';
import { VideoTree } from './types/Video';
import { usePlayerReducer } from './handlers/usePlayerReducer';

export function VideoPlayer({
  videosData,
}: {
  videosData: VideoTree;
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

  const {
    isPlaying,
    showChoices,
    currentVideo,
    playerDispatch,
  } = usePlayerReducer(refs);

  const dispatchNextQuestion = () => {
    const nextIndex = offsetIndex(
      refs.length,
      currentVideo,
      selected + 1,
    );
    if (showChoices) {
      playerDispatch({
        type: 'changeCurrent',
        payload: nextIndex,
      });
    }
  };

  const options = getOptions(
    videosData,
    refs[currentVideo].current?.src,
  );

  useResetSelected(showChoices, setSelected);

  useTimeUpdateTriggerNext(
    refs,
    currentVideo,
    playerDispatch,
    showChoices,
  );

  usePageListeners(setFullscreen, container);

  const {
    toggleFullscreen,
    togglePlay,
    handleRightClick,
    handleOnVideoClick,
  } = makeHandlers(
    playerDispatch,
    isPlaying,
    isFullscreen,
    container,
  );

  const keydownEvents = makeKeydownEvents(
    toggleFullscreen,
    togglePlay,
    setSelected,
    offsetIndex,
    options?.length || 0,
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
          {/* <Button
            bg='complementary'
            pointerEvents='all'
            onClick={dispatchNextQuestion}>
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
            showChoices ? 'visible' : 'hidden'
          }>
          <QuestionTimer
            timerActive={showChoices}
            isPlaying={isPlaying}
            dispatchNextQuestion={
              dispatchNextQuestion
            }
          />
          {options?.map((op, index) => (
            <Box
              key={op.videoTitle}
              onClick={() => setSelected(index)}
              filter={
                index == selected
                  ? 'drop-shadow(0 0 0.75rem var(--chakra-colors-contrast));'
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
          src={videosData.entryVideo.videoSrc}
          preload='auto'
          playsInline
          style={{
            display: 'block',
            transition: 'all 0.3s ease-in-out 0s',
          }}
        />
        <video
          ref={ref1}
          src={''}
          preload='metadata'
          playsInline
          style={{
            display: 'none',
            transition: 'all 0.3s ease-in-out 0s',
          }}
        />
        <video
          ref={ref2}
          src={''}
          preload='metadata'
          playsInline
          style={{
            display: 'none',
            transition: 'all 0.3s ease-in-out 0s',
          }}
        />
        <video
          ref={ref3}
          src={''}
          preload='metadata'
          playsInline
          style={{
            display: 'none',
            transition: 'all 0.3s ease-in-out 0s',
          }}
        />
      </Box>
    </Flex>
  );
}

function getOptions(
  tree: VideoTree,
  currentSrc: string = tree.entryVideo.videoSrc,
) {
  return tree.entryVideo.children;
}

// const optionsReducer = (acc, cur) => {
//   return [...acc, cur.videoTitle];
// }
