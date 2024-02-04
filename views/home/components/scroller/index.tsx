import { Box } from '@interest-protocol/ui-kit';
import { FC, useRef } from 'react';
import Slider from 'react-slick';
import { v4 } from 'uuid';

import Card from '../card';
import Controllers from './controllers';
import { ControllerRef } from './controllers/controllers.types';
import { ScrollerProps } from './scroller.types';

const Scroller: FC<ScrollerProps> = ({
  TitleWrapper,
  data,
  scrollerResponsiveness,
}) => {
  const sliderRef = useRef<Slider>(null);
  const controllersRef = useRef<ControllerRef>(null);

  return (
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
        responsive={scrollerResponsiveness}
        afterChange={(index) => controllersRef.current?.updateButtons(index)}
      >
        <Box px="1rem" py="1rem">
          {TitleWrapper}
        </Box>
        {data.map((item) => (
          <Box key={v4()} py="1rem" px="1rem">
            <Card {...item} />
          </Box>
        ))}
      </Slider>
      <Controllers ref={controllersRef} sliderRef={sliderRef} />
    </Box>
  );
};

export default Scroller;
