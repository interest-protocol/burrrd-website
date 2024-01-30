import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Layout from '@/components/layout';
import { ScenarioSVG } from '@/svg';

import ChartGraph from './chart-graph';

const Chart: FC = () => (
  <Layout withoutRoadmap>
    <Box
      bg="black"
      display="flex"
      alignItems="center"
      flexDirection="column"
      p={['1rem', '2rem', '8rem']}
      pb={['0rem', '0rem', '0rem']}
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
      <Box
        bg="#111"
        mt="-2rem"
        width="100vw"
        height="10rem"
        position="relative"
      >
        <Motion
          mt="-1rem"
          initial={{ translateX: '120%' }}
          animate={{ translateX: '-70%' }}
          transition={{
            duration: 10,
            ease: 'linear',
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
        >
          <ScenarioSVG maxWidth="3rem" maxHeight="100%" width="100%" />
        </Motion>
        <Motion
          initial={{ translateX: '180%' }}
          animate={{ translateX: '-10%' }}
          transition={{
            duration: 10,
            ease: 'linear',
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
        >
          <ScenarioSVG maxWidth="1rem" maxHeight="100%" width="100%" />
        </Motion>
        <Motion
          mt="1rem"
          initial={{ translateX: '160%' }}
          animate={{ translateX: '-30%' }}
          transition={{
            duration: 10,
            ease: 'linear',
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
        >
          <ScenarioSVG maxWidth="2rem" maxHeight="100%" width="100%" />
        </Motion>
        <Motion
          mt="-1rem"
          initial={{ translateX: '120%' }}
          animate={{ translateX: '-70%' }}
          transition={{
            delay: 5,
            duration: 10,
            ease: 'linear',
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
        >
          <ScenarioSVG maxWidth="3rem" maxHeight="100%" width="100%" />
        </Motion>
        <Motion
          initial={{ translateX: '180%' }}
          animate={{ translateX: '-10%' }}
          transition={{
            delay: 5,
            duration: 10,
            ease: 'linear',
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
        >
          <ScenarioSVG maxWidth="1rem" maxHeight="100%" width="100%" />
        </Motion>
        <Motion
          mt="1rem"
          initial={{ translateX: '160%' }}
          animate={{ translateX: '-30%' }}
          transition={{
            delay: 5,
            duration: 10,
            ease: 'linear',
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
        >
          <ScenarioSVG maxWidth="2rem" maxHeight="100%" width="100%" />
        </Motion>
      </Box>
    </Box>
  </Layout>
);

export default Chart;
