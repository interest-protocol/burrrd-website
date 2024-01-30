import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import toast from 'react-hot-toast';
import Slider from 'react-slick';
import { v4 } from 'uuid';

import { AS_SEEN_ON } from '@/views/home/as-seen-on/as-seen-on.data';

const TopBar: FC = () => {
  const copyAddress = () => {
    window.navigator.clipboard.writeText(
      'F8qtcT3qnwQ24CHksuRrSELtm5k9ob8j64xAzj3JjsMs'
    );
    toast('Address copied to Clipboard');
  };

  const checkPost = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
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
        {AS_SEEN_ON.map(({ post, name }) => (
          <Box key={v4()}>
            <Box
              gap="0.2rem"
              bg="#FFC701"
              color="#000"
              height="3rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={() => checkPost(post)}
            >
              <strong>{name}:</strong>
              Click to check the Post
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
export default TopBar;
