import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import Slider from 'react-slick';
import { v4 } from 'uuid';
import {
  FOUNDING_MEMBERS_LIST,
  foundingMembersSlick,
} from './founding-members.data';
import { defaultTheme } from '@/design-system/theme/default-theme';

const FoundingMembers: FC = () => {
  return (
    <Box
      py="1.25rem"
      borderBottom=".125rem solid black"
      bg={defaultTheme.theme.colors.septenary}
    >
      <Box>
        <Slider {...foundingMembersSlick}>
          {FOUNDING_MEMBERS_LIST.map(({ Icon, name }) => (
            <a key={v4()} href={'#'} target="_blank" rel="noreferrer">
              <Box title={name} mr="1.875rem">
                <Icon maxHeight="4rem" maxWidth="4rem" width="100%" />
              </Box>
            </a>
          ))}
          <Typography
            ml="2.5625rem"
            mr="4.4375rem"
            variant="medium"
            color={defaultTheme.theme.colors.primary}
            fontWeight="600"
            fontSize="1.25rem"
          >
            Our funding members
          </Typography>
        </Slider>
      </Box>
    </Box>
  );
};

export default FoundingMembers;
