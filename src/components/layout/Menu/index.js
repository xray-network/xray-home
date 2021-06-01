/* eslint-disable no-alert */

import React, { useEffect } from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import { Button, Tooltip } from "antd"
import { useSelector, useDispatch } from "react-redux"
import style from "./style.module.scss"

const products = [
  {
    title: 'Ray Wallet',
    url: '/ray-wallet/',
  },
  {
    title: 'Ray Stake',
    url: '/stake/',
  },
  {
    title: 'Ray Rewards',
    url: '/rewards/',
  },
  {
    title: 'Ray Swap',
    url: '/swap/',
  },
  {
    title: 'Ray KickStart',
    url: '/kickstart/',
  },
  {
    title: 'Ray NFT',
    url: '/nft-marketplace/',
  },
  {
    title: 'Tokens List',
    url: '/tokens-list/',
  },
  {
    title: 'Data Containers',
    url: '/data-containers/',
  },
  {
    title: 'Cardano-Web3.js',
    url: 'https://github.com/ray-network/cardano-web3.js',
    ext: true,
  },
]

const developers = [
  {
    title: 'Updates',
    url: '/updates',
  },
  {
    title: 'Github',
    url: 'https://github.com/ray-network',
    ext: true,
  },
  {
    title: 'Logo & Brand',
    url: '/wiki/brand',
  },
  {
    title: 'Documentation',
    url: '',
    disabled: true,
  },
  {
    title: 'Whitepaper',
    url: '',
    disabled: true,
  },
  {
    title: 'Audit',
    url: '',
    disabled: true,
  },
]

const community = [
  {
    title: 'Twitter',
    url: 'https://twitter.com/RayWallet',
    ext: true,
  },
  {
    title: 'Telegram',
    url: 'https://t.me/RayWallet',
    ext: true,
  },
  {
    title: 'Telegram Chat',
    url: 'https://t.me/RayWalletCommunity',
    ext: true,
  },
  {
    title: 'Reddit',
    url: 'https://www.reddit.com/r/RayWallet',
    ext: true,
  },
]

export default () => {
  const location = useLocation()
  const isProductPage = /^(\/ray-wallet|\/stake|\/rewards|\/swap|\/kickstart|\/nft-marketplace|\/tokens-list|\/data-containers)/.test(location.pathname)
  const isDevelopersPage = /(updates)/.test(location.pathname)
  const isWikiPage = /(wiki)/.test(location.pathname)
  const theme = useSelector((state) => state.settings.theme)
  const dispatch = useDispatch()

  const changeTheme = () => {
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'theme',
        value: theme === 'default' ? 'dark' : 'default',
      },
    })
  }

  const setTheme = (theme) => {
    document.querySelector('html').setAttribute('data-theme', theme)
  }

  useEffect(() => {
    setTheme(theme)
    // eslint-disable-next-line
  }, [theme])

  return (
    <div>
      <div className={style.header}>
        <Link to="/" className={style.logoContainer}>
          <div className={style.logo}>
            <img src="/resources/logo.svg" alt="" />
            <div className={style.name}>Ray Network</div>
          </div>
        </Link>
        <div className={style.menu}>
          <div
            className={`${style.link} ${style.products} ${isProductPage ? style.linkActive : ''}`}
          >
            <span>Products</span>
            <div className={style.mContainer}>
              <div className={style.mInner}>
                {products.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      to={item.url}
                      className={style.mItem}
                      activeClassName={style.mItemActive}
                      target={item.ext ? '_blank' : ''}
                    >
                      <div className={style.mTitle}>
                        {item.title}{' '}
                        {item.ext && <i className="fe fe-arrow-up-right" />}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
          <div
            className={`${style.link} ${style.products} ${isDevelopersPage ? style.linkActive : ''}`}
          >
            <span>Developers</span>
            <div className={style.mContainer}>
              <div className={style.mInner}>
                {developers.map((item, index) => {
                  if (item.disabled) {
                    return (
                      <Tooltip key={index} title="Soon" placement="right">
                        <div className={style.mItem}>
                          <div className={style.mTitle}>
                            {item.title}
                          </div>
                        </div>
                      </Tooltip>
                    )
                  }
                  return (
                    <Link
                      key={index}
                      to={item.url}
                      className={style.mItem}
                      activeClassName={style.mItemActive}
                      target={item.ext ? '_blank' : ''}
                    >
                      <div className={style.mTitle}>
                        {item.title}{' '}
                        {item.ext && <i className="fe fe-arrow-up-right" />}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
          <div
            className={`${style.link} ${style.products}`}
          >
            <span>Community</span>
            <div className={style.mContainer}>
              <div className={style.mInner}>
                {community.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      to={item.url}
                      className={style.mItem}
                      activeClassName={style.mItemActive}
                      target={item.ext ? '_blank' : ''}
                    >
                      <div className={style.mTitle}>
                        {item.title}{' '}
                        {item.ext && <i className="fe fe-arrow-up-right" />}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
          <Link
            className={style.link}
            to="https://x.rraayy.com"
            target="_blank"
          >
            XRAY Token{' '}
            <i className={`fe fe-arrow-up-right ${style.linkIcon}`} />
          </Link>
          <Link
            className={`${style.link}  ${isWikiPage ? style.linkActive : ''}`}
            to="/wiki/"
          >
            Wiki
          </Link>
          <Link
            className={style.link}
            to="https://status.rraayy.com"
            target="_blank"
          >
            <span className={style.status} />
            Status
          </Link>
          <span
            className={`${style.link} ${style.linkSwitch}`}
            role="button"
            tabIndex="0"
            onClick={changeTheme}
            onKeyPress={changeTheme}
          >
            {theme === 'default' && <i className="fe fe-sun" />}
            {theme !== 'default' && <i className="fe fe-moon" />}
          </span>
        </div>
        <Button
          className={`${style.fixed} ant-button ray__button ray__button--success`}
          href="https://app.visualbuilder.cloud"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>
            Open Ray Wallet
          </span>
          <i className="fe fe-arrow-up-right ray__button__icon" />
        </Button>
      </div>
    </div>
  )
}
