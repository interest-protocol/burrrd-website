import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

const LeftNormalCoinSVG: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 88 113"
    fill="none"
    {...props}
  >
    <path
      d="M46.2096 30.2297C26.9327 11.6955 12.657 6.25379 14.3258 18.0726C15.9946 29.8915 32.9871 54.5031 52.2518 73.0406C71.532 91.587 85.8077 97.0287 84.1389 85.2099C82.4701 73.3911 65.4899 48.7762 46.1974 30.233L46.2096 30.2297Z"
      fill="#F8F9FD"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.4902 12.6642L5.09707 21.6516C3.98032 22.608 3.56095 24.3973 3.92877 27.0609C5.59758 38.8799 22.5905 63.4918 41.8556 82.0296C56.8084 96.4025 68.7515 102.906 72.584 99.5929L82.9773 90.6054C79.1447 93.9189 67.2016 87.415 52.2488 73.0421C32.9714 54.5076 15.9907 29.8925 14.3219 18.0735C13.9419 15.4131 14.3768 13.6327 15.4902 12.6642Z"
      fill="#FFC701"
      stroke="black"
      strokeMiterlimit="10"
    />
  </svg>
);

export default LeftNormalCoinSVG;
