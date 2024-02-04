import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

const RightLastCoinSVG: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 88 113"
    fill="none"
    {...props}
  >
    <path
      d="M46.2096 82.7703C26.9327 101.304 12.657 106.746 14.3258 94.9274C15.9946 83.1085 32.9871 58.4969 52.2518 39.9594C71.532 21.413 85.8077 15.9713 84.1389 27.7901C82.4701 39.6089 65.4899 64.2238 46.1974 82.767L46.2096 82.7703Z"
      fill="#F8F9FD"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.4902 100.336L5.09707 91.3484C3.98032 90.392 3.56095 88.6027 3.92877 85.9391C5.59758 74.1201 22.5905 49.5082 41.8556 30.9704C56.8084 16.5975 68.7515 10.0936 72.584 13.4071L82.9773 22.3946C79.1447 19.0811 67.2016 25.585 52.2488 39.9579C32.9714 58.4924 15.9907 83.1075 14.3219 94.9265C13.9419 97.5869 14.3768 99.3673 15.4902 100.336Z"
      fill="#FFC701"
      stroke="black"
      strokeMiterlimit="10"
    />
  </svg>
);

export default RightLastCoinSVG;
