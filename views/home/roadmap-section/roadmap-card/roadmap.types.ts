export interface RoadmapCardProps {
  title: string;
  items: string[];
  index: number;
  isHovered: boolean;
}

export interface CustomArrowProps {
  onClick?: () => void;
  isLeft?: boolean;
}
