import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CardProps } from './card.types';
import CardHeader from './header';

const Card: FC<CardProps> = ({ name, img, link }) => (
  <Box
    bg="#fff"
    p="1.5rem"
    maxWidth="26rem"
    border="2px solid"
    borderColor="#000"
    borderRadius="1rem"
    transform="scale(1)"
    boxShadow="12px 12px 0px 0px #000"
    nHover={{ transform: 'scale(1.02)' }}
    transition="transform 300ms ease-in-out"
  >
    <CardHeader name={name} link={link} />
    <Box mt="1.53rem" mx="auto" width="60%" height="60%">
      <img alt={name} width="100%" src={img} />
    </Box>
  </Box>
);

export default Card;
