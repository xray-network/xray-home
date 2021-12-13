import React from "react"
import { Button } from "antd"
import Heading from "@/components/Heading"
import {
  SVGInternet,
  SVGChrome,
  SVGCategory,
  SVGAndroid,
  SVGShieldCheck,
  SVGZap,
  SVGApple,
  SVGDollar,
  SVGShuffle,
  SVGBank,
  SVGCart,
  SVGFire,
} from "@/svg"
import * as style from "./style.module.scss"

const items = [
  {
    icon: <SVGInternet />,
    title: "Web Version",
  },
  {
    icon: <SVGChrome />,
    title: "Chrome Extension",
  },
  {
    icon: <SVGCategory />,
    title: "Desktop Apps",
  },
  {
    icon: <SVGApple />,
    title: "Mobile Apps",
  },
  {
    icon: <SVGZap />,
    title: "Multi Assets Wallet",
  },
  {
    icon: <SVGBank />,
    title: "Stake",
  },
  {
    icon: <SVGDollar />,
    title: "Rewards",
  },
  {
    icon: <SVGShuffle />,
    title: "DeFi Swap (DEX)",
  },
  {
    icon: <SVGFire />,
    title: "Kickstart Crowdfunding",
  },
  {
    icon: <SVGCart />,
    title: "NFT Marketplace",
  },
  {
    icon: <SVGShieldCheck />,
    title: "Hardware Wallets Support",
  },
  {
    icon: <SVGInternet />,
    title: "Web3 Connector",
  },
]

const Wallet = () => {
  return (
    <div className={style.wallet}>
      <div className="ray__block mb-0">
        <Heading id="wallet">
          <strong>RayWallet</strong>, lightning-fast Cardano payments
        </Heading>
        <p>
          RayWallet is a web light wallet for Cardano. Light wallets don't need
          to download or synchronize the blockchain. This means that once you
          open the wallet, you can send or verify the transaction receipts right
          away.
        </p>
        <p>
          Ray Network token - XRAY - is a Cardano based cryptocurrency token for
          a fuelling the Ray platform. Ray is a highly functional open source
          project that banks on blockchain technology’s permissionless nature to
          provide decentralized finance (DeFi) solutions and other services.
        </p>
        <p className="mb-5">
          The XRAY token will provide holders with discounted fees on the
          platform, and it also serves as a governance token, giving owners a
          say in future development.
        </p>
        <div className={style.items}>
          {items.map((item, index) => {
            return (
              <div className={style.item} key={index}>
                <div className={style.itemIcon}>{item.icon}</div>
                <span>{item.title}</span>
              </div>
            )
          })}
        </div>
        <div className="mt-4 pt-3">
          <span className="d-inline-block me-3 mb-3">
            <a
              className="ray__btn ray__btn--round"
              href="https://raywallet.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="me-2">RayWallet Web</span>
              <span className="ray__icon">
                <SVGInternet />
              </span>
            </a>
          </span>
          <span className="d-inline-block me-3 mb-3">
            <a
              className="ray__btn ray__btn--round"
              href="https://raywallet.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="me-2">Chrome Extension</span>
              <span className="ray__icon">
                <SVGChrome />
              </span>
            </a>
          </span>
        </div>
        <div className="d-sm-flex">
          <span className="d-inline-block me-3 mb-3">
            <a
              className="ray__btn ray__btn--round"
              href="https://raywallet.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="me-2">Windows</span>
              <span className="ray__icon">
                <SVGCategory />
              </span>
            </a>
          </span>
          <span className="d-inline-block me-3 mb-3">
            <a
              className="ray__btn ray__btn--round"
              href="https://raywallet.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="me-2">macOS</span>
              <span className="ray__icon">
                <SVGApple />
              </span>
            </a>
          </span>
          <span className="d-inline-block me-3 mb-3">
            <a
              className="ray__btn ray__btn--round"
              href="https://raywallet.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="me-2">iOS</span>
              <span className="ray__icon">
                <SVGApple />
              </span>
            </a>
          </span>
          <span className="d-inline-block me-3 mb-3">
            <a
              className="ray__btn ray__btn--round"
              href="https://raywallet.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="me-2">Android</span>
              <span className="ray__icon">
                <SVGAndroid />
              </span>
            </a>
          </span>
        </div>
        <div className={style.images}>
          <div className={style.imagesContainer}>
            <img src="/resources/images/wallet1.jpg" alt="" />
            <img src="/resources/images/wallet2.jpg" alt="" />
          </div>
          <div className={style.imagesShadow} />
        </div>
      </div>
    </div>
  )
}

export default Wallet
