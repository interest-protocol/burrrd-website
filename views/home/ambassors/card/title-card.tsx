import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { LoudSpeakerSVG } from '@/svg';

const TitleCard: FC = () => (
  <Box
    p="1.5rem"
    bg="#FF7E61"
    display="flex"
    border="2px solid"
    alignItems="center"
    borderRadius="1rem"
    borderColor="#000"
    transform="scale(1)"
    flexDirection="column"
    minHeight="19.8125rem"
    boxShadow="12px 12px 0px 0px #000"
    nHover={{ transform: 'scale(1.02)' }}
    transition="transform 300ms ease-in-out"
  >
    <Box mb="1.5rem" display="flex">
      <Typography
        my="unset"
        color="white"
        fontWeight="700"
        lineHeight="4rem"
        fontFamily="Asap"
        fontStyle="normal"
        variant="displayLarge"
        letterSpacing="-0.01563rem"
        fontSize={['2rem', '1.8rem', '2rem', '2rem', '2.2rem']}
      >
        AMBASSADORS
      </Typography>
    </Box>
    <LoudSpeakerSVG maxWidth="10.25rem" maxHeight="10.8125rem" width="100%" />
  </Box>
);

export default TitleCard;
