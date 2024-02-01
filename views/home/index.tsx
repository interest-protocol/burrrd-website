import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Layout from '@/components/layout';

import AboutSection from './about';
import Advisor from './advisor';
import AsSeenOn from './as-seen-on';
import Collaborators from './collaborations';
import DisclaimerSection from './disclaimer-section';
import HeroSection from './hero';
import LotterySection from './lottery';
import Partners from './partners';
import RoadmapSection from './roadmap';
import TokenomicsSection from './tokenomics';

const Home: FC = () => (
  <Layout>
    <HeroSection />
    <AboutSection />
    <Box
      py="1rem"
      bg="linear-gradient(180deg, #111111 8.06%, #3B1259 57.12%, #DC77F7 100%)"
    >
      <TokenomicsSection />
      <RoadmapSection />
      <DisclaimerSection />
    </Box>
    <LotterySection />
    <Box bg="linear-gradient(180deg, #DB77F8 8.06%,#9147B8 )" py="1rem">
      <Advisor />
      <Partners />
      <Collaborators />
      <AsSeenOn />
    </Box>
  </Layout>
);

export default Home;
