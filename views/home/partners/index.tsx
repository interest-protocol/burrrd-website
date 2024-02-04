import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import Card from '../components/card';
import { PARTNERS } from './partners.data';
import Title from './title';

const Partners: FC = () => (
  <Box p="6rem 0.75rem 8rem 0.75rem" width="fit-content" mx="auto">
    <Box
      gap="2rem"
      display="grid"
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
  </Box>
);

export default Partners;
