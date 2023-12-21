import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { BurrrdKnifeSVG, BurrrdRockSVG } from '@/svg';

const KnifeInRock: FC = () => (
  <Box
    scale="1.1"
    height="10rem"
    display="flex"
    position="relative"
    justifyContent="center"
  >
    <Box justifyContent="center" position="absolute" bottom="-4rem" left="0">
      <BurrrdRockSVG width="100%" maxWidth="12rem" maxHeight="12rem" />
    </Box>
    <Motion
      top="-2.2rem"
      left="-4.5rem"
      position="absolute"
      justifyContent="center"
      transition={{ duration: 2.5 }}
      initial={{ translate: '-2rem -2rem', rotate: 15 }}
      whileInView={{ translate: '0rem 0rem', rotate: 0 }}
    >
      <BurrrdKnifeSVG width="100%" maxWidth="20rem" maxHeight="20rem" />
    </Motion>
  </Box>
);

export default KnifeInRock;
