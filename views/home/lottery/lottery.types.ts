import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface LotteryCoinWrapperProps {
  size: string;
  Icon: FC<SVGProps>;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}
