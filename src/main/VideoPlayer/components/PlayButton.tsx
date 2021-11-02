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
