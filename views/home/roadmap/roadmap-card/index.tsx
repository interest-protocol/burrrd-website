import { Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Frame from '@/components/frame';

import { RoadmapCardProps } from './roadmap.types';

const RoadmapCard: FC<RoadmapCardProps> = ({ title, index, Illustration }) => (
  <Frame
    p="1rem"
    bg="white"
    width="20.7rem"
    height="24.8rem"
    position="relative"
    borderRadius="2rem"
    alignSelf={index & 1 ? 'end' : 'start'}
  >
    <Motion
      top="-1.875rem"
      right="-1.875rem"
      position="absolute"
      transformOrigin="top"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: -20.53 }}
      transition={{
        bounce: 0.5,
        type: 'spring',
        stiffness: 300,
      }}
    >
      <Frame
        display="flex"
        boxSize="small"
        width="4.75rem"
        height="4.75rem"
        borderRadius="50%"
        alignItems="center"
        justifyContent="center"
        bg={index > 0 && index < 3 ? '#F24E1E' : '#FFC701'}
      >
        <Typography
          as="span"
          variant="medium"
          fontWeight="700"
          fontSize={['1.5rem', '1.5rem', '1.5rem', '2.25rem']}
        >
          {index + 1}
        </Typography>
      </Frame>
    </Motion>
    <Typography
      p="0"
      m="0"
      as="h2"
      mb="2.375rem"
      fontWeight="700"
      textAlign="center"
      fontSize="1.875rem"
      variant="displayLarge"
      textTransform="uppercase"
    >
      {title}
    </Typography>
    <Illustration />
  </Frame>
);

export default RoadmapCard;
