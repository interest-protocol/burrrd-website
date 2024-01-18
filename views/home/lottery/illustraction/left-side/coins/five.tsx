import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

const FiveCoinSVG: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 35 114"
    fill="none"
    {...props}
  >
    <path
      d="M-6.84701 30.9617C-26.1239 12.4274 -40.3996 6.98572 -38.7308 18.8046C-37.0621 30.6234 -20.0696 55.235 -0.804852 73.7725C18.4754 92.319 32.751 97.7607 31.0823 85.9418C29.4135 74.123 12.4332 49.5081 -6.85923 30.965L-6.84701 30.9617Z"
      fill="#F8F9FD"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M-37.5664 13.3961L-47.9596 22.3836C-49.0763 23.3399 -49.4957 25.1292 -49.1279 27.7929C-47.4591 39.6119 -30.4662 64.2238 -11.201 82.7615C3.75179 97.1344 15.6948 103.638 19.5274 100.325L29.9206 91.3373C26.0881 94.6508 14.1449 88.1469 -0.807859 73.7741C-20.0852 55.2396 -37.0659 30.6244 -38.7347 18.8054C-39.1148 16.1451 -38.6799 14.3646 -37.5664 13.3961Z"
      fill="#FFC701"
      stroke="black"
      strokeMiterlimit="10"
    />
  </svg>
);

export default FiveCoinSVG;
