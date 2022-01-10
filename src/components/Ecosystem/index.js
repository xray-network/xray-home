import React from "react"
import { Link } from "gatsby"
import * as style from "./style.module.scss"

const items = [
  {
    title: "RayWallet",
    descr: "A lightweight Cardano multiplatform and multifunctional wallet",
    url: "/wallet/",
  },
  {
    title: "RayStake",
    descr: "Stake solution for Cardano, NEAR, Solana blockchains",
    url: "/stake/",
  },
  {
    title: "RaySwap",
    descr: "Automated liquidity protocol, AMM DEX",
    url: "/swap/",
  },
  {
    title: "RayPad",
    descr: "Decentralised fundraising",
    url: "/pad/",
  },
  {
    title: "RayGraph",
    descr: "Cardano blockhain graphql indexers",
    url: "/graph/",
  },
  {
    title: "RayData",
    descr: "B2B data storage and authorization solution",
    url: "/data/",
  },
  {
    title: "Minterr.io",
    descr: "Cardano NFT Explorer & Minter by Ray Network",
    url: "https://minterr.io",
    external: true,
  },
  {
    title: "CardanoList.io",
    descr: "Cardano tokens & projects list curated by Ray Network",
    url: "https://cardanolist.io",
    external: true,
  },
  {
    title: "Pigz.io Metaverse",
    descr: "Drive the meta universe by owning unique NFT tokens",
    url: "https://pigz.io",
    external: true,
  },
  {
    title: "CardanoWeb3.js",
    descr: "JavaScript SDK for Cardano blockchain",
    url: "https://github.com/ray-network/cardano-web3.js",
    external: true,
  },
  {
    title: "Ray Foundation",
    descr:
      "We exist to enable community-driven innovation to benefit people around the world",
    url: "https://ray.foundation",
    external: true,
  },
  {
    title: "RayStart",
    descr: "Start Page of the Ray Network Ecosystem",
    url: "https://raystart.io",
    external: true,
  },
]

const Ecosystem = () => {
  return (
    <div className="ray__block">
      <div className="ray__title">Ray Network Ecosystem</div>
      <div className="ray__title__descr">
        Explore the <strong>Ray Network</strong> Ecosystem.{" "}
        <strong>10+ unique projects</strong> waiting your DeFi actions
      </div>
      <div className="row">
        {items.map((item, index) => {
          return (
            <div key={index} className="col-md-4 col-sm-6 col-12">
              <div className={style.item}>
                {item.external && (
                  <a
                    href={item.url}
                    className={style.itemInner}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={style.itemInnerExternal}>
                      <i className="ri ri-ext ri-arrow_up" />
                    </span>
                    <div className={style.itemInnerTitle}>{item.title}</div>
                    <div>{item.descr}</div>
                  </a>
                )}
                {!item.external && (
                  <Link
                    to={item.url}
                    className={style.itemInner}
                    activeClassName={style.itemInnerActive}
                    partiallyActive
                  >
                    <div className={style.itemInnerTitle}>{item.title}</div>
                    <div>{item.descr}</div>
                  </Link>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Ecosystem
