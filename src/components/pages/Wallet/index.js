import React from "react"
import { Button, Tooltip } from "antd"
import style from "./style.module.scss"

const items = [
  {
    icon: 'fe fe-check-circle',
    title: 'Multi-Assets Wallet',
  },
  {
    icon: 'fe fe-bar-chart',
    title: 'Stake',
  },
  {
    icon: 'fe fe-dollar-sign',
    title: 'Rewards',
  },
  {
    icon: 'fe fe-repeat',
    title: 'DeFi Swap',
  },
  {
    icon: 'fe fe-activity',
    title: 'KickStart',
  },
]

export default () => {
  return (
    <div className="ray__block pb-4">
      <div className="container-fluid">
        <h2 className="ray__heading mb-5">Ray Wallet</h2>
        <p className="mb-4">Ray Wallet is a web light wallet for Cardano. Light wallets don't need to download or synchronize the blockchain. This means that once you open the wallet, you can send or verify the reception of transactions right away.</p>
        <div className={`${style.items} mb-5`}>
          {items.map((item, index) => {
            return (
              <div className={style.item} key={index}>
                <div className={style.itemIcon}>
                  <i className={item.icon} />
                </div>
                <span>{item.title}</span>
              </div>
            )
          })}
        </div>
        <div>
          <Button
            className="ray__btn mr-3"
            href="https://wallet.rraayy.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              Open Ray Wallet
            </span>
            <i className="fe fe-arrow-up-right ray__btn__icon" />
          </Button>
          <Tooltip title="soon">
            <span className="d-inline-block">
              <Button
                className="ray__btn mr-3"
                href="/"
                disabled
              >
                <span>
                  Chrome Extension
                </span>
              </Button>
            </span>
          </Tooltip>
        </div>
      </div>
      <div className={style.images}>
        <div className="container-fluid">
          <div className={style.imagesContainer}>
            <img src="/resources/images/wallet.jpg" alt="" />
            <img src="/resources/images/wallet.jpg" alt="" />
          </div>
          <div className={style.imagesShadow} />
        </div>
      </div>
    </div>
  )
}
