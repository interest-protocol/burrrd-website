import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { QuestionSVG } from '@/svg';

const DisclaimerBox: FC = () => (
  <Box
    mx="auto"
    position="relative"
    height="fit-content"
    pr={['unset', 'unset', 'unset', '1.81rem']}
  >
    <Box
      bg="#fff"
      mx="auto"
      width="95%"
      display="flex"
      flexDirection="column"
      borderRadius="0.625rem"
      border="3px solid #000"
      boxShadow="10px 10px 0px 0px #000"
      gap={['1rem', '1rem', '1rem', '1rem', '2.375rem']}
      p={['1.5rem 2.5rem', '1.5rem 2.5rem', '1.5rem 2.5rem', '2rem 3rem']}
    >
      <Box
        fontWeight="700"
        textAlign="center"
        textTransform="uppercase"
        fontSize={['1.5rem', '1.5rem', '1.5rem', '1.5rem', '2rem']}
      >
        Disclaimer
      </Box>
      <Box
        fontWeight="400"
        textAlign="center"
        fontSize={['1rem', '1rem', '1rem', '1.125rem']}
      >
        BURRRD is a meme coin primarily designed for entertainment purposes. The
        {"project's"} focus is on providing a lighthearted and enjoyable
        experiences. BURRRD is going to stab all meme coins on its way to the
        top.
      </Box>
    </Box>
    <Box
      height="8rem"
      position="absolute"
      width={['8rem', '8rem', '8rem', '8rem']}
      left={['-10%', '-6%', '-7%', '-5%', '-5%']}
      bottom={['-4rem', '-4rem', '-3rem', '-3rem', '-3.5rem']}
    >
      <QuestionSVG maxHeight="100%" maxWidth="100%" width="100%" />
    </Box>
  </Box>
);

export default DisclaimerBox;
