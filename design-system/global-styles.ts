import { css } from '@emotion/react';

export const GlobalStyles = css`
  html {
    scroll-behavior: smooth;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    font-family: 'Asap', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
`;
