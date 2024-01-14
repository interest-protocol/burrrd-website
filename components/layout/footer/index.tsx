import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { track } from '@vercel/analytics';
import { FC, useCallback, useState } from 'react';
import { v4 } from 'uuid';

import Frame from '@/components/frame';
import { SOCIALS } from '@/constants';
import useEventListener from '@/hooks/use-event-listener';
import { BurrrdSVG, ConverstionBalloonSVG } from '@/svg';
import HowToBuySection from '@/views/home/how-to-buy';

import { LayoutProps } from '../layout.types';

const Footer: FC<LayoutProps> = ({ withoutRoadmap }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 62em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);
  return (
    <Box
      width="100%"
      background="linear-gradient(180deg, #DC77F7 19.58%, #7B2FC4 149.72%)"
    >
      {!withoutRoadmap && <HowToBuySection />}
      <Box
        mx="auto"
        pt="6rem"
        zIndex={3}
        as="footer"
        width="100%"
        display="flex"
        overflowY="hidden"
        gridColumn="1/-1"
        pb={['14rem', '14rem', '14rem', '12rem']}
        px={['1.25rem', '1.25rem', '1.25rem', '1.25rem', '4.5rem']}
        flexDirection={[
          'column-reverse',
          'column-reverse',
          'column-reverse',
          'column-reverse',
          'row',
        ]}
        justifyContent="space-evenly"
      >
        <Box
          position="relative"
          width="max-content"
          marginTop={['0', '0', '0', '5rem', '0']}
          left={['5%', '20%', '23%', '33%', 'unset']}
          minWidth={['100%', '100%', '100%', '100%', '32rem']}
        >
          <Motion
            initial={{ x: isMobile ? '-100%' : '-90%', rotate: 0 }}
            whileInView={{
              x: '-8%',
              rotate: [0, 20, -20, 20, -20, 20, -20, 0],
            }}
            viewport={{ once: true }}
            width="100%"
            position="absolute"
            transition={{ duration: 1.5 }}
            transform={['scale(1)', 'scale(1)', 'scale(1)', 'scale(0.8)']}
            bottom={[
              '-15.875rem',
              '-15.875rem',
              '-15.875rem',
              '-12.875rem',
              '-17rem',
            ]}
            height={[
              '11.813rem',
              '11.813rem',
              '11.813rem',
              '11.813rem',
              '21.875rem',
            ]}
          >
            <BurrrdSVG
              maxHeight="21.875rem"
              maxWidth="21.313rem"
              width="100%"
              height="100%"
            />
          </Motion>
          <Motion
            position="absolute"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
            ml={['12rem', '10.75rem', '9.75rem', '8.375rem', '13.375rem']}
            bottom={['-11rem', '-11rem', '-11rem', '-8rem', '-40%']}
          >
            <Typography
              top="20%"
              left="40%"
              color="white"
              variant="small"
              fontWeight="700"
              position="absolute"
              textTransform="uppercase"
              transform="translate(-50%, -50%)"
              fontSize={['0.75rem', '0.75rem', '0.75rem', '0.75rem', '1.5rem']}
            >
              Follow me
            </Typography>
            <Box width={['9.75rem', '9.75rem', '9.75rem', '9.75rem', '100%']}>
              <ConverstionBalloonSVG
                width="100%"
                maxWidth="21.25rem"
                maxHeight="21.875rem"
              />
            </Box>
          </Motion>
        </Box>
        <Box
          display="flex"
          alignItems="flex-end"
          flexDirection="column"
          width={['100%', '100%', '100%', '100%', 'max-content']}
        >
          <Box width="100%">
            <Motion
              initial={{ x: '50%', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
            >
              <Typography
                my="0"
                color="white"
                variant="small"
                fontWeight="700"
                textTransform="uppercase"
                textAlign={['center', 'center', 'center', 'center', 'unset']}
                fontSize={[
                  '3.125rem',
                  '3.125rem',
                  '3.125rem',
                  '3.125rem',
                  '6rem',
                ]}
              >
                Follow Us
              </Typography>
            </Motion>
            <Motion
              initial={{ x: '-100%', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                type: 'spring',
                stiffness: 100,
              }}
              mt="1.5rem"
              mb="4rem"
            >
              <Typography
                my="0"
                color="white"
                variant="small"
                fontSize="1.125rem"
                textAlign={['center', 'center', 'center', 'center', 'unset']}
              >
                Stay tuned for our latest updates and announcements. Follow us
                on socials.
              </Typography>
            </Motion>
            <Box
              gap=".5rem"
              display="flex"
              maxWidth="max-content"
              justifyContent={[
                'flex-start',
                'space-between',
                'space-between',
                'space-between',
                'unset',
              ]}
              width="100%"
              mx={['auto', 'auto', 'auto', 'auto', 'unset']}
              flexWrap={['wrap', 'nowrap', 'nowrap', 'nowrap', 'wrap']}
            >
              {SOCIALS.map(({ Icon, name, url }) => (
                <Motion
                  key={v4()}
                  borderRadius="50%"
                  initial={{ y: 0 }}
                  whileHover={{ y: -10 }}
                >
                  <Box
                    cursor="pointer"
                    onClick={() => {
                      if (window) {
                        track(name);
                        window.open(url, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    <Frame
                      bg="white"
                      display="flex"
                      boxSize="small"
                      borderRadius="50%"
                      alignItems="center"
                      flexDirection="column"
                      justifyContent="center"
                      width={[
                        '5.3125rem',
                        '5.625rem',
                        '5.625rem',
                        '5.625rem',
                        '7.5rem',
                      ]}
                      height={[
                        '5.3125rem',
                        '5.625rem',
                        '5.625rem',
                        '5.625rem',
                        '7.5rem',
                      ]}
                      border="4px solid"
                    >
                      <Icon maxHeight="2rem" maxWidth="2rem" width="100%" />
                      <Typography
                        m="0"
                        textAlign="center"
                        variant="medium"
                        fontFamily="Roboto Mono"
                        textDecoration="underline"
                        fontSize={[
                          '.75rem',
                          '.75rem',
                          '.75rem',
                          '.75rem',
                          '1rem',
                        ]}
                      >
                        {name}
                      </Typography>
                    </Frame>
                  </Box>
                </Motion>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
