import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ArrowUpRightSVG } from '@/svg';

import { CardHeaderProps } from './card.types';

const CardHeader: FC<CardHeaderProps> = ({ name }) => (
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Typography
      my="unset"
      fontWeight="400"
      fontSize="1.5rem"
      fontFamily="Roboto"
      variant="displayLarge"
    >
      {name}
    </Typography>
    <Box
      width="2rem"
      height="2rem"
      display="flex"
      cursor="pointer"
      border="2px solid"
      borderRadius="5rem"
      alignItems="center"
      borderColor="#000"
      justifyContent="center"
      transition="all 300ms ease-in-out"
      nHover={{
        bg: 'black',
        color: 'white',
      }}
    >
      <ArrowUpRightSVG maxHeight="75%" maxWidth="75%" width="100%" />
    </Box>
  </Box>
);

export default CardHeader;
