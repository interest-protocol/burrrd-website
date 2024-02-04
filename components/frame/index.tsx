import { Box, BoxProps } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { FrameProps } from './frame.types';

const Frame: FC<PropsWithChildren<FrameProps & BoxProps>> = ({
  children,
  boxSize,
  ...props
}) => (
  <Box
    border="2px solid black"
    boxShadow={
      boxSize === 'small' ? '4px 4px 0px 0px black' : '10px 10px 0px 0px black'
    }
    {...props}
  >
    {children}
  </Box>
);

export default Frame;
