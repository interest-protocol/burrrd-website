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
    <Box bg="linear-gradient(180deg,#000000 8.06%,#2A123B 100%)" py="1rem">
      <TokenomicsSection />
    </Box>
    <Box bg="linear-gradient(180deg,#2A123B 8.06%, #9047AC 100%)" py="1rem">
      <RoadmapSection />
    </Box>
    <Box bg="linear-gradient(180deg,#9047AC 8.06%, #DB77F8 100%)" py="1rem">
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
