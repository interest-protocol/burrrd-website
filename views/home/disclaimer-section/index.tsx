import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import DisclaimerBox from './disclaimer-box';
import Illustration from './illustration';

const DisclaimerSection: FC = () => {
  return (
    <Box
      pb="8rem"
      px="3.75rem"
      background="linear-gradient(180deg, #000 8.06%, #3B1259 100%)"
    >
      <Box
        mx="auto"
        py="5.75rem"
        maxWidth="1024px"
        flexDirection="column"
        gridTemplateColumns="55% 45%"
        display={['flex', 'flex', 'flex', 'flex', 'grid']}
      >
        <DisclaimerBox />
        <Illustration />
      </Box>
    </Box>
  );
};

export default DisclaimerSection;
