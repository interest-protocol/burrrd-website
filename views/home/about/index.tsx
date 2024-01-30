import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { AnimatePresence } from 'framer-motion';
import { FC, useState } from 'react';

import Frame from '@/components/frame';
import { useTheme } from '@/context/theme-context';
import Button from '@/elements/button';
import { HeadToPrizeSVG } from '@/svg';

const AboutSection: FC = () => {
  const wrapperVariants = {
    open: {
      scale: 1,
      transition: { duration: 0.3, delayChildren: 1 },
    },
    closed: {
      scale: 0,
      transition: { duration: 0.8 },
    },
  };
  const { theme } = useTheme();
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleText = () => {
    setToggle(!toggle);
  };
  return (
    <Box gridColumn="1/-1" mx="auto" bg="#000000" id="about">
      <Box
        width="100%"
        display="flex"
        position="relative"
        flexDirection={['column', 'column', 'column', 'row']}
      >
        <Box
          position="absolute"
          top={['-1%', '-1%', '-1%', '-2rem']}
          width={['7rem', '9rem', '10rem', 'unset']}
          left={['15.6%', '15.6%', '15.6%', '17.125rem']}
          transform={[
            'rotate(0.75deg) scale(1.7)',
            'rotate(0.75deg) scale(1.3)',
            'rotate(0.75deg) scale(1.3)',
            'rotate(0deg) scale(1.5)',
            'rotate(0.75deg) scale(1.7)',
          ]}
        >
          <HeadToPrizeSVG
            width="100%"
            maxWidth="18.87444rem"
            maxHeight="18.87444rem"
          />
        </Box>
        <Box
          marginTop={['8rem', '8rem', '8rem', '15rem', '17rem']}
          p={['2.5rem 1.25rem', '2.5rem 1.25rem', '2.5rem 1.25rem', '6rem']}
          borderBottom={[
            '2px solid black',
            '2px solid black',
            '2px solid black',
            'none',
          ]}
        >
          <Motion
            whileInView={{ x: 0 }}
            initial={{ x: '-100%' }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 300,
              bounce: 0.5,
              duration: 2,
            }}
          >
            <Typography
              as="h2"
              margin="0"
              color="white"
              fontWeight="700"
              textAlign="center"
              variant="displayLarge"
              textTransform="uppercase"
              mb={['0', '0', '0', '1em']}
              fontSize={['3.125rem', '3.125rem', '3.125rem', '5.5rem']}
            >
              About
            </Typography>
          </Motion>
        </Box>
        <Box
          width="100%"
          p={['1.5625rem', '1.5625rem', '1.5625rem', '10%']}
          py={['3.0625rem', '3.0625rem', '3.0625rem', '14rem']}
          borderLeft={['none', 'none', 'none', '2px solid black']}
          bg="#000000"
          nAfter={{
            top: '0',
            right: '0',
            zIndex: '-1',
            content: '""',
            height: '100%',
            width: '100vw',
            position: 'absolute',
            transform: 'translate(100%, 0)',
            background: `${theme.theme.colors.secondary}`,
          }}
        >
          <Frame
            zIndex="1"
            bg="#1B1622"
            position="relative"
            border="1px solid"
            borderRadius="2rem"
            borderColor="white"
            boxShadow="4px 4px 0px 0px #FFF"
          >
            <Box
              pb="0"
              pt="1rem"
              px="2rem"
              color="white"
              fontSize={['1rem', '1rem', '1rem', '1.5rem']}
              lineHeight={['1.5rem', '1.5rem', '1.5rem', '2rem']}
            >
              <Typography variant="medium" fontWeight="400">
                BURRRD had enough of the never-ending sh¡tcoin circus, with all
                those ridiculous dog derivatives and even that green thing. They
                had their moment to shine, but now it is BURRRD&rsquo;s turn to
                spread his wings!
              </Typography>

              <Typography variant="medium">
                With a determined glint in his beady eyes, BURRRD holds his
                blade above, leading his flock to slay all the wretched
                sh!tcoins that dare cross his path.
              </Typography>
            </Box>
            <AnimatePresence>
              {toggle && (
                <Motion
                  layout
                  pt="0"
                  px="2rem"
                  exit={{ scale: 0 }}
                  initial={{ scale: 0 }}
                  variants={wrapperVariants}
                  fontSize={['1rem', '1rem', '1rem', '1.5rem']}
                  animate={
                    toggle ? wrapperVariants.open : wrapperVariants.closed
                  }
                  lineHeight={['1.5rem', '1.5rem', '1.5rem', '2rem']}
                >
                  <Typography variant="medium" color="white">
                    But BURRRD ins&rsquo;t just on a mission to eliminate the
                    rubbish; he has a bigger plan in mind. As he soars through
                    the crypto skies, the feathered hero is on a mission to take
                    everyone to the moon with his memetic power.
                  </Typography>
                  <Typography variant="medium" color="white">
                    So, watch out, world! BURRRD is armed and ready to bring a
                    slice of justice to the crypto realm. Prepare to witness the
                    epic rise of the one and only BURRRD, as he carves his way
                    through the chaos and leads us all to the moonhalla, one
                    meme at a time!
                  </Typography>
                </Motion>
              )}
            </AnimatePresence>
            <Box
              p="2rem"
              width="100%"
              display="flex"
              justifyContent="center"
              borderTop="2px solid white"
            >
              <Button
                py="0.5rem"
                px="1.5rem"
                size="small"
                border="none"
                color="#00174B"
                fontSize="1.5rem"
                borderRadius="1rem"
                onClick={toggleText}
              >
                {toggle ? 'View Less' : 'View More'}
              </Button>
            </Box>
          </Frame>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
