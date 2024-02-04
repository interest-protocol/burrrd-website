import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Scroller from '../components/scroller';
import { AMBASSADORS, sliderResponsiveness } from './ambassadors.data';
import Title from './title';

const Ambassadors: FC = () => (
  <Box
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
    p="6rem 0rem 2rem 0rem"
  >
    <Scroller
      data={AMBASSADORS}
      TitleWrapper={<Title title="AMBASSADORS" />}
      scrollerResponsiveness={sliderResponsiveness}
    />
  </Box>
);

export default Ambassadors;
