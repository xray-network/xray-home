import React, { useState } from "react"
import { Link } from "gatsby"
import { Button, Tooltip } from "antd"
import style from "./style.module.scss"

import SvgGithub from "../../../../static/resources/images/github.inline.svg"
import SvgTelegram from "../../../../static/resources/images/telegram.inline.svg"
import SvgTwitter from "../../../../static/resources/images/twitter.inline.svg"

export default () => {
  const [opened, isOpened] = useState(false)

  return (
    <div className="ray__block mb-0 z-index-5">
      <div className={style.header}>
        <Link to="/" className={style.logoContainer}>
          <div className={style.logo}>
            <img src="/resources/logo.svg" alt="" />
            <div className={style.name}>NETWORK</div>
          </div>
        </Link>
        <span
          className={style.burger}
          onClick={() => isOpened(!opened)}
          onKeyPress={() => isOpened(!opened)}
          role="button"
          tabIndex="-1"
        >
          <i className="fe fe-menu" />
        </span>
        <div className={`${style.menu} ${opened ? style.opened : ''}`}>
          <span
            className={style.close}
            onClick={() => isOpened(!opened)}
            onKeyPress={() => isOpened(!opened)}
            role="button"
            tabIndex="-1"
          >
            <i className="fe fe-x" />
          </span>
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
          <div className={style.social}>
            <Tooltip placement="bottom" title="Twitter">
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
            </Tooltip>
            <Tooltip placement="bottom" title="Telegram Announcements">
              <a
                className={style.link}
                href="https://t.me/RayWallet"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>
                  <SvgTelegram className={style.linkIconTg} />
                </span>
              </a>
            </Tooltip>
            <Tooltip placement="bottom" title="Telegram Chat">
              <a
                className={style.link}
                href="https://t.me/RayWalletCommunity"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>
                  <SvgTelegram className={style.linkIconTg} />
                </span>
              </a>
            </Tooltip>
            <Tooltip placement="bottom" title="GitHub">
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
            </Tooltip>
          </div>
        </div>
        <Button
          className={`${style.fixed} ray__btn`}
          href="https://raywallet.io"
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
