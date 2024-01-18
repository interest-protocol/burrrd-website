import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

const FirstCoinSVG: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 88 114"
    fill="none"
    {...props}
  >
    <path
      d="M46.153 83.0383C26.8761 101.573 12.6004 107.014 14.2692 95.1954C15.9379 83.3766 32.9304 58.765 52.1951 40.2275C71.4754 21.681 85.751 16.2393 84.0823 28.0582C82.4135 39.877 65.4332 64.4919 46.1408 83.035L46.153 83.0383Z"
      fill="#F8F9FD"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.4336 100.604L5.04043 91.6164C3.92368 90.6601 3.50431 88.8708 3.87212 86.2071C5.54094 74.3881 22.5338 49.7762 41.799 31.2385C56.7518 16.8656 68.6948 10.3617 72.5274 13.6752L82.9206 22.6627C79.0881 19.3492 67.1449 25.8531 52.1921 40.2259C32.9148 58.7604 15.9341 83.3756 14.2653 95.1946C13.8852 97.8549 14.3201 99.6354 15.4336 100.604Z"
      fill="#FFC701"
      stroke="black"
      strokeMiterlimit="10"
    />
  </svg>
);

export default FirstCoinSVG;
