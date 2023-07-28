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
      position="relative"
      borderRadius=".625rem"
      bg={
        index === 1 ? theme.theme.colors.primary : theme.theme.colors.secondary
      }
    >
      <Frame
        bg="white"
        top="-30px"
        width="76px"
        right="-30px"
        height="76px"
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
            bottom="-300px"
            left="-120px"
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
            left="-90px"
            display="flex"
            bottom="-232px"
            position="absolute"
            justifyContent="center"
          >
            <DogeBloodSVG maxHeight="100px" maxWidth="100px" width="100%" />
          </Box>
        </>
      ) : index === 1 ? (
        <>
          <Box
            position="absolute"
            bottom="-270px"
            left="-155px"
            p="1.5rem"
            justifyContent="center"
          >
            <StabbedPepeSVG maxHeight="430px" maxWidth="430px" width="140%" />
          </Box>
          <Box
            p="1.5rem"
            right="-110px"
            bottom="-260px"
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
          bottom="-370px"
          left="0"
          right="-240px"
          p="1.5rem"
          display="flex"
          position="absolute"
          justifyContent="center"
        >
          <BodyBagSVG maxHeight="418px" maxWidth="418px" width="80%" />
        </Box>
      ) : null}
    </Frame>
  );
};

export default RoadmapCard;
