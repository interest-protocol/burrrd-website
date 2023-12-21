import { StylinComponentProps } from '@stylin.js/react';

export interface ButtonProps extends Omit<StylinComponentProps, 'transition'> {
  size?: 'small';
  hasBorder?: boolean;
  onClick?: () => void;
}
