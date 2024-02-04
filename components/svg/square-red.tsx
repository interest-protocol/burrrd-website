import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

const SquareRedSVG: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 25 25"
    fill="none"
    {...props}
  >
    <path
      d="M14.2645 24.7953L0.228516 14.4429L10.5919 0.421712L24.6279 10.7741L14.2645 24.7953Z"
      fill="#FF0000"
    />
  </svg>
);

export default SquareRedSVG;
