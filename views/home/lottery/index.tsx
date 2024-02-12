import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Button from '@/elements/button';
import { BurrrdCoinsSVG } from '@/svg';

const Lottery: FC = () => (
  <Box
    variant="container"
    mx="auto"
    id="lottery"
    bg="#1B1622"
    display="flex"
    justifyContent="center"
    flexDirection={['column', 'column', 'column', 'row']}
    alignItems="center"
  >
    <Box
      gap="1rem"
      display="flex"
      flexDirection={['column', 'column', 'column', 'row']}
      pb={['2rem', '2rem', '2rem', '5rem']}
      mt={['2rem', '2rem', '2rem', '5rem']}
    >
      <Box
        zIndex="1"
        borderColor="white"
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
            Dream big{<br />} Play small
          </Typography>

          <Typography
            variant="medium"
            fontSize="1.125rem"
            fontWeight="400"
            textAlign="center"
            textTransform="uppercase"
          >
            win incredible prizes in the burrrd Lottery
          </Typography>
          <a href="https://burrrdlottery.com" target="_blank" rel="noreferrer">
            <Button
              bg="#FFF"
              mt="3rem"
              mx="auto"
              color="black"
              fontWeight="700"
              textAlign="center"
              borderRadius="10rem"
              border="3px solid #000"
              textTransform="uppercase"
              boxShadow="10px 10px 0px 0px #000"
              left={['unset', 'unset', 'unset', 'unset', '-75%']}
              fontSize={['1rem', '1.2rem', '1.5rem', '1.5rem', '2rem']}
              p={[
                '1rem 2rem',
                '1rem 2rem',
                '1rem 2rem',
                '1.5rem 2.5rem',
                '2rem 3rem',
              ]}
            >
              Play and have fun
            </Button>
          </a>
        </Box>
      </Box>
    </Box>
    <Box
      height="37.5rem"
      width="34.75rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <BurrrdCoinsSVG width="100%" maxHeight="30rem" maxWidth="30rem" />
    </Box>
  </Box>
);

export default Lottery;
