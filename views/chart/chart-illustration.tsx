import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { COQSVG, RunningBurrrdSVG } from '@/svg';

const ChartIllustration: FC = () => (
  <Box display="flex">
    <Box width="30rem" position="relative">
      <Box position="absolute" bottom="5rem">
        <img
          src="/images/dead-coins/USEDCAR-min.webp"
          alt="Dead USEDCAR"
          width="200"
        />
      </Box>
      <Box position="absolute" bottom="4rem">
        <img
          src="/images/dead-coins/BONK-min.webp"
          alt="Dead BONK"
          width="100"
        />
      </Box>
      <Box position="absolute" left="3.5rem" bottom="4rem">
        <img
          src="/images/dead-coins/CHONKY-min.webp"
          alt="Dead CHONKY"
          width="100"
        />
      </Box>
      <Box position="absolute" bottom="2rem">
        <img
          src="/images/dead-coins/DODGE-min.webp"
          alt="Dead DOGE"
          width="100"
        />
      </Box>
      <Box position="absolute" bottom="2rem" left="2rem">
        <img
          src="/images/dead-coins/DOGWITHAT-min.webp"
          alt="Dead DOGWIFTHAT"
          width="100"
        />
      </Box>
      <Box position="absolute" bottom="1.5rem" left="5.5rem">
        <img
          src="/images/dead-coins/GECKO-min.webp"
          alt="Dead GECKO"
          width="100"
        />
      </Box>
      <Box position="absolute" bottom="0.5rem" right="0">
        <img
          src="/images/dead-coins/MYRO-min.webp"
          alt="Dead MYRO"
          width="100"
        />
      </Box>
      <Box position="absolute" bottom="0">
        <img
          src="/images/dead-coins/PEPE-min.webp"
          alt="Dead PEPE"
          width="100"
        />
      </Box>
      <Box position="absolute" bottom="0" left="3rem">
        <img
          src="/images/dead-coins/PONKE-min.webp"
          alt="Dead PONKE"
          width="100"
        />
      </Box>
      <Box position="absolute" bottom="0" right="0">
        <img
          src="/images/dead-coins/SAMO-min.webp"
          alt="Dead SAMO"
          width="100"
        />
      </Box>
    </Box>
    <RunningBurrrdSVG maxHeight="50rem" maxWidth="50rem" width="100%" />
    <COQSVG maxHeight="50rem" maxWidth="50rem" width="100%" />
  </Box>
);

export default ChartIllustration;
