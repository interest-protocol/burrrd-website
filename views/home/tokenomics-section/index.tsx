import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC, useCallback, useRef, useState } from 'react';
import { useCountUp } from 'react-countup';

import Frame from '@/components/frame';
import { useTheme } from '@/context/theme-context';
import useEventListener from '@/hooks/use-event-listener';
import { SmokerBurrrdSVG } from '@/svg';

const TokenomicsSection: FC = () => {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 55em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);

  const countUpRef = useRef(null);

  useCountUp({
    ref: countUpRef,
    start: 0,
    duration: 10,
    end: 420000000000000,
    scrollSpyOnce: true,
    enableScrollSpy: true,
  });

  return (
    <Box variant="container" borderBottom="2px solid black" id="tokenomics">
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
            <Motion
              zIndex="1"
              position="absolute"
              initial={{ x: '-100%', rotate: 0 }}
              right={['2rem', '2rem', '2rem', 'unset']}
              maxWidth={['12.5rem', '12.5rem', '12.5rem', '31.25rem']}
              top={['-.625rem', '-.75rem', '-0.4%', '-10.7rem']}
              left={['unset', 'unset', 'unset', '-1.5625rem']}
              transition={{ duration: 1.5, rotate: { duration: 0.9 } }}
              whileInView={{ x: 0, rotate: [0, 5, -5, 5, -5, 5, -5, 0] }}
            >
              <SmokerBurrrdSVG
                maxHeight="50rem"
                maxWidth="31.25rem"
                width="100%"
              />
            </Motion>
            <Motion
              position="absolute"
              initial={isMobile ? { x: '50%' } : { x: '90%' }}
              left={['50%', '50%', '50%', '']}
              top={['-7.8125rem', '-7.8125rem', '-7.8125rem', '-11.25rem']}
              whileInView={isMobile ? { x: '-50%' } : { x: '-30%' }}
              transition={{
                type: 'spring',
                stiffness: 300,
                bounce: 0.5,
                duration: 2,
              }}
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
            </Motion>
            <Frame
              zIndex="2"
              bg="white"
              position="relative"
              borderRadius="2rem"
            >
              <Box p="2rem" display="flex" justifyContent="center">
                <Typography
                  as="span"
                  ref={countUpRef}
                  fontSize={['1.875rem', '1.875rem', '1.875rem', '5rem']}
                  variant="medium"
                  fontWeight="bold"
                />
              </Box>
              <Motion
                right="2rem"
                bottom="-2rem"
                position="absolute"
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 5, opacity: { delay: 5 } }}
              >
                <Frame
                  display={['none', 'none', 'none', 'block']}
                  bg="white"
                  p="1rem 1.5rem"
                  width="max-content"
                  borderRadius="2rem"
                >
                  <Typography as="span" fontSize="1.5rem" variant="medium">
                    weeds
                  </Typography>
                </Frame>
              </Motion>
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
          <Motion
            left="50%"
            height="auto"
            position="absolute"
            initial={{ rotate: 0, x: '-50%' }}
            bottom={['-5rem', '-5rem', '-5rem', '-4rem']}
            whileInView={{ rotate: 11.04 }}
          >
            <Frame
              p="2rem"
              display="flex"
              width="max-content"
              borderRadius="2rem"
              flexDirection="column"
              bg={theme.theme.colors.septenary}
              fontSize={['1.875rem', '1.875rem', '1.875rem', '5.5rem']}
            >
              <Typography as="span" fontWeight="700" variant="displayLarge">
                No Taxes,
              </Typography>
              <Typography as="span" fontWeight="700" variant="displayLarge">
                No Sh¡tcoin Bullsh¡t
              </Typography>
            </Frame>
          </Motion>
        </Box>
      </Box>
    </Box>
  );
};

export default TokenomicsSection;
