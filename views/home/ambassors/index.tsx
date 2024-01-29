import { Box } from '@interest-protocol/ui-kit';
import { FC, useRef } from 'react';
import Slider from 'react-slick';
import { v4 } from 'uuid';

import { AMBASSORS } from './ambassors.data';
import Card from './card';
import TitleCard from './card/title-card';
import Controllers from './controllers';

const Ambassors: FC = () => {
  const sliderRef = useRef<Slider>(null);

  const sliderResponsiviness = [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <Box
      py="5rem"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Box
        width="100%"
        p="6rem 2rem"
        overflow="hidden"
        maxWidth="82.5rem"
        justifyContent="center"
      >
        <Slider
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          autoplay
          dots={false}
          speed={1500}
          arrows={false}
          ref={sliderRef}
          slidesToShow={3}
          infinite={false}
          slidesToScroll={2}
          responsive={sliderResponsiviness}
        >
          <Box px="1rem" py="1rem">
            <TitleCard />
          </Box>
          {AMBASSORS.map((ambassor) => (
            <Box key={v4()} py="1rem" px="1rem">
              <Card {...ambassor} />
            </Box>
          ))}
        </Slider>
        <Controllers handleNext={handleNext} handlePrevious={handlePrevious} />
      </Box>
    </Box>
  );
};

export default Ambassors;
