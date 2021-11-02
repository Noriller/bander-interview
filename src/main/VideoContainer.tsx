import { Center } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { mockShenanigans } from './VideoPlayer/mocks';
import {
  Video,
  VideoData,
} from './VideoPlayer/types/Video';
import { VideoPlayer } from './VideoPlayer/VideoPlayer';

export function VideoContainer() {
  const [videoTree, setVideosData] =
    useState<Video>({} as Video);

  useEffect(() => {
    const timeouts = setTimeout(
      () =>
        // make tree from VideoData
        // change the wasSeen accordingly
        setVideosData(mockShenanigans.entryVideo),
      200,
    );
    return () => clearTimeout(timeouts);
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
          isLoaded={Boolean(
            videoTree.videoTitle,
          )}>
          <VideoPlayer videoTree={videoTree} />
        </Skeleton>
      </Center>
    </Center>
  );
}
