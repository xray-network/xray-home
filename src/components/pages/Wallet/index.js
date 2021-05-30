import React from "react"
import { Button, Tooltip } from "antd"
import Heading from "@/components/layout/Heading"
import style from "./style.module.scss"

const items = [
  {
    icon: 'fe fe-check-circle',
    title: 'Multi-Assets Wallet',
  },
  {
    icon: 'fe fe-smartphone',
    title: 'Mobile Apps',
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
  {
    icon: 'fe fe-shopping-cart',
    title: 'NFT Marketplace',
  },
  {
    icon: 'fe fe-shield',
    title: 'Hardware Wallets',
  },
]

export default () => {
  return (
    <div className="ray__block pb-4">
      <Heading id="wallet">
        <strong className="bolder">Ray</strong> Wallet
      </Heading>
      <p>
        Ray Wallet is a web light wallet for Cardano. Light wallets don't need to download or synchronize the blockchain. This means that once you open the wallet, you can send or verify the transaction receipts right away.
      </p>
      <p>
        Ray Network token - XRAY - is a Cardano based cryptocurrency token for a fuelling the Ray platform. Ray is a highly functional open source project that banks on blockchain technology’s permissionless nature to provide decentralized finance (DeFi) solutions and other services.
      </p>
      <p className="mb-5">
        In the near future XRAY token will provide holders with discounted fees on the platform, and it also serves as a governance token, giving owners a say in future development.
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
        <span className="d-inline-block mr-3 mb-2">
          <Button
            className="ray__button"
            href="https://raywallet.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              Ray Wallet Web
            </span>
            <i className="fe fe-arrow-up-right ray__button__icon" />
          </Button>
        </span>
        <Tooltip title="soon" className="mr-3 mb-2">
          <span className="d-inline-block">
            <Button
              className="ray__button"
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
      <div className="d-sm-flex">
        <Tooltip title="soon" className="mr-3 mb-2">
          <span className="d-inline-block">
            <Button
              className="ray__button"
              href="/"
              disabled
            >
              <span>
                Windows
              </span>
            </Button>
          </span>
        </Tooltip>
        <Tooltip title="soon" className="mr-3 mb-2">
          <span className="d-inline-block">
            <Button
              className="ray__button"
              href="/"
              disabled
            >
              <span>
                macOS
              </span>
            </Button>
          </span>
        </Tooltip>
        <Tooltip title="soon" className="mr-3 mb-2">
          <span className="d-inline-block">
            <Button
              className="ray__button"
              href="/"
              disabled
            >
              <span>
                iOS
              </span>
            </Button>
          </span>
        </Tooltip>
        <Tooltip title="soon" className="mr-3 mb-2">
          <span className="d-inline-block">
            <Button
              className="ray__button"
              href="/"
              disabled
            >
              <span>
                Android
              </span>
            </Button>
          </span>
        </Tooltip>
      </div>
      <div className={style.images}>
        <div className={style.imagesContainer}>
          <img src="/resources/images/wallet.jpg" alt="" />
          <img src="/resources/images/wallet.jpg" alt="" />
        </div>
        <div className={style.imagesShadow} />
      </div>
    </div>
  )
}
