import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ArrowUpRightSVG } from '@/svg';

import { CardHeaderProps } from './card.types';

const CardHeader: FC<CardHeaderProps> = ({ name, link, bg, isTitle }) => (
  <Box display="flex" justifyContent="space-between" alignItems="center">
    {isTitle ? (
      <Typography
        my="unset"
        width="100%"
        fontWeight="700"
        fontSize={['3rem', '3rem', '3rem', '3.5rem']}
        fontFamily="Asap"
        lineHeight="4rem"
        textAlign="center"
        variant="displayLarge"
        color={bg ? 'white' : 'unset'}
        letterSpacing="-0.01563rem"
      >
        {name}
      </Typography>
    ) : (
      <>
        <Typography
          my="unset"
          fontWeight="400"
          fontSize="1.5rem"
          fontFamily="Roboto"
          variant="displayLarge"
          color={bg ? 'white' : 'unset'}
        >
          {name}
        </Typography>
        <a href={link} target="_blank" rel="noreferrer">
          <Box
            width="2rem"
            height="2rem"
            display="flex"
            cursor="pointer"
            border="2px solid"
            borderColor="#000"
            borderRadius="5rem"
            alignItems="center"
            justifyContent="center"
            transition="all 300ms ease-in-out"
            bg={bg ? 'white' : 'transparent'}
            nHover={{
              bg: 'black',
              color: 'white',
            }}
          >
            <ArrowUpRightSVG maxHeight="75%" maxWidth="75%" width="100%" />
          </Box>
        </a>
      </>
    )}
  </Box>
);

export default CardHeader;
