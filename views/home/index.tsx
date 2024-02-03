import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Layout from '@/components/layout';
import Footer from '@/components/layout/footer';

import AboutSection from './about';
import Advisor from './advisor';
import Ambassadors from './ambassadors';
import AsSeenOn from './as-seen-on';
import Collaborators from './collaborations';
import Disclaimer from './disclaimer';
import Hero from './hero';
import HowToBuy from './how-to-buy';
import Lottery from './lottery';
import Partners from './partners';
import Roadmap from './roadmap';
import Tokenomics from './tokenomics';

const Home: FC = () => (
  <Layout>
    <Hero />
    <AboutSection />
    <Box bg="linear-gradient(180deg, #111111 8.06%, #3B1259 57.12%, #DC77F7 100%)">
      <Tokenomics />
      <Roadmap />
      <Disclaimer />
    </Box>
    <Lottery />
    <Box background="linear-gradient(180deg, #DB76F6 0%, #451779 100%)">
      <Advisor />
      <Ambassadors />
      <Partners />
      <Collaborators />
      <AsSeenOn />
      <HowToBuy />
      <Footer />
    </Box>
  </Layout>
);

export default Home;
