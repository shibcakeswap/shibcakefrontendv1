import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x818CEE824f8CaEAa05Fb6a1f195935e364D52Af0',
      56: '0x818CEE824f8CaEAa05Fb6a1f195935e364D52Af0',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'CAKE-BNB LP ShibcakeSwap',
    lpAddresses: {
      97: '0x6d915a079899342fb8348bad8f7b78f6641c7d00',
      56: '0x6d915a079899342fb8348bad8f7b78f6641c7d00',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'CAKE-SHIBCAKE LP ShibcakeSwap',
    lpAddresses: {
      97: '0x71e7ce468929e255c6c65f69b7aedf98b50c2261',
      56: '0x71e7ce468929e255c6c65f69b7aedf98b50c2261',
    },
    token: tokens.cake,
    quoteToken: tokens.shibcake,
  },
  {
    pid: 2,
    lpSymbol: 'SHIBCAKE-BNB LP PancakeSwap',
    lpAddresses: {
      97: '0x4f2d19bbd600e4e88396c2f6177ef9f2bfa30671',
      56: '0x4f2d19bbd600e4e88396c2f6177ef9f2bfa30671',
    },
    token: tokens.shibcake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'SHIBCAKE-BNB LP ShibcakeSwap',
    lpAddresses: {
      97: '0x3067a8a504585c29f30bfcb5c7eaa6a942a18374',
      56: '0x3067a8a504585c29f30bfcb5c7eaa6a942a18374',
    },
    token: tokens.shibcake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP ShibcakeSwap',
    lpAddresses: {
      97: '',
      56: '0xc52c61c3af83aa026c4de6480183eb07a31c664f',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms
