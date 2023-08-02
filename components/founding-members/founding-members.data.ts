import { InterestProtocolLogoSVG, SuipainsLogoSVG, SuishiLogoSVG } from '@/svg';

export const foundingMembersSlick = {
  dots: false,
  speed: 2000,
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  centerMode: true,
  slidesToScroll: 1,
  cssEase: 'linear',
  autoplaySpeed: 2000,
  variableWidth: true,
};

export const FOUNDING_MEMBERS_LIST = [
  {
    name: 'Interest Protocol',
    Icon: InterestProtocolLogoSVG,
  },
  {
    name: 'Suishi',
    Icon: SuishiLogoSVG,
  },
  {
    name: 'SUIPIENS',
    Icon: SuipainsLogoSVG,
  },
];
