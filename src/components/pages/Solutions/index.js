import React from "react"
import { Link } from "gatsby"
import Heading from "@/components/layout/Heading"
import style from "./style.module.scss"

export default () => {
  const items = [
    {
      title: 'Ray Wallet',
      descr: 'A lightweight Cardano multiplatform and multifunctional wallet',
      url: '/wallet',
    },
    {
      title: 'Ray Stake',
      descr: 'Stake solution, earn 5.5% ROI in ADA',
      url: '/stake',
    },
    {
      title: 'Ray Rewards',
      descr: 'Get additional rewards in XRAYs for staking and other activities',
      url: '/rewards',
    },
    {
      title: 'Ray Swap',
      descr: 'Automated liquidity protocol, AMM DEX',
      url: '/swap',
    },
    {
      title: 'Ray KickStart',
      descr: 'Decentralized fundrising',
      url: '/kickstart',
    },
    {
      title: 'Ray NFT',
      descr: 'NFT Marketplace with advanced features',
      url: '/nft',
    },
    {
      title: 'Ray Token',
      descr: 'Ray Network governance & payment token',
      url: 'https://x.rraayy.com',
      ext: true,
    },
    {
      title: 'Ray Data',
      descr: 'B2B data storage and authorization solution',
      url: '/data-containers',
    },
    {
      title: 'Cardano-Web3.js',
      descr: 'JavaScript SDK for Cardano blockchain',
      url: 'https://github.com/ray-network/cardano-web3.js',
      ext: true,
    },
  ]

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
                {item.ext
                  ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.itemInner}
                    >
                      <i className="fe fe-external-link" />
                      <div className={style.itemInnerTitle}>
                        {item.title}
                      </div>
                      <div>
                        {item.descr}
                      </div>
                    </a>
                  )
                  : (
                    <Link
                      to={item.url}
                      className={style.itemInner}
                    >
                      <div className={style.itemInnerTitle}>
                        {item.title}
                      </div>
                      <div>
                        {item.descr}
                      </div>
                    </Link>
                  )
                }
              </div>
            </div>
          )
        })}
      </div>
    </div >
  )
}
