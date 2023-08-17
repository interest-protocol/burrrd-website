import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import Slider from 'react-slick';
import { v4 } from 'uuid';

import { useTheme } from '@/context/theme-context';

import {
  FOUNDING_MEMBERS_LIST,
  foundingMembersSlick,
} from './founding-members.data';

const FoundingMembers: FC = () => {
  const { theme } = useTheme();
  return (
    <Box
      py="1.25rem"
      borderTop="2px solid black"
      borderBottom="2px solid black"
      bg={theme.theme.colors.septenary}
    >
      <Box>
        <Slider {...foundingMembersSlick}>
          {FOUNDING_MEMBERS_LIST.map(({ Icon, url }) => (
            <a key={v4()} href={url} target="_blank" rel="noreferrer">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="4rem"
                height="4rem"
              >
                <Icon maxHeight="4rem" maxWidth="4rem" width="2.813rem" />
              </Box>
            </a>
          ))}
          <Typography
            fontWeight="600"
            variant="medium"
            fontSize="1.25rem"
            mx="3rem"
            color={theme.theme.colors.primary}
          >
            Our founding members
          </Typography>
        </Slider>
      </Box>
    </Box>
  );
};

export default FoundingMembers;
