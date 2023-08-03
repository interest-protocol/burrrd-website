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
      display="flex"
      pt="5.625rem"
      gridColumn="1/-1"
      px={['1.25rem', '1.25rem', '1.25rem', '7.5rem']}
      pb={['25.375rem', '14.375rem', '14.375rem', '14.375rem']}
      flexDirection={['column-reverse', 'column', 'column', 'row']}
    >
      <Box position="relative" flex="1">
        <Box
          position="absolute"
          bottom={['-24rem', '-8.75rem', '-8.75rem', '-8.75rem']}
          left={['-1.125rem', '-3.125rem', '-3.125rem', '-3.125rem']}
          transform={['scale(0.8)', 'scale(0.8)', 'scale(0.8)', 'scale(1)']}
        >
          <BurrrdSVG maxHeight="21.875rem" maxWidth="21.25rem" width="100%" />
        </Box>
        <Box
          position="absolute"
          bottom={['-15.9rem', '-1.5625rem', '-1.5625rem', '-1.5625rem']}
          left={['10.7rem', '9.375rem', '9.375rem', '9.375rem']}
        >
          <Typography
            top="20%"
            left="37%"
            color="white"
            variant="small"
            fontWeight="700"
            fontSize={['1rem', '1rem', '1rem', '1.5rem']}
            position="absolute"
            textTransform="uppercase"
            transform="translate(-50%, -50%)"
          >
            Follow me
          </Typography>
          <ConverstionBalloonSVG
            width="100%"
            maxWidth="21.25rem"
            maxHeight="21.875rem"
          />
        </Box>
      </Box>
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        gap={['1.25rem', '1.25rem', '1.25rem', '3.75rem']}
      >
        <Typography
          m="0"
          color="white"
          variant="small"
          fontWeight="700"
          textTransform="uppercase"
          fontSize={['3.125rem', '3.125rem', '3.125rem', '6rem']}
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
              boxSize="small"
              borderRadius="50%"
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
              width={['5.625rem', '5.625rem', '5.625rem', '7.5rem']}
              height={['5.625rem', '5.625rem', '5.625rem', '7.5rem']}
            >
              <Icon maxHeight="2rem" maxWidth="2rem" width="100%" />
              <Typography
                m="0"
                variant="medium"
                fontFamily="Roboto Mono"
                textDecoration="underline"
                fontSize={['.75rem', '.75rem', '.75rem', '1rem']}
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
