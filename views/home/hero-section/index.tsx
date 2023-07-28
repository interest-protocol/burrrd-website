import { useTheme } from '@/context/theme-context';
import Button from '@/elements/button';
import { HeroSVG } from '@/svg';
import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const HeroSection: FC = () => {
  const { theme } = useTheme();
  return (
    <Box
      bg={theme.theme.colors.primary}
      variant="container"
      p="7.5rem 9.375rem"
      borderBottom="2px solid black"
    >
      <Box
        width="100%"
        display="flex"
        gap="2.4063rem"
        gridColumn="1/-1"
        justifyContent="space-around"
      >
        <Box>
          <Typography
            as="h2"
            variant="displayLarge"
            fontSize="3.75rem"
            color="white"
          >
            The cutest but most savage meme coin. The shitcoin slayer.
          </Typography>
          <Button variant="primary">Buy now</Button>
        </Box>

        <HeroSVG maxHeight="599px" maxWidth="599px" width="100%" />
      </Box>
    </Box>
  );
};

export default HeroSection;
