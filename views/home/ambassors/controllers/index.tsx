import { Box, Button } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CircleArrowLeftSVG, CircleArrowRightSVG } from '@/svg';

import { ControllersProps } from './controllers.types';

const Controllers: FC<ControllersProps> = ({ handleNext, handlePrevious }) => (
  <Box display="flex" pt="1rem" gap="0.625rem" justifyContent="flex-end">
    <Button
      p="0"
      bg="none"
      border="none"
      variant="tonal"
      onClick={handlePrevious}
    >
      <CircleArrowLeftSVG width="100%" maxWidth="2.5rem" maxHeight="2.5rem" />
    </Button>
    <Button p="0" bg="none" border="none" variant="tonal" onClick={handleNext}>
      <CircleArrowRightSVG width="100%" maxWidth="2.5rem" maxHeight="2.5rem" />
    </Button>
  </Box>
);

export default Controllers;
