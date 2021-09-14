import React from "react"
import { useSelector } from "react-redux"
import QRCode from "qrcode.react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { message, Tooltip } from "antd"
import { SVGFiles } from "@/svg"
import * as style from "./style.module.scss"

const XrayTokenomics = () => {
  const theme = useSelector((state) => state.settings.theme)
  const saleAddress = "addr1q9sl4qydrgmtf922ypdffu5x2zxeg7jpk9ryzazq0d03d5hqeaa9yhkregmcvp89pujgdcfcuextw0wkh2lczvhqz8jqk6rg3k"
  const redeemAddress = "addr1q9j55y5p7lyq3esn7xwrae5k9ez30639dj3ct7pp6fjkavvhuchtelm0kpr4pfvht57xcx4qd80tr3q9gg4s9h3d22uqjxm9p9"

  return (
    <div className="ray__block">
      <div className="ray__promo">
        <div className="row mb-5">
          <div className="col-12 col-md-8 pe-md-5">
            <h1
              className="ray__promo__text"
              data-aos="fade-up"
              data-aos-delay="000"
            >
              <span className="ray__ticker ray__ticker__large">XDIAMOND</span>, marketing and rewarding NFT token
            </h1>
            <div className="d-block d-md-none" data-aos="fade-up" data-aos-delay="200">
              <div className={style.diamond}>
                <img src="/resources/XDIAMOND.png" alt="XDIAMOND" />
              </div>
            </div>
            <p  data-aos="fade-up" data-aos-delay="400">
              <span className="ray__ticker">XDIAMOND</span> is a Cardano
              collectible NFT token for marketing and community incentives. You
              can get it for participation in marketing activities and giveaways,
              keep an eye on Ray Network social media. Can be redeemed for an{" "}
              <span className="ray__ticker">XRAY</span>!
            </p>
            <p  data-aos="fade-up" data-aos-delay="600">
              Ticker:{" "}
              <strong className="bolder text-active">
                <span className="ray__ticker">XDIAMOND</span>
              </strong>
              <br />
              Policy ID:{" "}
              <strong className="text-active">
                <span className="text-break">b6798a74fb7441ef5f7af1ff4ea6150bbb7aaeb0aca0113e558592f6</span>
              </strong>
              <br />
              Fingerprint:{" "}
              <strong className="text-active">
                <span className="text-break">asset1y7lphaaxkvjw5hl2kpq37nvlvg09qfqsh4qyme</span>
              </strong>
              <br />
              More info:{" "}
              <strong className="text-active">
                <a
                  href="https://minterr.io/explorer/search/?asset=asset1y7lphaaxkvjw5hl2kpq37nvlvg09qfqsh4qyme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View in Explorer
                </a>
              </strong>
            </p>
          </div>
          <div className="col-12 col-md-4 d-none d-md-block" data-aos="fade-up" data-aos-delay="200">
            <div className={style.diamond}>
              <img src="/resources/XDIAMOND.png" alt="XDIAMOND" />
            </div>
          </div>
        </div>
      </div>
      <div className="ray__left ray__left--dark mb-5 position-relative">
        <h5 className="mb-4">
          <strong>
            Purchase <span className="ray__ticker">XDIAMOND</span>
          </strong>
        </h5>
        <div className={style.redeem}>
          <div className={style.redeemQr}>
            <QRCode
              value={saleAddress}
              size="100"
              bgColor={theme === "default" ? "#fff" : "#000"}
              fgColor={theme === "default" ? "#000" : "#fff"}
            />
          </div>
          <div className={style.redeemInfo}>
            <p>
              Send any amount divisible by 15{" "}
              <span className="ray__ticker">ADA</span> plus 2  <span className="ray__ticker">ADA</span>on top to the address below.
              That 2 <span className="ray__ticker">ADA</span> minus the transaction fee will be returned to
              your wallet with <span className="ray__ticker">XDIAMOND</span> tokens at the rate shown below.
            </p>
            <p>
              Current rate is 1 <span className="ray__ticker">XDIAMOND</span> =
              15 <span className="ray__ticker">ADA</span>
            </p>
            <p className="mb-4 mb-md-0">
              <CopyToClipboard
                text={saleAddress}
                onCopy={() => message.success("Copied to clipboard")}
              >
                <Tooltip title="Copy to clipboard">
                  <span className="link">
                    <span className="me-2 word-break">{saleAddress}</span>
                    <span className="ray__icon ray__icon--16 ray__icon--inline">
                      <SVGFiles />
                    </span>
                  </span>
                </Tooltip>
              </CopyToClipboard>
            </p>
          </div>
        </div>
      </div>
      <div className="ray__left ray__left--dark mb-5 position-relative">
        <h5 className="mb-4">
          <strong>
            Redeem <span className="ray__ticker">XDIAMOND</span>
          </strong>
        </h5>
        <div className={style.redeem}>
          <div className={style.redeemQr}>
            <QRCode
              value={redeemAddress}
              size="100"
              bgColor={theme === "default" ? "#fff" : "#000"}
              fgColor={theme === "default" ? "#000" : "#fff"}
            />
          </div>
          <div className={style.redeemInfo}>
            <p>
              Send 2 <span className="ray__ticker">ADA</span> + any amount of{" "}
              <span className="ray__ticker">XDIAMOND</span> to the address
              below. That 2 <span className="ray__ticker">ADA</span> minus the transaction fee will be
              returned to your wallet with{" "}
              <span className="ray__ticker">XRAY</span> tokens at the rate shown below.
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
                    <span className="me-2 word-break">{redeemAddress}</span>
                    <span className="ray__icon ray__icon--16 ray__icon--inline">
                      <SVGFiles />
                    </span>
                  </span>
                </Tooltip>
              </CopyToClipboard>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="ray__left ray__left--dark mb-4">
        <h5 className="mb-0">
          <strong>Recent history</strong>
        </h5>
      </div>
      <div className="ray__table">
        <Table dataSource={[]} columns={columns} pagination={false} />
      </div> */}
    </div>
  )
}

export default XrayTokenomics
