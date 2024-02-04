import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Frame from '@/components/frame';
import { useTheme } from '@/context/theme-context';
import Button from '@/elements/button';
import { KillingSpreeSVG, QuestionSVG } from '@/svg';

const Bridge: FC = () => {
  const { theme } = useTheme();
  return (
    <Box variant="container" borderBottom="2px solid black" id="bridge">
      <Box
        py="7.5rem"
        width="100%"
        display="flex"
        pb="18.125rem"
        gridColumn="1/-1"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        bg={theme.theme.colors.secondary}
        px={['1.25rem', '1.25rem', '1.25rem', '10.75rem']}
      >
        <Motion
          initial={{ y: '-100%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 300,
            bounce: 0.5,
            duration: 1,
          }}
          mb="5.75rem"
        >
          <Typography
            as="span"
            color="white"
            variant="small"
            fontWeight="700"
            textTransform="uppercase"
            fontSize={['3.125rem', '3.125rem', '3.125rem', '6rem']}
          >
            Bridge
          </Typography>
        </Motion>
        <Frame
          bg="white"
          display="flex"
          position="relative"
          borderRadius="2rem"
          flexDirection="column"
          justifyContent="center"
          p={['1.5rem', '1.5rem', '1.5rem', '2rem']}
        >
          <Typography
            m="0"
            pb="2rem"
            variant={'small'}
            textAlign="center"
            fontWeight={['600', '600', '600', '400']}
            fontSize={['1.25rem', '1.25rem', '1.25rem', '1.875rem']}
          >
            Bridge your assets to Sui Network and assist <br />
            BURRRD on the stabbing spree
          </Typography>
          <Box m="0 auto">
            <Button size="small" hasBorder>
              <Typography m="0" variant="medium" fontSize="1.5rem">
                Bridge
              </Typography>
            </Button>
          </Box>
          <Motion
            position="absolute"
            initial={{ scale: 1 }}
            animate={{ scale: 1.04 }}
            transition={{ repeat: Infinity }}
            bottom={['-40%', '-2.5rem', '-2.5rem', '-2.5rem']}
            left={['0%', '-3.9375rem', '-3.9375rem', '-3.9375rem']}
            transform={['scale(0.8)', 'scale(0.8)', 'scale(0.8)', 'scale(1)']}
          >
            <QuestionSVG
              maxHeight="9.375rem"
              maxWidth="9.375rem"
              width="100%"
            />
          </Motion>
          <Box
            position="absolute"
            right={['-16%', '-16%', '-16%', '-11.25rem']}
            bottom={['-144%', '-148%', '-148%', '-11.875rem']}
            transform={['scale(1.1)', 'scale(1.1)', 'scale(1.1)', 'scale(1.3)']}
          >
            <KillingSpreeSVG
              width="100%"
              maxWidth="35.625rem"
              maxHeight="35.625rem"
            />
          </Box>
        </Frame>
      </Box>
    </Box>
  );
};

export default Bridge;
