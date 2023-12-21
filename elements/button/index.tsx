import { Motion } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { ButtonProps } from './button.types';

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  size,
  onClick,
  children,
  ...props
}) => (
  <Motion
    as="button"
    display="flex"
    flexDirection="row"
    justifyContent="center"
    alignItems="center"
    color="#000"
    cursor="pointer"
    fontSize="1.5rem"
    onClick={onClick}
    textDecoration="none"
    whileHover={{ scale: 1.05 }}
    fontWeight={size === 'small' ? 'normal' : 'bold'}
    textTransform={size === 'small' ? 'none' : 'uppercase'}
    {...props}
  >
    {children}
  </Motion>
);

export default Button;
