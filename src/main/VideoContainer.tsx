import { Center } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { setSeen } from './setSeen';
import { getFinishedFromStorage } from './VideoPlayer/helpers/getFinishedFromStorage';
import { getSeenVideosFromStorage } from './VideoPlayer/helpers/getSeenVideosFromStorage';
import { makeVideoTree } from './VideoPlayer/helpers/makeVideoTree';
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

    const videos = setSeen(seenVideosFromStorage);

    // development only to avoid reload issues
    Object.keys(videoTree).length === 0 &&
      setVideosTree(makeVideoTree(videos));

    setAllVideos([
      ...videos.firstPartVideos,
      ...videos.secondPartVideos,
      ...videos.extraVideos,
    ]);
  }, [videoTree]);

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
