import {
  InterestProtocolLogoSVG,
  OwlitSVG,
  ReleapSVG,
  SkoolNFTSVG,
  SuipainsLogoSVG,
  SuishiLogoSVG,
} from '@/svg';

export const foundingMembersSlick = {
  dots: false,
  speed: 1000,
  autoplay: true,
  infinite: true,
  slidesToShow: 2,
  centerMode: true,
  slidesToScroll: 1,
  cssEase: 'linear',
  autoplaySpeed: 1000,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 828,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '14%',
      },
    },
    {
      breakpoint: 628,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '26%',
      },
    },
    {
      breakpoint: 550,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '24%',
      },
    },
    {
      breakpoint: 505,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '21%',
      },
    },
    {
      breakpoint: 490,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '20%',
      },
    },
    {
      breakpoint: 475,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '19%',
      },
    },
    {
      breakpoint: 460,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '19%',
      },
    },
    {
      breakpoint: 445,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '18%',
      },
    },
    {
      breakpoint: 430,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '17%',
      },
    },
    {
      breakpoint: 415,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '16%',
      },
    },
    {
      breakpoint: 400,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '15%',
      },
    },
    {
      breakpoint: 385,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '14%',
      },
    },
    {
      breakpoint: 370,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '13%',
      },
    },
    {
      breakpoint: 355,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '12%',
      },
    },
    {
      breakpoint: 340,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '5%',
      },
    },
  ],
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
  {
    url: 'https://twitter.com/owlswap_finance',
    name: 'Owlit Finance',
    Icon: OwlitSVG,
  },
  {
    url: 'https://twitter.com/skool_nft',
    name: 'Skool NFT',
    Icon: SkoolNFTSVG,
  },
  {
    url: 'https://twitter.com/Releap_IO',
    name: 'Releap Protocol',
    Icon: ReleapSVG,
  },
];
