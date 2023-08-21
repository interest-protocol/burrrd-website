import { Box, Typography } from '@interest-protocol/ui-kit';

import SEO from '@/components/SEO';
import { NextPageWithProps } from '@/interface';

const NotFound: NextPageWithProps = () => {
  return (
    <Box>
      <SEO pageTitle="Page not found" />
      <Typography variant="small">Page not found</Typography>
    </Box>
  );
};

export default NotFound;
