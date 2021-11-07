import { Center } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getFinishedFromStorage } from './VideoPlayer/helpers/getFinishedFromStorage';
import { getSeenVideosFromStorage } from './VideoPlayer/helpers/getSeenVideosFromStorage';
import { makeVideoTree } from './VideoPlayer/helpers/makeVideoTree';
import { mockShenanigans } from './VideoPlayer/mocks';
import { Video } from './VideoPlayer/types/Video';
import { VideoPlayer } from './VideoPlayer/VideoPlayer';

export function VideoContainer() {
  const [videoTree, setVideosTree] =
    useState<Video>({} as Video);
  const [allVideos, setAllVideos] = useState<
    Video[]
  >([]);
  const [localSeenVideos, setLocalSeenVideos] =
    useState<string[] | null>(null);
  const [finished, setFinished] =
    useState<boolean>(false);

  useEffect(() => {
    const seenVideosFromStorage =
      getSeenVideosFromStorage();
    const finishedFromStorage =
      getFinishedFromStorage();

    setLocalSeenVideos(seenVideosFromStorage);
    setFinished(finishedFromStorage);

    // set seen for the seen videos
    const videos = mockShenanigans;

    // development only to avoid reload issues
    Object.keys(videoTree).length === 0 &&
      setVideosTree(makeVideoTree(videos));

    setAllVideos([
      ...mockShenanigans.firstPartVideos,
      ...mockShenanigans.secondPartVideos,
      ...mockShenanigans.extraVideos,
    ]);
  }, []);

  // check storage if finished once
  // if finished, show drawer menu

  // maybe wrap storage in a hook, one for finished one for seen videos
  // pass those to VideoPlayer
  // if there's no video children, finish
  // each new video -> mark as seen
  // probably should pass: seen videos, setSeen and setFinished

  return (
    <Center
      as='main'
      flex='1 0 auto'
      alignContent='center'>
      <Center
        maxW={[
          '100%',
          '100%',
          '90%',
          '80%',
          '70%',
        ]}>
        <Skeleton
          startColor='secondary'
          endColor='contrast'
          isLoaded={
            Object.keys(videoTree).length !== 0 &&
            localSeenVideos !== null
          }>
          <VideoPlayer
            videoTree={videoTree}
            allVideos={allVideos}
            localSeenVideos={localSeenVideos!}
            finished={finished}
          />
        </Skeleton>
      </Center>
    </Center>
  );
}
