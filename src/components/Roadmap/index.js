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
    title: "RayWallet Stake",
    date: "Q2 2021",
  },
  {
    status: "completed",
    title: "RayWallet Rewards",
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
    title: "XRAY Rewards Withdrawal",
    date: "Q3 2021",
  },
  {
    status: "completed",
    title: "XDIAMOND & Redeemer",
    date: "Q3 2021",
  },
  {
    status: "completed",
    title: "RayStake App",
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
    status: "active",
    title: "Hardware Wallets Support",
    date: "Q1 2022",
  },
  {
    status: "active",
    title: "Cardano-Web3.js",
    date: "Q1 2022",
  },
  {
    status: "active",
    title: "Whitepaper",
    date: "Q1 2022",
  },
  {
    status: "active",
    title: "RaySwap",
    date: "Q1 2022",
  },
  {
    status: "active",
    title: "RayPad",
    date: "Q1 2022",
  },
  {
    status: "active",
    title: "Minterr.io",
    date: "Q1 2022",
  },
  {
    status: "pending",
    title: "Smart Contracts Audit",
    date: "Q1 2022",
  },
  {
    status: "pending",
    title: "dApps Mainnet Release",
    date: "Q1 2022",
  },
  {
    status: "pending",
    title: "RayGraph",
    date: "Q2 2022",
  },
  {
    status: "pending",
    title: "Ray Foundation",
    date: "Q3-Q4 2022",
  },
  {
    status: "pending",
    title: "RayData",
    date: "2022",
  },
  {
    status: "pending",
    title: "Ergo Support",
    date: "2022",
  },
]

const chrome = [
  {
    status: "active",
    title: "RayWallet + DApp Connector",
    date: "Q4 2021",
  },
  {
    status: "pending",
    title: "RayStake",
    date: "Q4 2021",
  },
]

const apps = [
  {
    status: "completed",
    title: "RayWallet PWA Windows",
    date: "Q4 2021",
  },
  {
    status: "completed",
    title: "RayWallet PWA macOS",
    date: "Q4 2021",
  },
  {
    status: "completed",
    title: "RayWallet PWA iOS",
    date: "Q4 2021",
  },
  {
    status: "completed",
    title: "RayWallet PWA Android",
    date: "Q4 2021",
  },
  {
    status: "pending",
    title: "RayStake PWA iOS",
    date: "Q1 2022",
  },
  {
    status: "pending",
    title: "RayStake PWA Android",
    date: "Q1 2022",
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
              <Tooltip
                key={index}
                title={<div className="text-capitalize">{item.status}</div>}
              >
                <div
                  className={classnames({
                    [style.item]: true,
                    [style.itemActive]: item.status === "active",
                    [style.itemCompleted]: item.status === "completed",
                  })}
                >
                  <span className={style.itemIcon}>
                    {item.status === "completed" && (
                      <i className="fe fe-check-circle" />
                    )}
                    {item.status === "active" && (
                      <i className="fe fe-activity" />
                    )}
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
              <Tooltip
                key={index}
                title={<div className="text-capitalize">{item.status}</div>}
              >
                <div
                  className={classnames({
                    [style.item]: true,
                    [style.itemActive]: item.status === "active",
                    [style.itemCompleted]: item.status === "completed",
                  })}
                >
                  <span className={style.itemIcon}>
                    {item.status === "completed" && (
                      <i className="fe fe-check-circle" />
                    )}
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
          <strong>Chrome Extensions</strong>
        </h5>
        <div>
          {chrome.map((item, index) => {
            return (
              <Tooltip
                key={index}
                title={<div className="text-capitalize">{item.status}</div>}
              >
                <div
                  className={classnames({
                    [style.item]: true,
                    [style.itemActive]: item.status === "active",
                    [style.itemCompleted]: item.status === "completed",
                  })}
                >
                  <span className={style.itemIcon}>
                    {item.status === "completed" && (
                      <i className="fe fe-check-circle" />
                    )}
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
