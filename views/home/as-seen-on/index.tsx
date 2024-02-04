import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Scroller from '../components/scroller';
import { AS_SEEN_ON, sliderResponsiveness } from './as-seen-on.data';
import Title from './title';

const AsSeenOn: FC = () => (
  <Box
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
  >
    <Scroller
      data={AS_SEEN_ON}
      TitleWrapper={<Title title="As Seen on" />}
      scrollerResponsiveness={sliderResponsiveness}
    />
  </Box>
);

export default AsSeenOn;
