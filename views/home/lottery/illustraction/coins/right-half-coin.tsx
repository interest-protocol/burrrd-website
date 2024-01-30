import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

const RightHalfCoinSVG: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 56 68"
    fill="none"
    {...props}
  >
    <path
      d="M6.98654 61.3216L1.47013 51.7541C-3.3124 43.4504 5.70864 28.4482 23.7254 16.0748C43.9436 2.18482 67.8309 -3.1361 77.0797 4.19439C78.0792 4.99063 78.8763 5.90061 79.4583 6.92435L84.9746 16.4919C84.3926 15.4808 83.5956 14.5582 82.5961 13.7619C73.36 6.44408 49.4726 11.7524 29.2417 25.6424C11.225 38.0157 2.20401 53.018 6.98654 61.3216Z"
      fill="#FFC701"
    />
    <path
      d="M62.7067 52.1711C42.4885 66.0484 18.6012 71.3694 9.36507 64.0515C0.128968 56.7337 9.02341 39.5323 29.2416 25.6549C49.4598 11.7649 73.3472 6.44398 82.596 13.7745C91.8321 21.0923 82.9376 38.2937 62.7193 52.1837L62.7067 52.1711Z"
      fill="white"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M62.7067 52.1711C42.4885 66.0484 18.6012 71.3694 9.36507 64.0515C0.128968 56.7337 9.02341 39.5323 29.2416 25.6549C49.4598 11.7649 73.3472 6.44398 82.596 13.7745C91.8321 21.0923 82.9376 38.2937 62.7193 52.1837L62.7067 52.1711Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M62.7067 52.1711C42.4885 66.0484 18.6012 71.3694 9.36507 64.0515C0.128968 56.7337 9.02341 39.5323 29.2416 25.6549C49.4598 11.7649 73.3472 6.44398 82.596 13.7745C91.8321 21.0923 82.9376 38.2937 62.7193 52.1837L62.7067 52.1711Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default RightHalfCoinSVG;