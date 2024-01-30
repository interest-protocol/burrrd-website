import { FC } from 'react';

export interface RoadmapCardProps {
  title: string;
  index: number;
  Illustration: FC;
}

export interface CustomArrowProps {
  isLeft?: boolean;
  onClick?: () => void;
}
