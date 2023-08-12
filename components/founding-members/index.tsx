import { Box, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';
import Slider from 'react-slick';
import { v4 } from 'uuid';

import { defaultTheme } from '@/design-system/theme/default-theme';

import {
  FOUNDING_MEMBERS_LIST,
  foundingMembersSlick,
} from './founding-members.data';

const FoundingMembers: FC = () => {
  return (
    <Box
      py="1.25rem"
      borderBottom=".125rem solid black"
      bg={defaultTheme.theme.colors.septenary}
    >
      <Box>
        <Slider {...foundingMembersSlick}>
          {FOUNDING_MEMBERS_LIST.map(({ Icon, name, url }) => (
            <Box key={v4()} title={name} mr="1.875rem">
              <Link href={url} target="_blank" rel="noreferrer">
                <Icon maxHeight="4rem" maxWidth="4rem" width="100%" />
              </Link>
            </Box>
          ))}
          <Typography
            ml={['0', '2.5625rem', '2.5625rem', '2.5625rem']}
            mr={['0', '4.4375rem', '4.4375rem', '4.4375rem']}
            fontWeight="600"
            variant="medium"
            fontSize="1.25rem"
            color={defaultTheme.theme.colors.primary}
          >
            Our founding members
          </Typography>
        </Slider>
      </Box>
    </Box>
  );
};

export default FoundingMembers;
