import { Box } from '@interest-protocol/ui-kit';

import { ArrowLeftSVG, ArrowRightSVG } from '@/svg';

import { CustomArrowProps } from './roadmap-card/roadmap.types';

const CustomArrow: React.FC<CustomArrowProps> = ({ onClick, isLeft }) => {
  return (
    <Box
      top="50%"
      p="0.313rem"
      onClick={onClick}
      position="absolute"
      left={!isLeft ? 'unset' : '-1.563rem'}
      right={isLeft ? 'unset' : '-1.563rem'}
    >
      {!isLeft ? (
        <ArrowRightSVG maxHeight="1.25rem" maxWidth="1.25rem" width="1.25rem" />
      ) : (
        <ArrowLeftSVG maxHeight="1.25rem" maxWidth="1.25rem" width="1.25rem" />
      )}
    </Box>
  );
};

export default CustomArrow;
