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
    title: "At least 4 relays for each producer node",
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
    <div className="cui__block">
      <div className="container-fluid">
        <div className={style.features}>
          <h6 className="cui__block__heading mb-5">RAY Pools Overview</h6>
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
