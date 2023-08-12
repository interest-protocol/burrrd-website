import { FC } from 'react';

import { SVGProps } from './svg.types';

const ConversationBalloon: FC<SVGProps> = ({
  maxWidth,
  maxHeight,
  ...props
}) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 292 289"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_146_2928)">
      <path
        d="M226.851 108.699C226.855 113.159 226.579 117.615 226.024 122.04C212.131 113.999 196.155 110.317 180.156 111.47C164.157 112.622 148.869 118.555 136.264 128.504C123.659 138.453 114.315 151.961 109.437 167.287C104.56 182.612 104.373 199.052 108.899 214.485C92.6304 212.655 77.0083 207.057 63.2662 198.134L3.99023 214.404L27.3989 159.444C19.7374 145.196 15.4172 129.384 14.767 113.209C14.1168 97.0344 17.1537 80.9241 23.6467 66.1039C30.1397 51.2837 39.9176 38.1441 52.2366 27.6849C64.5556 17.2256 79.091 9.72226 94.7369 5.74574C110.383 1.76922 126.727 1.42429 142.526 4.73719C158.325 8.05009 173.162 14.9335 185.909 24.8638C198.655 34.7941 208.976 47.5095 216.085 62.0426C223.193 76.5757 226.903 92.5436 226.932 108.731L226.851 108.699Z"
        fill="#A259FF"
      />
      <path
        d="M105.623 191.723C105.63 206.184 109.52 220.377 116.886 232.808C124.251 245.24 134.82 255.453 147.481 262.373C160.141 269.293 174.427 272.664 188.836 272.134C203.245 271.603 217.245 267.189 229.366 259.357L274.155 271.706L256.311 230.136C262.111 219.362 265.384 207.403 265.881 195.169C266.377 182.935 264.084 170.749 259.175 159.538C254.267 148.327 246.873 138.386 237.556 130.474C228.239 122.561 217.245 116.885 205.411 113.877C193.577 110.869 181.214 110.608 169.265 113.115C157.315 115.622 146.093 120.83 136.453 128.344C126.813 135.857 119.009 145.477 113.636 156.471C108.262 167.465 105.461 179.544 105.444 191.789L105.623 191.723Z"
        fill="#C7B9FF"
      />
      <path
        d="M272.809 244.128C281.778 227.015 284.479 207.29 280.441 188.386C276.404 169.482 265.885 152.596 250.714 140.669C248.235 137.494 245.524 134.509 242.603 131.737C242.863 128.727 243.025 125.701 243.025 122.642C243.033 106.725 239.55 91.0013 232.821 76.5857C226.093 62.17 216.285 49.4156 204.092 39.2268C186.995 18.4418 162.809 4.76837 136.227 0.860306C109.646 -3.04776 82.564 3.08828 60.2388 18.0775C37.9136 33.0668 21.9372 55.8401 15.4104 81.9775C8.88348 108.115 12.2717 135.752 24.9173 159.525L0 217.82L22.5002 211.654L13.9024 231.763L76.7149 214.534C87.6004 221.427 99.6261 226.314 112.225 228.965C117.688 239.78 125.439 249.27 134.936 256.77C147.51 272.847 165.577 283.684 185.649 287.187C205.721 290.69 226.375 286.612 243.625 275.74L292 289L272.809 244.128ZM29.4758 160.306L29.6542 159.867V158.826L29.3784 158.322C21.8893 144.383 17.668 128.916 17.0358 113.095C16.4035 97.2745 19.3769 81.5177 25.7298 67.023C32.0827 52.5283 41.6478 39.6775 53.6976 29.448C65.7473 19.2185 79.9644 11.8797 95.2676 7.9898C110.571 4.09987 126.557 3.76127 142.01 6.99974C157.463 10.2382 171.977 16.9685 184.446 26.6786C196.916 36.3888 207.013 48.8231 213.971 63.0359C220.928 77.2486 224.562 92.8655 224.597 108.699C224.597 111.953 224.44 115.207 224.126 118.461C210.041 111.062 194.124 107.904 178.292 109.367C162.459 110.831 147.386 116.853 134.886 126.709C122.387 136.564 112.995 149.834 107.84 164.919C102.686 180.004 101.989 196.262 105.834 211.735C91.0688 209.628 76.9342 204.339 64.4022 196.23L63.5587 195.677L7.81911 210.971L29.4758 160.306ZM107.878 191.723C107.875 179.813 110.584 168.059 115.799 157.357C121.013 146.656 128.595 137.291 137.967 129.975C147.339 122.659 158.252 117.586 169.876 115.143C181.499 112.7 193.525 112.951 205.037 115.877C216.549 118.804 227.243 124.328 236.302 132.029C245.362 139.73 252.549 149.404 257.315 160.313C262.081 171.223 264.299 183.08 263.802 194.98C263.305 206.88 260.105 218.51 254.446 228.981L254.17 229.502V230.543L270.278 268.224L228.993 256.835L228.149 257.388C216.369 265.002 202.762 269.292 188.757 269.809C174.753 270.325 160.868 267.049 148.562 260.324C136.257 253.598 125.984 243.673 118.825 231.59C111.666 219.507 107.885 205.713 107.878 191.658V191.723Z"
        fill="black"
      />
      <path
        d="M230.08 182.221C229.125 177.108 227.022 172.279 223.93 168.102C220.839 163.924 216.839 160.507 212.236 158.11C201.966 152.471 190.075 150.547 178.558 152.659C170.931 153.79 163.729 156.897 157.664 161.673C152.837 165.459 148.951 170.315 146.309 175.86C143.995 180.837 142.715 186.234 142.545 191.723C142.012 199.221 143.286 206.738 146.26 213.638C148.922 219.595 153.15 224.713 158.491 228.444C164.469 232.59 171.361 235.22 178.575 236.107C183.727 236.776 188.934 236.918 194.115 236.53C199.947 236.232 205.71 235.137 211.246 233.276C213.631 232.446 215.967 231.421 218.4 230.445L213.533 220.228C213.272 220.319 213.018 220.428 212.771 220.553C205.113 224.115 196.749 225.889 188.308 225.743C181.673 225.743 175.217 224.816 169.295 221.513C165.27 219.313 161.934 216.035 159.659 212.044C157.535 208.22 156.236 203.99 155.847 199.63C155.106 193.872 155.621 188.021 157.356 182.482C159.439 175.977 163.911 170.51 169.863 167.188C173.627 165.03 177.799 163.684 182.111 163.235C190.222 162.34 198.155 163.137 205.455 167.302C210.103 169.913 213.733 174.024 215.756 178.967C217.18 182.59 217.864 186.463 217.767 190.356C217.841 193.38 217.402 196.395 216.47 199.272C215.824 201.483 214.437 203.402 212.544 204.706C211.906 205.155 211.159 205.422 210.382 205.479C209.606 205.536 208.828 205.382 208.131 205.032C206.736 204.316 206.59 202.982 206.59 201.566C206.59 192.959 206.59 184.369 206.59 175.762V174.526H197.149C197.102 177.691 197.861 180.816 199.355 183.604H194.991L194.31 182.205V182.091C193.297 179.318 191.442 176.934 189.005 175.274C187.2 174.149 185.153 173.472 183.034 173.3C180.915 173.127 178.786 173.464 176.823 174.282C174.724 175.119 172.836 176.412 171.296 178.07C169.756 179.727 168.602 181.706 167.917 183.865C166.327 187.898 165.691 192.246 166.057 196.567C166.423 200.889 167.781 205.067 170.025 208.774C172.994 213.817 177.342 216.632 183.441 215.9C186.064 215.657 188.538 214.573 190.498 212.809C192.348 211.037 193.755 208.852 194.602 206.431L194.927 205.617C195.916 205.617 197.441 205.617 198.479 205.617C198.609 206.333 198.674 206.935 198.804 207.521C199.038 209.038 199.62 210.48 200.504 211.734C201.387 212.987 202.549 214.018 203.897 214.745C206.632 216.079 209.735 216.451 212.706 215.802C220.136 214.468 224.986 209.815 228.101 203.209C231.017 196.615 231.712 189.247 230.08 182.221ZM194.018 197.141C193.766 199.574 192.73 201.859 191.066 203.649C190.3 204.395 189.369 204.95 188.349 205.266C187.329 205.583 186.249 205.653 185.196 205.471C184.144 205.288 183.15 204.858 182.295 204.216C181.44 203.575 180.749 202.739 180.278 201.778C179.103 199.343 178.545 196.655 178.656 193.952C178.519 191.367 179.079 188.793 180.278 186.5C180.847 185.386 181.718 184.455 182.792 183.816C183.865 183.177 185.097 182.855 186.345 182.888C187.607 182.812 188.866 183.093 189.976 183.7C191.086 184.307 192.004 185.216 192.623 186.321C194.375 189.647 194.87 193.495 194.018 197.157V197.141Z"
        fill="black"
      />
      <path
        d="M243.041 135.284C242.814 135.121 242.554 134.958 242.327 134.828C242.327 134.747 242.327 134.649 242.327 134.584C242.587 134.812 242.83 135.04 243.041 135.284Z"
        fill="#C7B9FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_146_2928">
        <rect width="292" height="289" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ConversationBalloon;