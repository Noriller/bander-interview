import { Box } from '@chakra-ui/layout';
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { Video } from '../types/Video';

export const VideoSelect = ({
  allVideos,
  handleVideoSelect,
}: {
  allVideos: Video[];
  handleVideoSelect: (video: Video) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Menu
      isLazy
      lazyBehavior='keepMounted'
      boundary='scrollParent'>
      <MenuButton
        bg='primary'
        color='complementary'
        _hover={{
          bg: 'secondary',
        }}
        _active={{
          bg: 'secondary',
        }}
        w='50%'
        minW='max-content'
        pointerEvents='all'
        as={Button}>
        Choose Any Video
      </MenuButton>
      <Box ref={ref} maxH='50%' zIndex={100} />
      <Portal containerRef={ref}>
        <MenuList
          pointerEvents='all'
          overflowY='scroll'
          minW='unset'
          bg='primary'
          h='30vw'
          maxW='100vw'
          fontSize='0.8em'
          color='complementary'>
          {allVideos.map((video: Video) => (
            <MyMenuItem
              key={video.videoTitle}
              video={video}
              callback={() =>
                handleVideoSelect(video)
              }
            />
          ))}
        </MenuList>
      </Portal>
    </Menu>
  );
};

const MyMenuItem = ({
  video,
  callback,
}: {
  video: Video;
  callback: () => void;
}) => (
  <MenuItem
    placeContent='flex-start'
    pointerEvents='all'
    _hover={{
      bg: 'secondary',
      color: 'contrast',
    }}
    _focus={{
      bg: 'secondary',
    }}
    onClick={callback}>
    {video.wasSeen ? '✔️ ' : ''}
    {video.videoTitle}
  </MenuItem>
);
