import React from "react"
import * as style from "./style.module.scss"

const items = [
  {
    title: "Future-Proof Blockchain Solutions",
    icon: "ri ri-compass",
  },
  {
    title: "Secure and Sustainable DApps",
    icon: "ri ri-shield_check",
  },
  {
    title: "Audited Smart Contracts",
    icon: "ri ri-bookmark",
  },
  {
    title: "Multi-Featured Light Wallet",
    icon: "ri ri-wallet",
  },
  {
    title: "Community Loyalty Programs",
    icon: "ri ri-diamond",
  },
  {
    title: "Low Latency Infrastructure",
    icon: "ri ri-zap",
  },
]

const About = () => {
  return (
    <div className="ray__block">
      <div className="ray__title">About Ray Network</div>
      <div className="ray__title__descr">
        <strong>Ray Network</strong> is a public good <strong>owned</strong> and <strong>governed</strong> by XRAY token
        holders
      </div>
      <p className="mb-5">
        Ray Network is an advanced{" "}
        <a href="https://github.com/ray-network" target="_blank" rel="noopener noreferrer" className="ray__link">
          open source
        </a>{" "}
        ecosystem for the Cardano blockchain platform. It includes a light wallet with many features such as: sending
        and receiving funds, defi swap, NFT marketplace, staking center and others. Our services increase blockchain use
        adoption; they empowers regular users, developers, creators, liquidity providers and traders to participate in a
        financial marketplace that is open and accessible to all.
      </p>
      <div className="row">
        {items.map((item, index) => (
          <div key={index} className="col-lg-4 col-sm-6 col-12">
            <div className={style.item}>
              <div className={style.icon}>
                <i className={item.icon} />
              </div>
              <div className={style.title}>{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
