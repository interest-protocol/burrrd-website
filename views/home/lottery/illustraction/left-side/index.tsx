import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { SquareRedSVG, SquareYellowSVG } from '@/svg';

import CoinWrapper from '../coin-wrapper';
import FirstCoinSVG from './coins/first';
import FiveCoinSVG from './coins/five';
import FourthCoinSVG from './coins/fourth';
import SecondCoinSVG from './coins/second';
import ThirdCoinSVG from './coins/third';

const LeftIllustration: FC = () => {
  return (
    <Box
      width="40%"
      position="relative"
      display={['none', 'none', 'none', 'block']}
    >
      <CoinWrapper Icon={FirstCoinSVG} size="35%" left="5%" />
      <CoinWrapper Icon={SquareRedSVG} size="8%" left="3%" top="22%" />
      <CoinWrapper Icon={SecondCoinSVG} size="43%" left="5%" top="30%" />
      <CoinWrapper Icon={SquareYellowSVG} size="8%" left="35%" top="33%" />
      <CoinWrapper Icon={ThirdCoinSVG} size="25%" left="20%" top="50%" />
      <CoinWrapper Icon={SquareYellowSVG} size="6%" left="10%" top="53%" />
      <CoinWrapper Icon={SquareYellowSVG} size="2%" left="40%" top="53%" />
      <CoinWrapper Icon={SquareRedSVG} size="8%" left="55%" top="53%" />
      <CoinWrapper Icon={SquareRedSVG} size="6%" left="10%" top="75%" />
      <CoinWrapper Icon={SquareRedSVG} size="5%" left="33%" top="70%" />
      <CoinWrapper Icon={FourthCoinSVG} size="40%" left="25%" top="80%" />
      <CoinWrapper Icon={FiveCoinSVG} size="30%" left="0%" bottom="-30%" />
    </Box>
  );
};

export default LeftIllustration;
