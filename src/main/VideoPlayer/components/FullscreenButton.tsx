import { Button } from '@chakra-ui/button';
import { Img } from '@chakra-ui/react';

export function FullscreenButton({
  toggleFullscreen,
  isFullscreen,
}: {
  toggleFullscreen: () => void;
  isFullscreen: boolean;
}) {
  return (
    <Button
      bg='complementary'
      margin='0.5em 0.5em 0em 0em'
      pointerEvents='all'
      onClick={toggleFullscreen}>
      <Img
        src={
          isFullscreen
            ? '/exitFullscreen.svg'
            : '/enterFullscreen.svg'
        }
        alt='fullscreen Icon'
        boxSize='1.5em'
        objectFit='cover'
      />
    </Button>
  );
}
