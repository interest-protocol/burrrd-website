import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';
import toast from 'react-hot-toast';

import Footer from './footer';
import Header from './header';
import { LayoutProps } from './layout.types';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  withoutRoadmap,
}) => {
  const copyAddress = () => {
    window.navigator.clipboard.writeText(
      'F8qtcT3qnwQ24CHksuRrSELtm5k9ob8j64xAzj3JjsMs'
    );
    toast('Address copied to Clipboard');
  };

  return (
    <Box as="main" pt="3rem">
      <Box
        top="0"
        zIndex="10"
        bg="#7B2FC4"
        width="100%"
        height="3rem"
        color="white"
        display="flex"
        position="fixed"
        cursor="pointer"
        fontFamily="ASAP"
        textAlign="center"
        alignItems="center"
        onClick={copyAddress}
        justifyContent="center"
      >
        COIN ADDRESS: F8qtcT3qnwQ24CHksuRrSELtm5k9ob8j64xAzj3JjsMs
      </Box>
      <Header />
      <Box variant="container">
        {children}
        <Footer withoutRoadmap={withoutRoadmap} />
      </Box>
    </Box>
  );
};

export default Layout;
