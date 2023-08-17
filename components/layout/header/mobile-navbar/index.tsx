import { Box, Button, Motion } from '@interest-protocol/ui-kit';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { useTheme } from '@/context/theme-context';
import { BurrrdSVG, MenuSVG, TimesSVG } from '@/svg';

import { MENU_ITEMS } from '../navbar/menu-items';
import { menuVariants } from './menuVariants';

const MobileNavbar: FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <Box as="nav" display={['block', 'block', 'block', 'none']}>
      <Button
        zIndex="999"
        display="flex"
        right={!toggle ? 'unest' : '1rem'}
        variant="icon"
        width="2.5rem"
        height="2.5rem"
        color="#C7C6CA"
        cursor="pointer"
        borderRadius="50%"
        position={!toggle ? 'relative' : 'fixed'}
        alignItems="center"
        onClick={toggleMenu}
        justifyContent="center"
        background="transparent"
        border="1px solid"
        borderColor="#45464F"
      >
        {!toggle ? (
          <MenuSVG maxHeight="1.5rem" maxWidth="1.5rem" width="1.5rem" />
        ) : (
          <TimesSVG maxHeight="1.5rem" maxWidth="1.5rem" width="1.5rem" />
        )}
      </Button>
      <AnimatePresence>
        {toggle && (
          <Motion
            top="0"
            left="0"
            zIndex="2"
            width="100%"
            color="white"
            exit="closed"
            height="100vh"
            position="fixed"
            initial="closed"
            fontWeight="500"
            fontSize="1.125rem"
            flexDirection="column"
            variants={menuVariants}
            textTransform="uppercase"
            bg={theme.theme.colors.tertiary}
            animate={toggle ? 'open' : 'closed'}
          >
            <Box
              p="0"
              as="ul"
              mt="8rem"
              mx="auto"
              gap="5rem"
              display="flex"
              fontWeight="900"
              listStyle="none"
              textAlign="center"
              flexDirection="column"
            >
              {MENU_ITEMS.map(({ title, url }) => (
                <Motion
                  as="li"
                  key={v4()}
                  initial={{ y: 0 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={url}>{title}</Link>
                </Motion>
              ))}
            </Box>

            <Motion
              animate={{
                y: ['-95%', '-98%', '-100%'],
              }}
              position="absolute"
              height="100%"
              top="0"
              left="3rem"
              initial={{ y: '95%', rotate: 180 }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: 'reverse',
                repeatDelay: 7,
                ease: 'easeInOut',
              }}
            >
              <BurrrdSVG
                width="100%"
                maxWidth="12.625rem"
                maxHeight="3.5625rem"
              />
            </Motion>
          </Motion>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default MobileNavbar;
