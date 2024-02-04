export interface CardHeaderProps {
  name: string;
  bg?: string;
  link?: string;
  isTitle?: boolean;
}

export interface CardProps extends CardHeaderProps {
  img: string;
  post?: string;
}
