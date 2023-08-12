import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactNode, StrictMode } from 'react';

import { ThemeProvider } from '@/context/theme-context';
import { NextPageDefaultProps } from '@/interface';

type Props = Omit<AppProps<NextPageDefaultProps>, 'pageProps'> & {
  pageProps: NextPageDefaultProps;
};

const MyApp = ({ Component, pageProps }: Props): ReactNode => {
  return (
    <>
      <Head>
        <title>Burrrd</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
      </Head>
      <StrictMode>
        <ThemeProvider>
          <Component {...pageProps} />
          <VercelAnalytics />
        </ThemeProvider>
      </StrictMode>
    </>
  );
};

export default MyApp;
