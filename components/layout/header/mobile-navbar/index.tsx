import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import { MenuSVG } from '@/svg';

const MobileNavbar: FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleMenu = () => {
    setToggle(false);
  };

  return (
    <Box as="nav" display={['block', 'block', 'block', 'none']}>
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
        border="1px solid"
        borderColor="#45464F"
      >
        <MenuSVG maxHeight="1.5rem" maxWidth="1.5rem" width="1.5rem" />
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
              Tokenomics
            </Typography>
          </Box>
          <Box as="li">
            <Typography as="a" variant="medium">
              Roadmap
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MobileNavbar;
