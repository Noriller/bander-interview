import { Center } from '@chakra-ui/layout';
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
        setVideosData(mockShenanigans.entryVideo),
      200,
    );
    return () => clearTimeout(timeouts);
  }, []);

  if (!videoTree.videoTitle) {
    return <Center>Loading...</Center>;
  }
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
        <VideoPlayer videoTree={videoTree} />
      </Center>
    </Center>
  );
}
