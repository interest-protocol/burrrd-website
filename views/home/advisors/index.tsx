import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Scroller from '../components/scroller';
import { ADVISORS, sliderResponsiveness } from './advisors.data';
import Title from './title';

const Advisors: FC = () => (
  <Box
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
    p="6rem 0rem 2rem 0rem"
  >
    <Scroller
      data={ADVISORS}
      TitleWrapper={<Title title="AMBASSADORS" />}
      scrollerResponsiveness={sliderResponsiveness}
    />
  </Box>
);

export default Advisors;
