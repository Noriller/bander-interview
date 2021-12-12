import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { VideoQuality } from '../types/State';

export function QualityMenu({
  quality,
  setQuality,
}: {
  quality: number;
  setQuality: (quality: VideoQuality) => void;
}) {
  return (
    <Menu
      id='videoQualityMenu'
      isLazy
      matchWidth
      placement='bottom'>
      <MenuButton
        bg='primary'
        color='complementary'
        _hover={{
          bg: 'secondary',
        }}
        _active={{
          bg: 'secondary',
        }}
        pointerEvents='all'
        as={Button}>{`${quality}p`}</MenuButton>
      <MenuList
        minW='unset'
        bg='primary'
        fontSize='0.8em'
        zIndex={100}
        color='complementary'>
        {([720, 360, 144] as VideoQuality[]).map(
          q => (
            <MenuItem
              key={`menuItem__${q}`}
              placeContent='center'
              pointerEvents='all'
              _hover={{
                bg: 'secondary',
                color: 'contrast',
              }}
              _focus={{
                bg: 'secondary',
              }}
              onClick={() => setQuality(q)}>
              {q}p
            </MenuItem>
          ),
        )}
      </MenuList>
    </Menu>
  );
}
