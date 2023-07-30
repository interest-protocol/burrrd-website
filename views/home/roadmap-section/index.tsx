import { useTheme } from '@/context/theme-context';
import Button from '@/elements/button';
import { HeroSVG } from '@/svg';
import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import RoadmapCard from './roadmap-card';
import { ROADMAP_DATA } from './roadmap-card/roadmap.data';
import { v4 } from 'uuid';

const RoadmapSection: FC = () => {
  const { theme } = useTheme();
  return (
    <Box
      mt="0"
      bg="white"
      variant="container"
      p="7.5rem 9.375rem"
      borderBottom="2px solid black"
    >
      <Typography
        as="h2"
        fontWeight="700"
        textAlign="center"
        fontSize="3.75rem"
        variant="displayLarge"
        textTransform="uppercase"
      >
        Roadmap
      </Typography>
      <Box display="flex" gap="5rem">
        {ROADMAP_DATA.map((item, index) => (
          <RoadmapCard key={v4()} {...item} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export default RoadmapSection;
