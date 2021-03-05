import React from "react"
import { Link } from "gatsby"
import { Button } from "antd"
import style from "./style.module.scss"

import SvgGithub from "../../../../static/resources/images/github.inline.svg"
import SvgTelegram from "../../../../static/resources/images/telegram.inline.svg"
import SvgTwitter from "../../../../static/resources/images/twitter.inline.svg"

export default () => {
  return (
    <div className="ray__block mb-0 z-index-5">
      <div className={style.header}>
        <Link to="/" className={style.logoContainer}>
          <div className={style.logo}>
            <img src="/resources/logo.svg" alt="" />
            <div className={style.name}>NETWORK</div>
          </div>
        </Link>
        <div className={style.menu}>
          <Link
            className={style.link}
            activeClassName={style.active}
            to="/"
          >
            Home
          </Link>
          <Link
            className={style.link}
            activeClassName={style.active}
            to="/updates/"
          >
            Updates
          </Link>
          <Link
            className={style.link}
            activeClassName={style.active}
            to="/wiki/"
          >
            Wiki
          </Link>
          <a
            className={style.link}
            href="https://status.rraayy.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className={style.status} />
            Status
          </a>
          <a
            className={style.link}
            href="https://github.com/ray-network"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              <SvgGithub className={style.linkIcon} />
            </span>
          </a>
          <a
            className={style.link}
            href="https://t.me/RayNetwork"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              <SvgTelegram className={style.linkIconTg} />
            </span>
          </a>
          <a
            className={style.link}
            href="https://twitter.com/RayWallet"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              <SvgTwitter className={style.linkIconTwi} />
            </span>
          </a>
        </div>
        <Button
          className={`${style.fixed} ray__btn`}
          href="https://wallet.rraayy.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>
            Open RAY Wallet
          </span>
          <i className="fe fe-arrow-up-right ray__btn__icon" />
        </Button>
      </div>
    </div>
  )
}
