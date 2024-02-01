import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Layout from '@/components/layout';

import AboutSection from './about';
import Advisor from './advisor';
import AsSeenOn from './as-seen-on';
import Collaborators from './collaborations';
import Disclaimer from './disclaimer';
import Hero from './hero';
import Lottery from './lottery';
import Partners from './partners';
import Roadmap from './roadmap';
import Tokenomics from './tokenomics';

const Home: FC = () => (
  <Layout>
    <Hero />
    <Box bg="linear-gradient(180deg, #111111 8.06%, #3B1259 57.12%, #DC77F7 100%)">
      <AboutSection />
      <Tokenomics />
      <Roadmap />
      <Disclaimer />
      <Lottery />
      <Advisor />
      <Partners />
      <Collaborators />
      <AsSeenOn />
    </Box>
  </Layout>
);

export default Home;
