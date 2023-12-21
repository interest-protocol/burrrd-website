import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { BurrrdCleaningSVG } from '@/svg';

const CleaningBurrd: FC = () => (
  <Box
    height="15rem"
    display="flex"
    position="relative"
    alignItems="center"
    justifyContent="center"
  >
    <Box position="absolute" left="-3rem" right="-3rem">
      <BurrrdCleaningSVG width="100%" maxWidth="60rem" maxHeight="60rem" />
    </Box>
  </Box>
);

export default CleaningBurrd;
