import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Layout from '@/components/layout';

import AboutSection from './about';
import Advisor from './advisor';
import Collaborators from './collaborations';
import DisclaimerSection from './disclaimer';
import HeroSection from './hero';
import LotterySection from './lottery';
import Partners from './partners';
import RoadmapSection from './roadmap';
import TokenomicsSection from './tokenomics';

const Home: FC = () => (
  <Layout>
    <HeroSection />
    <AboutSection />
    <Box bg="linear-gradient(180deg, #000000 8.06%, #3B1259 100%)">
      <TokenomicsSection />
      <RoadmapSection />
      <DisclaimerSection />
      <LotterySection />
      <Advisor />
      <Partners />
      <Collaborators />
    </Box>
  </Layout>
);

export default Home;
