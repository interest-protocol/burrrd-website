import { Motion } from '@interest-protocol/ui-kit';
import { easeInOut } from 'framer-motion';
import { FC } from 'react';

import { LotteryCoinWrapperProps } from '../../lottery.types';

export const CoinWrapper: FC<LotteryCoinWrapperProps> = ({
  Icon,
  size,
  ...props
}) => {
  const translateY = Math.random() * 15 - 20;
  const delay = Math.random() * (1.5 - 0.3) + 0.3;

  return (
    <Motion
      position="absolute"
      width={`calc(${size} / 2)`}
      animate={{
        translateY,
      }}
      transition={{
        delay,
        duration: 0.7,
        ease: easeInOut,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      {...props}
    >
      <Icon width="100%" maxWidth="100%" maxHeight="100%" />
    </Motion>
  );
};

export default CoinWrapper;
