import { Box } from '@interest-protocol/ui-kit';
import { NextPage } from 'next';

import SEO from '@/components/SEO';

const BuyPage: NextPage = () => (
  <>
    <SEO pageTitle="Buy Now" />
    <Box
      m="0"
      p="0"
      as="iframe"
      border="none"
      width="100vw"
      height="100vh"
      overflow="hidden"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      src="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=F8qtcT3qnwQ24CHksuRrSELtm5k9ob8j64xAzj3JjsMs"
    />
  </>
);

export default BuyPage;
