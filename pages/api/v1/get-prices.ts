import { NextApiHandler } from 'next';
import { use } from 'next-api-middleware';

import { getRequestOnlyMiddleware, logApiErrors } from '@/utils/midleware';

import db from '../../../server/lib';
import Prices from '../../../server/models';

const handler: NextApiHandler = async (req, res) => {
  await db;

  const prices = await Prices.find({});

  res.status(200);
  res.send(prices);
};

export default use([getRequestOnlyMiddleware, logApiErrors])(handler);
