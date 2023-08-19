import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, useCallback, useState } from 'react';
import Slider from 'react-slick';
import { v4 } from 'uuid';

import useEventListener from '@/hooks/use-event-listener';

import CustomArrow from './custom-arrow';
import RoadmapCard from './roadmap-card';
import { ROADMAP_DATA } from './roadmap-card/roadmap.data';

const RoadmapSection: FC = () => {
  const [isFrameHovered, setIsFrameHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 62em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);
  const settingsRoadmap = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <CustomArrow isLeft />,
    nextArrow: <CustomArrow />,
    responsive: [
      {
        breakpoint: 983,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 715,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      mt="0"
      id="roadmap"
      variant="container"
      p={['3.375rem 1rem', '3.375rem 1rem', '3.375rem 1rem', '6rem 6.5625rem']}
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
      {!isMobile ? (
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
      ) : (
        <Box px="1rem">
          <Slider {...settingsRoadmap}>
            {ROADMAP_DATA.map((item, index) => (
              <Box key={v4()} py="2rem">
                <RoadmapCard
                  {...item}
                  index={index}
                  isHovered={isFrameHovered}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      )}
    </Box>
  );
};

export default RoadmapSection;
