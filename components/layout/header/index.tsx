import { BurrrdLogoSVG } from '@/svg';
import { Box } from '@interest-protocol/ui-kit';
import { FC, useCallback, useState } from 'react';
import Navbar from './navbar';
import MobileNavbar from './mobile-navbar';
import useEventListener from '@/hooks/use-event-listener';
import { useTheme } from '@/context/theme-context';

const Header: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 55em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);

  return (
    <Box
      width="100%"
      gridColumn="1/-1"
      p="1rem 2rem"
      bg={theme.theme.colors.primary}
      borderBottom="2px #1B1B1F solid"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {!isMobile ? (
          <Box display={['none', 'none', 'none', 'unset']}>
            <BurrrdLogoSVG
              maxHeight="3.5625rem"
              maxWidth="12.625rem"
              width="100%"
            />
          </Box>
        ) : (
          <Box display={['unset', 'unset', 'unset', 'none']}>
            <BurrrdLogoSVG
              maxHeight="1.75rem"
              maxWidth="6.875rem"
              width="100%"
            />
          </Box>
        )}
        <Navbar />
        <MobileNavbar />
      </Box>
    </Box>
  );
};

export default Header;
