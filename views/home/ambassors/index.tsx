import { Box } from '@interest-protocol/ui-kit';
import { FC, useRef, useState } from 'react';
import Slider from 'react-slick';
import { v4 } from 'uuid';

import { AMBASSORS, sliderResponsiviness } from './ambassors.data';
import Card from './card';
import TitleCard from './card/title-card';
import Controllers from './controllers';

const Ambassors: FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [isUserInteracting, setUserInteracting] = useState(false);

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

  const handleAfterChange = () => {
    setUserInteracting(false);
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
          autoplay={!isUserInteracting}
          dots={false}
          speed={1000}
          arrows={false}
          ref={sliderRef}
          infinite={true}
          slidesToShow={3}
          initialSlide={0}
          slidesToScroll={2}
          responsive={sliderResponsiviness}
          afterChange={handleAfterChange}
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
