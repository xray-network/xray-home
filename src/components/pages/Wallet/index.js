import React from "react"
import { Button, Tooltip } from "antd"
import Heading from "@/components/shared/Heading"
import { SVGLink, SVGZap, SVGApple, SVGDollar, SVGShuffle, SVGBank, SVGCart, SVGFire } from '@/svg'
import * as style from "./style.module.scss"

const items = [
  {
    icon: <SVGZap />,
    title: 'Multi-Assets Wallet',
  },
  {
    icon: <SVGApple />,
    title: 'Mobile Apps',
  },
  {
    icon: <SVGBank />,
    title: 'Stake',
  },
  {
    icon: <SVGDollar />,
    title: 'Rewards',
  },
  {
    icon: <SVGShuffle />,
    title: 'DeFi Swap (DEX)',
  },
  {
    icon: <SVGFire />,
    title: 'Kickstart Crowdfunding',
  },
  {
    icon: <SVGCart />,
    title: 'NFT Marketplace',
  },
  {
    icon: <SVGZap />,
    title: 'Hardware Wallets',
  },
]

const Wallet = () => {
  return (
    <div className="ray__block">
      <Heading id="wallet">
        Ray Wallet. Lightning-fast payments
      </Heading>
      <p>
        Ray Wallet is a web light wallet for Cardano. Light wallets don't need to download or synchronize the blockchain. This means that once you open the wallet, you can send or verify the transaction receipts right away.
      </p>
      <p>
        Ray Network token - XRAY - is a Cardano based cryptocurrency token for a fuelling the Ray platform. Ray is a highly functional open source project that banks on blockchain technology’s permissionless nature to provide decentralized finance (DeFi) solutions and other services.
      </p>
      <p className="mb-5">
        The XRAY token will provide holders with discounted fees on the platform, and it also serves as a governance token, giving owners a say in future development.
      </p>
      <div className={style.items}>
        {items.map((item, index) => {
          return (
            <div className={style.item} key={index}>
              <div className={style.itemIcon}>
                {item.icon}
              </div>
              <span>{item.title}</span>
            </div>
          )
        })}
      </div>
      <div className="mt-4 pt-3">
        <span className="d-inline-block me-3 mb-3">
          <Button
            className="ray__btn ray__btn--primary ray__btn--round"
            href="https://raywallet.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="me-2">
              Ray Wallet Web
            </span>
            <span className="ray__icon">
              <SVGLink />
            </span>
          </Button>
        </span>
        <Tooltip title="soon" className="me-3 mb-3">
          <span className="d-inline-block">
            <Button
              className="ray__btn ray__btn--round"
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
        <Tooltip title="soon" className="me-3 mb-3">
          <span className="d-inline-block">
            <Button
              className="ray__btn ray__btn--round"
              href="/"
              disabled
            >
              <span>
                Windows
              </span>
            </Button>
          </span>
        </Tooltip>
        <Tooltip title="soon" className="me-3 mb-3">
          <span className="d-inline-block">
            <Button
              className="ray__btn ray__btn--round"
              href="/"
              disabled
            >
              <span>
                macOS
              </span>
            </Button>
          </span>
        </Tooltip>
        <Tooltip title="soon" className="me-3 mb-3">
          <span className="d-inline-block">
            <Button
              className="ray__btn ray__btn--round"
              href="/"
              disabled
            >
              <span>
                iOS
              </span>
            </Button>
          </span>
        </Tooltip>
        <Tooltip title="soon" className="me-3 mb-3">
          <span className="d-inline-block">
            <Button
              className="ray__btn ray__btn--round"
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
          <img src="/resources/images/wallet1.jpg" alt="" />
          <img src="/resources/images/wallet2.jpg" alt="" />
        </div>
        <div className={style.imagesShadow} />
      </div>
    </div>
  )
}

export default Wallet