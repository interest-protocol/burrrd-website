import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowUpRight: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M7 6H18V17H16V9.41421L7 18.4142L5.58578 17L14.5858 8H7V6Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowUpRight;
