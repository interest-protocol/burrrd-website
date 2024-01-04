import SEO from '@/components/SEO';
import { NextPageWithProps } from '@/interface';
import Chart from '@/views/chart';

const ChartPage: NextPageWithProps = () => (
  <>
    <SEO pageTitle="Home" />
    <Chart />
  </>
);

export default ChartPage;
