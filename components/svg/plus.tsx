import { FC } from 'react';

import { SVGProps } from './svg.types';

const PlusSVG: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M13 4V11H20V13H13V20H11V13H4V11H11V4H13Z" fill="#111" />
  </svg>
);

export default PlusSVG;
