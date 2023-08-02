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
      px="7.5rem"
      bg="#8C4FE8"
      width="100%"
      display="flex"
      pt="5.625rem"
      pb="14.375rem"
      gridColumn="1/-1"
    >
      <Box position="relative" flex="1">
        <Box left="-3.125rem" bottom="-8.75rem" position="absolute">
          <BurrrdSVG maxHeight="21.875rem" maxWidth="21.25rem" width="100%" />
        </Box>
        <Box position="absolute" bottom="-1.5625rem" left="9.375rem">
          <Typography
            top="20%"
            left="37%"
            color="white"
            variant="small"
            fontWeight="700"
            fontSize="1.5rem"
            position="absolute"
            textTransform="uppercase"
            transform="translate(-50%, -50%)"
          >
            Follow me
          </Typography>
          <ConverstionBalloonSVG
            width="90%"
            maxWidth="21.25rem"
            maxHeight="21.875rem"
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
              <Typography
                m="0"
                variant="medium"
                fontFamily="Roboto Mono"
                textDecoration="underline"
              >
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
