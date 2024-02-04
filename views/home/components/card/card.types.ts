export interface CardHeaderProps {
  name: string;
  bg?: string;
  isTitle?: boolean;
}

export interface CardProps extends CardHeaderProps {
  img: string;
  link: string;
}
