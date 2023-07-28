import { NextPage } from 'next';

export interface NextPageDefaultProps {
  pageTitle?: string;
}

export type NextPageWithProps = NextPage<NextPageDefaultProps>;
