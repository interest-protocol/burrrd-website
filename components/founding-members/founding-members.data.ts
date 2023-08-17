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
    url: 'https://www.interestprotocol.com/',
    name: 'Interest Protocol',
    Icon: InterestProtocolLogoSVG,
  },
  {
    url: 'https://suishi.io/',
    name: 'Suishi',
    Icon: SuishiLogoSVG,
  },
  {
    url: 'https://suipiens.com/',
    name: 'SUIPIENS',
    Icon: SuipainsLogoSVG,
  },
  {
    url: 'https://owlit.io',
    name: 'Owlit Finance',
    Icon: OwlitSVG,
  },
  {
    url: 'https://linktr.ee/skoolnft',
    name: 'Skool NFT',
    Icon: SkoolNFTSVG,
  },
  {
    url: 'http://app.releap.xyz',
    name: 'Releap Protocol',
    Icon: ReleapSVG,
  },
];
