import Layout from '@/components/layout';
import { FC } from 'react';
import HeroSection from './hero-section';
import AboutSection from './about-section';
import TokenomicsSection from './tokenomics-section';
import RoadmapSection from './roadmap-section';
import HowToBuySection from './how-to-buy-section';
import BridgeSection from './bridge-section';

const Home: FC = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <HowToBuySection />
      <BridgeSection />
    </Layout>
  );
};

export default Home;
