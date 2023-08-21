import { FC } from 'react';

import { SVGProps } from './svg.types';

export const MiniMoon: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 609 609"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_1_33)">
      <circle cx="299.5" cy="299.5" r="299.5" fill="#9590E2" />
      <circle cx="299.5" cy="299.493" r="267.037" fill="#6353DE" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M522.879 152.798C474.093 88.835 397.078 47.5594 310.423 47.5594C162.942 47.5594 43.3856 167.116 43.3856 314.597C43.3856 368.643 59.4415 418.939 87.0436 460.975C52.7992 416.078 32.4628 360.002 32.4628 299.177C32.4628 151.696 152.019 32.1397 299.5 32.1397C392.934 32.1397 475.161 80.1261 522.879 152.798Z"
        fill="#4F50C5"
      />
      <circle cx="299.5" cy="299.5" r="297.5" stroke="black" strokeWidth="4" />
      <circle
        cx="299.5"
        cy="299.493"
        r="265.037"
        stroke="black"
        strokeWidth="4"
      />
      <mask id="path-6-inside-1_1_33" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M97.1351 473.733C146.105 416.91 218.602 380.936 299.5 380.936C380.399 380.936 452.895 416.91 501.865 473.733C452.895 530.556 380.399 566.53 299.5 566.53C218.602 566.53 146.105 530.556 97.1351 473.733Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M97.1351 473.733C146.105 416.91 218.602 380.936 299.5 380.936C380.399 380.936 452.895 416.91 501.865 473.733C452.895 530.556 380.399 566.53 299.5 566.53C218.602 566.53 146.105 530.556 97.1351 473.733Z"
        fill="#DE5396"
      />
      <path
        d="M97.1351 473.733L94.1051 471.122L91.8546 473.733L94.1051 476.344L97.1351 473.733ZM501.865 473.733L504.895 476.344L507.146 473.733L504.895 471.122L501.865 473.733ZM100.165 476.344C148.408 420.365 219.814 384.936 299.5 384.936V376.936C217.389 376.936 143.803 413.454 94.1051 471.122L100.165 476.344ZM299.5 384.936C379.186 384.936 450.592 420.365 498.835 476.344L504.895 471.122C455.197 413.454 381.611 376.936 299.5 376.936V384.936ZM498.835 471.122C450.592 527.101 379.186 562.53 299.5 562.53V570.53C381.611 570.53 455.197 534.012 504.895 476.344L498.835 471.122ZM299.5 562.53C219.814 562.53 148.408 527.101 100.165 471.122L94.1051 476.344C143.803 534.012 217.389 570.53 299.5 570.53V562.53Z"
        fill="black"
        mask="url(#path-6-inside-1_1_33)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_33"
        x="0"
        y="0"
        width="609"
        height="609"
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
        <feOffset dx="10" dy="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_33"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_33"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const Shadow: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 294 84"
    fill="none"
    {...props}
  >
    <ellipse
      cx="146.203"
      cy="41.8696"
      rx="146.203"
      ry="41.8696"
      fill="#2f1f27"
      fillOpacity="0.2"
      style={{ mixBlendMode: 'multiply' }}
    />
  </svg>
);

export const GameOver: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 181 122"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_1_46)">
      <path d="M166.71 4.42001H4.92001V107.4H166.71V4.42001Z" fill="#F24E1E" />
      <path
        d="M47.24 34.97H36.42V40.38H41.83V45.79H47.24V34.97Z"
        fill="black"
      />
      <path
        d="M111.3 18.73H105.89V24.15H100.47V18.73H95.06V24.15H89.64V51.21H95.06V24.15H100.47V34.97H105.89V24.15H111.3V51.21H116.71V24.15H111.3V18.73Z"
        fill="black"
      />
      <path
        d="M41.83 18.73H25.59V24.15H20.18V45.79H25.59V24.15H41.83V29.56H47.24V24.15H41.83V18.73Z"
        fill="black"
      />
      <path
        d="M76.56 18.73H60.32V24.15H54.91V51.21H60.32V40.38H71.15V34.97H60.32V24.15H76.56V51.21H81.98V24.15H76.56V18.73Z"
        fill="black"
      />
      <path
        d="M151.45 24.15V18.73H129.79V24.15H124.38V45.79H129.79V34.97H140.62V29.55H129.79V24.15H151.45Z"
        fill="black"
      />
      <path d="M41.83 45.79H25.59V51.2H41.83V45.79Z" fill="black" />
      <path d="M151.45 45.79H129.79V51.2H151.45V45.79Z" fill="black" />
      <path d="M81.98 60.6H76.57V82.26H81.98V60.6Z" fill="black" />
      <path d="M146.03 60.6H129.79V66.01H146.03V60.6Z" fill="black" />
      <path d="M116.72 60.6H95.06V66.01H116.72V60.6Z" fill="black" />
      <path d="M41.83 60.6H25.59V66.01H41.83V60.6Z" fill="black" />
      <path
        d="M146.03 66.02V71.43H140.62V76.84H151.45V66.02H146.03Z"
        fill="black"
      />
      <path
        d="M89.64 87.67H95.06V76.84H105.89V71.43H95.06V66.02H89.64V87.67Z"
        fill="black"
      />
      <path d="M47.24 66.01H41.83V87.67H47.24V66.01Z" fill="black" />
      <path d="M76.56 82.26H71.15V87.67H76.56V82.26Z" fill="black" />
      <path d="M65.73 82.26H60.32V87.67H65.73V82.26Z" fill="black" />
      <path
        d="M129.79 76.84V66.02H124.38V93.08H129.79V82.26H135.21V87.67H146.03V82.26H140.62V76.84H129.79Z"
        fill="black"
      />
      <path d="M25.59 66.01H20.18V87.67H25.59V66.01Z" fill="black" />
      <path d="M60.32 60.6H54.91V82.26H60.32V60.6Z" fill="black" />
      <path d="M71.15 87.67H65.74V93.08H71.15V87.67Z" fill="black" />
      <path d="M151.44 87.67H146.03V93.08H151.44V87.67Z" fill="black" />
      <path d="M116.72 87.67H95.06V93.08H116.72V87.67Z" fill="black" />
      <path d="M41.83 87.67H25.59V93.08H41.83V87.67Z" fill="black" />
      <path
        d="M171.12 12.68V0L0.5 0V111.81H13.18V121.19H180.5V12.68H171.12ZM166.71 107.4H4.92V4.42H166.71V107.4Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_46">
        <rect
          width="180"
          height="121.19"
          fill="white"
          transform="translate(0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
