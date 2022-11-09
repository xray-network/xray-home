import React from "react"
import * as style from "./style.module.scss"

const items = [
  {
    icon: "ri ri-internet",
    title: "Web Version",
  },
  {
    icon: "ri ri-chrome",
    title: "Chrome Extension",
  },
  {
    icon: "ri ri-category",
    title: "Desktop Apps",
  },
  {
    icon: "ri ri-apple",
    title: "Mobile Apps",
  },
  {
    icon: "ri ri-zap",
    title: "Multi Assets",
  },
  {
    icon: "ri ri-group",
    title: "Multi Account / Wallet",
  },
  {
    icon: "ri ri-bank",
    title: "Stake",
  },
  {
    icon: "ri ri-dollar",
    title: "Rewards",
  },
  {
    icon: "ri ri-fire",
    title: "DApps",
  },
  {
    icon: "ri ri-shuffle",
    title: "DeFi Swap (DEX)",
  },
  {
    icon: "ri ri-cart",
    title: "NFT Marketplace",
  },
  {
    icon: "ri ri-shield_check",
    title: "Hardware Wallets Support",
  },
  {
    icon: "ri ri-wallet",
    title: "Web3 Connector",
  },
]

const RayWallet = () => {
  return (
    <div className="ray__block">
      <div className="ray__title">RayWallet</div>
      <div className="ray__title__descr">
        <strong>RayWallet</strong>, lightning-fast Cardano payments
      </div>
      <p>
        RayWallet is the most functional, lightweight, open-source non-custodial Cardano wallet with unique DeFi
        features and built-in dApps integrations. It's a whole Cardano DeFi ecosystem in one app - available for desktop
        and mobile.
      </p>
      <p>
        RayWallet is a web light wallet for Cardano. Light wallets don't need to download or synchronize the blockchain.
        This means that once you open the wallet, you can send or verify the transaction receipts right away.
      </p>
      <p>
        Ray Network token - XRAY - is a Cardano based cryptocurrency token for fuelling the Ray Network platform. Ray
        Network is a highly functional open source project that banks on blockchain technology’s permissionless nature
        to provide decentralized finance (DeFi) solutions and other services.
      </p>
      <p className="mb-5">
        The XRAY token will provide holders with discounted fees on the platform, and it also serves as a governance
        token, giving owners a say in future development.
      </p>
      <div className={style.items}>
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
      <div className="mt-4 pt-3">
        <span className="d-inline-block me-3 mb-3">
          <a
            className="ray__btn ray__btn--round"
            href="https://raywallet.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="me-2">RayWallet Web</span>
            <i className="ri ri-internet" />
          </a>
        </span>
        <span className="d-inline-block me-3 mb-3">
          <a
            className="ray__btn ray__btn--round"
            href="https://raywallet.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="me-2">Chrome Extension</span>
            <i className="ri ri-chrome" />
          </a>
        </span>
      </div>
      <div className="d-sm-flex">
        <span className="d-inline-block me-3 mb-3">
          <a
            className="ray__btn ray__btn--round"
            href="https://raywallet.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="me-2">Windows</span>
            <i className="ri ri-category" />
          </a>
        </span>
        <span className="d-inline-block me-3 mb-3">
          <a
            className="ray__btn ray__btn--round"
            href="https://raywallet.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="me-2">macOS</span>
            <i className="ri ri-apple" />
          </a>
        </span>
        <span className="d-inline-block me-3 mb-3">
          <a
            className="ray__btn ray__btn--round"
            href="https://raywallet.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="me-2">iOS</span>
            <i className="ri ri-apple" />
          </a>
        </span>
        <span className="d-inline-block me-3 mb-3">
          <a
            className="ray__btn ray__btn--round"
            href="https://raywallet.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="me-2">Android</span>
            <i className="ri ri-android" />
          </a>
        </span>
      </div>
    </div>
  )
}

export default RayWallet
