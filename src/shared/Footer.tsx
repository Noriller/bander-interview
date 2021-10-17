import {
  Box,
  Center,
  Flex,
  HStack,
} from '@chakra-ui/layout';
import { Img } from '@chakra-ui/react';
import React, {
  useEffect,
  useState,
} from 'react';
import { CustomLink } from './CustomLink';

export function Footer() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  const sharingText =
    'Bandersnatch Interview with Bruno Noriller';

  return (
    <Flex
      as='footer'
      w='full'
      minH='10vh'
      alignItems='center'
      py={['2', 'unset']}
      flexDirection={['column-reverse', 'unset']}
      justifyContent={['unset', 'space-evenly']}>
      <Box fontSize='smaller'>
        {`Bruno Noriller - ${new Date().getFullYear()}`}
      </Box>
      <Box />
      <Center flexDirection='column'>
        <Box>Not hiring? Share on</Box>
        <HStack marginBottom='2' spacing='6'>
          <CustomLink
            href={`https://www.linkedin.com/cws/share?url=${url}`}>
            <Center>
              <Img
                src='/linkedinIcon.svg'
                alt='LinkedIn Icon'
                boxSize='1em'
                objectFit='cover'
                mr={2}
              />
              LinkedIn
            </Center>
          </CustomLink>
          <CustomLink
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
            <Center>
              <Img
                src='/facebookIcon.svg'
                alt='Facebook Icon'
                boxSize='1em'
                objectFit='cover'
                mr={2}
              />
              Facebook
            </Center>
          </CustomLink>
          <CustomLink
            href={`https://twitter.com/intent/tweet?original_referer=${url}&text=${sharingText}&tw_p=tweetbutton&url=${url}`}>
            <Center>
              <Img
                src='/twitterIcon.svg'
                alt='Twitter Icon'
                boxSize='1em'
                objectFit='cover'
                mr={2}
              />
              Twitter
            </Center>
          </CustomLink>
        </HStack>
      </Center>
    </Flex>
  );
}
