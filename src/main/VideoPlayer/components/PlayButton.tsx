import { Button } from '@chakra-ui/button';
import { Img } from '@chakra-ui/react';

export function PlayButton({
  togglePlay,
  isPlaying,
}: {
  togglePlay: () => void;
  isPlaying: boolean;
}) {
  return (
    <Button
      bg='complementary'
      margin='0.5em 0em 0em 0.5em'
      pointerEvents='all'
      onClick={togglePlay}>
      <Img
        src={
          isPlaying
            ? '/pauseButton.svg'
            : '/playButton.svg'
        }
        alt='play Icon'
        boxSize='1.5em'
        objectFit='cover'
      />
    </Button>
  );
}
