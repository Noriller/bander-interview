import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

export function QualityMenu({
  quality,
  setQuality,
}: {
  quality: number;
  setQuality: Dispatch<SetStateAction<number>>;
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
        color='complementary'>
        {[1080, 720, 480, 360].map(q => (
          <MenuItem
            key={`menuItem__${q}`}
            placeContent='center'
            pointerEvents='all'
            _hover={{
              bg: 'secondary',
            }}
            _focus={{
              bg: 'secondary',
            }}
            onClick={() => setQuality(q)}>
            {q}p
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
