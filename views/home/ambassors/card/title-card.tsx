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
    justifyContent="center"
    boxShadow="12px 12px 0px 0px #000"
    nHover={{ transform: 'scale(1.02)' }}
    minWidth={['20rem', '26rem', '26rem']}
    transition="transform 300ms ease-in-out"
  >
    <Box display="flex" mb="1.5rem">
      <Typography
        my="unset"
        fontWeight="700"
        fontSize={['2.8rem', '3.5625rem']}
        fontStyle="normal"
        lineHeight="4rem"
        fontFamily="Asap"
        variant="displayLarge"
        color="white"
      >
        AMBASSORS
      </Typography>
    </Box>
    <LoudSpeakerSVG maxWidth="10.25rem" maxHeight="10.8125rem" width="100%" />
  </Box>
);

export default TitleCard;
