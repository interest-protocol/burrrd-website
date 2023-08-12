import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { useTheme } from '@/context/theme-context';
import Button from '@/elements/button';

import HeroIllustration from './hero-animation';

const HeroSection: FC = () => {
  const { theme } = useTheme();
  return (
    <Box
      variant="container"
      p={[
        '3.375rem 1.25rem',
        '3.375rem 1.25rem',
        '3.375rem 1.25rem',
        '7.5rem 9.375rem',
      ]}
      borderBottom="2px solid black"
      bg={theme.theme.colors.primary}
    >
      <Box
        width="100%"
        display="flex"
        gap="2.4063rem"
        gridColumn="1/-1"
        minHeight="fit-content"
        justifyContent="space-around"
        flexDirection={['column', 'column', 'column', 'row']}
      >
        <Box>
          <Typography
            as="h2"
            color="white"
            variant="displayLarge"
            fontSize={['2.5rem', '2.5rem', '2.5rem', '3.75rem']}
          >
            The cutest but most savage meme coin. The shitcoin slayer.
          </Typography>
          <Button variant="primary">Buy now</Button>
        </Box>
        <Box
          width="100%"
          minWidth="18.75rem"
          maxWidth="31.25rem"
          margin={['0 auto', '0 auto', '0 auto', 'unset']}
          height={['23.75rem', '31.25rem', '37.5rem', '31.25rem']}
        >
          <HeroIllustration />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
