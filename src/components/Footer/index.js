import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Input, message, Tooltip } from "antd"
import { SVGRay, SVGCardano } from "@/svg"
import * as style from "./style.module.scss"

const Footer = () => {
  const networkState = useSelector((state) => state.settings.networkState)
  const [email, setEmail] = useState()
  const [loading, setLoading] = useState(false)

  const subscribe = async () => {
    const validEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )

    if (validEmail) {
      let formData = new FormData()
      formData.append("EMAIL", email)
      setLoading(true)
      await fetch(
        "https://raynetwork.us20.list-manage.com/subscribe/post?u=630230660ec54c50b0c34762c&id=844a6bbde0",
        {
          method: "post",
          mode: "no-cors",
          body: formData,
        }
      )
      setLoading(false)
      setEmail()
      message.success("You have successfully subscribed!")
    } else {
      message.error("Please enter a valid email address.")
    }
  }

  return (
    <div className={style.outer}>
      <div className="ray__block mb-0">
        <div className="pb-5">
          <div className={style.footerTop}>
            <div className="row">
              <div className="col-12 col-md-8 mb-3">
                <div className={`${style.footerLists} row`}>
                  <div className="col-6 col-sm-4">
                    <div className="d-flex mb-4">
                      <h6 className="mb-0">
                        <strong>Resources</strong>
                      </h6>
                    </div>
                    <ul className="list-unstyled mb-5">
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
                        <a href="https://raynetwork.io/developers/">
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
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://status.raynetwork.io/"
                        >
                          <span className={style.dot} />
                          Status <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://docs.raynetwork.io/"
                        >
                          Documentation <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/ray-network/"
                        >
                          GitHub <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-sm-4 ">
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
                          href="https://raystart.io"
                        >
                          RayStart <i className="ri ri-arrow_up ri-ext" />
                        </a>
                      </li>
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
                  <div className="col-12 col-sm-4">
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
              <div className="col-12 col-md-4">
                <div className="row">
                  <div className="col-6 col-md-12">
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
                  <div className="col-6 col-md-12">
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
                <div className="mb-3">
                  <h6 className="mb-0">
                    <strong>Newsletter</strong>
                  </h6>
                </div>
                <div className="mb-4">
                  <Input.Search
                    placeholder="Enter your email"
                    allowClear
                    enterButton="Subscribe"
                    size="large"
                    value={email}
                    type="email"
                    onSearch={() => subscribe()}
                    onChange={(e) => setEmail(e.target.value)}
                    loading={loading}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.footerBottom}>
            <div className="mb-2">
              <a
                className={style.footerRay}
                href="https://raynetwork.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <SVGRay />
                <span>
                  <strong>Ray Network</strong>
                </span>
              </a>
            </div>
            <p className="mb-2">
              {new Date().getFullYear()} &copy; Ray Foundation DAO | Advanced
              Ecosystem for Cardano Blockchain Platform.{" "}
              <span>
                <span>Powered with</span>{" "}
                <a
                  href="https://cardano.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className={style.footerCardano}>
                    <SVGCardano />
                  </span>
                  <strong>Cardano</strong>
                </a>
              </span>
            </p>
            <p className="mb-2">
              <span className="me-2 text-capitalize">
                <span className={style.status} />
                Cardano Mainnet: Epoch {networkState?.currentEpoch?.number || 0}
                , Block {networkState?.tip?.number || 0}, Slot{" "}
                {networkState?.tip?.slotNo || 0}
              </span>
            </p>
            <p className="mb-0 text-muted"></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
