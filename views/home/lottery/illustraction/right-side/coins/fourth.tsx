import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

const FourthCoinSVG: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 61 108"
    fill="none"
    {...props}
  >
    <path
      d="M6.95478 44.0073C-0.490537 18.3463 1.32254 3.18192 11.0241 10.1612C20.7131 17.1416 34.6197 43.6023 42.0776 69.2621C49.5366 94.9346 47.7109 110.1 38.022 103.12C28.3204 96.1404 14.4264 69.6786 6.96623 43.9936L6.95478 44.0073Z"
      fill="#F8F9FD"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.69549 8.67465L18.5013 3.65984C19.8758 3.12957 21.6566 3.57791 23.831 5.14554C33.5203 12.126 47.4272 38.5868 54.8853 64.2468C60.6663 84.1571 60.8693 97.7434 56.1467 99.5914L43.3409 104.606C48.0634 102.758 47.8478 89.173 42.0795 69.2616C34.634 43.6004 20.7259 17.127 11.0252 10.1603C8.85077 8.59268 7.07 8.14438 5.69549 8.67465Z"
      fill="#FFC701"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M46.1284 87.7259C47.3761 97.2841 46.3938 103.401 43.3398 104.604L56.1467 99.5886C59.1525 98.416 60.1485 92.4499 58.9866 83.1378L46.1284 87.7259Z"
      fill="black"
    />
  </svg>
);

export default FourthCoinSVG;
