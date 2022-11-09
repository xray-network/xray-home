import React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { message, Tooltip } from "antd"
import * as style from "./style.module.scss"

const nftFeatures = [
  {
    title: "RayStake Booster",
    icon: "ri ri-activity",
  },
  {
    title: "RayPad Premium Placement",
    icon: "ri ri-star",
  },
  {
    title: "Pigz.io In-Game Booster",
    icon: "ri ri-gamepad",
  },
  {
    title: "Minterr Free Minting",
    icon: "ri ri-coffee",
  },
  {
    title: "Collectible",
    icon: "ri ri-fire",
  },
]

const Xdiamond = () => {
  return (
    <div>
      <div className="ray__block mb-5 pb-2">
        <div className="ray__title">XDIAMOND sNFT</div>
        <div className="ray__title__descr">
          <strong>XDIAMOND</strong>, marketing and rewarding semi-NFT token
        </div>
        <p>
          XDIAMOND is a Cardano collectible semi-NFT token for marketing and community incentives. You can get it for
          participation in marketing activities and giveaways, keep an eye on Ray Network social media!
        </p>
      </div>
      <div className="ray__banner">
        <div className="ray__banner__frame ray__banner__frame--dark">
          <div
            className="ray__banner__image"
            style={{
              backgroundImage: "url(/resources/banners/night5.jpg)",
              opacity: 0.2,
            }}
          />
          <div className="ray__banner__line">
            <div />
            <div />
          </div>
          <div className="ray__banner__content py-3">
            <div className="ray__block pt-5 mb-5 text-white">
              <div className="row">
                <div className="col-12 col-md-8 pe-md-5 order-1 order-md-0">
                  <div>
                    <div className="ray__title">Ticker</div>
                    <div className="ray__price">XDIAMOND</div>
                  </div>
                  <div>
                    <div className="ray__title">Circulating Supply</div>
                    <div className="ray__price mb-2">19,049 *</div>
                    <div className="mb-4 text-muted">
                      * The initial supply was 31,000: 16,000 to early delegators, 10,000 to the community, and 5,000
                      for further incentives. Those redeemed at Stage 1 were burned, 11,951 total.
                    </div>
                  </div>
                  <div>
                    <div className="ray__title">Policy ID</div>
                    <div className="ray__price">
                      <CopyToClipboard
                        text="b6798a74fb7441ef5f7af1ff4ea6150bbb7aaeb0aca0113e558592f6"
                        onCopy={() => message.success("Copied to clipboard")}
                      >
                        <Tooltip title="Copy to clipboard">
                          <div className="font-size-21 cursor-pointer text-break">
                            <strong>
                              b6798a74fb7441ef5f7af1ff4ea6150bbb7aaeb0aca0113e558592f6{" "}
                              <i className="ri ri-copy text-muted" />
                            </strong>
                          </div>
                        </Tooltip>
                      </CopyToClipboard>
                    </div>
                  </div>
                  <div>
                    <div className="ray__title">Fingerprint</div>
                    <div className="ray__price mb-0">
                      <CopyToClipboard
                        text="asset1y7lphaaxkvjw5hl2kpq37nvlvg09qfqsh4qyme"
                        onCopy={() => message.success("Copied to clipboard")}
                      >
                        <Tooltip title="Copy to clipboard">
                          <div className="font-size-21 cursor-pointer text-break">
                            <strong>
                              asset1y7lphaaxkvjw5hl2kpq37nvlvg09qfqsh4qyme <i className="ri ri-copy text-muted" />
                            </strong>
                          </div>
                        </Tooltip>
                      </CopyToClipboard>
                    </div>
                  </div>
                  <div className="mt-5 pt-4">
                    <a
                      href="https://cardanoscan.io/token/asset1y7lphaaxkvjw5hl2kpq37nvlvg09qfqsh4qyme"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ray__btn ray__btn--white ray__btn--round me-3 mb-3"
                    >
                      <span className="me-2">View in Explorer</span>
                      <i className="ri ri-ext ri-arrow_up" />
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4 order-0 order-md-1">
                  <div className={style.diamond}>
                    <img src="/resources/images/XDIAMOND.png" alt="XDIAMOND" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ray__block">
        <div className="row">
          {nftFeatures.map((item, index) => {
            return (
              <div key={index} className="col-12 col-md-6">
                <span className="ray__info w-100">
                  <div className="ray__info__texture" />
                  <div className="ray__info__dot" />
                  <div className="ray__info__icon">
                    <i className={item.icon} />
                  </div>
                  <div className="ray__info__title">{item.title}</div>
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Xdiamond
