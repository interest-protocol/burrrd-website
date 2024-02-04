import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CardProps } from './card.types';
import CardHeader from './header';

const Card: FC<CardProps> = ({ name, img, link, bg, isTitle, post }) => (
  <a href={post ?? link} target="_blank" rel="noreferrer">
    <Box
      p="1.5rem"
      bg={bg || '#fff'}
      border="2px solid"
      borderColor="#000"
      borderRadius="1rem"
      transform="scale(1)"
      minHeight="19.8125rem"
      boxShadow="12px 12px 0px 0px #000"
      nHover={{ transform: 'scale(1.02)' }}
      transition="transform 300ms ease-in-out"
    >
      <CardHeader name={name} bg={bg} isTitle={isTitle} link={link} />
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
  </a>
);

export default Card;
