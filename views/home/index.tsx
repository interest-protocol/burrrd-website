import { FC } from 'react';

import FoundingMembers from '@/components/founding-members';
import Layout from '@/components/layout';

import AboutSection from './about-section';
import BridgeSection from './bridge-section';
import HeroSection from './hero-section';
import HowToBuySection from './how-to-buy-section';
import RoadmapSection from './roadmap-section';
import TokenomicsSection from './tokenomics-section';

const Home: FC = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <HowToBuySection />
      <BridgeSection />
      <FoundingMembers />
    </Layout>
  );
};

export default Home;
