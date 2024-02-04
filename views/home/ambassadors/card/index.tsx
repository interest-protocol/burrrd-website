import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CardProps } from './card.types';
import CardHeader from './header';

const Card: FC<CardProps> = ({ name, img, link }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <Box
      p="1.5rem"
      bg="#fff"
      border="2px solid"
      borderColor="#000"
      borderRadius="1rem"
      transform="scale(1)"
      minHeight="19.8125rem"
      boxShadow="12px 12px 0px 0px #000"
      nHover={{ transform: 'scale(1.02)' }}
      transition="transform 300ms ease-in-out"
    >
      <CardHeader name={name} />
      <Box
        mx="auto"
        mt="1.53rem"
        width="11.25rem"
        overflow="hidden"
        height="11.25rem"
        borderRadius="50%"
        border="2px solid #000"
      >
        <img alt={name} width="100%" src={img} />
      </Box>
    </Box>
  </a>
);

export default Card;
