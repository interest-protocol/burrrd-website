import { Motion } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { useTheme } from '@/context/theme-context';

import { ButtonProps } from './button.types';

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  size,
  variant,
  onClick,
  children,
  hasBorder,
}) => {
  const { theme } = useTheme();
  return (
    <Motion
      as="button"
      cursor="pointer"
      fontSize="1.5rem"
      onClick={onClick}
      borderRadius="1rem"
      whileHover={{ scale: 1.05 }}
      border={hasBorder ? '1px solid #1B1B1F' : '0'}
      fontWeight={size === 'small' ? 'normal' : 'bold'}
      p={size === 'small' ? '.5rem 1.5rem' : '1.5rem 2.5rem'}
      textTransform={size === 'small' ? 'none' : 'uppercase'}
      backgroundColor={variant === 'primary' ? theme.theme.colors.senary : ''}
    >
      {children}
    </Motion>
  );
};

export default Button;
