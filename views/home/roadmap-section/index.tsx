import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import RoadmapCard from './roadmap-card';
import { ROADMAP_DATA } from './roadmap-card/roadmap.data';

const RoadmapSection: FC = () => {
  const [isFrameHovered, setIsFrameHovered] = useState(false);
  return (
    <Box
      mt="0"
      id="roadmap"
      variant="container"
      p={['3.375rem 1rem', '3.375rem 1rem', '3.375rem 1rem', '6rem 6.5625rem']}
      minHeight={['100vh', '100vh', '100vh', 'unset']}
      mx="auto"
      maxWidth="80rem"
    >
      <Typography
        as="h2"
        fontWeight="700"
        textAlign="center"
        fontSize={['3.125rem', '3.125rem', '3.125rem', '6rem']}
        variant="displayLarge"
        textTransform="uppercase"
        my={['0', '0', '0', '5rem']}
      >
        Roadmap
      </Typography>
      <Box
        gap="4rem"
        display={['none', 'none', 'none', 'flex']}
        height={['37.5rem', '37.5rem', '37.5rem', 'unset']}
        onMouseEnter={() => setIsFrameHovered(true)}
      >
        {ROADMAP_DATA.map((item, index) => (
          <RoadmapCard
            key={v4()}
            {...item}
            index={index}
            isHovered={isFrameHovered}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RoadmapSection;
