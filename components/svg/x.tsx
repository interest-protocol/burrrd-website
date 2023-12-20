import { FC } from 'react';

import { SVGProps } from './svg.types';

const X: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 24 25"
    fill="none"
    {...props}
  >
    <path
      d="M2.0487 3.5L9.77048 13.8247L1.99994 22.2192H3.74878L10.5519 14.8697L16.0486 22.2192H21.9999L13.8437 11.3137L21.0765 3.5H19.3276L13.0623 10.2687L8.00006 3.5H2.0487Z"
      fill="currentColor"
    />
  </svg>
);

export default X;
