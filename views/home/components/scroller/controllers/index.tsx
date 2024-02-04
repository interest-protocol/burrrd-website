import { Box, Button } from '@interest-protocol/ui-kit';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { ResponsiveObject, Settings } from 'react-slick';

import { CircleArrowLeftSVG, CircleArrowRightSVG } from '@/svg';

import { ControllersProps } from './controllers.types';

const Controllers = forwardRef(({ sliderRef }: ControllersProps, ref) => {
  const [isPrevDisabled, setPrevDisabled] = useState(true);
  const [isNextDisabled, setNextDisabled] = useState(false);

  const getCurrentSlidesToShow = () => {
    const breakpoint = (sliderRef.current?.state as any).breakpoint ?? null;

    if (!breakpoint) return sliderRef.current?.props.slidesToShow ?? 0;

    return (
      (
        (sliderRef.current?.props.responsive as Array<ResponsiveObject>).find(
          (key) => key.breakpoint === breakpoint
        )?.settings as Settings
      ).slidesToShow ?? 0
    );
  };

  useEffect(() => {
    const slidesToShow = getCurrentSlidesToShow();

    const listSize =
      sliderRef.current?.innerSlider?.list?.querySelectorAll('.slick-slide')
        .length ?? 1;

    if (listSize <= slidesToShow) {
      setPrevDisabled(true);
      setNextDisabled(true);
    }
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      updateButtons: (currentIndex: number) => {
        const slidesToShow = getCurrentSlidesToShow();

        const listSize =
          sliderRef.current?.innerSlider?.list?.querySelectorAll('.slick-slide')
            .length ?? 1;

        if (currentIndex === 0 && !isPrevDisabled) setPrevDisabled(true);

        if (currentIndex !== 0 && isPrevDisabled) setPrevDisabled(false);

        if (currentIndex >= listSize - slidesToShow && !isNextDisabled)
          setNextDisabled(true);

        if (currentIndex < listSize - slidesToShow && isNextDisabled)
          setNextDisabled(false);
      },
    }),
    [isPrevDisabled, isNextDisabled]
  );

  const handlePrevious = () => sliderRef.current?.slickPrev();

  const handleNext = () => sliderRef.current?.slickNext();

  return (
    <Box display="flex" pt="1rem" gap="0.625rem" justifyContent="flex-end">
      <Button
        p="0"
        bg="none"
        border="none"
        variant="tonal"
        cursor="pointer"
        onClick={handlePrevious}
        disabled={isPrevDisabled}
        nDisabled={{ opacity: 0.7, cursor: 'not-allowed' }}
      >
        <CircleArrowLeftSVG width="100%" maxWidth="2.5rem" maxHeight="2.5rem" />
      </Button>
      <Button
        p="0"
        bg="none"
        border="none"
        variant="tonal"
        cursor="pointer"
        onClick={handleNext}
        disabled={isNextDisabled}
        nDisabled={{ opacity: 0.7, cursor: 'not-allowed' }}
      >
        <CircleArrowRightSVG
          width="100%"
          maxWidth="2.5rem"
          maxHeight="2.5rem"
        />
      </Button>
    </Box>
  );
});

Controllers.displayName = Controllers.name;

export default Controllers;
