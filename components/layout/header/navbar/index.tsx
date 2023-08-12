import { Box, Motion } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';
import { v4 } from 'uuid';

import { MENU_ITEMS } from './menu-items';

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
        {MENU_ITEMS.map(({ title, url }) => (
          <Motion as="li" key={v4()} initial={{ y: 0 }} whileHover={{ y: -5 }}>
            <Link href={url}>{title}</Link>
          </Motion>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
