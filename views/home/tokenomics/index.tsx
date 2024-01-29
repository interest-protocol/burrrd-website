import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { track } from '@vercel/analytics';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useCountUp } from 'react-countup';

import Frame from '@/components/frame';
import useEventListener from '@/hooks/use-event-listener';
import {
  ArrowTopRightSVG,
  DexScreenerSVG,
  FireLeftSVG,
  FireRightSVG,
  SmokerBurrrdSVG,
  StabLineSVG,
} from '@/svg';

import { DISTRIBUTION, WEEDS } from './tokenomics.data';

const TokenomicsSection: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 62em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);

  const countUpRef = useRef(null);

  const countup = useCountUp({
    ref: countUpRef,
    start: 0,
    duration: 4,
    end: WEEDS,
    useGrouping: true,
    scrollSpyOnce: true,
    enableScrollSpy: true,
  });

  useEffect(() => {
    countup.start();
  }, [countup]);

  return (
    <Box variant="container" id="tokenomics">
      <Box
        width="100%"
        display="flex"
        gridColumn="1/-1"
        borderTop="2px solid"
        pb={['10.625rem', '10.625rem', '10.625rem', '0']}
      >
        <Box
          mx="auto"
          width="100%"
          display="flex"
          maxWidth="100%"
          minHeight="100%"
          alignItems="center"
          position="relative"
          flexDirection="column"
          justifyContent="center"
          px={['2.313rem', '2.313rem', '2.313rem', '1rem']}
          py={['2.313rem', '2.313rem', '2.313rem', '14.6875rem']}
        >
          <Box
            mt="5rem"
            width="100%"
            maxWidth="64rem"
            position="relative"
            pt={['6.25rem', '6.25rem', '6.25rem', '0']}
          >
            <Motion
              zIndex="1"
              position="absolute"
              top={['1rem', '1rem', '1rem', '-13rem']}
              right={['0rem', '0rem', '0rem', 'unset']}
              left={['unset', 'unset', 'unset', '-2.5625rem']}
              maxWidth={['12.5rem', '12.5rem', '12.5rem', '31.25rem']}
              width={['9.375rem', '9.375rem', '9.375rem', '23.563rem']}
            >
              <SmokerBurrrdSVG
                maxHeight="50rem"
                maxWidth="31.25rem"
                width="100%"
              />
            </Motion>
            <Motion
              position="absolute"
              viewport={{ once: true }}
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
              bg="white"
              zIndex="2"
              border="4px solid"
              position="relative"
              borderRadius="2rem"
            >
              <Box
                py="1rem"
                display="flex"
                position="relative"
                alignItems="center"
                flexDirection="column"
              >
                <Typography
                  m="0"
                  py="0"
                  fontWeight="600"
                  variant="medium"
                  position="relative"
                  fontSize={['1.875rem', '1.875rem', '1.875rem', '6rem']}
                >
                  69,420,000,000,000
                  <Box
                    left="0"
                    as="span"
                    right="0"
                    bottom="0"
                    width="100%"
                    position="absolute"
                  >
                    <StabLineSVG
                      maxWidth="100%"
                      maxHeight="100%"
                      width="100%"
                    />
                  </Box>
                </Typography>
                <Typography
                  m="0"
                  py="0"
                  ref={countUpRef}
                  fontWeight="600"
                  variant="medium"
                  fontSize={['1.875rem', '1.875rem', '1.875rem', '6rem']}
                />
              </Box>
              <Motion
                right="1rem"
                bottom="-2rem"
                position="absolute"
                viewport={{ once: true }}
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2, opacity: { delay: 2 } }}
              >
                <Frame
                  bg="white"
                  py="0.5rem"
                  borderRadius="2rem"
                  width="max-content"
                >
                  <Typography
                    as="span"
                    p="0rem 1.5rem"
                    fontWeight="600"
                    variant="medium"
                    fontSize="2.25rem"
                  >
                    Joints
                  </Typography>
                </Frame>
              </Motion>
            </Frame>
          </Box>
          <Box
            mb="6rem"
            px="0.75rem"
            width="100%"
            maxWidth="82.5rem"
            position="relative"
            mt={['4rem', '4rem', '4rem', '6.25rem']}
          >
            <Box color="white" textAlign="center">
              <Box
                display="flex"
                width="100%"
                flexDirection={['column', 'column', 'column', 'row']}
                justifyContent="space-between"
                mb="4rem"
              >
                {DISTRIBUTION.map((el, index) => (
                  <Box key={index} display="flex" flexDirection="column">
                    <Typography
                      fontFamily="Inter"
                      variant="title1"
                      fontWeight="500"
                      margin="0"
                      fontSize={['5rem', '5rem', '5rem', '6rem']}
                      background={`linear-gradient(90deg, ${el.grad1} -0.41%, ${el.grad2} 99.59%)`}
                      WebkitTextFillColor="transparent"
                      WebkitBackgroundClip="text"
                    >
                      {el.percentage}
                    </Typography>
                    <Typography
                      variant="small"
                      fontWeight="400"
                      fontFamily="Inter"
                      fontStyle="normal"
                      fontSize="1.375rem"
                      alignSelf={['center', 'center', 'center', 'flex-start']}
                    >
                      {el.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box
                cursor="pointer"
                onClick={() => {
                  if (window) {
                    track('Lp Burn Solscan Link');
                    window.open(
                      'https://solscan.io/tx/TBZwGEihsKB7bybky4cVouG8A7nwnnLHJGS4ysKPncL8Bup9xY3crGDSD5vnVWewJrPaTXfmKv5ytpCrKLy2LNN',
                      '_blank',
                      'noopener,noreferrer'
                    );
                  }
                }}
              >
                <Box
                  mb="6rem"
                  px="auto"
                  width="100%"
                  display="flex"
                  maxWidth="82.5rem"
                  justifyContent="center"
                >
                  <Box
                    bg="white"
                    display="flex"
                    color="#FFC701"
                    alignItems="center"
                    position="relative"
                    px={['1.5rem', '3rem']}
                    py={['1rem', '1.5rem']}
                    justifyContent="center"
                    borderRadius={['1rem', '2rem']}
                  >
                    <Typography
                      margin="0"
                      variant="title1"
                      letterSpacing="0.6rem"
                      textTransform="uppercase"
                      fontSize={['1.5rem', '3rem', '3rem', '5.25rem']}
                      textShadow={[
                        '2px 2px 0px #000',
                        '3px 3px 0px #000',
                        '3px 3px 0px #000',
                        '4px 4px 0px #000',
                      ]}
                    >
                      LP Burned
                      <Box
                        as="span"
                        display="inline-block"
                        ml={['0.5rem', '2rem', '2rem', '3rem']}
                        maxWidth={['1.2rem', '2rem', '2rem', '3.5rem']}
                        maxHeight={['1.2rem', '2rem', '2rem', '3.5rem']}
                      >
                        <ArrowTopRightSVG
                          width="100%"
                          maxWidth="inherit"
                          maxHeight="inherit"
                        />
                      </Box>
                    </Typography>
                    <Box
                      position="absolute"
                      transform="rotate(45deg)"
                      maxWidth={['4rem', '5rem', '5rem', '7rem']}
                      maxHeight={['6rem', '7rem', '7rem', '9rem']}
                      right={['-1.5rem', '-2rem', '-2rem', '-3.5rem']}
                      bottom={['-1.5rem', '-1.5rem', '-1.5rem', '-2rem']}
                    >
                      <FireRightSVG
                        width="100%"
                        maxWidth="inherit"
                        maxHeight="inherit"
                      />
                    </Box>
                    <Box
                      position="absolute"
                      transform="rotate(-40deg)"
                      maxWidth={['4rem', '5rem', '5rem', '7rem']}
                      maxHeight={['6rem', '7rem', '7rem', '9rem']}
                      left={['-1.5rem', '-2rem', '-2rem', '-3.5rem']}
                      bottom={['-1.8rem', '-1.8rem', '-1.8rem', '-2.6985rem']}
                    >
                      <FireLeftSVG
                        width="100%"
                        maxWidth="inherit"
                        maxHeight="inherit"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                cursor="pointer"
                onClick={() => {
                  if (window) {
                    track('Rugcheck');
                    window.open(
                      'https://dexscreener.com/solana/cr7z6x8zuv3xlmulj5bmnhnrb7focg88mknl6bcxknw1',
                      '_blank',
                      'noopener,noreferrer'
                    );
                  }
                }}
              >
                <Box
                  mb="6rem"
                  px="auto"
                  width="100%"
                  display="flex"
                  maxWidth="82.5rem"
                  justifyContent="center"
                >
                  <Box
                    pl="3rem"
                    bg="white"
                    display="flex"
                    color="#FFC701"
                    alignItems="center"
                    position="relative"
                    pr={['1.5rem', '3rem']}
                    py={['1rem', '1.5rem']}
                    justifyContent="center"
                    borderRadius={['1rem', '2rem']}
                  >
                    <Typography
                      margin="0"
                      variant="title1"
                      letterSpacing="0.6rem"
                      textTransform="uppercase"
                      fontSize={['1.5rem', '3rem', '3rem', '5.25rem']}
                      textShadow={[
                        '2px 2px 0px #000',
                        '3px 3px 0px #000',
                        '3px 3px 0px #000',
                        '4px 4px 0px #000',
                      ]}
                    >
                      locked liquidity
                      <Box
                        as="span"
                        display="inline-block"
                        ml={['0.5rem', '2rem', '2rem', '3rem']}
                        maxWidth={['1.2rem', '2rem', '2rem', '3.5rem']}
                        maxHeight={['1.2rem', '2rem', '2rem', '3.5rem']}
                      >
                        <ArrowTopRightSVG
                          width="100%"
                          maxWidth="inherit"
                          maxHeight="inherit"
                        />
                      </Box>
                    </Typography>
                    <Box
                      p="1rem"
                      bg="#FFC701"
                      color="black"
                      borderRadius="50%"
                      position="absolute"
                      transform="rotate(-40deg)"
                      maxWidth={['4rem', '5rem', '5rem', '7rem']}
                      maxHeight={['6rem', '5rem', '5rem', '7rem']}
                      left={['-1.5rem', '-2rem', '-2rem', '-3.5rem']}
                      bottom={['-1.8rem', '-1.8rem', '-1.8rem', '-2.6985rem']}
                    >
                      <DexScreenerSVG
                        width="100%"
                        maxWidth="inherit"
                        maxHeight="inherit"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Motion
            left="50%"
            height="auto"
            position="absolute"
            viewport={{ once: true }}
            whileInView={{ rotate: 11.04 }}
            initial={{ rotate: 0, x: '-52%' }}
            bottom={['-5rem', '-5rem', '-5rem', '-4.5rem']}
          >
            <Frame
              p="1rem 2rem"
              display="flex"
              color="white"
              boxShadow="10px 10px 0px 0px white"
              border="4px solid white"
              width="max-content"
              borderRadius="2rem"
              flexDirection="column"
              bg="black"
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
