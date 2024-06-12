import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Layout from '@/components/layout';
import Footer from '@/components/layout/footer';

import AboutSection from './about';
import Advisors from './advisors';
import AsSeenOn from './as-seen-on';
import Collaborators from './collaborations';
import Disclaimer from './disclaimer';
import Hero from './hero';
import HowToBuy from './how-to-buy';
import Liquidity from './liquidity';
import Lottery from './lottery';
import Partners from './partners';
import Roadmap from './roadmap';
import Tokenomics from './tokenomics';

const Home: FC = () => (
  <Layout>
    <Hero />
    <Box bg="linear-gradient(180deg, #1B1622 50%, #000)">
      <Lottery />
      <Liquidity />
    </Box>
    <AboutSection />
    <Box bg="linear-gradient(180deg, #111111 8.06%, #3B1259 57.12%, #DC77F7 100%)">
      <Tokenomics />
      <Roadmap />
      <Disclaimer />
    </Box>
    <Box background="linear-gradient(180deg, #DB76F6 0%, #451779 100%)">
      <Partners />
      <Collaborators />
      <AsSeenOn />
      <HowToBuy />
      <Footer />
    </Box>
  </Layout>
);

export default Home;
