import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { useTheme } from '@/context/theme-context';
import Button from '@/elements/button';
import { SolanaLogo } from '@/svg';

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
      borderBottom="2px solid"
      bg={theme.theme.gradient.radialGradientViolet}
    >
      <Box
        width="100%"
        gap={['3rem', '3rem', '3rem', '2.5rem']}
        display="flex"
        gridColumn="1/-1"
        minHeight="fit-content"
        justifyContent="space-around"
        alignItems="center"
        flexDirection={['column', 'column', 'column', 'row']}
        maxWidth="64rem"
        mx="auto"
        mb={['6rem', '6rem', '6rem', 'unset']}
      >
        <Box>
          <Button
            border="3px solid #000"
            borderRadius="9999rem"
            boxShadow="4px 4px 0px 0px #000"
            backgroundColor="#FFF"
            fontSize={['0.5rem', '1rem']}
            fontWeight="500"
            mb="2.5rem"
            p="1rem"
            width={['11rem', '15rem']}
            lineHeight="1.25rem"
            letterSpacing="0.8px"
            gap="0.5rem"
          >
            Built on solana
            <SolanaLogo maxHeight="1.5rem" maxWidth="1.5rem" />
          </Button>
          <Typography
            as="h2"
            color="white"
            variant="displayLarge"
            fontSize={['2.5rem', '2.5rem', '2.5rem', '3.75rem']}
            my="0"
            mb="2rem"
          >
            The cutest but most savage meme coin. The sh&iexcl;tcoin slayer.
          </Typography>
          <Button
            py="1.5rem"
            px="2.5rem"
            border="3px solid #000"
            boxShadow="4px 4px 0px 0px #000"
            borderRadius="1.25rem"
            backgroundColor={theme.theme.colors.septenary}
            fontWeight="700"
          >
            Buy now
          </Button>
        </Box>
        <Box
          pt={['0rem', '0rem', '0rem', '2rem']}
          width="100%"
          minWidth="18.75rem"
          maxWidth="37.5rem"
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
