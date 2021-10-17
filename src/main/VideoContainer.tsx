import { Image } from '@chakra-ui/image';
import {
  AspectRatio,
  Box,
  Center,
  Flex,
} from '@chakra-ui/layout';

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
        <video src='http://127.0.0.1:8081/timeline/02.guitarra-1920x1080.mp4' />
      </Center>
    </Center>
  );
}
