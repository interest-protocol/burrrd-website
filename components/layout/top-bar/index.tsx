import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import toast from 'react-hot-toast';
import Slider from 'react-slick';

const TopBar: FC = () => {
  const copyAddress = () => {
    window.navigator.clipboard.writeText(
      'F8qtcT3qnwQ24CHksuRrSELtm5k9ob8j64xAzj3JjsMs'
    );
    toast('Address copied to Clipboard');
  };

  const goToLottery = () => {
    window.open('https://burrrdlottery.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <Box
      top="0"
      zIndex="10"
      width="100%"
      height="3rem"
      position="fixed"
      cursor="pointer"
      fontFamily="ASAP"
      textAlign="center"
    >
      <Slider
        autoplay
        dots={false}
        speed={2000}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
      >
        <Box>
          <Box
            gap="0.2rem"
            bg="#7B2FC4"
            color="#fff"
            height="3rem"
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            onClick={copyAddress}
            justifyContent="center"
          >
            <strong>Coin Address:</strong>
            F8qtcT3qnwQ24CHksuRrSELtm5k9ob8j64xAzj3JjsMs
          </Box>
        </Box>
        <Box>
          <Box
            gap="0.2rem"
            bg="#FF2F3C"
            color="#fff"
            height="3rem"
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            onClick={goToLottery}
            justifyContent="center"
          >
            Check out our first integration <strong>BURRRD Lottery</strong>
          </Box>
        </Box>
      </Slider>
    </Box>
  );
};
export default TopBar;
