import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { ADVISORS } from './advisor.data';
import { track } from '@vercel/analytics';

const Advisor: FC = () => (
  <Box p="5rem">
    <Motion
      whileInView={{ x: 0 }}
      initial={{ x: '-100%' }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 300,
        bounce: 0.5,
        duration: 2,
      }}
    >
      <Typography
        m="0"
        as="h2"
        mb="1em"
        color="white"
        fontWeight="700"
        textAlign="center"
        variant="displayLarge"
        textTransform="uppercase"
        fontSize={['2.5rem', '3.125rem', '3.125rem', '5.5rem']}
      >
        Advisors
      </Typography>
    </Motion>
    <Box
      display="flex"
      justifyContent="center"
      gap={['4rem', '4rem', '4rem', '2rem']}
      flexDirection={['column', 'column', 'column', 'row']}
    >
      {ADVISORS.map(({ name, link, img }) => (
        <Box
          key={v4()}
          gap="1rem"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Box
            cursor="pointer"
            onClick={() => {
              if (window) {
                track(name);
                window.open(link, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            <Box
              width="20rem"
              height="20rem"
              cursor="pointer"
              overflow="hidden"
              borderRadius="50%"
              transform="scale(1)"
              nHover={{ transform: 'scale(1.05)' }}
              transition="transform 300ms ease-in-out"
            >
              <img src={img} alt={name} width="100%" />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

export default Advisor;
