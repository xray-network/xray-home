import React from "react"
import { Link } from "gatsby"
import { Button } from "antd"
import style from "./style.module.scss"

export default () => {
  return (
    <div>
      <div className={style.header}>
        <Link to="/" className={style.logoContainer}>
          <div className={style.logo}>
            <img src="/resources/logo.svg" alt="" />
            <div className={style.name}>NETWORK</div>
          </div>
        </Link>
        <div className={style.menu}>
          <a
            className={style.link}
            href="https://wallet.rraayy.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ray Wallet
          </a>
          <Link
            className={style.link}
            activeClassName={style.active}
            to="/updates/"
          >
            Updates
          </Link>
          <a
            className={style.link}
            href="https://github.com/ray-network"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className={style.linkIcon} src="/resources/images/github.svg" alt="" />
            Github
          </a>
          <a
            className={style.link}
            href="https://telegram.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className={style.linkIconTg} src="/resources/images/telegram.svg" alt="" />
            Telegram
          </a>
          <a
            className={style.link}
            href="https://twittet.com/RayWallet"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className={style.linkIconTwi} src="/resources/images/twitter.svg" alt="" />
            Twitter
          </a>
        </div>
        <Button
          className={`${style.fixed} ant-button ray__btn`}
          href="https://wallet.rraayy.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>
            Open Ray Wallet
          </span>
          <i className="fe fe-arrow-up-right ray__btn__icon" />
        </Button>
      </div>
    </div>
  )
}
