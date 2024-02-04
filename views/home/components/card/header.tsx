import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ArrowUpRightSVG } from '@/svg';

import { CardHeaderProps } from './card.types';

const CardHeader: FC<CardHeaderProps> = ({ name, bg, isTitle, link }) =>
  isTitle ? (
    <Box mb="1.5rem" display="flex">
      <Typography
        my="unset"
        width="100%"
        color="white"
        textAlign="center"
        fontWeight="700"
        lineHeight="4rem"
        fontFamily="Asap"
        fontStyle="normal"
        variant="displayLarge"
        letterSpacing="-0.01563rem"
        fontSize={['2rem', '2rem', '2rem', '2rem', '2.7rem']}
      >
        {name}
      </Typography>
    </Box>
  ) : (
    <Box display="grid" gridTemplateColumns="1fr 2rem">
      <Typography
        my="unset"
        fontWeight="400"
        fontSize="1.5rem"
        fontFamily="Roboto"
        variant="displayLarge"
        color={bg ? 'white' : 'black'}
      >
        {name}
      </Typography>
      <Box
        width="2rem"
        height="2rem"
        display="flex"
        bg={bg ? 'white' : 'unset'}
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
        {...(!!link && {
          onClick: (e) => {
            e.stopPropagation();
            window.open(link, '_blank', 'noopener,noreferrer');
          },
        })}
      >
        <ArrowUpRightSVG maxHeight="100%" maxWidth="100%" width="100%" />
      </Box>
    </Box>
  );

export default CardHeader;
