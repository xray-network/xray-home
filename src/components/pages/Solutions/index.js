import React from "react"
import { Link } from "gatsby"
import Heading from "@/components/layout/Heading"
import style from "./style.module.scss"

const items = [
  {
    title: 'XRAY Token',
    descr: 'Ray Network governance & payment token',
    url: 'https://x.rraayy.com',
    ext: true,
  },
  {
    title: 'Ray Wallet',
    descr: 'A lightweight Cardano multiplatform and multifunctional wallet',
    url: '/ray-wallet/',
  },
  {
    title: 'Ray Stake',
    descr: 'Stake solution, earn 5.5% ROI in ADA',
    url: '/stake/',
  },
  {
    title: 'Ray Rewards',
    descr: 'Get additional rewards in XRAYs for staking and other activities',
    url: '/rewards/',
  },
  {
    title: 'Ray Swap',
    descr: 'Automated liquidity protocol, AMM DEX',
    url: '/swap/',
  },
  {
    title: 'Ray KickStart',
    descr: 'Decentralised fundraising',
    url: '/kickstart/',
  },
  {
    title: 'Ray NFT Marketplace',
    descr: 'NFT Marketplace with advanced features',
    url: '/nft-marketplace/',
  },
  {
    title: 'Ray Data Containers',
    descr: 'B2B data storage and authorization solution',
    url: '/data-containers/',
  },
  {
    title: 'Wiki',
    descr: 'Cardano & Ray Network information database',
    url: '/wiki/',
  },
  {
    title: 'Tokens List',
    descr: 'Cardano native token list curated by Ray',
    url: '/tokens-list/',
  },
  {
    title: 'Cardano-Web3.js',
    descr: 'JavaScript SDK for Cardano blockchain',
    url: 'https://github.com/ray-network/cardano-web3.js',
    ext: true,
  },
]

export default () => {
  return (
    <div className="ray__block">
      <Heading id="solutions">
        <strong className="bolder">Ray Network</strong> solutions
      </Heading>
      <div className="row">
        {items.map((item, key) => {
          return (
            <div key={key} className="col-md-4 col-sm-6 col-12">
              <div className={style.item}>
                <Link
                  to={item.url}
                  className={style.itemInner}
                  activeClassName={style.itemInnerActive}
                  partiallyActive
                  target={item.ext ? '_blank' : ''}
                >
                  {item.ext && <i className="fe fe-external-link" />}
                  <div className={style.itemInnerTitle}>
                    {item.title}
                  </div>
                  <div>
                    {item.descr}
                  </div>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div >
  )
}
