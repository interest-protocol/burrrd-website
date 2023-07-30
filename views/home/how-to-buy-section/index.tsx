import Frame from '@/components/frame';
import { useTheme } from '@/context/theme-context';
import { HeadToPrizeSVG, SmokerBurrrdSVG } from '@/svg';
import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const HowToBuySection: FC = () => {
  const { theme } = useTheme();
  return (
    <Box variant="container" borderBottom="2px solid black">
      <Box
        py="7.5rem"
        width="100%"
        px="10.75rem"
        display="flex"
        gridColumn="1/-1"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        bg={theme.theme.colors.primary}
      >
        <Typography
          as="span"
          mb="5.75rem"
          color="white"
          variant="small"
          fontSize="6rem"
          fontWeight="700"
          textTransform="uppercase"
        >
          How to buy
        </Typography>
        <Frame
          bg="white"
          width="100%"
          height="38.5625rem"
          borderRadius="2rem"
        ></Frame>
      </Box>
    </Box>
  );
};

export default HowToBuySection;
