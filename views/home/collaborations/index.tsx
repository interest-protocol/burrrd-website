import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import Card from './card';
import { COLLABORATORS } from './collaborators.data';
import Title from './title';

const Collaborators: FC = () => (
  <Box
    py="5rem"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Title />
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      padding="7.5rem 0.75rem 6rem 0.75rem"
      gap={['4rem', '4rem', '4rem', '2rem']}
      flexDirection={['column', 'column', 'column', 'column', 'row']}
    >
      {COLLABORATORS.map((colaborator) => (
        <Box key={v4()} display="flex">
          <Card {...colaborator} />
        </Box>
      ))}
    </Box>
  </Box>
);

export default Collaborators;
