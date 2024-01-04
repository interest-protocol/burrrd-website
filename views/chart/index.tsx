import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Layout from '@/components/layout';

import ChartGraph from './chart-graph';
import ChartIllustration from './chart-illustration';

const Chart: FC = () => (
  <Layout withoutRoadmap>
    <Box
      p="8rem"
      bg="black"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <ChartGraph />
      <ChartIllustration />
    </Box>
  </Layout>
);

export default Chart;
