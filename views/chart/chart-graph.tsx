import { FC } from 'react';
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
  SOL_COIN_ADDRESSES_MAP,
} from '@/constants/coins';
import { formatNumber } from '@/utils';

const ChartGraph: FC = () => {
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

  const burrrdMarketCap = data?.find(
    ({ address }) => address === SOL_COIN_ADDRESSES_MAP.BURRRD
  )?.mc;

  return (
    <ResponsiveContainer width="50%" height={480}>
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
  );
};

export default ChartGraph;
