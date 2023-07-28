import Frame from '@/components/frame';
import { useTheme } from '@/context/theme-context';
import Button from '@/elements/button';
import { HeadToPrizeSVG } from '@/svg';
import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

const AboutSection: FC = () => {
  const { theme } = useTheme();
  const [toggle, setToggle] = useState<Boolean>(false);

  const toggleText = () => {
    setToggle(!toggle);
  };
  return (
    <Box variant="container">
      <Box
        width="100%"
        display="flex"
        gridColumn="1/-1"
        position="relative"
        borderBottom="2px solid black"
      >
        <Box
          top="-78px"
          left="185px"
          position="absolute"
          transform="scale(1.3)"
        >
          <HeadToPrizeSVG maxHeight="800px" maxWidth="500px" width="150%" />
        </Box>
        <Box p="6rem" marginTop="auto">
          <Typography
            as="h2"
            color="black"
            fontSize="5.5rem"
            variant="displayLarge"
            textTransform="uppercase"
          >
            About
          </Typography>
        </Box>
        <Box
          p="186px"
          width="100%"
          minHeight="100%"
          borderLeft="2px solid black"
          bg={theme.theme.colors.secondary}
        >
          <Frame
            zIndex="1"
            position="relative"
            borderRadius="2rem"
            bg={theme.theme.colors.septenary}
          >
            <Box fontSize="1.5rem" p="2rem" pb="0">
              <Typography variant="medium">
                BURRRD had enough of the never-ending sh¡tcoin circus, with all
                those ridiculous dog derivatives and even that green thing. They
                had their moment to shine, but now it is BURRRD&apos;s turn to
                spread his wings!
              </Typography>
              <Typography variant="medium">
                With a determined glint in his beady eyes, BURRRD holds his
                blade above, leading his flock to slay all the wretched
                sh!tcoins that dare cross his path.
              </Typography>
            </Box>
            {toggle && (
              <Box fontSize="1.5rem" p="2rem" pt="0">
                <Typography variant="medium">
                  But BURRRD inst just on a mission to eliminate the rubbish; he
                  has a bigger plan in mind. As he soars through the crypto
                  skies, the feathered hero is on a mission to take everyone to
                  the moon with his memetic power.
                </Typography>
                <Typography variant="medium">
                  So, watch out, world! BURRRD is armed and ready to bring a
                  slice of justice to the crypto realm. Prepare to witness the
                  epic rise of the one and only BURRRD, as he carves his way
                  through the chaos and leads us all to the moonhalla, one meme
                  at a time!
                </Typography>
              </Box>
            )}
            <Box
              p="2rem"
              width="100%"
              display="flex"
              justifyContent="center"
              borderTop="1px #1B1B1F solid"
            >
              <Button
                variant="primary"
                size="small"
                hasBorder
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
