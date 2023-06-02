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

    label: 'Phnx Network App',

    icon: 'HomeIcon',

    href: 'https://play.google.com/store/apps/details?id=com.phoenixnetwork.networkapp'

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
        label: 'Roadmap',
        href: 'https://roadmap-1.gitbook.io/heronetwork/',
      },
      {
        label: 'BSCSCAN',
        href: 'https://bscscan.com/token/0xcBB53a1b4c1728972De4308B279e18EF941EdA2D',
      },
      {
        label: 'Whitepaper',
        href: 'https://www.heronetworkapp.com/',
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
