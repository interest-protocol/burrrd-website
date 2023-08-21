import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowLeft: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 20 25"
    {...props}
    fill="none"
  >
    <path
      d="M10.5 5.25L3.75 12L10.5 18.75"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default ArrowLeft;
