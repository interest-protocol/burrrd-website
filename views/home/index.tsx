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
      <TokenomicsSection />
      <RoadmapSection />
      <FoundingMembers />
    </Layout>
  );
};

export default Home;
