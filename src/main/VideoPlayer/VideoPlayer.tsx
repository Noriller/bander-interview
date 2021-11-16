import {
  Box,
  Center,
  Flex,
} from '@chakra-ui/layout';
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FullscreenButton } from './components/FullscreenButton';
import { PlayButton } from './components/PlayButton';
import { QuestionTimer } from './components/QuestionTimer';
import { makeHandlers } from './handlers/makeHandlers';
import { makeKeydownEvents } from './handlers/makeKeydownEvents';
import { usePageListeners } from './handlers/usePageListeners';
import { usePlayerReducer } from './handlers/usePlayerReducer';
import { useResetSelected } from './handlers/useResetSelected';
import { useTimeUpdateTriggerNext } from './handlers/useTimeUpdateTriggerNext';
import { offsetIndex } from './helpers/offsetIndex';
import { QualityMenu } from './components/QualityMenu';
import { Video } from './types/Video';
import { VideoSelect } from './components/VideoSelect';
import { VideoQuality } from './types/State';

export function VideoPlayer({
  videoTree,
  allVideos,
  localSeenVideos,
  finished,
}: {
  videoTree: Video;
  allVideos: Video[];
  localSeenVideos: string[];
  finished: boolean;
}) {
  const ref0 = useRef<HTMLVideoElement>(null);
  const ref1 = useRef<HTMLVideoElement>(null);
  const ref2 = useRef<HTMLVideoElement>(null);
  const ref3 = useRef<HTMLVideoElement>(null);

  const container = useRef<HTMLDivElement>(null);

  const [isTouchDevice, setIsTouchDevice] =
    useState(false);
  const [isFullscreen, setFullscreen] =
    useState(false);
  const [selected, setSelected] = useState(0);
  const [started, setStarted] = useState(false);
  const [seenVideos, setSeenVideos] = useState(
    localSeenVideos,
  );

  const refs = useMemo(
    () => [ref0, ref1, ref2, ref3],
    [],
  );

  const {
    isPlaying,
    showChoices,
    currentVideoPlayer,
    currentVideo,
    quality,
    isFinished,
    playerDispatch,
  } = usePlayerReducer(refs, videoTree, finished);

  const dispatchNextQuestion = () => {
    const nextIndex = offsetIndex(
      refs.length,
      currentVideoPlayer,
      selected + 1,
    );
    if (showChoices) {
      const nextVideo =
        currentVideo.children?.[selected] ??
        currentVideo;
      playerDispatch({
        type: 'changeCurrent',
        payload: {
          nextIndex,
          nextCurrentVideo: nextVideo,
        },
      });
      saveSeenVideo();
    }
  };

  useEffect(() => {
    if (seenVideos?.length > 0) {
      window.localStorage.setItem(
        '@banderInterview-seenVideos',
        JSON.stringify(seenVideos),
      );
    }
  }, [seenVideos]);

  useResetSelected(showChoices, setSelected);

  useTimeUpdateTriggerNext(
    refs,
    currentVideoPlayer,
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
    setStarted,
    started,
    isPlaying,
    isFullscreen,
    container,
  );

  const keydownEvents = makeKeydownEvents(
    toggleFullscreen,
    togglePlay,
    setSelected,
    offsetIndex,
    currentVideo.children?.length || 0,
  );

  useEffect(() => {
    setIsTouchDevice(
      'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore
        navigator.msMaxTouchPoints > 0,
    );
  }, []);

  function saveSeenVideo(
    title = currentVideo.videoTitle,
  ) {
    setSeenVideos(cur => {
      if (cur.includes(title)) {
        return cur;
      } else {
        return [...cur, title];
      }
    });
  }

  const handleVideoSelect = (video: Video) => {
    playerDispatch({
      type: 'changeToVideo',
      payload: {
        video,
      },
    });
    video.wasSeen = true;
    saveSeenVideo(video.videoTitle);
  };

  const handleQuality = (
    newQuality: VideoQuality,
  ) => {
    playerDispatch({
      type: 'changeQuality',
      payload: {
        quality: newQuality,
      },
    });
  };

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
        bgImage={started ? '' : '/playGif.gif'}
        bgRepeat='round'
        bgSize='cover'
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
        fontSize={[
          '1.2em',
          '1.2em',
          '1.3em',
          '1.5em',
          '2rem',
        ]}
        sx={
          !isTouchDevice
            ? {
                '&:hover .controls': {
                  opacity: 1,
                },
              }
            : {}
        }>
        <Center
          justifyContent='space-between'
          className='controls'
          pointerEvents='none'
          p='0.5em'
          transition='all 0.2s'
          opacity={isPlaying ? 0 : 1}>
          <PlayButton
            togglePlay={togglePlay}
            isPlaying={isPlaying}
          />
          <Flex
            flexDirection='column'
            w='50%'
            placeSelf={
              isFinished ? '' : 'normal'
            }>
            <Center
              bg='secondary'
              opacity='0.7'
              borderRadius='2xl'
              p='0.5em'
              marginBottom={
                isFinished ? '0.5em' : 'auto'
              }
              textAlign='center'
              fontWeight='bold'>
              {currentVideo.videoTitle}
            </Center>
            {isFinished ? (
              <VideoSelect
                allVideos={allVideos}
                handleVideoSelect={
                  handleVideoSelect
                }
              />
            ) : null}
          </Flex>
          <Center
            flexDirection='column'
            gridRowGap={4}>
            <FullscreenButton
              toggleFullscreen={toggleFullscreen}
              isFullscreen={isFullscreen}
            />
            <QualityMenu
              quality={quality}
              setQuality={handleQuality}
            />
          </Center>
        </Center>
        <Box
          bg='primary'
          opacity='0.7'
          zIndex='20'
          textAlign='center'
          fontWeight='bold'
          color='complementary'
          display={showChoices ? '' : 'none'}>
          <QuestionTimer
            timerActive={showChoices}
            isPlaying={isPlaying}
            dispatchNextQuestion={
              dispatchNextQuestion
            }
          />
          {currentVideo.children?.map(
            (op: Video, index: number) => (
              <Box
                key={op.videoTitle}
                cursor='pointer'
                onClick={() => setSelected(index)}
                filter={
                  index == selected
                    ? 'drop-shadow(0 0 0.75rem var(--chakra-colors-contrast));'
                    : ''
                }>
                {op.videoTitle}{' '}
                {op.wasSeen ? '✔️' : ''}
              </Box>
            ),
          )}
        </Box>
      </Flex>
      <Box zIndex='-1'>
        <video
          ref={ref0}
          src={
            videoTree.videoSrc ||
            '/mockVideos/1080/mock.mp4'
          }
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
