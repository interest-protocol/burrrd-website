import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { BurrrdRunningWithKnifeSVG } from '@/svg';

import DescriptionBox from './description-box';

const Illustration: FC = () => (
  <Box display="flex" justifyContent="flex-end" width="95%">
    <Box
      mx="auto"
      position="relative"
      mt={['5rem', '5rem', '5rem', '5rem', 'unset']}
      width={['15rem', '25rem', '25rem', '25rem', '90%']}
      height={['15rem', '34rem', '34rem', '34rem', '34.1875rem']}
    >
      <Box
        width="100%"
        bg="#FFC701"
        height="100%"
        border="4px solid"
        borderColor="#000"
        borderRadius="62.4375rem 62.4375rem 0rem 0rem"
      />
      <Box
        bottom="0"
        right="-20%"
        height="80%"
        display="flex"
        position="absolute"
      >
        <BurrrdRunningWithKnifeSVG
          width="100%"
          height="95%"
          maxWidth="100%"
          maxHeight="100%"
        />
      </Box>
      <DescriptionBox />
    </Box>
  </Box>
);

export default Illustration;
