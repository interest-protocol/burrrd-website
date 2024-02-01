import { Box } from '@interest-protocol/ui-kit';
import { FC, useRef } from 'react';
import Slider from 'react-slick';
import { v4 } from 'uuid';

import { AMBASSADORS, sliderResponsiveness } from './ambassadors.data';
import Card from './card';
import TitleCard from './card/title-card';
import Controllers from './controllers';
import { ControllerRef } from './controllers/controllers.types';

const Ambassadors: FC = () => {
  const sliderRef = useRef<Slider>(null);
  const controllersRef = useRef<ControllerRef>(null);

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
        overflow="visible"
        maxWidth="82.5rem"
        className="card-slide"
        justifyContent="center"
      >
        <Slider
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          ref={sliderRef}
          speed={800}
          dots={false}
          arrows={false}
          infinite={false}
          slidesToShow={3}
          initialSlide={0}
          slidesToScroll={1}
          responsive={sliderResponsiveness}
          afterChange={(index) => controllersRef.current?.updateButtons(index)}
        >
          <Box px="1rem" py="1rem">
            <TitleCard />
          </Box>
          {AMBASSADORS.map((ambassor) => (
            <Box key={v4()} py="1rem" px="1rem">
              <Card {...ambassor} />
            </Box>
          ))}
        </Slider>
        <Controllers sliderRef={sliderRef} ref={controllersRef} />
      </Box>
    </Box>
  );
};

export default Ambassadors;
