import Frame from '@/components/frame';
import { useTheme } from '@/context/theme-context';
import { SmokerBurrrdSVG } from '@/svg';
import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const TokenomicsSection: FC = () => {
  const { theme } = useTheme();
  return (
    <Box variant="container" borderBottom="2px solid black">
      <Box
        width="100%"
        display="flex"
        gridColumn="1/-1"
        pb={['10.625rem', '10.625rem', '10.625rem', '0']}
        bg={theme.theme.colors.primary}
      >
        <Box
          width="100%"
          minHeight="100%"
          position="relative"
          p={['1.25rem', '1.25rem', '1.25rem', '14.6875rem']}
        >
          <Box
            mt="5rem"
            position="relative"
            pt={['6.25rem', '6.25rem', '6.25rem', '0']}
          >
            <Box
              zIndex="1"
              top={['-22%', '-20.4%', '-0.4%', '-12.3rem']}
              left={['40%', '40%', '-1.5625rem', '-1.5625rem']}
              transform={['scale(0.8)', 'scale(0.5)', 'scale(0.5)', 'scale(1)']}
              position="absolute"
              transformOrigin="right bottom"
            >
              <SmokerBurrrdSVG
                maxHeight="50rem"
                maxWidth="31.25rem"
                width="100%"
              />
            </Box>
            <Box
              position="absolute"
              top={['-50%', '-50%', '-50%', '-12.25rem']}
              right={['unset', 'unset', 'unset', '2.5rem']}
              left={['50%', '50%', '50%', 'unset']}
              transform={[
                'translateX(-50%)',
                'translateX(-50%)',
                'translateX(-50%)',
                'unset',
              ]}
            >
              <Typography
                as="h2"
                color="white"
                variant="displayLarge"
                textTransform="uppercase"
                fontSize={['3.125rem', '3.125rem', '3.125rem', '4.5rem']}
              >
                Tokenomics
              </Typography>
            </Box>
            <Frame
              zIndex="2"
              bg="white"
              position="relative"
              borderRadius="2rem"
            >
              <Box p="2rem" display="flex" justifyContent="center">
                <Typography
                  as="span"
                  fontSize={['1.875rem', '1.875rem', '1.875rem', '5rem']}
                  variant="medium"
                  fontWeight="bold"
                >
                  420,000,000,000,000
                </Typography>
              </Box>
              <Frame
                display={['none', 'none', 'none', 'block']}
                bg="white"
                bottom="-2rem"
                right="1rem"
                p="1rem 1.5rem"
                width="max-content"
                position="absolute"
                borderRadius="2rem"
              >
                <Typography as="span" fontSize="1.5rem" variant="medium">
                  weeds
                </Typography>
              </Frame>
            </Frame>
          </Box>
          <Box mt="6.25rem" position="relative" mb="6rem">
            <Box
              color="white"
              fontSize={['1rem', '1rem', '1rem', '2.25rem']}
              textAlign="center"
            >
              <Typography variant="medium">
                90% of the tokens will be added to the liquidity pool, with LP
                tokens being burned and the contract renounced to ensure
                transparency and security.
              </Typography>
              <Typography variant="medium">
                10% of the supply will be held in a multi-sig wallet as
                treasury, used exclusively for operations, such as cex listings,
                bridges, liquidity pools, audits, management costs, marketing
                and airdrop
              </Typography>
            </Box>
          </Box>
          <Frame
            p="2rem"
            left="50%"
            bottom={['-5rem', '-5rem', '-5rem', '-4']}
            display="flex"
            width="max-content"
            position="absolute"
            borderRadius="2rem"
            flexDirection="column"
            bg={theme.theme.colors.septenary}
            transform="translateX(-50%) rotate(11.04deg)"
            fontSize={['1.875rem', '1.875rem', '1.875rem', '5.5rem']}
          >
            <Typography as="span" fontWeight="700" variant="displayLarge">
              No Taxes,
            </Typography>
            <Typography as="span" fontWeight="700" variant="displayLarge">
              No Sh¡tcoin Bullsh¡t
            </Typography>
          </Frame>
        </Box>
      </Box>
    </Box>
  );
};

export default TokenomicsSection;
