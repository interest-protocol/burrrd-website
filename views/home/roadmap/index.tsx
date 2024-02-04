import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { CleaningDogeSVG, RoadmapPathSVG } from '@/svg';

import RoadmapCard from './roadmap-card';
import { ROADMAP_DATA } from './roadmap-card/roadmap.data';

const Roadmap: FC = () => (
  <Box
    mx="auto"
    pb="5rem"
    mt="20rem"
    id="roadmap"
    position="relative"
    px={['1rem', '1rem', '1rem', '5rem']}
    width={['20rem', '33rem', '45rem', '60rem', '80rem']}
  >
    <Box
      top="10rem"
      width="55rem"
      right="5.5rem"
      height="200rem"
      position="absolute"
      display={['none', 'none', 'none', 'none', 'block']}
    >
      <RoadmapPathSVG maxHeight="100%" maxWidth="100%" width="100%" />
    </Box>
    <Box display="flex" flexDirection="column" gap="6rem">
      {ROADMAP_DATA.map((item, index) => (
        <RoadmapCard key={v4()} {...item} index={index} />
      ))}
    </Box>
    <Box
      ml="-3rem"
      maxWidth="40rem"
      mt={['2rem', '2rem', '2rem', '2rem', '-13rem']}
    >
      <CleaningDogeSVG maxWidth="58.75rem" maxHeight="31.25rem" width="100%" />
    </Box>
  </Box>
);

export default Roadmap;
