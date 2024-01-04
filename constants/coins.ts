import { values } from 'ramda';

export const ADDRESSES_TO_NAME: Record<string, string> = {
  F8qtcT3qnwQ24CHksuRrSELtm5k9ob8j64xAzj3JjsMs: 'BURRRD',
  '5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC': 'PONKE',
  '9gwTegFJJErDpWJKjPfLr2g2zrE3nL1v5zpwbtsk3c6P': 'USEDCAR',
  HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4: 'MYRO',
  '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU': 'SAMO',
  H7ed7UgcLp3ax4X1CQ5WuWDn6d1pprfMMYiv5ejwLWWU: 'CHONKY',
  EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm: 'WIF',
  '0xbA2aE424d960c26247Dd6c32edC70B295c744C43': 'DOGE',
  '0x1151CB3d861920e07a38e03eEAd12C32178567F6': 'BONK',
  '0x6982508145454Ce325dDbE47a25d4ec3d2311933': 'PEPE',
};

export const NAMES_TO_ADDRESS: Record<string, string> = {
  BURRRD: 'F8qtcT3qnwQ24CHksuRrSELtm5k9ob8j64xAzj3JjsMs',
  PONKE: '5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC',
  USEDCAR: '9gwTegFJJErDpWJKjPfLr2g2zrE3nL1v5zpwbtsk3c6P',
  MYRO: 'HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4',
  SAMO: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
  CHONKY: 'H7ed7UgcLp3ax4X1CQ5WuWDn6d1pprfMMYiv5ejwLWWU',
  WIF: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
  DOGE: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
  BONK: '0x1151CB3d861920e07a38e03eEAd12C32178567F6',
  PEPE: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
};

export const COIN_COLOR: Record<string, string> = {
  BURRRD: '#FFD766',
  PEPE: '#9BCA65',
  DOGE: '#FFD684',
  PONKE: '#895A2F',
  USEDCAR: '#A3A3A3',
  MYRO: '#404040',
  SAMO: '#E3E3E3',
  BONK: '#F6A428',
  WIF: '#CBA787',
  CHONKY: '#E1D3AD',
};

export const SOL_COIN_ADDRESSES_MAP = {
  BURRRD: 'F8qtcT3qnwQ24CHksuRrSELtm5k9ob8j64xAzj3JjsMs',
  PONKE: '5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC',
  USEDCAR: '9gwTegFJJErDpWJKjPfLr2g2zrE3nL1v5zpwbtsk3c6P',
  MYRO: 'HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4',
  SAMO: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
  CHONKY: 'H7ed7UgcLp3ax4X1CQ5WuWDn6d1pprfMMYiv5ejwLWWU',
  WIF: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
};

export const BSC_COIN_ADDRESSES_MAP = {
  DOGE: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
};

export const ETH_COIN_ADDRESSES_MAP = {
  BONK: '0x1151CB3d861920e07a38e03eEAd12C32178567F6',
  PEPE: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
};

export const ADDRESSES_BY_NETWORK: ReadonlyArray<
  [string, ReadonlyArray<string>]
> = [
  ['solana', values(SOL_COIN_ADDRESSES_MAP)],
  ['ethereum', values(ETH_COIN_ADDRESSES_MAP)],
  ['bsc', values(BSC_COIN_ADDRESSES_MAP)],
];

export const COINS_TOTAL_SUPPLY_MAP = {
  [SOL_COIN_ADDRESSES_MAP.BURRRD]: 65_275_369_598_281.51,
  [SOL_COIN_ADDRESSES_MAP.WIF]: 998_920_172.89,
  [SOL_COIN_ADDRESSES_MAP.PONKE]: 555_548_656.04,
  [SOL_COIN_ADDRESSES_MAP.USEDCAR]: 332_905_213.64,
  [SOL_COIN_ADDRESSES_MAP.MYRO]: 999_981_419.46,
  [SOL_COIN_ADDRESSES_MAP.SAMO]: 5_736_530_432.4,
  [SOL_COIN_ADDRESSES_MAP.CHONKY]: 499_981_269_675.8,
  [BSC_COIN_ADDRESSES_MAP.DOGE]: 142_516_126_384,
  [ETH_COIN_ADDRESSES_MAP.BONK]: 63_333_513_043_628,
  [ETH_COIN_ADDRESSES_MAP.PEPE]: 420_689_899_999_994.8,
};
