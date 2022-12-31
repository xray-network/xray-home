import React from "react"
import { Tooltip } from "antd"
import classnames from "classnames"

import * as style from "./style.module.scss"
const dev = [
  {
    status: "completed",
    title: "Website Portal",
    date: "Q1 2021",
  },
  {
    status: "completed",
    title: "Pools & APIs Env",
    date: "Q1 2021",
  },
  {
    status: "completed",
    title: "RayWallet",
    date: "Q2 2021",
  },
  {
    status: "completed",
    title: "RayWallet Staking",
    date: "Q2 2021",
  },
  {
    status: "completed",
    title: "XRAY Token",
    date: "Q2 2021",
  },
  {
    status: "completed",
    title: "RayWallet Native Tokens",
    date: "Q2 2021",
  },
  {
    status: "completed",
    title: "Cardano Fund Winner",
    date: "Q3 2021",
  },
  {
    status: "completed",
    title: "Minterr.io",
    date: "Q3 2021",
  },
  {
    status: "completed",
    title: "New Website Portal",
    date: "Q3 2021",
  },
  {
    status: "completed",
    title: "XDIAMOND sNFT",
    date: "Q3 2021",
  },
  {
    status: "completed",
    title: "RayStake App",
    date: "Q3 2021",
  },
  {
    status: "completed",
    title: "RayStake Withdrawals",
    date: "Q3 2021",
  },
  {
    status: "completed",
    title: "CardanoList.io",
    date: "Q4 2021",
  },
  {
    status: "completed",
    title: "RayWallet V2",
    date: "Q1 2022",
  },
  {
    status: "completed",
    title: "RayStake LP / XRAY",
    date: "Q2 2022",
  },
  {
    status: "active",
    title: "RayStake V2",
    date: "Q1 2023",
  },
  {
    status: "active",
    title: "RayWallet V3 + DApps Hub",
    date: "Q1 2023",
  },
  {
    status: "active",
    title: "CardanoWeb3.js",
    date: "Q1 2023",
  },
  {
    status: "active",
    title: "RaySwap",
    date: "Q1 2023",
  },
  {
    status: "pending",
    title: "CardanoList.io V2",
    date: "Q1 2023",
  },
  {
    status: "pending",
    title: "Whitepaper",
    date: "Q2 2023",
  },
  {
    status: "pending",
    title: "RayPad",
    date: "Q2 2023",
  },
  {
    status: "pending",
    title: "Minterr.io V2",
    date: "Q2 2023",
  },
  {
    status: "pending",
    title: "Ray Foundation",
    date: "Q2 2023",
  },
  {
    status: "pending",
    title: "RayGraph",
    date: "2022",
  },
  {
    status: "pending",
    title: "RayData",
    date: "2022",
  },
]

const apps = [
  {
    status: "completed",
    title: "RayWallet PWA",
    date: "Q4 2021",
  },
  {
    status: "completed",
    title: "RayStake PWA",
    date: "Q2 2022",
  },
  {
    status: "active",
    title: "RayWallet Chrome Extension",
    date: "Q1 2023",
  },
  {
    status: "active",
    title: "RayWallet DApp Connector",
    date: "Q1 2023",
  },
]

const Roadmap = () => {
  return (
    <div className="ray__block">
      <div className="ray__title">Development Information</div>
      <div className="ray__title__descr">
        <strong>Development</strong> Roadmap
      </div>
      <div className="mb-3">
        <h5 className="mb-5">
          <strong>Ray Ecosystem</strong>
        </h5>
        <div>
          {dev.map((item, index) => {
            return (
              <Tooltip key={index} title={<div className="text-capitalize">{item.status}</div>}>
                <div
                  className={classnames({
                    [style.item]: true,
                    [style.itemActive]: item.status === "active",
                    [style.itemCompleted]: item.status === "completed",
                  })}
                >
                  <span className={style.itemIcon}>
                    {item.status === "completed" && <i className="fe fe-check-circle" />}
                    {item.status === "active" && <i className="fe fe-activity" />}
                  </span>
                  <span className={style.itemDate}>{item.date}</span>
                  <span className={style.itemTitle}>{item.title}</span>
                </div>
              </Tooltip>
            )
          })}
        </div>
      </div>
      <div className="mb-5">
        <h5 className="mb-5">
          <strong>Desktop & Mobile Apps</strong>
        </h5>
        <div>
          {apps.map((item, index) => {
            return (
              <Tooltip key={index} title={<div className="text-capitalize">{item.status}</div>}>
                <div
                  className={classnames({
                    [style.item]: true,
                    [style.itemActive]: item.status === "active",
                    [style.itemCompleted]: item.status === "completed",
                  })}
                >
                  <span className={style.itemIcon}>
                    {item.status === "completed" && <i className="fe fe-check-circle" />}
                  </span>
                  <span className={style.itemDate}>{item.date}</span>
                  <span className={style.itemTitle}>{item.title}</span>
                </div>
              </Tooltip>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Roadmap
