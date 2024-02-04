import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Scroller from '../components/scroller';
import { AMBASSADORS, sliderResponsiveness } from './ambassadors.data';
import Title from './title';

const Ambassadors: FC = () => (
  <Box
    py="5rem"
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
  >
    <Scroller
      data={AMBASSADORS}
      TitleWrapper={<Title title="AMBASSADORS" />}
      scrollerResponsiveness={sliderResponsiveness}
    />
  </Box>
);

export default Ambassadors;
