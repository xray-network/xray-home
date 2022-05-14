import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import QRCode from "qrcode.react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { message, Tooltip } from "antd"
import { getAddressesBalance } from "@/services/graphql"
import * as style from "./style.module.scss"

const Xdiamond = () => {
  const theme = useSelector((state) => state.settings.theme)
  const [xdRedeemed, setXRedeemed] = useState(0)

  const saleAddress =
    "addr1q9sl4qydrgmtf922ypdffu5x2zxeg7jpk9ryzazq0d03d5hqeaa9yhkregmcvp89pujgdcfcuextw0wkh2lczvhqz8jqk6rg3k"
  const redeemAddress =
    "addr1q9j55y5p7lyq3esn7xwrae5k9ez30639dj3ct7pp6fjkavvhuchtelm0kpr4pfvht57xcx4qd80tr3q9gg4s9h3d22uqjxm9p9"

  const fetchBalances = async () => {
    const result = await getAddressesBalance([saleAddress, redeemAddress])
    const paymentAddresses = result?.data?.data?.paymentAddresses || []
    const paymentAddressesResults = {}
    paymentAddresses.forEach((item) => {
      const xd =
        item.summary.assetBalances.filter(
          (asset) =>
            asset.asset.fingerprint ===
            "asset1y7lphaaxkvjw5hl2kpq37nvlvg09qfqsh4qyme"
        )[0] || {}
      paymentAddressesResults[item.address] = xd.quantity || 0
    })
    setXRedeemed(paymentAddressesResults[redeemAddress] || 0)
  }

  useEffect(() => {
    fetchBalances()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="ray__block">
      <div className="row mb-5">
        <div className="col-12 col-md-8 pe-md-5">
          <div className="ray__left ray__left--dark">
            <h1 className="ray__promo__text">
              <strong className="bolder">
                <span className="ray__ticker ray__ticker--inverse ray__ticker__large">
                  XDIAMOND
                </span>
                , marketing and rewarding NFT token
              </strong>
            </h1>
          </div>
          <div className="d-block d-md-none">
            <div className={style.diamond}>
              <img src="/resources/images/XDIAMOND.png" alt="XDIAMOND" />
            </div>
          </div>
          <p>
            <span className="ray__ticker">XDIAMOND</span> is a Cardano
            collectible NFT token for marketing and community incentives. You
            can get it for participation in marketing activities and giveaways,
            keep an eye on Ray Network social media.
          </p>
          <ul>
            <li>Can be redeemed for an <span className="ray__ticker">XRAY</span>. Read about the details below</li>
            <li>Used as a booster in RayStake. <a href="https://raystake.io/cardano/faq/" target="_blank" rel="noopener noreferrer">Read the FAQ &rarr;</a></li>
          </ul>
          <p className="mb-5">
            Ticker:{" "}
            <strong className="bolder text-active">
              <span className="ray__ticker">XDIAMOND</span>
            </strong>
            <br />
            Policy ID:{" "}
            <strong className="text-active">
              <span className="text-break">
                b6798a74fb7441ef5f7af1ff4ea6150bbb7aaeb0aca0113e558592f6
              </span>
            </strong>
            <br />
            Fingerprint:{" "}
            <strong className="text-active">
              <span className="text-break">
                asset1y7lphaaxkvjw5hl2kpq37nvlvg09qfqsh4qyme
              </span>
            </strong>
            <br />
            Number of tokens:{" "}
            <strong className="text-active">
              <span className="text-break">31,000</span>
            </strong>
            <br />
            Distribution:{" "}
            <strong>
              16,000 to early delegators, 10,000 for the community, 5,000 for
              further incentives
            </strong>
          </p>
          <div className="d-block d-md-flex">
            <a
              href="https://cardanoscan.io/token/asset1y7lphaaxkvjw5hl2kpq37nvlvg09qfqsh4qyme"
              target="_blank"
              rel="noopener noreferrer"
              className="ray__btn ray__btn--round me-3 mb-3"
            >
              <span className="me-2">View in Explorer</span>
              <i className="ri ri-ext ri-arrow_up" />
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4 d-none d-md-block">
          <div className={style.diamond}>
            <img src="/resources/images/XDIAMOND.png" alt="XDIAMOND" />
          </div>
        </div>
      </div>
      <div className="ray__left ray__left--dark mb-5 position-relative">
        <h5 className="mb-4">
          <strong>
            Redeem <span className="ray__ticker me-3">XDIAMOND</span>
            Redeemed: {xdRedeemed}
          </strong>
        </h5>
        <div className={style.redeem}>
          <div className={style.redeemQr}>
            <QRCode
              value={redeemAddress}
              size={400}
              bgColor={theme === "default" ? "#fff" : "#000"}
              fgColor={theme === "default" ? "#000" : "#fff"}
            />
          </div>
          <div className={style.redeemInfo}>
            <p>
              Send 2 <span className="ray__ticker">ADA</span> + any amount of{" "}
              <span className="ray__ticker">XDIAMOND</span> to the address
              below. That 2 <span className="ray__ticker">ADA</span> minus the
              transaction fee will be returned to your wallet with{" "}
              <span className="ray__ticker">XRAY</span> tokens at the rate shown
              below.
            </p>
            <p>
              Current rate is 1 <span className="ray__ticker">XDIAMOND</span> =
              100 <span className="ray__ticker">XRAY</span>
            </p>
            <p className="mb-4 mb-md-0">
              <CopyToClipboard
                text={redeemAddress}
                onCopy={() => message.success("Copied to clipboard")}
              >
                <Tooltip title="Copy to clipboard">
                  <span className="link">
                    <span className="me-2 text-break">{redeemAddress}</span>
                    <i className="ri ri-files" />
                  </span>
                </Tooltip>
              </CopyToClipboard>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Xdiamond
