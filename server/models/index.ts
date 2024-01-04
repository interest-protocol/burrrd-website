import mongoose from 'mongoose';
import { mergeDeepLeft, toPairs } from 'ramda';

import { ADDRESSES_BY_NETWORK } from '@/constants/coins';

const MODEL_NAME = 'Price';

const priceSchema = new mongoose.Schema({
  address: { type: String, required: true },
  price: { type: String, required: true },
});

const Price =
  mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, priceSchema);

const updatePrices = async () => {
  const results = await Promise.all(
    ADDRESSES_BY_NETWORK.map(([network, coinList]) =>
      fetch(
        `https://public-api.birdeye.so/public/multi_price?list_address=${coinList.join(
          '%2C'
        )}`,
        {
          headers: {
            'X-API-KEY': process.env.BIRD_EYE_API_KEY || '',
            'x-chain': network,
          },
        }
      ).then((response) => response.json())
    )
  );

  const { data } = results.reduce(
    (acc, result) => mergeDeepLeft(acc, result),
    {}
  );

  const prices = toPairs(data).map(([address, { value: price }]) => ({
    price,
    address,
  }));

  prices.map(async ({ address, price }) => {
    const doc = await Price.findOne({ address });

    if (!doc) {
      const priceEntry = new Price({ address, price });

      priceEntry.save();

      return;
    }

    doc.price = price;

    doc.save();
  });
};

updatePrices();

setInterval(updatePrices, 20000);

export default Price;
