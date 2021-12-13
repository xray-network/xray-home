import React from "react"
import { Link } from "gatsby"
import Heading from "@/components/Heading"
import { SVGOpen } from "@/svg"
import * as style from "./style.module.scss"

const items = [
  {
    title: "XRAY Token",
    descr: "Ray Network governance & payment token",
    url: "/xray/",
  },
  {
    title: "RayWallet",
    descr: "A lightweight Cardano multiplatform and multifunctional wallet",
    url: "/wallet/",
  },
  {
    title: "RayStake",
    descr: "Stake solution, earn ~5% ROI in ADA with XRAY on top",
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
    title: "Minterr",
    descr: "Cardano NFT Explorer & Minter by Ray Network",
    url: "/minterr/",
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
    title: "Wiki",
    descr: "Cardano & Ray Network information database",
    url: "/wiki/",
  },
  {
    title: "RayStart.io",
    descr: "Start Page of the Ray Network Ecosystem",
    url: "https://raystart.io",
    external: true,
  },
  {
    title: "CardanoList.io",
    descr: "Cardano tokens & projects list curated by Ray",
    url: "https://cardanolist.io",
    external: true,
  },
  {
    title: "Cardano-Web3.js",
    descr: "JavaScript SDK for Cardano blockchain",
    url: "https://github.com/ray-network/cardano-web3.js",
    external: true,
  },
]

const Solutions = () => {
  return (
    <div className="ray__block">
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
                  target={item.external ? "_blank" : ""}
                >
                  {item.external && (
                    <span className={style.itemInnerExternal}>
                      <span className="ray__icon">
                        <SVGOpen />
                      </span>
                    </span>
                  )}
                  <div className={style.itemInnerTitle}>{item.title}</div>
                  <div>{item.descr}</div>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Solutions
