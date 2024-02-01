import { Box, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
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
      minHeight="55rem"
      mt="-1rem"
      p={[
        '3.375rem 1.25rem',
        '3.375rem 1.25rem',
        '3.375rem 1.25rem',
        '7.5rem 9.375rem',
      ]}
      bg={theme.theme.gradient.radialGradientViolet}
    >
      <Box
        width="100%"
        maxWidth="64rem"
        gap={['3rem', '3rem', '3rem', '2.5rem']}
        display="flex"
        gridColumn="1/-1"
        minHeight="fit-content"
        justifyContent="space-around"
        alignItems="center"
        flexDirection={['column', 'column', 'column', 'row']}
        mx="auto"
        mb={['6rem', '6rem', '6rem', 'unset']}
      >
        <Box>
          <Button
            border="3px solid #000"
            borderRadius="9999rem"
            backgroundColor="#FFF"
            fontSize={['0.5rem', '1rem']}
            fontWeight="500"
            mb="2.5rem"
            width={['11rem', '11.5rem']}
            lineHeight="1.25rem"
            letterSpacing="0.8px"
            gap="0.5rem"
          >
            <SolanaLogo maxHeight="2rem" maxWidth="2rem" />
            <Typography
              variant="small"
              color="#000"
              textAlign="center"
              fontFamily="Roboto"
              fontSize="0.875rem"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="1.25rem"
              letterSpacing="0.006rem"
            >
              Built on solana
            </Typography>
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
          <Link href="/buy">
            <Button
              width="8.75rem"
              py="1rem"
              px="1.2rem"
              fontSize="0.875rem"
              border="3px solid #000"
              borderRadius="0.8rem"
              boxShadow="4px 4px 0px 0px #000"
              backgroundColor="#FFD766"
            >
              BUY BURRRD
            </Button>
          </Link>
        </Box>
        <Box
          pt={['0rem', '0rem', '0rem', '2rem']}
          width="100%"
          minWidth="20rem"
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
