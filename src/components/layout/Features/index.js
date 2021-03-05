import React from "react"
import style from "./style.module.scss"

const defaultShared = [
  {
    title: "Future-Proof Blockchain Solutions",
    icon: "fe fe-compass",
  },
  {
    title: "Multi-Featured Light Wallet",
    icon: "fe fe-star",
  },
  {
    title: "Activity Rewarding Programs",
    icon: "fe fe-dollar-sign",
  },
  {
    title: "Secure and Sustainable Apps",
    icon: "fe fe-shield",
  },
  {
    title: "High-Performance Servers",
    icon: "fe fe-server",
  },
  {
    title: "Low Latency Infrastructure",
    icon: "fe fe-repeat",
  },
]

const items = {
  main: [...defaultShared],
}

export default ({ version = "main" }) => {
  return (
    <div className="ray__block mb-4">
      <div className="container-fluid">
        <div className={style.features}>
          <h2 className="ray__heading mb-4">About RAY</h2>
          <p>RAY Nework is an advanced <a href="https://github.com/ray-network" target="_blank" rel="noopener noreferrer" className="ray__link">open source</a> ecosystem for the Cardano blockchain platform. It includes Light Wallet with many features such as: sending and receiving funds, defi swap, NFT marketplace, staking center and others.</p>
          <p>
            Our services increase blockchain use adoption: empowers regular users, developers, creators, liquidity providers and traders to participate in a financial marketplace that is open and accessible to all.
          </p>
          <p className="mb-5">
            RAY was founded by Sellpixels.com, owner of{' '}
            <a href="https://visualbuilder.cloud/" target="_blank" rel="noopener noreferrer" className="ray__link">Visual Builder</a>{' '}
            SAAS platform that helps hundreds of technology companies around the world build web applications. Sellpixels.com provides full circle software development services such as frontend, backend, microservices, ci/cd, ui/ux, and more.
          </p>
          <div className="row">
            {items[version].map((item, index) => (
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
      </div>
    </div>
  )
}
