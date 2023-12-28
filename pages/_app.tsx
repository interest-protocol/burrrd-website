import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactNode, StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';

import { ThemeProvider } from '@/context/theme-context';
import { NextPageDefaultProps } from '@/interface';

type Props = Omit<AppProps<NextPageDefaultProps>, 'pageProps'> & {
  pageProps: NextPageDefaultProps;
};

const MyApp = ({ Component, pageProps }: Props): ReactNode => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
      </Head>
      <StrictMode>
        <ThemeProvider>
          <Component {...pageProps} />
          <VercelAnalytics />
          <Toaster />
        </ThemeProvider>
      </StrictMode>
    </>
  );
};

export default MyApp;
