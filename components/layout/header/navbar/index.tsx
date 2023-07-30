import { BurrrdLogoSVG } from '@/svg';
import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <Box as="nav" display={['none', 'none', 'none', 'unset']}>
      <Box
        as="ul"
        color="white"
        display="flex"
        gap="4.25rem"
        listStyle="none"
        fontWeight="500"
        fontSize="1.125rem"
        textTransform="uppercase"
      >
        <Box as="li">
          <Typography as="a" variant="medium">
            About
          </Typography>
        </Box>
        <Box as="li">
          <Typography as="a" variant="medium">
            Takeonomics
          </Typography>
        </Box>
        <Box as="li">
          <Typography as="a" variant="medium">
            Roadmap
          </Typography>
        </Box>
        <Box as="li">
          <Typography as="a" variant="medium">
            How to buy
          </Typography>
        </Box>
        <Box as="li">
          <Typography as="a" variant="medium">
            Bridge
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
