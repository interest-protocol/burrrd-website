import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Layout from '@/components/layout';

import ChartGraph from './chart-graph';

const Chart: FC = () => (
  <Layout withoutRoadmap>
    <Box
      p="8rem"
      bg="black"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Typography
        as="h2"
        color="white"
        fontSize="3.125rem"
        variant="displayLarge"
        textTransform="uppercase"
      >
        Market Cap Killing Chart
      </Typography>
      <ChartGraph />
    </Box>
  </Layout>
);

export default Chart;
