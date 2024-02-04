import { ReactNode } from 'react';
import { ResponsiveObject } from 'react-slick';

export interface ScrollerElementProps {
  name: string;
  link: string;
  img: string;
  bg?: string;
  post: string;
}

export interface ScrollerProps {
  TitleWrapper: ReactNode;
  data: ReadonlyArray<ScrollerElementProps>;
  scrollerResponsiveness: Array<ResponsiveObject>;
}
