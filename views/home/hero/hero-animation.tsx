import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { GameOver, MiniMoon, StarSVG } from '@/svg';

const HeroIllustration: FC = () => (
  <Motion
    width="100%"
    height="auto"
    animate={{ y: 20 }}
    position="relative"
    initial={{ y: -20 }}
    transition={{
      type: 'spring',
      stiffness: 300,
      bounce: 0.5,
      y: { delay: 4.5 },
    }}
    whileHover={{ scale: 1.07 }}
  >
    <Motion
      width="7rem"
      height="8rem"
      top="25%"
      left="80%"
      zIndex="2"
      position="absolute"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, width: '2rem', height: '2rem' }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
    >
      <StarSVG maxWidth="3rem" maxHeight="3rem" />
      <Box mt="-0.5rem" ml="4rem">
        <StarSVG maxWidth="1.5rem" maxHeight="1.5rem" />
      </Box>
    </Motion>
    <Motion
      position="absolute"
      zIndex="2"
      top="0"
      left="0"
      transition={{
        duration: 2,
        delay: 4.5,
      }}
      initial={{ x: '-20%', y: '10%', scale: 0 }}
      animate={{ x: '-20%', y: '10%', scale: 0.66 }}
    >
      <GameOver maxHeight="7.625rem" maxWidth="11.3125rem" width="100%" />
    </Motion>
    <Box width="100%" position="absolute">
      <MiniMoon maxHeight="38.0625rem" maxWidth="38.0625rem" width="100%" />
    </Box>
    <Motion
      width="7rem"
      height="8rem"
      mt="32rem"
      zIndex="2"
      position="absolute"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, width: '2rem', height: '2rem' }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
    >
      <Box ml="1.5rem">
        <StarSVG maxWidth="3rem" maxHeight="3rem" />
      </Box>
      <StarSVG maxWidth="1.5rem" maxHeight="1.5rem" />
    </Motion>
  </Motion>
);

export default HeroIllustration;
