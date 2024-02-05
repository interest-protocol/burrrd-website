import { FC } from 'react';

import { SVGProps } from './svg.types';

const PlusSVG: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 14 2"
    fill="none"
    {...props}
  >
    <path d="M14 1.99609H0V-0.00390625H14V1.99609Z" fill="currentColor" />
  </svg>
);

export default PlusSVG;
