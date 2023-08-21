import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import Frame from '@/components/frame';
import { useTheme } from '@/context/theme-context';
import {
  BodyBagSVG,
  BurrrdCleaningSVG,
  DeadDogeSVG,
  DogeBloodSVG,
  StabbedPepeSVG,
} from '@/svg';

import { RoadmapCardProps } from './roadmap.types';

const RoadmapCard: FC<RoadmapCardProps> = ({
  title,
  items,
  index,
  isHovered,
}) => {
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
      p="1rem"
      mb={['unset', 'unset', 'unset', '9.375rem']}
      position="relative"
      borderRadius=".625rem"
      bg={
        index === 1 ? theme.theme.colors.primary : theme.theme.colors.secondary
      }
      width={['70vw', '70vw', '39vw', 'unset']}
      mx="auto"
      minHeight={['30rem', '30rem', '30rem', 'unset']}
    >
      <Motion
        top="-1.875rem"
        right="-1.875rem"
        position="absolute"
        transformOrigin="top"
        initial={{ rotate: 0 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          bounce: 0.5,
          delay: index === 1 ? 1 : index === 2 ? 2 : 0,
        }}
        animate={isHovered ? { rotate: -20.53 } : { rotate: 0 }}
      >
        <Frame
          bg="white"
          display="flex"
          boxSize="small"
          width={['2.5rem', '2.5rem', '2.5rem', '4.75rem']}
          height={['2.5rem', '2.5rem', '2.5rem', '4.75rem']}
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            as="span"
            fontWeight="700"
            variant="medium"
            fontSize={['1.5rem', '1.5rem', '1.5rem', '2.25rem']}
          >
            {index + 1}
          </Typography>
        </Frame>
      </Motion>
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
          <Box
            as="li"
            lineHeight="2.125rem"
            fontSize="1.5rem"
            fontWeight="400"
            key={v4()}
          >
            {item}
          </Box>
        ))}
      </Box>
      <Box
        onMouseEnter={handleMouseEnter}
        display={['none', 'none', 'none', 'block']}
      >
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
                width="90%"
                maxWidth="23.625rem"
                maxHeight="16.8125rem"
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
                width="100%"
                maxWidth="6.25rem"
                maxHeight="6.25rem"
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
              p="1.5rem"
              left="-9.0625rem"
              position="absolute"
              bottom="-15.9375rem"
              justifyContent="center"
            >
              <StabbedPepeSVG
                width="130%"
                maxWidth="26.875rem"
                maxHeight="26.875rem"
              />
            </Motion>
            <Box
              p="1.5rem"
              left="-9.0625rem"
              position="absolute"
              bottom="-15.9375rem"
              justifyContent="center"
            >
              <StabbedPepeSVG
                width="130%"
                maxWidth="26.875rem"
                maxHeight="26.875rem"
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
                width="110%"
                maxWidth="23.3125rem"
                maxHeight="23.3125rem"
              />
            </Box>
          </>
        ) : index === 2 ? (
          <Box
            left="0"
            p="1.5rem"
            display="flex"
            right="-13.75rem"
            bottom="-19.375rem"
            position="absolute"
            justifyContent="center"
          >
            <BodyBagSVG
              width="65%"
              maxWidth="26.125rem"
              maxHeight="26.125rem"
            />
          </Box>
        ) : null}
      </Box>
    </Frame>
  );
};

export default RoadmapCard;
