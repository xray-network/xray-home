import React from "react"
import style from "./style.module.scss"

const defaultShared = [
  {
    title: "RAY Coins distribution for pool delegators",
    icon: "fe fe-dollar-sign",
  },
  {
    title: "DigitalOcean Tier 4 datacenters",
    icon: "fe fe-star",
  },
  {
    title: "At least 5 relays for each producer node",
    icon: "fe fe-compass",
  },
  {
    title: "High-performance, low latency infrastructure",
    icon: "fe fe-server",
  },
  {
    title: "Node/relays auto update & smart deployments",
    icon: "fe fe-repeat",
  },
  {
    title: "24/7 monitoring with shutdown notifications",
    icon: "fe fe-users",
  },
]

const items = {
  main: [...defaultShared],
}

export default ({ version = "main" }) => {
  return (
    <div className="ray__block">
      <div className="container-fluid">
        <div className={style.features}>
          <h2 className="ray__heading mb-4">About Ray Network</h2>
          <p className="mb-5">
            Ray Network increase blockcahin use adoption: empowers regular users, developers, liquidity providers and traders to participate in a financial marketplace that is open and accessible to all.
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
