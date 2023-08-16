import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC, useCallback, useState } from 'react';
import { v4 } from 'uuid';

import Frame from '@/components/frame';
import { SOCIALS } from '@/constants';
import { useTheme } from '@/context/theme-context';
import useEventListener from '@/hooks/use-event-listener';
import { BurrrdSVG, ConverstionBalloonSVG } from '@/svg';

const Footer: FC = () => {
  const { colors } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 62em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);
  return (
    <Box bg={colors.primary} width="100%">
      <Box
        mx="auto"
        zIndex={3}
        as="footer"
        width="100%"
        display="flex"
        pt="6.688rem"
        maxWidth="80rem"
        gridColumn="1/-1"
        pb={['18rem', '18rem', '18rem', '22rem']}
        px={['1.25rem', '1.25rem', '1.25rem', '7.5rem']}
        flexDirection={[
          'column-reverse',
          'column-reverse',
          'column-reverse',
          'row',
        ]}
        justifyContent="space-between"
      >
        <Box
          position="relative"
          width="max-content"
          left={['unset', '20%', '23%', 'unset']}
          minWidth={['100%', '100%', '100%', '32rem']}
        >
          <Motion
            initial={{ x: isMobile ? '-100%' : '-90%', rotate: 0 }}
            whileInView={{
              x: '-8%',
              rotate: [0, 20, -20, 20, -20, 20, -20, 0],
            }}
            position="absolute"
            transition={{ duration: 1.5 }}
            width="100%"
            height={['11.813rem', '11.813rem', '11.813rem', '21.875rem']}
            bottom={['-15.875rem', '-15.875rem', '-15.875rem', '-72%']}
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
            transition={{ delay: 1.5 }}
            ml={['55%', '9.75rem', '9.75rem', '14.375rem']}
            bottom={['-12rem', '-12rem', '-12rem', '-30%']}
          >
            <Typography
              top="25%"
              left="40%"
              color="white"
              variant="small"
              fontWeight="700"
              position="absolute"
              textTransform="uppercase"
              transform="translate(-50%, -50%)"
              fontSize={['0.75rem', '0.75rem', '0.75rem', '1.5rem']}
            >
              Follow me
            </Typography>
            <Box width={['9.75rem', '9.75rem', '9.75rem', '100%']}>
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
          width={['100%', '100%', '100%', 'max-content']}
        >
          <Box width="100%">
            <Motion
              initial={{ x: '50%', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
            >
              <Typography
                my="0"
                color="white"
                variant="small"
                fontWeight="700"
                textTransform="uppercase"
                textAlign={['unset', 'center', 'center', 'unset']}
                fontSize={['3.125rem', '3.125rem', '3.125rem', '6rem']}
              >
                Follow Us
              </Typography>
            </Motion>
            <Motion
              initial={{ x: '-100%', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
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
                textAlign={['unset', 'center', 'center', 'unset']}
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
                'unset',
              ]}
              width="100%"
              mx={['auto', 'auto', 'auto', 'unset']}
              flexWrap={['wrap', 'nowrap', 'nowrap', 'nowrap']}
            >
              {SOCIALS.map(({ Icon, name, url }) => (
                <Motion
                  key={v4()}
                  borderRadius="50%"
                  initial={{ y: 0 }}
                  whileHover={{ y: -10 }}
                >
                  <Frame
                    bg="white"
                    display="flex"
                    boxSize="small"
                    borderRadius="50%"
                    alignItems="center"
                    flexDirection="column"
                    justifyContent="center"
                    width={['5.3125rem', '5.625rem', '5.625rem', '7.5rem']}
                    height={['5.3125rem', '5.625rem', '5.625rem', '7.5rem']}
                    border="4px solid"
                  >
                    <Icon maxHeight="2rem" maxWidth="2rem" width="100%" />
                    <Typography
                      m="0"
                      variant="medium"
                      fontFamily="Roboto Mono"
                      textDecoration="underline"
                      fontSize={['.75rem', '.75rem', '.75rem', '1rem']}
                    >
                      <Link href={url} target="_blank">
                        {name}
                      </Link>
                    </Typography>
                  </Frame>
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
