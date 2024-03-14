import { NextApiHandler } from 'next';
import { use } from 'next-api-middleware';

import { getRequestOnlyMiddleware, logApiErrors } from '@/utils/midleware';

const handler: NextApiHandler = async (_, res) => {
  try {
    const response = await fetch(`${process.env.SOLANA_RPC}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'getTokenSupply',
        params: ['F8qtcT3qnwQ24CHksuRrSELtm5k9ob8j64xAzj3JjsMs'],
      }),
    });

    const data = await response.json?.();

    const supply = data.result.value.uiAmount;

    res.status(200).send(supply);
  } catch {
    res.status(500).send('Something went wrong');
  }
};

export default use([getRequestOnlyMiddleware, logApiErrors])(handler);
