import { BurrrdLogoSVG } from '@/svg';
import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';
import Header from './header';
import Footer from './footer';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box variant="container">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
