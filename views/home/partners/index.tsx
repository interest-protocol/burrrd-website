import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import Card from '../components/card';
import { PARTNERS } from './partners.data';
import Title from './title';

const Partners: FC = () => (
  <Box
    pt="6rem"
    px="3rem"
    mx="auto"
    gap="2rem"
    width="100%"
    display="grid"
    maxWidth="82.5rem"
    justifyContent="center"
    gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr 1fr']}
  >
    <Box />
    <Title />
    <Box />
    {PARTNERS.map((partner, index) => (
      <Box
        key={v4()}
        mt={['unset', 'unset', 'unset', index % 3 !== 1 ? '-9rem' : 'unset']}
        mb={['unset', 'unset', 'unset', index % 3 !== 1 ? '9rem' : 'unset']}
      >
        <Card {...partner} />
      </Box>
    ))}
  </Box>
);

export default Partners;
