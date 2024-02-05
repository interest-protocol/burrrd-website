import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const DescriptionBox: FC = () => (
  <Box
    bg="#FFF"
    mt="1rem"
    fontWeight="700"
    textAlign="center"
    borderRadius="10rem"
    border="3px solid #000"
    boxShadow="10px 10px 0px 0px #000"
    top={['unset', 'unset', 'unset', 'unset', '45%']}
    left={['unset', 'unset', 'unset', 'unset', '-75%']}
    fontSize={['1rem', '1.2rem', '1.5rem', '1.5rem', '2rem']}
    position={['relative', 'relative', 'relative', 'relative', 'absolute']}
    p={['1rem 2rem', '1rem 2rem', '1rem 2rem', '1.5rem 2.5rem', '2rem 3rem']}
  >
    Expect the unexpected!
  </Box>
);

export default DescriptionBox;
