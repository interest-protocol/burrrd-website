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
        flexDirection={['column', 'column', 'column', 'row']}
      >
        <Box
          top={['12.5%', '5.5%', '5.5%', '-6.8rem']}
          left={['75%', '75%', '75%', '19.125rem']}
          position="absolute"
          transform={[
            'rotate(16.01deg) scale(1.7)',
            'rotate(16.01deg) scale(1.7)',
            'rotate(16.01deg) scale(1.7)',
            'rotate(-20.75deg) scale(1.7)',
          ]}
        >
          <HeadToPrizeSVG maxHeight="50rem" maxWidth="31.25rem" width="100%" />
        </Box>
        <Box
          p={['2.5rem 1.25rem', '2.5rem 1.25rem', '2.5rem 1.25rem', '6rem']}
          marginTop="auto"
          borderBottom={[
            '2px solid black',
            '2px solid black',
            '2px solid black',
            'none',
          ]}
        >
          <Typography
            as="h2"
            margin="0"
            color="black"
            fontSize={['3.125rem', '3.125rem', '3.125rem', '5.5rem']}
            textAlign="center"
            variant="displayLarge"
            textTransform="uppercase"
            mb={['0', '0', '0', '10rem']}
          >
            About
          </Typography>
        </Box>
        <Box
          p={['1.5625rem', '1.5625rem', '1.5625rem', '9.0625rem']}
          py={['9.0625rem', '9.0625rem', '9.0625rem', '']}
          width="100%"
          minHeight="100%"
          borderLeft={['none', 'none', 'none', '2px solid black']}
          bg={theme.theme.colors.secondary}
        >
          <Frame
            zIndex="1"
            position="relative"
            borderRadius="2rem"
            bg={theme.theme.colors.septenary}
          >
            <Box
              fontSize={['1rem', , '1rem', '1rem', '1.5rem']}
              p="2rem"
              pb="0"
            >
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
              <Box
                fontSize={['1rem', , '1rem', '1rem', '1.5rem']}
                p="2rem"
                pt="0"
              >
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
