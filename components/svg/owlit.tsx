import { FC } from 'react';

import { SVGProps } from './svg.types';

const Owlit: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 64 64"
    fill="none"
    {...props}
  >
    <rect width="64" height="64" fill="url(#pattern13)" />
    <defs>
      <pattern
        id="pattern13"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_36_32"
          transform="scale(0.00686401 0.00793651)"
        />
      </pattern>
      <image
        id="image0_36_32"
        width="387"
        height="126"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default Owlit;
