import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import Frame from '@/components/frame';
import PlusSVG from '@/components/svg/plus';
import { useTheme } from '@/context/theme-context';
import Button from '@/elements/button';
import { MinusSVG } from '@/svg';

const About: FC = () => {
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
        mx="3rem"
        minHeight="19.813rem"
        width={['100%', '100%', '100%', '60%']}
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
          bg="#111"
          borderColor="#FFF"
          position="relative"
          border="1px solid"
          borderRadius="1rem"
          boxShadow="8px 8px 0px 0px #FFF"
        >
          <Motion
            pb="0"
            pt="1rem"
            px="2rem"
            color="white"
            overflow="hidden"
            animate={{ height: 'auto' }}
            transition={{ duration: 300 }}
            fontSize={['1rem', '1rem', '1rem', '1.5rem']}
            lineHeight={['1.5rem', '1.5rem', '1.5rem', '2rem']}
          >
            <Box
              mb="5rem"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
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
                color="#000"
                size="small"
                width="3rem"
                height="3rem"
                border="none"
                display="flex"
                borderRadius="50%"
                alignItems="center"
                onClick={toggleText}
                justifyContent="center"
              >
                {toggle ? (
                  <MinusSVG width="100%" maxHeight="2rem" maxWidth="2rem" />
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
            {toggle && (
              <>
                <Typography
                  variant="medium"
                  color="white"
                  fontSize={['1rem', '1rem', '1rem', '1.5rem']}
                >
                  But BURRRD ins&rsquo;t just on a mission to eliminate the
                  rubbish; he has a bigger plan in mind. As he soars through the
                  crypto skies, the feathered hero is on a mission to take
                  everyone to the moon with his memetic power.
                </Typography>
                <Typography
                  variant="medium"
                  color="white"
                  fontSize={['1rem', '1rem', '1rem', '1.5rem']}
                >
                  So, watch out, world! BURRRD is armed and ready to bring a
                  slice of justice to the crypto realm. Prepare to witness the
                  epic rise of the one and only BURRRD, as he carves his way
                  through the chaos and leads us all to the moonhalla, one meme
                  at a time!
                </Typography>
              </>
            )}
          </Motion>
        </Frame>
      </Box>
    </Box>
  );
};

export default About;
