import Frame from '@/components/frame';
import { SOCIALS } from '@/constants';
import { BurrrdSVG, ConverstionBalloonSVG } from '@/svg';
import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

const Footer: FC = () => {
  return (
    <Box
      zIndex={3}
      as="footer"
      bg="#8C4FE8"
      width="100%"
      px="12.5rem"
      display="flex"
      pt="6.875rem"
      pb="16.125rem"
      gridColumn="1/-1"
    >
      <Box position="relative" flex="1">
        <Box
          left="-3.125rem"
          bottom="-8.75rem"
          position="absolute"
          transform="scale(1.3)"
        >
          <BurrrdSVG maxHeight="21.875rem" maxWidth="21.25rem" width="100%" />
        </Box>
        <Box position="absolute" bottom="-1.5625rem" left="10.625rem">
          <Typography
            top="20%"
            left="40%"
            color="white"
            variant="small"
            fontWeight="700"
            fontSize="1.5rem"
            position="absolute"
            transform="translate(-50%, -50%)"
          >
            Follow me
          </Typography>
          <ConverstionBalloonSVG
            width="100%"
            maxHeight="21.875rem"
            maxWidth="21.25rem"
          />
        </Box>
      </Box>
      <Box flex="1" display="flex" flexDirection="column" gap="3.75rem">
        <Typography
          m="0"
          color="white"
          variant="small"
          fontSize="6rem"
          fontWeight="700"
          textTransform="uppercase"
        >
          Follow Us
        </Typography>
        <Typography variant="small" color="white" fontSize="1.125rem">
          Stay tuned for our latest updates and announcements. Follow us on
          socials.
        </Typography>
        <Box display="flex" gap=".5rem">
          {SOCIALS.map(({ Icon, name, url }) => (
            <Frame
              key={v4()}
              bg="white"
              display="flex"
              width="7.5rem"
              height="7.5rem"
              boxSize="small"
              borderRadius="50%"
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
            >
              <Icon maxHeight="2rem" maxWidth="2rem" width="100%" />
              <Typography variant="medium" m="0">
                {name}
              </Typography>
            </Frame>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
