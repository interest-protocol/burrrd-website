import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { ADVISORS } from './advisors.data';
import Card from './card';
import Title from './title';

const Advisors: FC = () => (
  <Box
    py="5rem"
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
  >
    <Title />
    <Box
      width="100%"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      padding="7.5rem 0.75rem 6rem 0.75rem"
      gap={['4rem', '4rem', '4rem', '2rem']}
      flexDirection={['column', 'column', 'column', 'column', 'row']}
    >
      {ADVISORS.map((advisor) => (
        <Box
          key={v4()}
          display="flex"
          justifyContent="center"
          width={['100%', '100%', 'auto', 'auto', 'auto']}
        >
          <Card {...advisor} />
        </Box>
      ))}
    </Box>
  </Box>
);

export default Advisors;
