import { Box, Motion } from '@interest-protocol/ui-kit';
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
import { BurrrdSVG, RunningBurrrdSVG, ThoughtBalloonSVG } from '@/svg';
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
        .filter(({ address }) => ADDRESSES_TO_NAME[address])
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
      refreshInterval: 20000,
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
        zIndex="1"
        mt="7.5rem"
        display="flex"
        position="relative"
        flexDirection={['column', 'column', 'row']}
        alignItems={['center', 'center', 'flex-end']}
      >
        {!!deadMemes?.length && (
          <Box
            width="15rem"
            height="18rem"
            minWidth="15rem"
            position="relative"
            onClick={() => audioRef.current?.play()}
          >
            <Box
              top="4rem"
              left="-2rem"
              right="-2rem"
              bottom="-4rem"
              position="absolute"
            >
              <ThoughtBalloonSVG
                width="100%"
                maxWidth="30rem"
                maxHeight="30rem"
              />
            </Box>
            <Box
              bg="white"
              width="1.5rem"
              height="1.5rem"
              borderRadius="50%"
              position="absolute"
              top={['19rem', '19rem', '8rem']}
              left={['1rem', '1rem', 'unset']}
              right={['unset', 'unset', '-3rem']}
            />
            {deadMemes?.includes(NAMES_TO_ADDRESS.USEDCAR) && (
              <Box position="absolute" top="2rem" left="2rem">
                <img
                  src="/images/dead-coins/USEDCAR-min.webp"
                  alt="Dead USEDCAR"
                  width="180"
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
            {deadMemes?.includes(NAMES_TO_ADDRESS.DOGE) && (
              <Box position="absolute" bottom="2rem">
                <img
                  src="/images/dead-coins/DODGE-min.webp"
                  alt="Dead DOGE"
                  width="100"
                />
              </Box>
            )}
            {deadMemes?.includes(NAMES_TO_ADDRESS.DOGWIFTHAT) && (
              <Box position="absolute" bottom="2rem" left="4.5rem">
                <img
                  src="/images/dead-coins/DOGWITHAT-min.webp"
                  alt="Dead DOGWIFTHAT"
                  width="100"
                />
              </Box>
            )}
            {deadMemes?.includes(NAMES_TO_ADDRESS.MYRO) && (
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
        <Box>
          <Box display="flex" alignItems="flex-end" ml="3rem">
            {burrrdNextMemeAddress ? (
              <>
                <Motion
                  maxWidth="12rem"
                  maxHeight="12rem"
                  initial={{ rotate: '0deg' }}
                  onClick={() => audioRef.current?.play()}
                  animate={{ rotate: ['30deg', '0deg', '30deg'] }}
                  transition={{
                    duration: 0.3,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                >
                  <RunningBurrrdSVG
                    width="100%"
                    maxWidth="100%"
                    maxHeight="100%"
                  />
                </Motion>
                <Motion
                  maxWidth="15rem"
                  maxHeight="15rem"
                  overflow="hidden"
                  borderRadius="50%"
                  animate={{ translateY: ['1rem', '-1rem', '1rem'] }}
                  transition={{
                    duration: 1,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                >
                  <img
                    width="100%"
                    alt="Next stab meme logo"
                    src={COINS_IMAGE_MAP[burrrdNextMemeAddress]}
                  />
                </Motion>
              </>
            ) : (
              <BurrrdSVG width="100%" maxHeight="20rem" maxWidth="20rem" />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChartGraph;
