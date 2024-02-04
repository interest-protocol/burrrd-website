import { RefObject } from 'react';
import Slider from 'react-slick';

export interface ControllersProps {
  sliderRef: RefObject<Slider>;
}
export interface ControllerRef {
  updateButtons: (index: number) => void;
}
