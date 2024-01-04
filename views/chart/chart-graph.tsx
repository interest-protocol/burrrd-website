import { Box } from '@interest-protocol/ui-kit';
import { FC, useEffect, useRef } from 'react';
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import useSWR from 'swr';
import { v4 } from 'uuid';

import { getUSDPrices } from '@/api/get-prices';
import {
  ADDRESSES_TO_NAME,
  COIN_COLOR,
  COINS_TOTAL_SUPPLY_MAP,
  NAMES_TO_ADDRESS,
  SOL_COIN_ADDRESSES_MAP,
} from '@/constants/coins';
import { BurrrdSVG, RunningBurrrdSVG } from '@/svg';
import { formatNumber } from '@/utils';

import { COINS_IMAGE_MAP } from './chart.data';

const ChartGraph: FC = () => {
  const audioRef = useRef<HTMLAudioElement>();
  const { data } = useSWR(
    'tokens-price',
    async () => {
      const prices: ReadonlyArray<{ address: string; price: number }> =
        await getUSDPrices();

      const result = prices
        .map(
          ({ address, price }) => ({
            address,
            name: ADDRESSES_TO_NAME[address],
            mc: price * COINS_TOTAL_SUPPLY_MAP[address],
          }),
          {}
        )
        .sort((a, b) => (a.mc < b.mc ? 1 : -1));

      return result ?? [];
    },
    {
      refreshInterval: 60000,
    }
  );

  const burrrdIndex =
    data?.findIndex(
      ({ address }) => address === SOL_COIN_ADDRESSES_MAP.BURRRD
    ) ?? 0;

  const burrrdMarketCap = data?.[burrrdIndex].mc;

  const burrrdNextMemeAddress = data?.[burrrdIndex - 1]?.address ?? '';

  const deadMemes = data?.slice(burrrdIndex + 1).map(({ address }) => address);

  useEffect(() => {
    const audio = new Audio();
    audio.src = '/sound/quack_stab_stab.mp3';
    audioRef.current = audio;
  }, []);

  return (
    <>
      <Box maxWidth="66rem" width="100%">
        <ResponsiveContainer width="100%" height={480}>
          <BarChart
            data={data}
            width={800}
            height={400}
            layout="vertical"
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis type="number" padding={{ right: 50 }} />
            <YAxis dataKey="name" type="category" />
            <Bar
              dataKey="mc"
              isAnimationActive={false}
              label={{
                position: 'right',
                formatter: (value: number) => formatNumber(value).toString(),
              }}
            >
              {(data ?? []).map(({ mc, name }) => (
                <Cell
                  key={v4()}
                  fill={
                    burrrdMarketCap && burrrdMarketCap > mc
                      ? 'red'
                      : COIN_COLOR[name]
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
      <Box
        display="flex"
        flexDirection={['column', 'column', 'row']}
        alignItems={['center', 'center', 'flex-end']}
      >
        {console.log({ deadMemes })}
        {deadMemes?.length && (
          <Box
            width="15rem"
            height="18rem"
            minWidth="15rem"
            position="relative"
            onClick={() => audioRef.current?.play()}
          >
            {deadMemes?.includes(NAMES_TO_ADDRESS.USEDCAR) && (
              <Box position="absolute" top="0">
                <img
                  src="/images/dead-coins/USEDCAR-min.webp"
                  alt="Dead USEDCAR"
                  width="250"
                />
              </Box>
            )}
            {deadMemes?.includes(NAMES_TO_ADDRESS.BONK) && (
              <Box position="absolute" bottom="4rem">
                <img
                  src="/images/dead-coins/BONK-min.webp"
                  alt="Dead BONK"
                  width="100"
                />
              </Box>
            )}
            {deadMemes?.includes(NAMES_TO_ADDRESS.CHONKY) && (
              <Box position="absolute" left="4rem" bottom="4rem">
                <img
                  src="/images/dead-coins/CHONKY-min.webp"
                  alt="Dead CHONKY"
                  width="100"
                />
              </Box>
            )}
            {deadMemes?.includes(NAMES_TO_ADDRESS.GECKO) && (
              <Box position="absolute" bottom="4rem" right="0">
                <img
                  src="/images/dead-coins/GECKO-min.webp"
                  alt="Dead GECKO"
                  width="100"
                />
              </Box>
            )}
            {deadMemes?.includes(NAMES_TO_ADDRESS.DOGE) && (
              <Box position="absolute" bottom="2rem">
                <img
                  src="/images/dead-coins/DODGE-min.webp"
                  alt="Dead DOGE"
                  width="100"
                />
              </Box>
            )}
            {deadMemes?.includes(NAMES_TO_ADDRESS.MYRO) && (
              <Box position="absolute" bottom="2rem" left="4.5rem">
                <img
                  src="/images/dead-coins/DOGWITHAT-min.webp"
                  alt="Dead DOGWIFTHAT"
                  width="100"
                />
              </Box>
            )}
            {deadMemes?.includes(NAMES_TO_ADDRESS.BONK) && (
              <Box position="absolute" bottom="2rem" right="0">
                <img
                  src="/images/dead-coins/MYRO-min.webp"
                  alt="Dead MYRO"
                  width="100"
                />
              </Box>
            )}
            {deadMemes?.includes(NAMES_TO_ADDRESS.PEPE) && (
              <Box position="absolute" bottom="0">
                <img
                  src="/images/dead-coins/PEPE-min.webp"
                  alt="Dead PEPE"
                  width="100"
                />
              </Box>
            )}
            {deadMemes?.includes(NAMES_TO_ADDRESS.PONKE) && (
              <Box position="absolute" bottom="0" left="4.5rem">
                <img
                  src="/images/dead-coins/PONKE-min.webp"
                  alt="Dead PONKE"
                  width="100"
                />
              </Box>
            )}
            {deadMemes?.includes(NAMES_TO_ADDRESS.SAMO) && (
              <Box position="absolute" bottom="0" right="0">
                <img
                  src="/images/dead-coins/SAMO-min.webp"
                  alt="Dead SAMO"
                  width="100"
                />
              </Box>
            )}
          </Box>
        )}
        <Box display="flex" alignItems="flex-end">
          {burrrdNextMemeAddress ? (
            <>
              <Box
                maxWidth="20rem"
                maxHeight="20rem"
                onClick={() => audioRef.current?.play()}
              >
                <RunningBurrrdSVG
                  width="100%"
                  maxWidth="100%"
                  maxHeight="100%"
                />
              </Box>
              <Box maxHeight="20rem" maxWidth="20rem">
                <img
                  width="100%"
                  alt="Next stab meme logo"
                  src={COINS_IMAGE_MAP[burrrdNextMemeAddress]}
                />
              </Box>
            </>
          ) : (
            <BurrrdSVG
              width="100%"
              maxWidth="12.625rem"
              maxHeight="3.5625rem"
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default ChartGraph;
