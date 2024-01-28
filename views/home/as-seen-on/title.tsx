import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import CardHeader from './card/header';

const Title: FC = () => (
  <Box
    px="1.5rem"
    pt="1.5rem"
    bg="#FF7E61"
    height="20rem"
    maxWidth="26rem"
    border="2px solid"
    borderColor="#000"
    borderRadius="1rem"
    position="relative"
    transform="scale(1)"
    boxShadow="12px 12px 0px 0px #000"
    nHover={{ transform: 'scale(1.02)' }}
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    transition="transform 300ms ease-in-out"
  >
    <CardHeader name="As seen on" bg="#FF7E61" isTitle />
    <Box mx="auto" width="70%" height="70%" mt="1.53rem" display="flex">
      <img width="100%" alt="As seen on" src="/images/as-seen-on/burrrd.webp" />
    </Box>
  </Box>
);

export default Title;
