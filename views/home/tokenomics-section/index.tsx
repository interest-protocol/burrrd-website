import Frame from '@/components/frame';
import { useTheme } from '@/context/theme-context';
import { SmokerBurrrdSVG } from '@/svg';
import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const TokenomicsSection: FC = () => {
  const { theme } = useTheme();
  return (
    <Box variant="container" borderBottom="2px solid black">
      <Box width="100%" display="flex" gridColumn="1/-1">
        <Box
          position="relative"
          width="100%"
          p="14.6875rem"
          minHeight="100%"
          bg={theme.theme.colors.primary}
        >
          <Box position="relative" mt="5rem">
            <Box
              zIndex="1"
              top="-12.3rem"
              left="-1.5625rem"
              position="absolute"
            >
              <SmokerBurrrdSVG
                maxHeight="50rem"
                maxWidth="31.25rem"
                width="115%"
              />
            </Box>
            <Box position="absolute" top="-11.125rem" right="2.5rem">
              <Typography
                as="h2"
                color="white"
                fontSize="4.5rem"
                variant="displayLarge"
                textTransform="uppercase"
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
                  fontSize="5rem"
                  variant="medium"
                  fontWeight="bold"
                >
                  420,000,000,000,000
                </Typography>
              </Box>
              <Frame
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
            <Box color="white" fontSize="2.25rem" textAlign="center">
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
            width="max-content"
            transform="translateX(-50%) rotate(11.04deg)"
            bottom="-4rem"
            display="flex"
            position="absolute"
            borderRadius="2rem"
            flexDirection="column"
            bg={theme.theme.colors.septenary}
          >
            <Typography
              as="span"
              fontWeight="700"
              fontSize="5.5rem"
              variant="displayLarge"
            >
              No Taxes,
            </Typography>
            <Typography
              as="span"
              fontWeight="700"
              fontSize="5.5rem"
              variant="displayLarge"
            >
              No Sh¡tcoin Bullsh¡t
            </Typography>
          </Frame>
        </Box>
      </Box>
    </Box>
  );
};

export default TokenomicsSection;
