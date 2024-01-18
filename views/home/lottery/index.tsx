import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Frame from '@/components/frame';
import Button from '@/elements/button';

import LeftIllustration from './illustraction/left-side';
import RightIllustration from './illustraction/right-side';

const LotterySection: FC = () => {
  return (
    <Box variant="container" mx="auto" id="lottery">
      <Box
        gap="1rem"
        width="100%"
        display="flex"
        flexDirection={['column', 'column', 'column', 'row']}
        pb={['2rem', '2rem', '2rem', '7rem']}
      >
        <LeftIllustration />
        <Frame
          zIndex="1"
          bg="#1B1622"
          borderRadius="2rem"
          borderColor="white"
          boxShadow="unset"
          width={['80%', '60%', '70%', '100%']}
          mx="auto"
        >
          <Box p={['1.5rem', '1.5rem', '2rem', '3rem']} color="white">
            <Typography
              variant="medium"
              fontWeight={['500', '500', '600', '700']}
              fontSize={['3rem', '4rem', '4rem', '6rem']}
              textTransform="uppercase"
              lineHeight="unset"
              m="unset"
              textAlign="center"
            >
              DReam big{<br />} Play small
            </Typography>

            <Typography
              variant="medium"
              fontSize="1.125rem"
              fontWeight="400"
              textAlign="center"
              textTransform="uppercase"
            >
              win incredibel prices in the burrrd Lottery
            </Typography>
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <a href="#" target="_blank">
              <Button
                bg="#FFF"
                mt="3rem"
                fontWeight="700"
                textAlign="center"
                borderRadius="10rem"
                border="3px solid #000"
                boxShadow="10px 10px 0px 0px #000"
                color="black"
                left={['unset', 'unset', 'unset', 'unset', '-75%']}
                fontSize={['1rem', '1.2rem', '1.5rem', '1.5rem', '2rem']}
                p={[
                  '1rem 2rem',
                  '1rem 2rem',
                  '1rem 2rem',
                  '1.5rem 2.5rem',
                  '2rem 3rem',
                ]}
                textTransform="uppercase"
                mx="auto"
              >
                I will like to Play
              </Button>
            </a>
          </Box>
        </Frame>
        <RightIllustration />
      </Box>
    </Box>
  );
};

export default LotterySection;
