import { MenuSVG } from '@/svg';
import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

const MobileNavbar: FC = () => {
  const [toggle, setToggle] = useState<Boolean>(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <Box as="nav" display={['unset', 'unset', 'unset', 'none']}>
      <Button
        zIndex="3"
        display="flex"
        variant="icon"
        width="2.5rem"
        height="2.5rem"
        color="#C7C6CA"
        cursor="pointer"
        borderRadius="50%"
        position="relative"
        alignItems="center"
        onClick={toggleMenu}
        justifyContent="center"
        background="transparent"
        border="0.50px #45464F solid"
      >
        <MenuSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
      </Button>
      {toggle && (
        <Box
          as="ul"
          top="0"
          left="0"
          zIndex="2"
          width="100%"
          bg="#1B1B1F"
          display="flex"
          color="white"
          gap="4.25rem"
          height="100vh"
          listStyle="none"
          fontWeight="500"
          fontSize="1.125rem"
          position="absolute"
          flexDirection="column"
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
      )}
    </Box>
  );
};

export default MobileNavbar;
