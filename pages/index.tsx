import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
