import { BurrrdSVG } from '@/svg';
import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <Box
      width="100%"
      gridColumn="1/-1"
      p="1rem 2rem"
      zIndex={3}
      as="footer"
      id="footer"
      bottom={['0', '0', '0', 'unset']}
      pt={['NONE', 'NONE', '8rem']}
      pb={[
        'env(safe-area-inset-bottom)',
        'env(safe-area-inset-bottom)',
        '8rem',
      ]}
      position={['fixed', 'fixed', 'fixed', 'static']}
      bg="#8C4FE8"
    >
      <BurrrdSVG maxHeight="40px" maxWidth="210px" width="100%" />
    </Box>
  );
};

export default Footer;
