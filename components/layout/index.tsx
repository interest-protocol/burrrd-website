import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import Footer from './footer';
import Header from './header';
import { LayoutProps } from './layout.types';
import TopBar from './top-bar';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  withoutRoadmap,
}) => (
  <Box as="main" pt="3rem">
    <TopBar />
    <Header />
    <Box variant="container">
      {children}
      <Footer withoutRoadmap={withoutRoadmap} />
    </Box>
  </Box>
);

export default Layout;
