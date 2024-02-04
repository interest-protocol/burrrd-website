import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import Card from '../components/card';
import { COLLABORATORS } from './collaborators.data';
import Title from './title';

const Collaborators: FC = () => (
  <Box
    pt="5rem"
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
  >
    <Title />
    <Box
      gap="2rem"
      width="100%"
      display="grid"
      maxWidth="82.5rem"
      p="7.5rem 2rem 6rem"
      gridTemplateColumns={[
        '1fr',
        '1fr 1fr',
        '1fr 1fr',
        '1fr 1fr',
        '1fr 1fr 1fr 1fr',
      ]}
    >
      {COLLABORATORS.map((collaborator) => (
        <Card key={v4()} {...collaborator} />
      ))}
    </Box>
  </Box>
);

export default Collaborators;
