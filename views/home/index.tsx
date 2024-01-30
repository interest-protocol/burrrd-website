import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Layout from '@/components/layout';

import AboutSection from './about';
import DisclaimerSection from './disclaimer-section';
import HeroSection from './hero';
import RoadmapSection from './roadmap';
import TokenomicsSection from './tokenomics';

const Home: FC = () => (
  <Layout>
    <HeroSection />
    <AboutSection />
    <Box bg="linear-gradient(180deg, #000000 8.06%, #3B1259 100%)">
      <TokenomicsSection />
      <Box bg="linear-gradient(180deg, #33124C 8.06%, #9047AC 100%)" py="1rem">
        <RoadmapSection />
      </Box>
      <Box bg="linear-gradient(180deg, #9047AC 8.06%, #DB77F8 100%)" py="1rem">
        <DisclaimerSection />
      </Box>
    </Box>
  </Layout>
);

export default Home;
