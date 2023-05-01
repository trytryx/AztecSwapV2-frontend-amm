import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.heronetworkapp.com/',
  },
  {
    label: 'Hero Network App',
    icon: 'HomeIcon',
    href: 'https://play.google.com/store/apps/details?id=com.hero.network'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },

  {
    label: 'Hero Network Token Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Dex Guru',
        href: 'https://dex.guru/token/0x8298fea38aa8627316ffd943fe001b69cac8174d-bsc',
      },
      {
        label: 'Contract',
        href: 'https://bscscan.com/token/0x8298fea38aa8627316ffd943fe001b69cac8174d#readContract',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xa040492a50f0034894eb6df0a4d6c8ac33b92cfd',
      },
    ],
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
]

export default config
