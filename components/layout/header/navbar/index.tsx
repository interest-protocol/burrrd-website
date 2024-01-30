import { Box, Button, Motion } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';
import { v4 } from 'uuid';

import { MENU_ITEMS } from './menu-items';

const Navbar: FC = () => (
  <Box as="nav" display={['none', 'none', 'none', 'unset']}>
    <Box
      as="ul"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="4.25rem"
      listStyle="none"
      fontWeight="500"
      fontSize="1.125rem"
      textTransform="uppercase"
    >
      {MENU_ITEMS.map(({ title, url }) => (
        <Motion as="li" key={v4()} initial={{ y: 0 }} whileHover={{ y: -5 }}>
          {url.startsWith('/#') ? (
            <a href={url}>{title}</a>
          ) : (
            <Link href={url}>{title}</Link>
          )}
        </Motion>
      ))}
      <Box borderLeft="1px solid #FFF">
        <Button
          width="10rem"
          py="0.85rem"
          px="1.2rem"
          fontSize="0.875rem"
          border="3px solid #000"
          borderRadius="0.8rem"
          boxShadow="2px 2px 0px 0px #000"
          backgroundColor="#FFF"
          variant={'outline'}
          ml="2rem"
          alignSelf="stretch"
        >
          Connect wallet
        </Button>
      </Box>
    </Box>
  </Box>
);

export default Navbar;
