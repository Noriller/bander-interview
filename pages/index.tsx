import { Box, Flex } from '@chakra-ui/layout';
import type { NextPage } from 'next';
import React from 'react';
import { VideoContainer } from '../src/main/VideoContainer';
import { Footer } from '../src/shared/Footer';
import { Header } from '../src/shared/Header';
import { MetaHead } from '../src/shared/MetaHead';

const Home: NextPage = () => (
  <Flex flexDirection='column' minH='100vh'>
    <MetaHead title='Bruno Noriller - Bandersnatch Interview' />

    <Header />

    <Box as='main' flex='1 0 auto'>
      <VideoContainer />
    </Box>

    <Footer />
  </Flex>
);

export default Home;
