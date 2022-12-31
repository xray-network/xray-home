import React, { useState, useEffect } from "react"
import QRCode from "qrcode.react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { message, Tooltip, Alert } from "antd"
import { getAddressesBalance } from "@/services/graphql"
import * as style from "./style.module.scss"
import { format } from "@/utils"

const XraySwap = () => {
  const [swapped, setSwapped] = useState(0)
  const [stats, setStats] = useState({})
  const toSwap = 97914504

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const getSwapped = await getAddressesBalance(
      "addr1qxshzse6lcxkqed7wj9gw4xtxp3wqgs5mr5ewxxrj8emgpc6924cwznwmzrhz70uxyvzpj5q74xt9fzaznga7wnjmuwstu5wze"
    )
    const getStats = await (await fetch("https://api-swap.raygraph.io/orders/stats")).json()
    const oldXray = getSwapped?.data?.data?.paymentAddresses?.[0]?.summary?.assetBalances?.find(
      (item) => item?.asset?.fingerprint === "asset14y0dxsz9s9nd2lefkqvuu7edqlsg5p70r3wyxa"
    )
    if (oldXray) {
      setSwapped(oldXray?.quantity)
    }
    if (getStats) {
      setStats(getStats[0])
    }
  }

  return (
    <div>
      <div className="ray__block mb-5 pb-2">
        <div className="ray__title">The New XRAY Token</div>
        <div className="ray__title__descr">
          Token <strong>Lock & Swap Event</strong>
        </div>
        <p>
          After the initial free community distribution of the XRAY token is successfully completed on November 1 and
          the initial tokenomics is set, we will begin the seven-month period of exchanging the old token for the new XRAY
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
              <div className="mb-5">
                <Alert type="error" showIcon message="Please exchange only old tokens with policyID ae2a0aa5a24b27d9868c4a73b7c08077ac21baade5eca0fa467a2bbd. The tokens you withdraw from RayStake by November 1, 2022 must be exchanged. The tokens that were automatically sent to you from RayStake afterwards are already new!" />
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="ray__title">
                    <span className="me-2">
                      Total Swapped — {parseFloat((swapped / toSwap) * 100).toFixed(3)}% of {format(toSwap)} XRAY
                    </span>
                    <Tooltip title="In Stage 1, 97,914,504 XRAY were withdrawn by users and are to be exchanged for new XRAY">
                      <span>
                        <i className="ri ri-info cursor-pointer" />
                      </span>
                    </Tooltip>
                  </div>
                  <div className="ray__price">
                    {format(swapped)} <span>XRAY</span>
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
                      (policyID: ae2a0aa5a24b27d9868c4a73b7c08077ac21baade5eca0fa467a2bbd) to the swap address and in
                      ~10 minutes you will receive back 1.5 ADA and new XRAY token with fingerprint{" "}
                      <strong>
                        <u>asset1zwa4chw9xm7xwk7g46ef94qsj28hmnd7qffhgx</u>
                      </strong>{" "}
                      (policyID: 86abe45be4d8fb2e8f28e8047d17d0ba5592f2a6c8c452fc88c2c143)
                    </li>
                  </ol>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title">Swap Address</div>
                  <div>
                    <div className="d-flex w-100">
                      <div className={style.qr}>
                        <QRCode
                          value="addr1qxshzse6lcxkqed7wj9gw4xtxp3wqgs5mr5ewxxrj8emgpc6924cwznwmzrhz70uxyvzpj5q74xt9fzaznga7wnjmuwstu5wze"
                          size={400}
                          bgColor="#fff"
                          fgColor="#000"
                        />
                      </div>
                      <div className="w-100">
                        <ul className="list-unstyled ms-4">
                          <li>Processed Txs: {format(stats?.total || 0)}</li>
                          <li>Processing Txs: {format(stats?.processing || 0)}</li>
                          <li>In queue Txs: {format(stats?.pending || 0)}</li>
                        </ul>
                      </div>
                    </div>
                    <CopyToClipboard
                      text="addr1qxshzse6lcxkqed7wj9gw4xtxp3wqgs5mr5ewxxrj8emgpc6924cwznwmzrhz70uxyvzpj5q74xt9fzaznga7wnjmuwstu5wze"
                      onCopy={() => message.success("Copied to clipboard")}
                    >
                      <Tooltip title="Copy to clipboard">
                        <div className="font-size-21 cursor-pointer text-break text-primary">
                          <strong>
                            addr1qxshzse6lcxkqed7wj9gw4xtxp3wqgs5mr5ewxxrj8emgpc6924cwznwmzrhz70uxyvzpj5q74xt9fzaznga7wnjmuwstu5wze{" "}
                            <i className="ri ri-copy text-muted" />
                          </strong>
                        </div>
                      </Tooltip>
                    </CopyToClipboard>
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
                      (policyID: ae2a0aa5a24b27d9868c4a73b7c08077ac21baade5eca0fa467a2bbd) and exchange the old token
                      for the new one using the instructions from{" "}
                      <strong>
                        <u>Step 1</u>
                      </strong>
                    </li>
                    <li>
                      Provide liquidity for a pair with a new XRAY token with fingerprint{" "}
                      <strong>
                        <u>asset1zwa4chw9xm7xwk7g46ef94qsj28hmnd7qffhgx</u>
                      </strong>{" "}
                      (policyID: 86abe45be4d8fb2e8f28e8047d17d0ba5592f2a6c8c452fc88c2c143) to pools from the adjacent
                      list
                    </li>
                  </ol>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title">Links to New DEX Pools</div>
                  <div>
                    <div className="font-size-21 mb-3">
                      <a
                        href="https://app.wingriders.com/pools/af9a1bab395e1b177cbb94e073e25d04898275297d3183b368669e4bda97dc30?tvlTimeSpan=1_month&transactions=all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Wingriders &rarr;</strong>
                      </a>
                    </div>
                    <div className="font-size-21 mb-3">
                      <a
                        href="https://app.minswap.org/swap?currencySymbolA=&tokenNameA=&currencySymbolB=86abe45be4d8fb2e8f28e8047d17d0ba5592f2a6c8c452fc88c2c143&tokenNameB=58524159"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Minswap &rarr;</strong>
                      </a>
                    </div>
                    <div className="font-size-21 mb-3">
                      <a
                        href="https://exchange.sundaeswap.finance/#/swap?swap_from=86abe45be4d8fb2e8f28e8047d17d0ba5592f2a6c8c452fc88c2c143.58524159&swap_to=cardano.ada"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Sundaeswap &rarr;</strong>
                      </a>
                    </div>
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
