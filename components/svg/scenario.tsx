import { FC } from 'react';

import { SVGProps } from './svg.types';

const Scenario: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 197 98"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_738_260)">
      <path
        d="M39.4898 84.5685L160.714 22.131L179.94 14.575C179.248 9.69277 177.315 5.5 173.544 5.5H124.481C124.481 5.5 80.87 26.2901 77.3406 29.8102C73.8113 33.3304 60.6661 41.9625 42.0638 52.1978C23.4559 62.4331 5.5 85.0898 5.5 85.0898L39.4898 83.2232V84.5685Z"
        fill="#817A7A"
      />
      <path
        d="M183.16 45.293C183.16 29.4356 179.934 14.5703 179.934 14.5703C180.771 20.4839 179.782 27.4121 178.029 29.1666C174.82 32.3672 110.043 57.9554 110.043 57.9554C110.043 57.9554 59.2381 80.8195 39.4893 84.5694V92.4953H75.4069C96.5718 92.4953 110.043 89.5077 110.043 89.5077L191.5 85.0851V66.9071C191.5 66.9071 183.16 61.1504 183.16 45.293Z"
        fill="#453F3F"
      />
      <path
        d="M191.5 66.9122C191.5 66.9122 183.16 61.1556 183.16 45.2981C183.16 42.019 183.019 38.7848 182.806 35.7188C162.731 52.7645 129.191 77.8257 91.4473 91.9175C103.136 91.0487 110.043 89.5184 110.043 89.5184L191.5 85.0958V66.9178V66.9122Z"
        fill="#3E3B3B"
      />
      <path
        d="M39.4893 84.5694C59.2325 80.8195 110.043 57.9554 110.043 57.9554C110.043 57.9554 174.825 32.3672 178.029 29.1666C179.782 27.4177 180.771 20.4839 179.934 14.5703L160.708 22.1263L39.4893 84.5694Z"
        fill="#514A4A"
      />
      <path
        d="M35.0051 85.0899H5.5L7.42205 92.5001H39.4898V84.5742C37.7252 84.9105 36.2078 85.0899 34.9995 85.0899H35.0051Z"
        fill="#5C5454"
      />
      <path
        d="M39.4898 84.5744L44.1601 82.1641L5.5 85.09H35.0051C36.2134 85.09 37.7308 84.9051 39.4955 84.5744H39.4898Z"
        fill="#9B9695"
      />
      <path
        d="M41.9898 95H39.4898H7.42208H5.48779L5.00215 93.1277L3.08011 85.7175L2.76758 84.5126L3.54073 83.537L5.50003 85.0898C3.54073 83.537 3.54102 83.5366 3.54137 83.5362L3.54242 83.5349L3.54575 83.5307L3.55731 83.5161L3.59988 83.4628C3.63683 83.4166 3.69086 83.3493 3.76142 83.2619C3.90253 83.0872 4.10983 82.8323 4.37909 82.5058C4.91754 81.8528 5.70412 80.9129 6.70499 79.755C8.70577 77.4401 11.5678 74.248 15.0197 70.7309C21.8885 63.7325 31.2326 55.3024 40.8587 50.0075M41.9898 95L40.8587 50.0075M41.9898 95V94.9944M40.8587 50.0075C50.1209 44.9113 58.0088 40.2226 64.006 36.3807C70.0802 32.4895 74.0276 29.5837 75.5752 28.0401C76.2802 27.337 77.6401 26.471 79.1066 25.6034C80.6832 24.6705 82.7134 23.5498 85.0193 22.3206C89.6357 19.8597 95.4429 16.9185 101.122 14.0963C106.805 11.2722 112.375 8.55925 116.523 6.55285C118.598 5.5495 120.318 4.72247 121.519 4.14613C122.12 3.85796 122.591 3.63244 122.912 3.47888L123.279 3.30365L123.373 3.25868L123.397 3.24724L123.403 3.24433L123.405 3.24358C123.405 3.2434 123.406 3.24331 124.481 5.5L123.406 3.24331L123.916 3H124.481H173.544C176.543 3 178.669 4.73437 180.014 6.87748C181.315 8.94963 182.041 11.5991 182.412 14.2015C182.643 15.3033 183.993 21.9253 184.878 30.6776L184.956 30.6111L185.3 35.5445C185.336 36.0668 185.37 36.5941 185.402 37.1259C185.563 39.7643 185.66 42.5103 185.66 45.2921V45.2977M40.8587 50.0075L41.9898 94.9944M41.9898 94.9944H75.4074C81.4843 94.9944 86.9363 94.7508 91.6303 94.4015L91.6322 94.4102C97.5485 93.9704 102.263 93.3627 105.51 92.8626C107.133 92.6124 108.39 92.3892 109.246 92.2271C109.675 92.1461 110.003 92.0803 110.228 92.0342C110.283 92.0228 110.332 92.0126 110.374 92.0037L191.636 87.5917L194 87.4633V85.0954V85.0842V66.9174V66.9118V66.9062V65.594L192.938 64.8613C192.938 64.861 192.936 64.86 192.935 64.8589C192.934 64.8586 192.934 64.8585 192.934 64.8581C192.93 64.855 192.922 64.8497 192.912 64.8422C192.9 64.8332 192.884 64.8208 192.864 64.8052C192.833 64.7806 192.792 64.7479 192.742 64.7069C192.578 64.5724 192.322 64.3487 192.002 64.0282C191.361 63.3875 190.467 62.3608 189.552 60.8865C187.734 57.9563 185.784 53.1769 185.666 45.9868C185.662 45.7596 185.66 45.5299 185.66 45.2977M185.66 45.2977C185.66 45.2976 185.66 45.2978 185.66 45.2977Z"
        stroke="black"
        strokeWidth="5"
      />
    </g>
    <defs>
      <clipPath id="clip0_738_260">
        <rect width="197" height="98" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Scenario;