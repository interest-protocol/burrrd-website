import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import CardHeader from '../components/card/header';
import { TitleProps } from './as-seen-on.types';

const Title: FC<TitleProps> = ({ title }) => (
  <Box
    px="1.5rem"
    pt="1.5rem"
    bg="#FF7E61"
    borderRadius="1rem"
    transform="scale(1)"
    minHeight="19.8125rem"
    boxShadow="12px 12px 0px 0px #000"
    nHover={{ transform: 'scale(1.02)' }}
    border="2px solid"
    borderColor="#000"
    position="relative"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    transition="transform 300ms ease-in-out"
  >
    <CardHeader name={title} bg="#FF7E61" isTitle />
    <Box
      mx="auto"
      width={['10rem', '10rem', '65%', '65%', '60%']}
      height="15%"
      mt="1.53rem"
      display="flex"
    >
      <img width="100%" alt={title} src="/images/as-seen-on/burrrd.webp" />
    </Box>
  </Box>
);

export default Title;
