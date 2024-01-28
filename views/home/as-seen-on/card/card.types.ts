export interface CardHeaderProps {
  bg?: string;
  name: string;
  link?: string;
  isTitle?: boolean;
}

export interface CardProps extends CardHeaderProps {
  logo: string;
}
