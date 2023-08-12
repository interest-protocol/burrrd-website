import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import Footer from './footer';
import Header from './header';

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