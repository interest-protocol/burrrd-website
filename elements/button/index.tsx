import { useTheme } from '@/context/theme-context';
import { Box } from '@interest-protocol/ui-kit';
import React, { FC, PropsWithChildren } from 'react';
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
    <Box
      as="button"
      fontSize="1.5rem"
      onClick={onClick}
      borderRadius="1rem"
      border={hasBorder ? '1px solid #1B1B1F' : '0'}
      fontWeight={size === 'small' ? 'normal' : 'bold'}
      p={size === 'small' ? '.5rem 1.5rem' : '1.5rem 2.5rem'}
      textTransform={size === 'small' ? 'none' : 'uppercase'}
      backgroundColor={variant === 'primary' ? theme.theme.colors.senary : ''}
    >
      {children}
    </Box>
  );
};

export default Button;
