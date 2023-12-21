import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import FoundingMembers from '@/components/founding-members';
import Layout from '@/components/layout';

import AboutSection from './about-section';
import HeroSection from './hero-section';
import RoadmapSection from './roadmap-section';
import TokenomicsSection from './tokenomics-section';

const Home: FC = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <Box bg="linear-gradient(180deg, #000000 8.06%, #3B1259 100%)">
        <TokenomicsSection />
        <RoadmapSection />
        <FoundingMembers />
      </Box>
    </Layout>
  );
};

export default Home;
