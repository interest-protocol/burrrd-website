import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC, useCallback, useState } from 'react';

import { useTheme } from '@/context/theme-context';
import useEventListener from '@/hooks/use-event-listener';
import { BurrrdSVG } from '@/svg';

import MobileNavbar from './mobile-navbar';
import Navbar from './navbar';

const Header: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 62em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);

  return (
    <Box
      width="100%"
      gridColumn="1/-1"
      p="0.625rem 1.25rem"
      bg={theme.theme.colors.primary}
      borderBottom="2px solid"
      borderColor="#1B1B1F"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="64rem"
        mx="auto"
      >
        {!isMobile ? (
          <Box
            gap="1rem"
            width="14.375rem"
            position="relative"
            alignItems="center"
            display="flex"
          >
            <Motion
              animate={{
                x: [-60, -60, -100, 0],
                rotate: [
                  50, 50, 50, 50, 50, 50, 50, 50, 20, -20, 20, -20, 20, -20, 20,
                  -20, 20, 0,
                ],
              }}
              position="absolute"
              initial={{ x: -60, rotate: 50 }}
              transition={{ duration: 3.5 }}
            >
              <BurrrdSVG
                width="100%"
                maxWidth="12.625rem"
                maxHeight="3.5625rem"
              />
            </Motion>
            <Motion
              position="absolute"
              right="0"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ duration: 2 }}
            >
              <Typography
                margin="0"
                color="white"
                variant="medium"
                fontWeight="700"
                fontFamily="Asap"
                fontSize="2.5rem"
                textTransform="capitalize"
              >
                BURRRD
              </Typography>
            </Motion>
          </Box>
        ) : (
          <Box
            position="relative"
            alignItems="center"
            display="flex"
            height="0.625rem"
            gap="1.25rem"
          >
            <Motion
              animate={{
                x: [-60, -60, -100, 0],
                rotate: [
                  50, 50, 50, 50, 50, 50, 50, 50, 20, -20, 20, -20, 20, -20, 20,
                  -20, 20, 0,
                ],
              }}
              initial={{ x: -60, rotate: 50 }}
              transition={{ duration: 3.5 }}
            >
              <BurrrdSVG
                width="1.75rem"
                maxWidth="12.625rem"
                maxHeight="3.5625rem"
              />
            </Motion>
            <Motion
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ duration: 2 }}
            >
              <Typography
                color="white"
                variant="medium"
                fontWeight="700"
                fontFamily="Asap"
                fontSize="1.5rem"
                textTransform="capitalize"
              >
                BURRRD
              </Typography>
            </Motion>
          </Box>
        )}
        <Navbar />
        <MobileNavbar />
      </Box>
    </Box>
  );
};

export default Header;
