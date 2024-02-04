import { Box, Motion, Typography } from '@interest-protocol/ui-kit';

const Title = () => (
  <Box mb="5rem" minWidth="120vw">
    <Box
      width="100%"
      display="flex"
      bg="#FF7E61"
      height="7rem"
      border="2px solid"
      alignItems="center"
      borderColor="#000"
      position="relative"
      padding="1.5rem 3rem"
      justifyContent="center"
      boxShadow="12px 12px 0px 0px #000"
      transform="rotate(5.34deg)"
    >
      <Motion
        position="absolute"
        animate={{
          left: ['-40%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 1,
        }}
        width="9rem"
      >
        <Typography
          m="0"
          as="h2"
          color="white"
          fontWeight="700"
          variant="displayLarge"
          textTransform="uppercase"
          fontSize={['2.5rem', '3.125rem', '3.125rem', '5.5rem']}
        >
          Advisors
        </Typography>
      </Motion>
    </Box>
  </Box>
);

export default Title;
