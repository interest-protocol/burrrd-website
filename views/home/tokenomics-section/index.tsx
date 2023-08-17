import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useCountUp } from 'react-countup';

import Frame from '@/components/frame';
import { useTheme } from '@/context/theme-context';
import useEventListener from '@/hooks/use-event-listener';
import { SmokerBurrrdSVG } from '@/svg';

const TokenomicsSection: FC = () => {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 62em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);

  const countUpRef = useRef(null);
  const weeds = 420000000000000;

  const countup = useCountUp({
    ref: countUpRef,
    start: 0,
    duration: 4,
    end: weeds,
    useGrouping: true,
    scrollSpyOnce: true,
    enableScrollSpy: true,
  });

  useEffect(() => {
    countup.start();
  }, [countup]);

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
          px={['2.313rem', '2.313rem', '2.313rem', '3.6875rem']}
          py={['2.313rem', '2.313rem', '2.313rem', '14.6875rem']}
          maxWidth="64rem"
          mx="auto"
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
              top={['1rem', '1rem', '1rem', '-13rem']}
              right={['0rem', '0rem', '0rem', 'unset']}
              left={['unset', 'unset', 'unset', '-2.5625rem']}
              maxWidth={['12.5rem', '12.5rem', '12.5rem', '31.25rem']}
              width={['9.375rem', '9.375rem', '9.375rem', '23.563rem']}
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
              left={['50%', '50%', '50%', '55%']}
              initial={isMobile ? { x: '50%' } : { x: '90%' }}
              whileInView={isMobile ? { x: '-50%' } : { x: '-30%' }}
              top={['-7.8125rem', '-7.8125rem', '-7.8125rem', '-13.25rem']}
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
                fontSize={['3.125rem', '3.125rem', '3.125rem', '5.5rem']}
              >
                Tokenomics
              </Typography>
            </Motion>
            <Frame
              zIndex="2"
              bg="white"
              position="relative"
              borderRadius="2rem"
              border="4px solid"
            >
              <Box display="flex" justifyContent="center">
                <Typography
                  ref={countUpRef}
                  fontWeight="600"
                  variant="medium"
                  lineHeight="2rem"
                  my={['2.5rem', '2.5rem', '2.5rem', '3.5rem']}
                  fontSize={['1.875rem', '1.875rem', '1.875rem', '6rem']}
                >
                  {/* {weeds && weeds} */}
                </Typography>
              </Box>
              <Motion
                right="1rem"
                bottom="-2rem"
                position="absolute"
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2, opacity: { delay: 2 } }}
              >
                <Frame
                  bg="white"
                  py="0.5rem"
                  border="4px solid"
                  borderRadius="2rem"
                  width="max-content"
                  display={['none', 'none', 'none', 'block']}
                >
                  <Typography
                    as="span"
                    p="0rem 1.5rem"
                    fontWeight="600"
                    variant="medium"
                    fontSize="2.25rem"
                  >
                    weeds
                  </Typography>
                </Frame>
              </Motion>
            </Frame>
          </Box>
          <Box
            mb="6rem"
            position="relative"
            mt={['4rem', '4rem', '4rem', '6.25rem']}
          >
            <Box
              color="white"
              textAlign="center"
              fontSize={['1rem', '1rem', '1rem', '2.25rem']}
            >
              <Typography
                variant="medium"
                fontWeight="400"
                lineHeight={['1.5rem', '1.5rem', '1.5rem', '3.5rem']}
              >
                90% of the tokens will be added to the liquidity pool, with LP
                tokens being burned and the contract renounced to ensure
                transparency and security.
              </Typography>
              <Typography
                variant="medium"
                fontWeight="400"
                lineHeight={['1.5rem', '1.5rem', '1.5rem', '3.5rem']}
              >
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
            whileInView={{ rotate: 11.04 }}
            initial={{ rotate: 0, x: '-52%' }}
            bottom={['-5rem', '-5rem', '-5rem', '-4.5rem']}
          >
            <Frame
              p="1rem 2rem"
              display="flex"
              border="4px solid"
              width="max-content"
              borderRadius="2rem"
              flexDirection="column"
              bg={theme.theme.colors.septenary}
              fontSize={['1.875rem', '1.875rem', '1.875rem', '6rem']}
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
