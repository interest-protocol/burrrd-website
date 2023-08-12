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
    const mediaIsMobile = !window.matchMedia('(min-width: 55em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);
  return (
    <Box
      zIndex={3}
      as="footer"
      width="100%"
      display="flex"
      pt="5.625rem"
      gridColumn="1/-1"
      bg={colors.primary}
      px={['1.25rem', '1.25rem', '1.25rem', '7.5rem']}
      pb={['23.375rem', '25rem', '25rem', '25rem']}
      flexDirection={[
        'column-reverse',
        'column-reverse',
        'column-reverse',
        'row',
      ]}
    >
      <Box
        flex="1"
        position="relative"
        width="max-content"
        transform="scale(0.8)"
      >
        <Motion
          initial={{ x: isMobile ? '-100%' : '-90%', rotate: 0 }}
          whileInView={{
            x: isMobile ? '20%' : 0,
            rotate: [0, 20, -20, 20, -20, 20, -20, 0],
          }}
          position="absolute"
          transition={{ duration: 1.5 }}
          bottom={['-21.875rem', '-28.875rem', '-28.875rem', '-28.875rem']}
          width={['15.625rem', '21.875rem', '21.875rem', '21.875rem']}
        >
          <BurrrdSVG maxHeight="21.875rem" maxWidth="21.25rem" width="100%" />
        </Motion>
        <Motion
          position="absolute"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 1.5 }}
          ml={['220px', '290px', '220px', '220px']}
          // left={['45%', '46%', '46%', '45%']}
          bottom={['-15.275rem', '-20.275rem', '-20.275rem', '-20.275rem']}
        >
          <Typography
            top="20%"
            left="37%"
            color="white"
            variant="small"
            fontWeight="700"
            position="absolute"
            textTransform="uppercase"
            transform="translate(-50%, -50%)"
            fontSize={['1rem', '1rem', '1rem', '1.5rem']}
          >
            Follow me
          </Typography>
          <Box width={['12.5rem', '12.75rem', '18.75rem', '18.75rem']}>
            <ConverstionBalloonSVG
              width="100%"
              maxWidth="21.25rem"
              maxHeight="21.875rem"
            />
          </Box>
        </Motion>
      </Box>
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        gap={['1.25rem', '1.25rem', '1.25rem', '3.75rem']}
      >
        <Motion
          initial={{ x: '100%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
        >
          <Typography
            m="0"
            color="white"
            variant="small"
            fontWeight="700"
            textTransform="uppercase"
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
        >
          <Typography variant="small" color="white" fontSize="1.125rem">
            Stay tuned for our latest updates and announcements. Follow us on
            socials.
          </Typography>
        </Motion>
        <Box
          display="flex"
          gap=".5rem"
          justifyContent={['center', 'flex-start', 'flex-start', 'unset']}
          transform={['scale(0.8)', 'scale(1)', 'scale(1)', 'scale(1)']}
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
  );
};

export default Footer;
