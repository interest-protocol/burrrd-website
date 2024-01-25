import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { HandsSVG } from '@/svg';

const Title: FC = () => (
  <Box
    mb="1.5rem"
    bg="#FF7E61"
    p="1.5rem 3rem"
    border="2px solid"
    borderColor="#000"
    borderRadius="1rem"
    position="relative"
    boxShadow="8px 8px 0px 0px #000"
  >
    <Typography
      my="unset"
      color="white"
      fontWeight="700"
      variant="medium"
      fontFamily="Asap"
      fontSize="3.5rem"
      textAlign="center"
      letterSpacing="-0.0156rem"
    >
      Partners
    </Typography>
    <Motion
      position="absolute"
      animate={{
        rotate: [0, 30, 0],
        scale: [1, 0.5, 1, 0.4, 1],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 1,
      }}
      top="-5rem"
      width="9rem"
      right="-2rem"
    >
      <HandsSVG maxHeight="100%" maxWidth="100%" width="100%" height="60%" />
    </Motion>
  </Box>
);

export default Title;
