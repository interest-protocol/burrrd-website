import { FC } from 'react';

import { SVGProps } from './svg.types';

const X: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      d="M10.6668 2.66669H1.3335L12.3468 17.352L1.9335 29.3334H5.46683L13.9842 19.5347L21.3335 29.3334H30.6668L19.1895 14.0294L29.0668 2.66669H25.5335L17.5522 11.848L10.6668 2.66669ZM22.6668 26.6667L6.66683 5.33335H9.3335L25.3335 26.6667H22.6668Z"
      fill="black"
    />
  </svg>
);

export default X;
