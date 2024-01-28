import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { AS_SEEN_ON as AS_SEEN_ON_LIST } from './as-seen-on.data';
import Card from './card';
import Title from './title';

const AsSeenOn: FC = () => (
  <Box p="2rem" width="fit-content" mx="auto">
    <Box
      gap="2rem"
      display="grid"
      justifyContent="center"
      gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr 1fr']}
    >
      <Title />
      {AS_SEEN_ON_LIST.map(({ name, img, link, bg }) => (
        <Box key={v4()}>
          <Card name={name} logo={img} link={link} bg={bg} />
        </Box>
      ))}
    </Box>
  </Box>
);

export default AsSeenOn;
