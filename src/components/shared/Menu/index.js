import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { useDispatch, useSelector } from "react-redux"
import {
  SVGRay,
  SVGWallet,
  SVGSun,
  SVGMoon,
  SVGCardano,

  SVGShieldCheck,
  SVGZap,
  SVGRocket,
  SVGDonutChart,
  SVGCheckCircled,
  SVGActivity,
  SVGDiamond,
  SVGPercent,

  SVGLink,
} from "@/svg"
import * as style from "./style.module.scss"

const config = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Wallet',
    url: '/wallet/',
  },
  {
    title: 'Stake',
    url: '/stake/',
  },
  {
    title: 'Rewards',
    url: '/rewards/',
  },
  {
    title: 'Swap',
    url: '/swap/',
  },
  {
    title: 'Kickstart',
    url: '/kickstart/',
  },
  {
    title: 'NFT',
    url: '/nft/',
  },
  {
    title: 'Graph',
    url: '/graph/',
  },
  {
    title: 'Data',
    url: '/data/',
  },
  {
    title: 'Tokens List',
    url: '/tokens-list/',
  },
  {
    title: 'Minterr.io',
    url: 'https://minterr.io',
    external: true,
  },
  {
    title: 'CardanoWeb3.js',
    url: 'https://github.com/ray-network/cardano-web3.js',
    external: true,
  },
  {
    title: 'XRAY Token',
    url: '/xray-token/',
  },
  {
    title: 'Roadmap & Updates',
    url: '/roadmap/',
  },
  {
    title: 'Wiki',
    url: '/wiki/',
  },
  {
    title: 'About',
    url: '/about/',
  },
  // {
  //   title: 'Whitepaper',
  //   url: '/whitepaper/',
  //   disabled: true,
  // },
  // {
  //   title: 'Audit',
  //   url: '/audit/',
  //   disabled: true,
  // },
  {
    title: 'Community',
    submenu: [
      {
        title: 'Twitter',
        url: 'https://twitter.com/RayNetwork',
        external: true,
        icon: <SVGLink />,
      },
      {
        title: 'Telegram Chat',
        url: 'https://t.me/RayNetwork',
        external: true,
        icon: <SVGLink />,
      },
      {
        title: 'Telegram',
        url: 'https://t.me/RayNetworkChannel',
        external: true,
        icon: <SVGLink />,
      },
      {
        title: 'Reddit',
        url: 'https://www.reddit.com/r/RayNetwork',
        external: true,
        icon: <SVGLink />,
      },
      {
        title: 'Discord',
        url: 'https://discord.gg/WhZmm46APN',
        external: true,
        icon: <SVGLink />,
      },
    ],
  },
  {
    title: 'Docs',
    url: 'https://docs.rraayy.com',
    external: true,
  },
  {
    title: 'Status',
    url: 'https://status.rraayy.com',
    status: true,
    external: true,
  },
]

const stake = [
  {
    title: 'Distribution',
    url: '/stake/',
    icon: <SVGRocket />,
  },
  {
    title: 'Pools',
    url: '/stake/pools/',
    icon: <SVGZap />,
  },
  {
    title: 'Calculator',
    url: '/stake/calculator/',
    icon: <SVGPercent />,
  },
  {
    title: 'Track & Withdraw',
    url: '/stake/track/',
    icon: <SVGActivity />,
  },
]

const rewards = [
  {
    title: 'Activities',
    url: '/rewards/',
    icon: <SVGCheckCircled />,
  },
  {
    title: 'X Diamond',
    url: '/rewards/xdiamond/',
    icon: <SVGDiamond />,
  },
]

const xray = [
  {
    title: 'Introducing',
    url: '/xray-token/',
    icon: <SVGShieldCheck />,
  },
  {
    title: 'Distribution',
    url: '/xray-token/distribution/',
    icon: <SVGRocket />,
  },
  {
    title: 'Tokenomics',
    url: '/xray-token/tokenomics/',
    icon: <SVGDonutChart />,
  },
]

const Menu = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.settings.theme)

  const changeTheme = () => {
    dispatch({
      type: "settings/CHANGE_THEME",
      theme: theme === "default" ? "dark" : "default",
    })
  }

  const switchMegaMenu = () => {
    dispatch({
      type: "settings/SWITCH_MEGA_MENU",
    })
  }

  const submenu = (items) => {
    return (
      <div className={style.submenu}>
        {items.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.url}
              className={style.submenuLink}
              activeClassName={style.submenuLinkActive}
            >
              <span className="ray__icon me-2">
                {item.icon}
              </span>
              <span className={style.submenuLinkWidth}>
                <span>{item.title}</span>
                <span>{item.title}</span>
              </span>
            </Link>
          )
        })}
      </div>
    )
  }

  const isStake = location.pathname.includes('/stake/')
  const isRewards = location.pathname.includes('/rewards/')
  const isXray = location.pathname.includes('/xray-token/')

  return (
    <div>
      <div className="ray__block mb-0">
        <div className={style.menu}>
          <Link to="/" className={`${style.menuLogo} me-4`}>
            <SVGRay />
            <span><strong>Ray Network</strong></span>
          </Link>
          <span className="text-muted flex-grow-1 d-none d-sm-inline pe-2 pe-md-4">
            Powered with{" "}
            <span className={style.menuCardano}>
              <SVGCardano />
            </span>{" "}
            Cardano
          </span>
          <span className="ms-auto me-3 d-none d-sm-inline">
            <a
              href="https://raywallet.io"
              className="ant-btn ray__btn ray__btn--round"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="pe-2">Ray Wallet</span>
              <span className="ray__icon">
                <SVGWallet />
              </span>
            </a>
          </span>
          <span
            className={`cursor-pointer me-3 ms-auto ms-sm-0 ${style.menuSwitch}`}
            onClick={changeTheme}
            onKeyPress={changeTheme}
            role="button"
            tabIndex="0"
          >
            <span className={theme === "default" ? "" : "d-none"}>
              <span className="ray__icon">
                <SVGSun />
              </span>
            </span>
            <span className={theme !== "default" ? "" : "d-none"}>
              <span className="ray__icon">
                <SVGMoon />
              </span>
            </span>
          </span>
          <span
            className={`${style.menuIcon} cursor-pointer`}
            onClick={switchMegaMenu}
            onKeyPress={switchMegaMenu}
            role="button"
            tabIndex="0"
            aria-label="Open Menu"
          />
        </div>
        <div>
          {config.map((item, index) => {
            const isActive =
              location.pathname === '/'
                ? item.url === location.pathname
                : item.url === '/'
                  ? false
                  : location.pathname.includes(item.url)
            return (
              <span key={index} className={style.linksContainer}>
                {!item.external && (
                  <Link
                    to={item.url}
                    className={`${style.linksLink} ${isActive ? style.linksLinkActive : ''}`}
                  >
                    <div className={style.linksLinkContainer}>
                      <span className={style.linksLinkTitle}>{item.title}</span>
                      <span>{item.title}</span>
                    </div>
                  </Link>
                )}
                {item.submenu && (
                  <div className={style.mContainer}>
                    <div className={style.mInner}>
                      {item.submenu.map((item, index) => {
                        return (
                          <a
                            key={index}
                            href={item.url}
                            className={style.mItem}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <div className={style.mTitle}>
                              <span className="ray__icon ray__icon--inline me-2">{item.icon}</span>
                              <span>{item.title}</span>
                            </div>
                          </a>
                        )
                      })}
                    </div>
                  </div>
                )}
                {item.external && (
                  <a
                    href={item.url}
                    target="_blank"
                    className={style.linksLink}
                    rel="noreferrer noopener"
                  >
                    <div className={style.linksLinkContainer}>
                      <span className={style.linksLinkTitle}>
                        {item.status && <i className={style.linksLinkStatus} />}
                        {item.title}
                      </span>
                      <span>{item.title}</span>
                    </div>
                  </a>
                )}
              </span>
            )
          })}
        </div>
      </div>
      <div className="ray__line mt-3 mb-4" />
      <div className="ray__block mb-5">
        {isStake && submenu(stake)}
        {isRewards && submenu(rewards)}
        {isXray && submenu(xray)}
      </div>
    </div>
  )
}

export default Menu
