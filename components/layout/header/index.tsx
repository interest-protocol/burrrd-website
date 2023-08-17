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
      p="0.625rem 1.25rem"
      borderColor="#1B1B1F"
      borderBottom="2px solid"
      bg={theme.theme.colors.primary}
    >
      <Box
        mx="auto"
        display="flex"
        maxWidth="64rem"
        alignItems="center"
        justifyContent="space-between"
      >
        {!isMobile ? (
          <Box
            gap="1rem"
            display="flex"
            width="14.375rem"
            position="relative"
            alignItems="center"
          >
            <Motion>
              <BurrrdSVG
                width="100%"
                maxWidth="12.625rem"
                maxHeight="3.5625rem"
              />
            </Motion>
            <Motion>
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
            gap="1.25rem"
            display="flex"
            height="0.625rem"
            position="relative"
            alignItems="center"
          >
            <Motion>
              <BurrrdSVG
                width="1.75rem"
                maxWidth="12.625rem"
                maxHeight="3.5625rem"
              />
            </Motion>
            <Motion>
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
