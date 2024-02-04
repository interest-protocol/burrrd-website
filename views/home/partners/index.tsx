import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import Card from '../components/card';
import { PARTNERS } from './partners.data';
import Title from './title';

const Partners: FC = () => (
  <Box
    py="6rem"
    px="3rem"
    mx="auto"
    gap="2rem"
    width="100%"
    display="grid"
    maxWidth="82.5rem"
    justifyContent="center"
    gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr 1fr']}
  >
    {PARTNERS.map((partner, index) => (
      <Box key={v4()}>
        {(index == 0 || index == 1) && (
          <Box
            display={[
              index == 0 ? 'block' : 'none',
              index == 0 ? 'block' : 'none',
              index == 0 ? 'block' : 'none',
              index == 1 ? 'block' : 'none',
            ]}
          >
            <Title />
          </Box>
        )}
        <Card {...partner} />
      </Box>
    ))}
  </Box>
);

export default Partners;
