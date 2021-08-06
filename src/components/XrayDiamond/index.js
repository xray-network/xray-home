import React from "react"
import { useSelector } from "react-redux"
import { Table } from "antd"
import Heading from "@/components/Heading"
import QRCode from "qrcode.react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { message, Tooltip } from "antd"
import { SVGFiles } from '@/svg'
import * as style from "./style.module.scss"

const columns = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (record) => <strong>{record}</strong>
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (record) => <strong>{record}</strong>
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (record) => <strong>{record}</strong>
  },
]

const XrayTokenomics = () => {
  const theme = useSelector((state) => state.settings.theme)
  const address = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

  return (
    <div className="ray__block">
      <div className="row mb-5">
        <div className="col-12 col-md-8 pe-md-5">
          <Heading id="tokenomics">
            <strong>XDIAMOND</strong>, marketing and rewards NFT token
          </Heading>
          <div className="d-block d-md-none">
            <div className={style.diamond}>
              <img src="/resources/XDIAMOND.png" alt="XDIAMOND" />
            </div>
          </div>
          <p>
            <span className="ray__ticker">XDIAMOND</span> is a Cardano collectible NFT token for marketing and community incentives. You can get it for participation in marketing activities and giveaways, keep an eye on Ray Network social media. Can be redeemed for an <span className="ray__ticker">XRAY</span>!
          </p>
          <p>
            Ticker: <strong className="bolder text-active"><span className="ray__ticker">XDIAMOND</span></strong>
            <br />
            Policy ID: <strong className="text-active">b6798a74fb7441ef5f7af1ff4ea6150bbb7aaeb0aca0113e558592f6</strong>
            <br />
            Fingerprint: <strong className="text-active">asset1y7lphaaxkvjw5hl2kpq37nvlvg09qfqsh4qyme</strong>
            <br />
            More info: <strong className="text-active"><a href="https://minterr.io/explorer/search/?asset=asset1y7lphaaxkvjw5hl2kpq37nvlvg09qfqsh4qyme" target="_blank" rel="noopener noreferrer">View in Explorer</a></strong>
          </p>
        </div>
        <div className="col-12 col-md-4 d-none d-md-block">
          <div className={style.diamond}>
            <img src="/resources/XDIAMOND.png" alt="XDIAMOND" />
          </div>
        </div>
      </div>
      <div className="ray__left ray__left--dark mb-5 position-relative">
        <h5 className="mb-4">
          <strong>Purchase <span className="ray__ticker">XDIAMOND</span></strong>
        </h5>
        <div className={style.redeem}>
          <div className={style.redeemQr}>
            <QRCode
              value={address} size="100"
              bgColor={theme === 'default' ? '#fff' : '#000'}
              fgColor={theme === 'default' ? '#000' : '#fff'}
            />
          </div>
          <div className={style.redeemInfo}>
            <p>
              Send a an amount divisible by 15 <span className="ray__ticker">ADA</span> to the address below. This amount in ADA minus the transaction fee will be returned to your wallet with <span className="ray__ticker">XRAY</span> tokens.
            </p>
            <p>
              Current rate is 1 <span className="ray__ticker">XDIAMOND</span> = 15 <span className="ray__ticker">ADA</span>
            </p>
            <p className="mb-4 mb-md-0">
              <CopyToClipboard
                text={address}
                onCopy={() => message.success('Copied to clipboard')}
              >
                <Tooltip title="Copy to clipboard">
                  <span className="link">
                    <span className="me-2">Purchasing will be opened soon</span>
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
          <strong>Redeem <span className="ray__ticker">XDIAMOND</span></strong>
        </h5>
        <div className={style.redeem}>
          <div className={style.redeemQr}>
            <QRCode
              value={address} size="100"
              bgColor={theme === 'default' ? '#fff' : '#000'}
              fgColor={theme === 'default' ? '#000' : '#fff'}
            />
          </div>
          <div className={style.redeemInfo}>
            <p>
              Send a minimum of 2 <span className="ray__ticker">ADA</span> + 1 <span className="ray__ticker">XDIAMOND</span> to the address below. This amount in ADA minus the transaction fee will be returned to your wallet with <span className="ray__ticker">XRAY</span> tokens.
            </p>
            <p>
              Current rate is 1 <span className="ray__ticker">XDIAMOND</span> = 100 <span className="ray__ticker">XRAY</span>
            </p>
            <p className="mb-4 mb-md-0">
              <CopyToClipboard
                text={address}
                onCopy={() => message.success('Copied to clipboard')}
              >
                <Tooltip title="Copy to clipboard">
                  <span className="link">
                    <span className="me-2">Redeeming will be opened soon</span>
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
      <div className="ray__left ray__left--dark mb-4">
        <h5 className="mb-0">
          <strong>Recent history</strong>
        </h5>
      </div>
      <div className="ray__table">
        <Table dataSource={[]} columns={columns} pagination={false} />
      </div>
    </div >
  )
}

export default XrayTokenomics
