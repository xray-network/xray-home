import React from "react"
import { Link } from "gatsby"
import Heading from "@/components/Heading"
import { SVGOpen } from "@/svg"
import * as style from "./style.module.scss"

const items = [
  {
    title: 'XRAY Token',
    descr: 'Ray Network governance & payment token',
    url: '/xray/',
  },
  {
    title: 'Ray Wallet',
    descr: 'A lightweight Cardano multiplatform and multifunctional wallet',
    url: '/wallet/',
  },
  {
    title: 'Ray Stake',
    descr: 'Stake solution, earn ~5% ROI in ADA with XRAYs on top',
    url: '/stake/',
  },
  {
    title: 'Ray Rewards',
    descr: 'Get additional XRAY rewards for ADA staking and other activities',
    url: '/rewards/',
  },
  {
    title: 'Ray Swap',
    descr: 'Automated liquidity protocol, AMM DEX',
    url: '/swap/',
  },
  {
    title: 'Ray Kickstart',
    descr: 'Decentralised fundraising',
    url: '/kickstart/',
  },
  {
    title: 'Ray NFT ',
    descr: 'NFT marketplace with advanced features',
    url: '/nft/',
  },
  {
    title: 'Ray Graph',
    descr: 'Cardano blockhain graphql indexers',
    url: '/graph/',
  },
  {
    title: 'Ray Data',
    descr: 'B2B data storage and authorization solution',
    url: '/data/',
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
    external: true,
  },
]

const Solutions = () => {
  return (
    <div className={style.outer}>
      <div className="ray__block mb-0">
        <Heading id="solutions">
          <strong>Ray Network</strong> solutions
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
                    target={item.external ? '_blank' : ''}
                  >
                    {item.external && (
                      <span className={style.itemInnerExternal}>
                        <span className="ray__icon">
                          <SVGOpen />
                        </span>
                      </span>
                    )}
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
      </div>
    </div>
  )
}

export default Solutions
