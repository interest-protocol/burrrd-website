import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import Header from './header';
import TopBar from './top-bar';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Box as="main" pt="3rem">
    <TopBar />
    <Header />
    <Box variant="container">{children}</Box>
  </Box>
);

export default Layout;
