import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

const ThirdCoinSVG: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 61 108"
    fill="none"
    {...props}
  >
    <path
      d="M6.95478 63.9927C-0.490537 89.6537 1.32254 104.818 11.0241 97.8388C20.7131 90.8584 34.6197 64.3977 42.0776 38.7379C49.5366 13.0654 47.7109 -2.10013 38.022 4.8803C28.3204 11.8596 14.4264 38.3214 6.96623 64.0064L6.95478 63.9927Z"
      fill="#F8F9FD"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.69549 99.3253L18.5013 104.34C19.8758 104.87 21.6566 104.422 23.831 102.854C33.5203 95.874 47.4272 69.4132 54.8853 43.7532C60.6663 23.8429 60.8693 10.2566 56.1467 8.4086L43.3409 3.39383C48.0634 5.24181 47.8478 18.827 42.0795 38.7384C34.634 64.3996 20.7259 90.873 11.0252 97.8397C8.85077 99.4073 7.07 99.8556 5.69549 99.3253Z"
      fill="#FFC701"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M46.1284 20.2741C47.3761 10.7159 46.3938 4.59881 43.3398 3.39648L56.1467 8.41143C59.1525 9.58402 60.1485 15.5501 58.9866 24.8622L46.1284 20.2741Z"
      fill="black"
    />
  </svg>
);

export default ThirdCoinSVG;
