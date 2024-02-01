import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { DeadDogeSVG, DogeBloodSVG } from '@/svg';

const DeadDogeIllustration: FC = () => (
  <Box
    height="14rem"
    display="flex"
    position="relative"
    alignItems="flex-end"
    justifyContent="center"
  >
    <Box
      zIndex="2"
      right="-3rem"
      display="flex"
      position="absolute"
      justifyContent="center"
    >
      <DeadDogeSVG width="100%" maxWidth="23.625rem" maxHeight="16.8125rem" />
    </Box>
    <Motion
      zIndex="1"
      mb="-1.2rem"
      display="flex"
      position="absolute"
      justifyContent="center"
      transition={{ duration: 2.5 }}
      initial={{ scale: 0, translateY: '-10%', translateX: '4rem' }}
      whileInView={{ scale: 1, translateY: '-5%' }}
    >
      <DogeBloodSVG width="100%" maxWidth="6.25rem" maxHeight="6.25rem" />
    </Motion>
  </Box>
);

export default DeadDogeIllustration;
