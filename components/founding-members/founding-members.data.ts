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
    url: 'https://twitter.com/interest_dinero',
    name: 'Interest Protocol',
    Icon: InterestProtocolLogoSVG,
  },
  {
    url: 'https://twitter.com/suishi_nft',
    name: 'Suishi',
    Icon: SuishiLogoSVG,
  },
  {
    url: 'https://twitter.com/suipiens',
    name: 'SUIPIENS',
    Icon: SuipainsLogoSVG,
  },
];
