import React from "react"
import { Link } from "gatsby"
import { Tooltip } from "antd"
import { useDispatch } from "react-redux"
import { SVGRay } from "@/svg"
import * as style from "./style.module.scss"
import imgWallet1 from "./wallet1.jpeg"
import imgWallet2 from "./wallet2.jpeg"

const menuConfig = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Start",
    url: "/start/",
  },
  {
    title: "Ecosystem",
    url: "/ecosystem/",
  },
  {
    title: "XRAY",
    url: "/xray/",
  },
  {
    title: "Developers",
    url: "/developers/",
  },
  {
    title: "Community",
    url: "/community/",
  },
]

const MegaMenu = () => {
  const dispatch = useDispatch()

  const switchMegaMenu = () => {
    dispatch({
      type: "settings/SWITCH_MEGA_MENU",
    })
  }

  return (
    <div className={style.fixed} id="mega-menu">
      <div className="ray__block mb-3">
        <div className={style.container}>
          <div className={style.menu}>
            <div className={style.menuLogo}>
              <Link to="/" className={style.logo}>
                <SVGRay />
                <span>Ray Network</span>
              </Link>
            </div>
            <div className={style.menuButtons}>
              <a
                href="https://raywallet.io"
                className="ant-btn ray__btn ray__btn--round"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri ri-wallet me-0 me-sm-2" />
                <span className="d-none d-sm-inline">RayWallet</span>
              </a>
              <span
                className="ant-btn ms-2 ms-md-3 ray__btn ray__btn--transparent ray__btn--icon ray__btn--round px-3"
                onClick={switchMegaMenu}
                onKeyPress={switchMegaMenu}
                role="button"
                tabIndex="0"
              >
                <i className="ri ri-close" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="ray__block mb-4 pb-3">
        {menuConfig.map((item, index) => {
          return item.url ? (
            <Link
              key={index}
              to={item.url}
              className="ray__menu"
              activeClassName="ray__menu--active"
              onClick={switchMegaMenu}
            >
              {item.title}
            </Link>
          ) : (
            <span className="ray__menu ray__menu--disabled">{item.title}</span>
          )
        })}
      </div>
      <div className="ray__block pt-3 mb-0">
        <div className="pb-5 overflow-hidden">
          <div>
            <div className="row">
              <div className="col-12 col-md-8 mb-3">
                <div className={`${style.footerLists} row`}>
                  <div
                    className="col-6 col-sm-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="d-flex mb-4">
                      <h6 className="mb-0">
                        <strong>Resources</strong>
                      </h6>
                    </div>
                    <ul className="list-unstyled mb-5">
                      <li>
                        <a href="https://raynetwork.io/start/">Getting Started</a>
                      </li>
                      <li>
                        <a href="https://raynetwork.io/ecosystem/">Ecosystem</a>
                      </li>
                      <li>
                        <a href="https://raynetwork.io/xray/">XRAY Token</a>
                      </li>
                      <li>
                        <a href="https://raynetwork.io/xdiamond/">
                          XDIAMOND NFT
                        </a>
                      </li>
                      <li>
                        <a href="https://raynetwork.io/community/">
                          Developers
                        </a>
                      </li>
                      <li>
                        <a href="https://raynetwork.io/community/">Community</a>
                      </li>
                      <li>
                        <a href="https://raynetwork.io/roadmap/">
                          Roadmap & Updates
                        </a>
                      </li>
                      <li>
                        <a href="https://raynetwork.io/whitepaper/">
                          Whitepaper
                        </a>
                      </li>
                      <li>
                        <a href="https://raynetwork.io/audit/">Audit</a>
                      </li>
                      <li>
                        <a href="https://raynetwork.io/about/">About</a>
                      </li>
                      <li>
                        <a href="https://raynetwork.io/terms-of-use/">
                          Terms of Use
                        </a>
                      </li>
                      <li>
                        <a href="https://status.raynetwork.io/">
                          <span className={style.dot} />
                          Status <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
                      <li>
                        <a href="https://docs.raynetwork.io/">
                          Documentation <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/ray-network/">
                          GitHub <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="col-6 col-sm-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-anchor="#mega-menu"
                  >
                    <div className="d-flex mb-4">
                      <h6 className="mb-0">
                        <strong>Ecosystem</strong>
                      </h6>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://raywallet.io"
                        >
                          RayWallet <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://raystake.io"
                        >
                          RayStake <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://rayswap.io"
                        >
                          RaySwap <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://raypad.io"
                        >
                          RayPad <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://raygraph.io"
                        >
                          RayGraph <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://raydata.io"
                        >
                          RayData <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://minterr.io"
                        >
                          Minterr.io <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://cardanolist.io"
                        >
                          CardanoList.io <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://pigz.io"
                        >
                          Pigz.io Metaverse{" "}
                          <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/ray-network/cardano-web3.js"
                        >
                          CardanoWeb3.js <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://ray.foundation"
                        >
                          Ray Foundation <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="col-12 col-sm-4"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-anchor="#mega-menu"
                  >
                    <div className="row">
                      <div className="col-6 col-sm-12">
                        <div className="d-flex mb-4">
                          <h6 className="mb-0">
                            <strong>Twitter</strong>
                          </h6>
                        </div>
                        <ul className="list-unstyled mb-5">
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://twitter.com/RayNetwork"
                            >
                              @RayNetwork{" "}
                              <i className="ri ri-arrow_up ri-ext" />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://twitter.com/RayWallet"
                            >
                              @RayWallet <i className="ri ri-arrow_up ri-ext" />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://twitter.com/MinterrApp"
                            >
                              @MinterrApp{" "}
                              <i className="ri ri-arrow_up ri-ext" />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://twitter.com/CardanoList"
                            >
                              @CardanoList{" "}
                              <i className="ri ri-arrow_up ri-ext" />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://twitter.com/PigzMetaverse"
                            >
                              @PigzMetaverse{" "}
                              <i className="ri ri-arrow_up ri-ext" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6 col-sm-12">
                        <div className="d-flex mb-4">
                          <h6 className="mb-0">
                            <strong>Socials</strong>
                          </h6>
                        </div>
                        <ul className="list-unstyled mb-4">
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://www.reddit.com/r/RayNetwork"
                            >
                              Reddit <i className="ri ri-arrow_up ri-ext" />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://t.me/RayNetwork"
                            >
                              Telegram Chat{" "}
                              <i className="ri ri-arrow_up ri-ext" />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://t.me/RayNetworkChannel"
                            >
                              Telegram Announcements{" "}
                              <i className="ri ri-arrow_up ri-ext" />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://discord.gg/WhZmm46APN"
                            >
                              Ray Network Discord{" "}
                              <i className="ri ri-arrow_up ri-ext" />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://discord.gg/dDVXcthYWn"
                            >
                              Minterr.io Discord{" "}
                              <i className="ri ri-arrow_up ri-ext" />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://raynetwork.medium.com/"
                            >
                              Medium Blog{" "}
                              <i className="ri ri-arrow_up ri-ext" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row"
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-anchor="#mega-menu"
          >
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <h6 className="mb-2">
                      <strong>RayWallet Apps</strong>
                    </h6>
                    <small className="text-muted">A lightweight wallet with DApps Hub. All Cardano DeFi in one app.</small>
                  </div>
                  <div className="mb-4">
                    <Tooltip title="Web Version">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://raywallet.io/"
                        className={style.footerApp}
                      >
                        <i className="ri ri-internet" />
                      </a>
                    </Tooltip>
                    <Tooltip title="Chrome Extension">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://raywallet.io/"
                        className={style.footerApp}
                      >
                        <i className="ri ri-chrome" />
                      </a>
                    </Tooltip>
                    <Tooltip title="macOS App">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://raywallet.io/"
                        className={style.footerApp}
                      >
                        <i className="ri ri-apple" />
                      </a>
                    </Tooltip>
                    <Tooltip title="Windows App">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://raywallet.io/"
                        className={style.footerApp}
                      >
                        <i className="ri ri-category" />
                      </a>
                    </Tooltip>
                    <br className="d-none d-sm-block" />
                    <Tooltip title="iOS App">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://raywallet.io/"
                        className={style.footerApp}
                      >
                        <i className="ri ri-apple" />
                      </a>
                    </Tooltip>
                    <Tooltip title="Android App">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://raywallet.io/"
                        className={style.footerApp}
                      >
                        <i className="ri ri-android" />
                      </a>
                    </Tooltip>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <h6 className="mb-2">
                      <strong>RayStake Apps</strong>
                    </h6>
                    <small className="text-muted">Advanced staking for Cardano and other blockchains.</small>
                  </div>
                  <div className="mb-4">
                    <div>
                      <Tooltip title="Web Version">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://raystake.io/"
                          className={style.footerApp}
                        >
                          <i className="ri ri-internet" />
                        </a>
                      </Tooltip>
                      <Tooltip title="macOS App">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://raystake.io/"
                          className={style.footerApp}
                        >
                          <i className="ri ri-apple" />
                        </a>
                      </Tooltip>
                      <Tooltip title="Windows App">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://raystake.io/"
                          className={style.footerApp}
                        >
                          <i className="ri ri-category" />
                        </a>
                      </Tooltip>
                      <br className="d-none d-sm-block" />
                      <Tooltip title="iOS App">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://raystake.io/"
                          className={style.footerApp}
                        >
                          <i className="ri ri-apple" />
                        </a>
                      </Tooltip>
                      <Tooltip title="Android App">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://raystake.io/"
                          className={style.footerApp}
                        >
                          <i className="ri ri-android" />
                        </a>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className={style.wallets}>
                <a
                  href="https://raywallet.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={imgWallet2} alt="RayWallet" />
                  <span className="ant-btn ray__btn ray__btn--round">
                    RayWallet
                  </span>
                </a>
                <a
                  href="https://raywallet.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={imgWallet1} alt="RayWallet" />
                  <span className="ant-btn ray__btn ray__btn--round ray__btn--white">
                    RayWallet
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <p className="mb-2 font-size-14">
              Advanced Ecosystem for Cardano Blockchain Platform
            </p>
            <p className="mb-0 font-size-14">
              {new Date().getFullYear()} &copy; Ray Foundation DAO
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MegaMenu
