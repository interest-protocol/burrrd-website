import { FC } from 'react';

import { SVGProps } from './svg.types';

const Telegram: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      d="M11.0001 16.8625L22.2376 26.75C22.3675 26.865 22.525 26.9442 22.6948 26.9799C22.8645 27.0156 23.0406 27.0065 23.2058 26.9535C23.371 26.9006 23.5195 26.8056 23.6369 26.6779C23.7542 26.5501 23.8363 26.3941 23.8751 26.225L28.5751 5.70004C28.6145 5.52327 28.6052 5.33913 28.5481 5.16726C28.4911 4.99538 28.3884 4.84224 28.2511 4.72417C28.1137 4.6061 27.9469 4.52753 27.7684 4.49686C27.59 4.4662 27.4065 4.48457 27.2376 4.55004L4.16263 13.6125C3.23763 13.975 3.36263 15.325 4.33763 15.525L11.0001 16.8625Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 16.8627L28.0125 4.5752"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.6125 21.7998L12.7125 25.6998C12.5734 25.8411 12.3954 25.9378 12.2011 25.9777C12.0069 26.0176 11.8052 25.9988 11.6216 25.9238C11.4381 25.8488 11.281 25.7209 11.1703 25.5563C11.0596 25.3918 11.0003 25.1981 11 24.9998V16.8623"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Telegram;
