import { FC } from 'react';

import { SVGProps } from './svg.types';

const Medium: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      d="M9 23.5C12.866 23.5 16 20.1421 16 16C16 11.8579 12.866 8.5 9 8.5C5.13401 8.5 2 11.8579 2 16C2 20.1421 5.13401 23.5 9 23.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23 23C24.6569 23 26 19.866 26 16C26 12.134 24.6569 9 23 9C21.3431 9 20 12.134 20 16C20 19.866 21.3431 23 23 23Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 9V23"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Medium;
