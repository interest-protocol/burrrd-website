import Frame from '@/components/frame';
import { useTheme } from '@/context/theme-context';
import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { RoadmapCardProps } from './roadmap.types';
import { v4 } from 'uuid';
import {
  BodyBagSVG,
  BurrrdCleaningSVG,
  DeadDogeSVG,
  DogeBloodSVG,
  StabbedPepeSVG,
} from '@/svg';

const RoadmapCard: FC<RoadmapCardProps> = ({ title, items, index }) => {
  const { theme } = useTheme();
  const [isDoge, setIsDoge] = useState(false);
  const [isPepe, setIsPepe] = useState(false);

  const handleMouseEnter = () => {
    setIsDoge(true);
    setIsPepe(true);
  };

  return (
    <Frame
      flex="1"
      py="1rem"
      mb="9.375rem"
      position="relative"
      borderRadius=".625rem"
      bg={
        index === 1 ? theme.theme.colors.primary : theme.theme.colors.secondary
      }
    >
      <Frame
        bg="white"
        top="-1.875rem"
        width="4.75rem"
        right="-1.875rem"
        height="4.75rem"
        display="flex"
        boxSize="small"
        borderRadius="50%"
        position="absolute"
        alignItems="center"
        justifyContent="center"
      >
        <Box transform="rotate(-20.53deg)">
          <Typography
            as="span"
            fontWeight="700"
            variant="medium"
            fontSize="2.25rem"
          >
            {index + 1}
          </Typography>
        </Box>
      </Frame>
      <Typography
        p="0"
        m="0"
        as="h2"
        mb="2.375rem"
        fontWeight="700"
        textAlign="center"
        fontSize="1.875rem"
        variant="displayLarge"
        color={index === 1 ? 'white' : 'black'}
      >
        {title}
      </Typography>
      <Box as="ul" color="white">
        {items.map((item) => (
          <Box as="li" pb=".875rem" fontSize="1.5rem" key={v4()}>
            {item}
          </Box>
        ))}
      </Box>
      <Box onMouseEnter={handleMouseEnter}>
        {index === 0 ? (
          <>
            <Box
              right="0"
              p="1.5rem"
              zIndex="2"
              display="flex"
              left="-6.25rem"
              position="absolute"
              bottom="-17.1875rem"
              justifyContent="center"
            >
              <DeadDogeSVG
                maxHeight="16.8125rem"
                maxWidth="23.625rem"
                width="90%"
              />
            </Box>
            <Motion
              initial={{ scale: 0, translateY: '-10%' }}
              animate={{ scale: isDoge ? 1 : 0, translateY: '-5%' }}
              transition={{ duration: 2.5 }}
              right="0"
              zIndex="1"
              p="1.5rem"
              display="flex"
              left="-5.625rem"
              bottom="-13.75rem"
              position="absolute"
              justifyContent="center"
            >
              <DogeBloodSVG
                maxHeight="6.25rem"
                maxWidth="6.25rem"
                width="100%"
              />
            </Motion>
          </>
        ) : index === 1 ? (
          <>
            <Motion
              initial={{ opacity: 0.4, translateY: '0' }}
              animate={{
                opacity: isPepe ? 0 : 0,
                translateY: '-100%',
              }}
              transition={{ duration: 2.5 }}
              position="absolute"
              bottom="-15.9375rem"
              left="-9.0625rem"
              p="1.5rem"
              justifyContent="center"
            >
              <StabbedPepeSVG
                maxHeight="26.875rem"
                maxWidth="26.875rem"
                width="130%"
              />
            </Motion>
            <Box
              position="absolute"
              bottom="-15.9375rem"
              left="-9.0625rem"
              p="1.5rem"
              justifyContent="center"
            >
              <StabbedPepeSVG
                maxHeight="26.875rem"
                maxWidth="26.875rem"
                width="130%"
              />
            </Box>
            <Box
              p="1.5rem"
              right="-7.5rem"
              bottom="-15rem"
              position="absolute"
              justifyContent="center"
            >
              <BurrrdCleaningSVG
                maxHeight="23.3125rem"
                maxWidth="23.3125rem"
                width="110%"
              />
            </Box>
          </>
        ) : index === 2 ? (
          <Box
            bottom="-19.375rem"
            left="0"
            right="-13.75rem"
            p="1.5rem"
            display="flex"
            position="absolute"
            justifyContent="center"
          >
            <BodyBagSVG
              maxHeight="26.125rem"
              maxWidth="26.125rem"
              width="65%"
            />
          </Box>
        ) : null}
      </Box>
    </Frame>
  );
};

export default RoadmapCard;
