import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { AnimatePresence } from 'framer-motion';
import { FC, useState } from 'react';

import Frame from '@/components/frame';
import PlusSVG from '@/components/svg/plus';
import { useTheme } from '@/context/theme-context';
import Button from '@/elements/button';

const About: FC = () => {
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
    <Box
      bg="#111"
      id="about"
      width="100%"
      display="flex"
      alignItems="center"
      minHeight="31.813rem"
      justifyContent="center"
    >
      <Box
        my="5rem"
        width="60%"
        minHeight="19.813rem"
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
          bg="#111"
          position="relative"
          border="1px solid"
          borderRadius="1rem"
          borderColor="#FFF"
          boxShadow="8px 8px 0px 0px #FFF"
        >
          <Box
            pb="0"
            pt="1rem"
            px="2rem"
            color="white"
            fontSize={['1rem', '1rem', '1rem', '1.5rem']}
            lineHeight={['1.5rem', '1.5rem', '1.5rem', '2rem']}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb="10rem"
            >
              <Typography
                fontFamily="Roboto"
                fontSize="2rem"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="0.156rem"
                variant="medium"
                textTransform="uppercase"
              >
                About
              </Typography>
              <Button
                size="small"
                height="3rem"
                width="3rem"
                border="none"
                color="#000"
                borderRadius="100%"
                fontSize="1.5rem"
                onClick={toggleText}
              >
                {toggle ? (
                  '-'
                ) : (
                  <PlusSVG width="100%" maxHeight="2rem" maxWidth="2rem" />
                )}
              </Button>
            </Box>
            <Typography variant="medium" fontWeight="400">
              BURRRD had enough of the never-ending sh¡tcoin circus, with all
              those ridiculous dog derivatives and even that green thing. They
              had their moment to shine, but now it is BURRRD&rsquo;s turn to
              spread his wings!
            </Typography>

            <Typography variant="medium">
              With a determined glint in his beady eyes, BURRRD holds his blade
              above, leading his flock to slay all the wretched sh!tcoins that
              dare cross his path.
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
                animate={toggle ? wrapperVariants.open : wrapperVariants.closed}
                lineHeight={['1.5rem', '1.5rem', '1.5rem', '2rem']}
              >
                <Typography variant="medium" color="white">
                  But BURRRD ins&rsquo;t just on a mission to eliminate the
                  rubbish; he has a bigger plan in mind. As he soars through the
                  crypto skies, the feathered hero is on a mission to take
                  everyone to the moon with his memetic power.
                </Typography>
                <Typography variant="medium" color="white">
                  So, watch out, world! BURRRD is armed and ready to bring a
                  slice of justice to the crypto realm. Prepare to witness the
                  epic rise of the one and only BURRRD, as he carves his way
                  through the chaos and leads us all to the moonhalla, one meme
                  at a time!
                </Typography>
              </Motion>
            )}
          </AnimatePresence>
        </Frame>
      </Box>
    </Box>
  );
};

export default About;
