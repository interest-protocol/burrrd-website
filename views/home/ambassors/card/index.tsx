import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CardProps } from './card.types';
import CardHeader from './header';

const Card: FC<CardProps> = ({ name, img, link }) => (
  <Box
    p="1.5rem"
    bg="#fff"
    // maxWidth="90%"
    border="2px solid"
    borderColor="#000"
    borderRadius="1rem"
    transform="scale(1)"
    minHeight="19.8125rem"
    minWidth={['20rem', '26rem', '26rem']}
    // minWidth="26rem"
    boxShadow="12px 12px 0px 0px #000"
    nHover={{ transform: 'scale(1.02)' }}
    transition="transform 300ms ease-in-out"
  >
    <CardHeader name={name} link={link} />
    <Box
      mx="auto"
      mt="1.53rem"
      width="11.25rem"
      overflow="hidden"
      border="2px solid #000"
      height="11.25rem"
      borderRadius="50%"
    >
      <img alt={name} width="100%" src={img} />
    </Box>
  </Box>
);

export default Card;
