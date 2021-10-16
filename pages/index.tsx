import { Box } from '@chakra-ui/layout';
import type { NextPage } from 'next';
import React from 'react';
import { VideoContainer } from '../src/main/VideoContainer';
import { Footer } from '../src/shared/Footer';
import { Header } from '../src/shared/Header';
import { MetaHead } from '../src/shared/MetaHead';

const Home: NextPage = () => (
  <>
    <MetaHead title='Bruno Noriller - Bandersnatch Interview' />

    <Header />

    <Box as='main'>
      <VideoContainer />
    </Box>

    <Footer />
  </>
);

export default Home;
