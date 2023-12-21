import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { StabbedPepeSVG } from '@/svg';

const StabbedPepe: FC = () => (
  <Box
    mt="4rem"
    height="10rem"
    display="flex"
    position="relative"
    justifyContent="center"
  >
    <Motion
      position="absolute"
      justifyContent="center"
      transition={{ duration: 2.5 }}
      initial={{ opacity: 0.4, translateY: '0' }}
      whileInView={{ opacity: 0, translateY: '-100%' }}
    >
      <StabbedPepeSVG width="100%" maxWidth="22rem" maxHeight="22rem" />
    </Motion>
    <Box justifyContent="center" position="relative">
      <StabbedPepeSVG width="100%" maxWidth="22rem" maxHeight="22rem" />
    </Box>
  </Box>
);

export default StabbedPepe;
