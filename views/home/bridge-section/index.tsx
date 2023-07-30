import Frame from '@/components/frame';
import { useTheme } from '@/context/theme-context';
import Button from '@/elements/button';
import { KillingSpreeSVG, QuestionSVG } from '@/svg';
import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const BridgeSection: FC = () => {
  const { theme } = useTheme();
  return (
    <Box variant="container" borderBottom="2px solid black">
      <Box
        py="7.5rem"
        width="100%"
        px="10.75rem"
        display="flex"
        pb="18.125rem"
        gridColumn="1/-1"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        bg={theme.theme.colors.secondary}
      >
        <Typography
          as="span"
          mb="5.75rem"
          color="white"
          variant="small"
          fontSize="6rem"
          fontWeight="700"
          textTransform="uppercase"
        >
          Bridge
        </Typography>
        <Frame
          p="2rem"
          bg="white"
          display="flex"
          position="relative"
          borderRadius="2rem"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography
            m="0"
            pb="2rem"
            variant={'small'}
            textAlign="center"
            fontSize="1.875rem"
          >
            Bridge your assets to Sui Network and assist <br />
            BURRRD on the stabbing spree
          </Typography>
          <Box m="0 auto">
            <Button variant="primary" size="small" hasBorder>
              <Typography m="0" variant="medium" fontSize="1.5rem">
                Bridge
              </Typography>
            </Button>
          </Box>
          <Box position="absolute" bottom="-2.5rem" left="-3.9375rem">
            <QuestionSVG
              maxHeight="9.375rem"
              maxWidth="9.375rem"
              width="100%"
            />
          </Box>
          <Box position="absolute" bottom="-11.875rem" right="-11.25rem">
            <KillingSpreeSVG
              maxHeight="35.625rem"
              maxWidth="35.625rem"
              width="130%"
            />
          </Box>
        </Frame>
      </Box>
    </Box>
  );
};

export default BridgeSection;
