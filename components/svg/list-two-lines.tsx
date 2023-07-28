import { FC } from 'react';

import { SVGProps } from './svg.types';

const ListTwoLines: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M12 15L20.25 15"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="square"
      stroke-linejoin="round"
    />
    <path
      d="M3.75 9H20.25"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="square"
      stroke-linejoin="round"
    />
  </svg>
);

export default ListTwoLines;
