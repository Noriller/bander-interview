import { Center } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { mockShenanigans } from './VideoPlayer/mocks';
import { VideoTree } from './VideoPlayer/types/Video';
import { VideoPlayer } from './VideoPlayer/VideoPlayer';

export function VideoContainer() {
  const [videosData, setVideosData] =
    useState<VideoTree>({} as VideoTree);

  useEffect(() => {
    const timeouts = setTimeout(
      () => setVideosData(mockShenanigans),
      200,
    );
    return () => clearTimeout(timeouts);
  }, []);

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
        <VideoPlayer videosData={videosData} />
      </Center>
    </Center>
  );
}
