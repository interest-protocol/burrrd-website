import { Box, Button } from '@interest-protocol/ui-kit';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';

import useEventListener from '@/hooks/use-event-listener';
import { CircleArrowLeftSVG, CircleArrowRightSVG } from '@/svg';

import { AMBASSORS } from './ambassors.data';
import Card from './card';
import TitleCard from './card/title-card';

const Ambassors: FC = () => {
  const [cardWidth, setCardWith] = useState<number>(26);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const boxRef = useRef<HTMLDivElement>(null);

  const handelResizeScreen = useCallback(() => {
    const screenWidth = window.innerWidth;

    setScreenWidth(screenWidth);
  }, []);

  useEventListener('resize', handelResizeScreen, true);

  useEffect(() => {
    const extraSmallScreenWidth = 400;
    const smallScreenWidth = 600;
    const mediumScreenWidth = 998;

    let newCardWidth = 0;

    if (screenWidth < extraSmallScreenWidth) {
      newCardWidth = 22 * 16;
    } else if (screenWidth < smallScreenWidth) {
      newCardWidth = 27 * 16;
    } else if (screenWidth <= mediumScreenWidth) {
      newCardWidth = 26 * 16;
    } else {
      newCardWidth = 28 * 16;
    }

    setCardWith(newCardWidth);
  }, [screenWidth]);

  const handleScroll = (direction: 'left' | 'right') => {
    console.log(screenWidth);
    const box = boxRef.current;

    if (box !== null) {
      const currentScroll = box.scrollLeft;
      const newScroll =
        direction === 'left'
          ? currentScroll - cardWidth
          : currentScroll + cardWidth;

      box.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      py="5rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="100%" p="6rem 1.5rem" justifyContent="center">
        <Box
          py="2rem"
          px={['0', '0.5rem', '1rem']}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          ref={boxRef}
          display="flex"
          transition="0.3s"
          overflowX="scroll"
          flexDirection="row"
          gap={['2rem', '2rem', '4rem', '2rem']}
        >
          <TitleCard />
          {AMBASSORS.map((ambassor) => (
            <Box key={v4()} display="flex">
              <Card {...ambassor} />
            </Box>
          ))}
        </Box>
        <Box display="flex" gap="0.625rem" justifyContent="flex-end">
          <Button
            p="0"
            bg="none"
            border="none"
            variant="tonal"
            onClick={() => handleScroll('left')}
          >
            <CircleArrowLeftSVG
              width="100%"
              maxWidth="2.5rem"
              maxHeight="2.5rem"
            />
          </Button>
          <Button
            p="0"
            bg="none"
            border="none"
            variant="tonal"
            onClick={() => handleScroll('right')}
          >
            <CircleArrowRightSVG
              width="100%"
              maxWidth="2.5rem"
              maxHeight="2.5rem"
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Ambassors;
