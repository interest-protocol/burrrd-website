import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { track } from '@vercel/analytics';
import { FC, useEffect, useRef, useState } from 'react';
import { useCountUp } from 'react-countup';

import Frame from '@/components/frame';
import {
  ArrowTopRightSVG,
  DexScreenerSVG,
  FireLeftSVG,
  FireRightSVG,
  SmokerBurrrdSVG,
  StabLineSVG,
} from '@/svg';

const Tokenomics: FC = () => {
  const countUpRef = useRef(null);
  const [weeds, setWeeds] = useState(0);

  useEffect(() => {
    fetch('/api/v1/get-burrrd-supply')
      .then((res) => res.json?.())
      .then(setWeeds)
      .catch(console.log);
  }, []);

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
    if (weeds) countup.start();
  }, [countup, weeds]);

  return (
    <Box variant="container" id="tokenomics">
      <Box width="100%" display="flex" gridColumn="1/-1">
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
              top={['1rem', '1rem', '1rem', '-11.8rem']}
              left={['unset', 'unset', 'unset', '2.5625rem']}
              maxWidth={['12.5rem', '12.5rem', '12.5rem', '31.25rem']}
              width={['9.375rem', '9.375rem', '9.375rem', '20.563rem']}
            >
              <SmokerBurrrdSVG
                maxHeight="50rem"
                maxWidth="31.25rem"
                width="100%"
              />
            </Motion>
            <Motion
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
              position="absolute"
              viewport={{ once: true }}
              right="0"
              initial={{ x: '100%', opacity: 0 }}
              whileInView={{ x: '0%', opacity: 1 }}
              top={['3.2rem', '2.5rem', '2.5rem', '-10rem']}
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
                fontSize={['1.5rem', '2rem', '2rem', '3.8rem']}
              >
                Tokenomics
              </Typography>
            </Motion>
            <Frame
              bg="white"
              zIndex="1"
              overflow="visible"
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
                zIndex="2"
                right="1rem"
                bottom="-1.5rem"
                position="absolute"
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
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
                    fontSize={['1rem', '2.25rem']}
                  >
                    BURRRD
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
                    track('Dex Screener');
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
            position="absolute"
            viewport={{ once: true }}
            whileInView={{ rotate: 11.04 }}
            initial={{ rotate: 0, x: '-52%' }}
            bottom={['-5rem', '-5rem', '-5rem', '-5.5rem']}
          >
            <Frame
              p="1rem"
              bg="#000"
              display="flex"
              color="white"
              borderRadius="2rem"
              flexDirection="column"
              border="4px solid white"
              boxShadow="10px 10px 0px 0px white"
              width={['20rem', '25rem', '25rem', '40rem']}
              fontSize={['2rem', '2.5rem', '2.5rem', '4rem']}
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

export default Tokenomics;
