import Frame from '@/components/frame';
import { useTheme } from '@/context/theme-context';
import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
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
  return (
    <Frame
      flex="1"
      p="1rem"
      mb="12.5rem"
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
      {index === 0 ? (
        <>
          <Box
            position="absolute"
            zIndex="2"
            bottom="-18.75rem"
            left="-7.5rem"
            right="0"
            p="1.5rem"
            display="flex"
            justifyContent="center"
          >
            <DeadDogeSVG
              maxHeight="16.8125rem"
              maxWidth="23.625rem"
              width="100%"
            />
          </Box>
          <Box
            right="0"
            zIndex="1"
            p="1.5rem"
            left="-5.625rem"
            display="flex"
            bottom="-14.5rem"
            position="absolute"
            justifyContent="center"
          >
            <DogeBloodSVG maxHeight="6.25rem" maxWidth="6.25rem" width="100%" />
          </Box>
        </>
      ) : index === 1 ? (
        <>
          <Box
            position="absolute"
            bottom="-16.875rem"
            left="-9.6875rem"
            p="1.5rem"
            justifyContent="center"
          >
            <StabbedPepeSVG
              maxHeight="26.875rem"
              maxWidth="26.875rem"
              width="140%"
            />
          </Box>
          <Box
            p="1.5rem"
            right="-6.875rem"
            bottom="-16.25rem"
            position="absolute"
            justifyContent="center"
          >
            <BurrrdCleaningSVG
              maxHeight="23.3125rem"
              maxWidth="23.3125rem"
              width="120%"
            />
          </Box>
        </>
      ) : index === 2 ? (
        <Box
          bottom="-23.125rem"
          left="0"
          right="-15rem"
          p="1.5rem"
          display="flex"
          position="absolute"
          justifyContent="center"
        >
          <BodyBagSVG maxHeight="26.125rem" maxWidth="26.125rem" width="80%" />
        </Box>
      ) : null}
    </Frame>
  );
};

export default RoadmapCard;
