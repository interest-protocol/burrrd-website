import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CardProps } from './card.types';
import CardHeader from './header';

const Card: FC<CardProps> = ({ name, logo, link, bg, isTitle }) => (
  <Box
    bg={bg || '#fff'}
    p="1.5rem"
    minWidth="26rem"
    height="20rem"
    border="2px solid"
    borderColor="#000"
    borderRadius="1rem"
    transform="scale(1)"
    boxShadow="12px 12px 0px 0px #000"
    nHover={{ transform: 'scale(1.02)' }}
    transition="transform 300ms ease-in-out"
    position="relative"
  >
    <CardHeader name={name} link={link} bg={bg} isTitle={isTitle} />
    <Box mx="auto" width="50%" height="80%" mt="1.53rem">
      <img alt={name} width="100%" height="100%" src={logo} />
    </Box>
  </Box>
);

export default Card;
