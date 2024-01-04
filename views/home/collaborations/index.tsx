import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import Button from '@/elements/button';

import { COLLABORATORS } from './collaborators.data';

const Collaborators: FC = () => (
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
        color="white"
        fontWeight="700"
        textAlign="center"
        variant="displayLarge"
        textTransform="uppercase"
        mb={['0', '0', '0', '1em']}
        fontSize={['3.125rem', '3.125rem', '3.125rem', '5.5rem']}
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
          <a href={link} target="_blank" rel="noreferrer">
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
          </a>
          <a href={post} target="_blank" rel="noreferrer">
            <Button
              p="1rem"
              fontWeight="700"
              borderRadius="1.25rem"
              border="3px solid #000"
              boxShadow="4px 4px 0px 0px #000"
            >
              Check Post
            </Button>
          </a>
        </Box>
      ))}
    </Box>
  </Box>
);

export default Collaborators;
