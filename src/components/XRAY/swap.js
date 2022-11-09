import React from "react"
import QRCode from "qrcode.react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { message, Tooltip } from "antd"
import Soon from "@/components/Soon"
import * as style from "./style.module.scss"

const XraySwap = () => {
  return (
    <div>
      <div className="ray__block mb-5 pb-2">
        <div className="ray__title">The New XRAY Token</div>
        <div className="ray__title__descr">
          Token <strong>Lock & Swap Event</strong>
        </div>
        <p>
          After the initial free community distribution of the XRAY token is successfully completed on November 1 and
          the initial tokenomics is set, we will begin the two-month period of exchanging the old token for the new XRAY
          token.
        </p>
      </div>
      <div className="ray__banner">
        <div className="ray__banner__frame ray__banner__frame--gray">
          <div
            className="ray__banner__image"
            style={{
              backgroundImage: "url(/resources/banners/waves.jpg)",
              opacity: 0.1,
            }}
          />
          <div className="ray__banner__line">
            <div />
            <div />
          </div>
          <div className="ray__banner__content">
            <div className="ray__block pt-5 pb-3 mb-0">
              <h1 className="mb-5">
                <strong className="bolder">Step 1 — The old XRAY swap</strong>
              </h1>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="ray__title">
                    <span className="me-2">Total Swapped — 0.000% of 97,914,504 XRAY</span>
                    <Tooltip title="In Stage 1, 97,914,504 XRAY were withdrawn by users and are to be exchanged for new XRAY">
                      <span>
                        <i className="ri ri-info cursor-pointer" />
                      </span>
                    </Tooltip>
                  </div>
                  <div className="ray__price">
                    0 <span>XRAY</span>
                  </div>
                  <div className="ray__title">Instructions</div>
                  <ol className="ps-3 max-width-600 mb-5">
                    <li>
                      Send{" "}
                      <strong>
                        <u>2 ADA</u>
                      </strong>{" "}
                      + old XRAY token with fingerprint{" "}
                      <strong>
                        <u>asset14y0dxsz9s9nd2lefkqvuu7edqlsg5p70r3wyxa</u>
                      </strong>{" "}
                      and in ~15 minutes you will receive back new XRAY token with fingerprint{" "}
                      <strong>
                        <u>asset1zwa4chw9xm7xwk7g46ef94qsj28hmnd7qffhgx</u>
                      </strong>
                    </li>
                  </ol>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title">Swap Address</div>
                  <div>
                    <Soon text="To be updated within 48 hours of the end of Stage 1. Final accrual of rewards in progress..." />
                    {/* <div className={style.qr}>
                      <QRCode
                        value="addr1q9j55y5p7lyq3esn7xwrae5k9ez30639dj3ct7pp6fjkavvhuchtelm0kpr4pfvht57xcx4qd80tr3q9gg4s9h3d22uqjxm9p9"
                        size={400}
                        bgColor="#fff"
                        fgColor="#000"
                      />
                    </div>
                    <CopyToClipboard
                      text="addr1q9j55y5p7lyq3esn7xwrae5k9ez30639dj3ct7pp6fjkavvhuchtelm0kpr4pfvht57xcx4qd80tr3q9gg4s9h3d22uqjxm9p9"
                      onCopy={() => message.success("Copied to clipboard")}
                    >
                      <Tooltip title="Copy to clipboard">
                        <div className="font-size-21 cursor-pointer text-break">
                          <strong>addr1q9j55y5p7lyq3esn7xwrae5k9ez30639dj3ct7pp6fjkavvhuchtelm0kpr4pfvht57xcx4qd80tr3q9gg4s9h3d22uqjxm9p9 <i className="ri ri-copy text-muted" /></strong>
                        </div>
                      </Tooltip>
                    </CopyToClipboard> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ray__banner">
        <div className="ray__banner__frame ray__banner__frame--gray">
          <div
            className="ray__banner__image"
            style={{
              backgroundImage: "url(/resources/banners/waves.jpg)",
              opacity: 0.1,
            }}
          />
          <div className="ray__banner__line">
            <div />
            <div />
          </div>
          <div className="ray__banner__content">
            <div className="ray__block pt-5 pb-3 mb-0">
              <h1 className="mb-5">
                <strong className="bolder">Step 2 — Replace liquidity</strong>
              </h1>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="ray__title">Instructions</div>
                  <ol className="ps-3 max-width-600 mb-5">
                    <li className="mb-4">
                      Remove all liquidity for the old token pairs with fingerprint{" "}
                      <strong>
                        <u>asset14y0dxsz9s9nd2lefkqvu7edqlsg5p70r3wyxa</u>
                      </strong>{" "}
                      and exchange the old token for the new one using the instructions from{" "}
                      <strong>
                        <u>Step 1</u>
                      </strong>
                    </li>
                    <li>
                      Provide liquidity for a pair with a new XRAY token with fingerprint{" "}
                      <strong>
                        <u>asset1zwa4chw9xm7xwk7g46ef94qsj28hmnd7qffhgx</u>
                      </strong>{" "}
                      to pools from the adjacent list
                    </li>
                  </ol>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title">Links to New DEX Pools</div>
                  <div>
                    <Soon text="To be updated shortly. DEX pools are establishing..." />
                    {/* <div className="font-size-21 mb-3">
                      <a href="https://minswap.org" target="_blank" rel="noopener noreferrer"><strong>Minswap &rarr;</strong></a>
                    </div>
                    <div className="font-size-21 mb-3">
                      <a href="https://minswap.org" target="_blank" rel="noopener noreferrer"><strong>Sundaeswap &rarr;</strong></a>
                    </div>
                    <div className="font-size-21 mb-3">
                      <a href="https://minswap.org" target="_blank" rel="noopener noreferrer"><strong>Wingriders &rarr;</strong></a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default XraySwap
