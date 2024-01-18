import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { SquareRedSVG, SquareYellowSVG } from '@/svg';

import CoinWrapper from '../coin-wrapper';
import FirstCoinSVG from './coins/first';
import FiveCoinSVG from './coins/five';
import FourthCoinSVG from './coins/fourth';
import SecondCoinSVG from './coins/second';
import SixCoinSVG from './coins/six';
import ThirdCoinSVG from './coins/third';

const RightIllustration: FC = () => {
  return (
    <Box
      width="40%"
      position="relative"
      display={['none', 'none', 'none', 'block']}
    >
      <CoinWrapper Icon={FirstCoinSVG} size="30%" right="35%" />
      <CoinWrapper Icon={SecondCoinSVG} size="20%" right="0" top="25%" />
      <CoinWrapper Icon={SquareRedSVG} size="4%" right="0" top="40%" />
      <CoinWrapper Icon={SquareRedSVG} size="8%" right="30%" top="35%" />
      <CoinWrapper Icon={ThirdCoinSVG} size="40%" right="45%" top="30%" />
      <CoinWrapper Icon={SquareYellowSVG} size="6.5%" right="35%" top="55%" />
      <CoinWrapper Icon={SquareYellowSVG} size="3.5%" left="35%" top="60%" />
      <CoinWrapper Icon={SquareYellowSVG} size="8%" left="45%" top="80%" />
      <CoinWrapper Icon={FourthCoinSVG} size="25%" right="15%" top="45%" />
      <CoinWrapper Icon={FiveCoinSVG} size="45%" right="20%" top="70%" />
      <CoinWrapper Icon={SquareYellowSVG} size="8%" left="45%" top="80%" />
      <CoinWrapper Icon={SquareRedSVG} size="8%" right="35%" top="92%" />
      <CoinWrapper Icon={SixCoinSVG} size="40%" right="20%" bottom="-25%" />
    </Box>
  );
};

export default RightIllustration;
