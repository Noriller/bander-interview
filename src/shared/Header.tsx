import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  StackDivider,
} from '@chakra-ui/layout';
import { CustomLink } from './CustomLink';

export function Header() {
  return (
    <Center
      as='header'
      w='full'
      h={['auto', '10vh']}
      bg='secondary'
      paddingY={['4', 'unset']}
      flexDirection={['column', 'unset']}
      justifyContent={['unset', 'space-around']}>
      <Heading
        as='h1'
        fontSize='3xl'
        marginBottom={['2', 'unset']}>
        Bruno Noriller
      </Heading>

      <Center flexDirection='column'>
        <Heading as='h6' fontSize='medium' pb='1'>
          My Links:
        </Heading>
        <HStack
          spacing='4'
          divider={
            <StackDivider borderColor='gray.200' />
          }
          alignSelf={['unset', 'normal']}>
          <CustomLink
            href='https://www.linkedin.com/in/noriller/'
            label='Linkedin'
          />
          <CustomLink
            href='https://github.com/Noriller'
            label='Github'
          />
          <CustomLink
            href='https://www.linkedin.com/in/noriller/'
            label='Dev.to'
          />
        </HStack>
      </Center>
    </Center>
  );
}
