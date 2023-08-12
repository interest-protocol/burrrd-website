import SEO from '@/components/SEO';
import { NextPageWithProps } from '@/interface';
import Home from '@/views/home';

const HomePage: NextPageWithProps = () => {
  return (
    <>
      <SEO pageTitle="Home" />
      <Home />
    </>
  );
};

export default HomePage;
