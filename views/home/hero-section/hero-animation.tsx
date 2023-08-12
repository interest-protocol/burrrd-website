import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { BurrrdSVG, GameOver, MiniMoon, Shadow } from '@/svg';

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
    <Motion
      initial={{ x: '200%', y: '-200%', scale: 0 }}
      animate={{
        x: '-50%',
        y: '50%',
        rotate: 360,
        scale: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }}
      transition={{
        duration: 1.5,
        delay: 3,
        ease: 'easeInOut',
        rotate: { duration: 0.3, repeat: 4, ease: 'linear' },
      }}
      top="50%"
      left="50%"
      zIndex="2"
      position="absolute"
    >
      <BurrrdSVG maxHeight="21.9375rem" maxWidth="21.375rem" width="100%" />
    </Motion>
    <Box width="100%" position="absolute">
      <Motion
        zIndex="1"
        initial={{ scale: 0 }}
        animate={{ scale: 1, x: '-50%', y: '60%' }}
        transition={{
          duration: 0.3,
          delay: 4.5,
        }}
        top="60%"
        left="50%"
        position="absolute"
      >
        <Shadow maxHeight="5.25rem" maxWidth="18.375rem" width="95%" />
      </Motion>
      <MiniMoon maxHeight="38.0625rem" maxWidth="38.0625rem" width="100%" />
    </Box>
  </Motion>
);

export default HeroIllustration;
