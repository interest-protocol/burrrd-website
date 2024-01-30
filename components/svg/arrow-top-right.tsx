import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowTopRight: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 55 54"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_1594_8173)">
      <path
        d="M6.96811 1H49.5V43.5319H41.7669V14.2012L6.96811 49L1.5 43.5319L36.2988 8.73307H6.96811V1Z"
        fill="#FFC701"
      />
      <path
        d="M6.96811 0.5C6.69196 0.5 6.46811 0.723858 6.46811 1V8.73307C6.46811 9.00921 6.69196 9.23307 6.96811 9.23307H35.0917L1.14645 43.1783C1.05268 43.2721 1 43.3993 1 43.5319C1 43.6645 1.05268 43.7917 1.14645 43.8854L6.61455 49.3536C6.80982 49.5488 7.1264 49.5488 7.32166 49.3536L41.2669 15.4083V43.5319C41.2669 43.808 41.4908 44.0319 41.7669 44.0319H49.5C49.7761 44.0319 50 43.808 50 43.5319V1C50 0.723858 49.7761 0.5 49.5 0.5H6.96811Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1594_8173"
        x="0.5"
        y="0"
        width="54"
        height="54"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="4" dy="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1594_8173"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1594_8173"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default ArrowTopRight;
