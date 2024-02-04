import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

const SquareYellowSVG: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 26 26"
    fill="none"
    {...props}
  >
    <path
      d="M25.0833 13.6117L12.1113 25.2671L0.443539 12.3088L13.4156 0.653414L25.0833 13.6117Z"
      fill="#FFC701"
    />
  </svg>
);

export default SquareYellowSVG;
