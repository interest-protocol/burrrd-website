import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Frame from '@/components/frame';

const HowToBuySection: FC = () => (
  <Box variant="container" id="how-to-buy">
    <Box
      width="100%"
      display="flex"
      gridColumn="1/-1"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      py={['4.375rem', '3.375rem', '3.375rem', '7.5rem']}
      px={['1.25rem', '1.25rem', '1.25rem', '10.75rem']}
    >
      <Typography
        as="span"
        mb={['3rem', '3.375rem', '3.375rem', '5.75rem']}
        color="white"
        variant="small"
        fontSize={['3.125rem', '3.125rem', '3.125rem', '6rem']}
        fontWeight="700"
        textTransform="uppercase"
      >
        How to buy
      </Typography>
      <Frame
        bg="white"
        width="100%"
        overflow="hidden"
        borderRadius="2rem"
        height={['15rem', '15rem', '25rem', '38.5625rem']}
      >
        <Box
          as="iframe"
          width="100%"
          height="100%"
          border="none"
          title="How to buy"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          src="https://www.youtube.com/embed/ObvKskjsI5k?si=pq8N6tjkYEidsJfr"
        />
      </Frame>
    </Box>
  </Box>
);

export default HowToBuySection;
