import { Box, Typography } from '@interest-protocol/ui-kit';

const Title = () => (
  <Box mb="5rem" minWidth="120vw">
    <Box
      width="100%"
      display="flex"
      bg="#FF7E61"
      border="2px solid"
      alignItems="center"
      borderColor="#000"
      padding="1.5rem 3rem"
      justifyContent="center"
      boxShadow="12px 12px 0px 0px #000"
      transform="rotate(-5.34deg)"
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
        Collaborations
      </Typography>
    </Box>
  </Box>
);

export default Title;
