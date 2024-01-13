import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import Button from '@/elements/button';

import { COLLABORATORS } from './collaborators.data';
import { track } from '@vercel/analytics';

const Collaborators: FC = () => (
  <Box p="5rem" display="flex" flexDirection="column" alignItems="center">
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
        mb="1rem"
        color="white"
        fontWeight="700"
        variant="displayLarge"
        textTransform="uppercase"
        fontSize={['2.5rem', '3.125rem', '3.125rem', '5.5rem']}
      >
        Collaborations
      </Typography>
    </Motion>
    <Box
      display="flex"
      justifyContent="center"
      gap={['4rem', '4rem', '4rem', '2rem']}
      flexDirection={['column', 'column', 'column', 'row']}
    >
      {COLLABORATORS.map(({ name, link, post, img }) => (
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
              width="15rem"
              height="15rem"
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
          {post && (
            <Box
              cursor="pointer"
              onClick={() => {
                if (window) {
                  track(`${name} post`);
                  window.open(post, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <Button
                p="1rem"
                fontWeight="700"
                borderRadius="1.25rem"
                border="3px solid #000"
                boxShadow="4px 4px 0px 0px #000"
              >
                Check Post
              </Button>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  </Box>
);

export default Collaborators;
