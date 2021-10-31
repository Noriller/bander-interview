import { Center } from '@chakra-ui/layout';
import { VideoPlayer } from './VideoPlayer/VideoPlayer';

export function VideoContainer() {
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
        <VideoPlayer />
      </Center>
    </Center>
  );
}
