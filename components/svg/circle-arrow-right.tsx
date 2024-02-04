import { FC } from 'react';

import { SVGProps } from './svg.types';

const CircleArrowRight: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <path
      d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
      fill="white"
    />
    <g clipPath="url(#clip0_255_274)">
      <path
        d="M21 12.5857L28.4142 19.9999L21 27.4141L19.5858 25.9999L24.5858 20.9999H12V18.9999H24.5858L19.5858 13.9999L21 12.5857Z"
        fill="#1B1B1F"
      />
    </g>
    <rect
      x="1"
      y="1"
      width="38"
      height="38"
      rx="19"
      stroke="black"
      strokeWidth="2"
    />
    <defs>
      <clipPath id="clip0_255_274">
        <rect width="40" height="40" rx="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default CircleArrowRight;
