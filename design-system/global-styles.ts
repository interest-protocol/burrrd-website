import { css } from '@emotion/react';

export const GlobalStyles = css`
  html {
    scroll-behavior: smooth;
  }
  html,
  body {
    margin: 0;
    padding: 0;
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
  .card-slide {
    .slick-slider,
    .slick-list {
      overflow: visible;
    }
    .slick-slide {
      transform: opacity 350ms ease-in-out;
      opacity: 0.7;
    }
    .slick-slide.slick-active {
      opacity: 1;
    }
    .slick-next:before,
    .slick-prev:before {
      color: #000;
    }
  }
`;
