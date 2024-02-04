import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CardProps } from './card.types';
import CardHeader from './header';

const Card: FC<CardProps> = ({ name, img, link }) => (
  <Box
    p="1.5rem"
    bg="#fff"
    maxWidth="90%"
    border="2px solid"
    borderRadius="1rem"
    transform="scale(1)"
    borderColor="#000"
    boxShadow="12px 12px 0px 0px #000"
    nHover={{ transform: 'scale(1.02)' }}
    transition="transform 300ms ease-in-out"
    minWidth={['19rem', '25rem', '30rem', '30rem', '19.125rem']}
  >
    <CardHeader name={name} link={link} />
    <Box
      mx="auto"
      mt="1.53rem"
      width="11.25rem"
      overflow="hidden"
      height="11.25rem"
      borderRadius="50%"
    >
      <img alt={name} width="100%" src={img} />
    </Box>
  </Box>
);

export default Card;
