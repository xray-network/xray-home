import React, { useState, useEffect } from "react"
import { Input, Button, message } from "antd"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { format, formatValue } from "@/utils"
import Heading from "@/components/layout/Heading"
import style from "./style.module.scss"

export default () => {
  const [amount, setAmount] = useState(undefined)
  const [totalAda, setTotalAda] = useState(0)
  const [totalRay, setTotalRay] = useState(0)
  const [poolRay, setPoolRay] = useState({})
  const [poolRay2, setPoolRay2] = useState({})
  const [poolRay3, setPoolRay3] = useState({})
  const [prices, setPrices] = useState({
    btc: 0,
    ada: 0,
  })

  const pools = [
    '1c8cd022e993a8366be641c17cb6d9c5d8944e00bfce3189d8b1515a',
    '9ad2692a4865c5999f27d65baf170be5ba38b25489c8e21007193edd',
    '22cfa3b8612c146a0737c974dcfcbb8cddd86f3a511cf531ce8d91a1',
  ]

  useEffect(() => {
    fetchData()
    fetchPrices()
    // eslint-disable-next-line
  }, [])

  const fetchData = () => {
    fetch(`https://js.adapools.org/pools/${pools[0]}/summary.json`)
      .then(res => res.json())
      .then((result => {
        setPoolRay(result.data)
      }))
    fetch(`https://js.adapools.org/pools/${pools[1]}/summary.json`)
      .then(res => res.json())
      .then((result => {
        setPoolRay2(result.data)
      }))
    fetch(`https://js.adapools.org/pools/${pools[2]}/summary.json`)
      .then(res => res.json())
      .then((result => {
        setPoolRay3(result.data)
      }))
  }

  const fetchPrices = () => {
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,cardano&vs_currencies=USD`)
      .then(res => res.json())
      .then((result => {
        setPrices({
          btc: result.bitcoin.usd,
          ada: result.cardano.usd,
        })
      }))
  }

  const coeff = 50

  useEffect(() => {
    setTotalAda(amount * 0.05 || 0)
    setTotalRay(amount / coeff * 73 || 0)
  }, [amount])

  return (
    <div className="ray__block">
      <Heading id="calculator">
        <strong className="bolder">Ray</strong> Stake Calculator
      </Heading>
      <div className="mb-5">
        <div className={style.calculator}>
          <div className="mb-4">
            <Input value={amount} onChange={({ target: { value } }) => setAmount(value)} placeholder="Enter ADA amount..." size="large" />
          </div>
          <div className={style.performance}>
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>ADA Return of Investment (ROI): <strong>~ 5% <sup>/ Year</sup></strong></li>
                </ul>
                <ul>
                  <li>
                    Year Returns: <strong>{format(totalAda, 2)} <span class="ray__ticker">ADA</span></strong>{' '}
                    <sup>{format(totalAda * prices.ada, 2)}$</sup>
                  </li>
                  <li>
                    Month Returns: <strong>{format(totalAda / 12, 2)} <span class="ray__ticker">ADA</span></strong>{' '}
                    <sup>{format(totalAda / 12 * prices.ada, 2)}$</sup>
                  </li>
                  <li>
                    Epoch Returns: <strong>{format(totalAda / 73, 2)} <span class="ray__ticker">ADA</span></strong>{' '}
                    <sup>{format(totalAda / 73 * prices.ada, 2)}$</sup>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>XRAY Rewards Rate: min <strong>{coeff} <span class="ray__ticker">ADA</span> = 1 <span class="ray__ticker">XRAY</span> <sup>/ Epoch</sup></strong></li>
                </ul>
                <ul>
                  <li>
                    Year Returns: <strong>{format(totalRay)} <span class="ray__ticker">XRAY</span></strong>{' '}
                  </li>
                  <li>
                    Month Returns: <strong>{format(totalRay / 12)} <span class="ray__ticker">XRAY</span></strong>{' '}
                  </li>
                  <li>
                    Epoch Returns: <strong>{format(totalRay / 73)} <span class="ray__ticker">XRAY</span></strong>{' '}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Heading id="pools">
        <strong className="bolder">Ray</strong> Pools
      </Heading>
      <p className="mb-5">
        Use any Cardano wallet (Ray Wallet, Daedalus, Yoroi, Adalite, or any another) to delegate to Ray pools. XRAY rewards will accrue automatically after the end of the epoch. You can check/withdraw rewards here - <a href="https://x.rraayy.com">https://x.rraayy.com</a>
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className={style.pool}>
            <span className="badge badge-success">ACTIVE</span>
            <div className={style.poolItem}>
              <div className={style.poolLabel}>
                Pool Id
              </div>
              <div className={style.poolValue}>
                <CopyToClipboard
                  text="pool1rjxdqghfjw5rv6lxg8qhedkechvfgnsqhl8rrzwck9g45n43yql"
                  onCopy={() => message.success('Pool ID copied successfully')}
                >
                  <strong className={style.copy}>
                    {"pool1rjxdqghfjw5rv6lxg8qhedkechvfgnsqhl8rrzwck9g45n43yql".substring(0, 8)}...{"pool1rjxdqghfjw5rv6lxg8qhedkechvfgnsqhl8rrzwck9g45n43yql".slice(-8)}
                    <i className="fe fe-copy ml-1" />
                  </strong>
                </CopyToClipboard>
              </div>
            </div>
            <div className={style.poolItem}>
              <div className={style.poolLabel}>
                Pool Hash
              </div>
              <div className={style.poolValue}>
                <CopyToClipboard
                  text="1c8cd022e993a8366be641c17cb6d9c5d8944e00bfce3189d8b1515a"
                  onCopy={() => message.success('Pool ID copied successfully')}
                >
                  <strong className={style.copy}>
                    {"1c8cd022e993a8366be641c17cb6d9c5d8944e00bfce3189d8b1515a".substring(0, 8)}...{"1c8cd022e993a8366be641c17cb6d9c5d8944e00bfce3189d8b1515a".slice(-8)}
                    <i className="fe fe-copy ml-1" />
                  </strong>
                </CopyToClipboard>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Ticker
                  </div>
                  <div className={style.poolValue}>
                    <strong className="font-size-24">{formatValue(poolRay.ticker_orig)}</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Delegators
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay.delegators)}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Live Stake
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(format(poolRay.total_stake / 1000000), <sup> ADA</sup>)}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Saturation
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue((poolRay.saturated * 100).toFixed(4), '%')}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Fee Margin
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay.tax_ratio, '%')}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Fixed Fee
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay.tax_fix / 1000000, <sup> ADA</sup>)}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Blocks Lifetime
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay.blocks_lifetime)}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Blocks in Epoch
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay.blocks_epoch)}
                    </strong>
                  </div>
                </div>
              </div>
              {/* <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    ROA Lifetime
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay.roa_lifetime, '%')}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    ROA
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay.roa, '%')}
                    </strong>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="mt-2">
              <Button
                href="https://raywallet.io/#/stake/"
                target="_blank"
                rel="noopener noreferrer"
                type="primary"
                className="ray__button ray__button--success ray__button--small w-100"
              >
                <i className="fe fe-arrow-up-circle mr-1" />
                Delegate
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={style.pool}>
            <span className="badge badge-success">ACTIVE</span>
            <div className={style.poolItem}>
              <div className={style.poolLabel}>
                Pool Id
              </div>
              <div className={style.poolValue}>
                <CopyToClipboard
                  text="pool1ntfxj2jgvhzen8e86ed679ctukar3vj538ywyyq8ryld66jj4sx"
                  onCopy={() => message.success('Pool ID copied successfully')}
                >
                  <strong className={style.copy}>
                    {"pool1ntfxj2jgvhzen8e86ed679ctukar3vj538ywyyq8ryld66jj4sx".substring(0, 8)}...{"pool1ntfxj2jgvhzen8e86ed679ctukar3vj538ywyyq8ryld66jj4sx".slice(-8)}
                    <i className="fe fe-copy ml-1" />
                  </strong>
                </CopyToClipboard>
              </div>
            </div>
            <div className={style.poolItem}>
              <div className={style.poolLabel}>
                Pool Hash
              </div>
              <div className={style.poolValue}>
                <CopyToClipboard
                  text="9ad2692a4865c5999f27d65baf170be5ba38b25489c8e21007193edd"
                  onCopy={() => message.success('Pool ID copied successfully')}
                >
                  <strong className={style.copy}>
                    {"9ad2692a4865c5999f27d65baf170be5ba38b25489c8e21007193edd".substring(0, 8)}...{"9ad2692a4865c5999f27d65baf170be5ba38b25489c8e21007193edd".slice(-8)}
                    <i className="fe fe-copy ml-1" />
                  </strong>
                </CopyToClipboard>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Ticker
                  </div>
                  <div className={style.poolValue}>
                    <strong className="font-size-24">{formatValue(poolRay2.ticker_orig)}</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Delegators
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay2.delegators)}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Live Stake
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(format(poolRay2.total_stake / 1000000), <sup> ADA</sup>)}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Saturation
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue((poolRay2.saturated * 100).toFixed(4), '%')}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Fee Margin
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay2.tax_ratio, '%')}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Fixed Fee
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay2.tax_fix / 1000000, <sup> ADA</sup>)}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Blocks Lifetime
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay2.blocks_lifetime)}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Blocks in Epoch
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay2.blocks_epoch)}
                    </strong>
                  </div>
                </div>
              </div>
              {/* <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    ROA Lifetime
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay2.roa_lifetime, '%')}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    ROA
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay2.roa, '%')}
                    </strong>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="mt-2">
              <Button
                href="https://raywallet.io/#/stake/"
                target="_blank"
                rel="noopener noreferrer"
                type="primary"
                className="ray__button ray__button--success ray__button--small w-100"
              >
                <i className="fe fe-arrow-up-circle mr-1" />
                Delegate
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={style.pool}>
            <span className="badge badge-success">ACTIVE</span>
            <div className={style.poolItem}>
              <div className={style.poolLabel}>
                Pool Id
              </div>
              <div className={style.poolValue}>
                <CopyToClipboard
                  text="pool1yt868wrp9s2x5pehe96del9m3nwasme62yw02vww3kg6zwzspcz"
                  onCopy={() => message.success('Pool ID copied successfully')}
                >
                  <strong className={style.copy}>
                    {"pool1yt868wrp9s2x5pehe96del9m3nwasme62yw02vww3kg6zwzspcz".substring(0, 8)}...{"pool1yt868wrp9s2x5pehe96del9m3nwasme62yw02vww3kg6zwzspcz".slice(-8)}
                    <i className="fe fe-copy ml-1" />
                  </strong>
                </CopyToClipboard>
              </div>
            </div>
            <div className={style.poolItem}>
              <div className={style.poolLabel}>
                Pool Hash
              </div>
              <div className={style.poolValue}>
                <CopyToClipboard
                  text="22cfa3b8612c146a0737c974dcfcbb8cddd86f3a511cf531ce8d91a1"
                  onCopy={() => message.success('Pool ID copied successfully')}
                >
                  <strong className={style.copy}>
                    {"22cfa3b8612c146a0737c974dcfcbb8cddd86f3a511cf531ce8d91a1".substring(0, 8)}...{"22cfa3b8612c146a0737c974dcfcbb8cddd86f3a511cf531ce8d91a1".slice(-8)}
                    <i className="fe fe-copy ml-1" />
                  </strong>
                </CopyToClipboard>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Ticker
                  </div>
                  <div className={style.poolValue}>
                    <strong className="font-size-24">{formatValue(poolRay3.ticker_orig)}</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Delegators
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay3.delegators)}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Live Stake
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(format(poolRay3.total_stake / 1000000), <sup> ADA</sup>)}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Saturation
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue((poolRay3.saturated * 100).toFixed(4), '%')}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Fee Margin
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay3.tax_ratio, '%')}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Fixed Fee
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay3.tax_fix / 1000000, <sup> ADA</sup>)}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Blocks Lifetime
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay3.blocks_lifetime)}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Blocks in Epoch
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay3.blocks_epoch)}
                    </strong>
                  </div>
                </div>
              </div>
              {/* <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    ROA Lifetime
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay3.roa_lifetime, '%')}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    ROA
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolRay3.roa, '%')}
                    </strong>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="mt-2">
              <Button
                href="https://raywallet.io/#/stake/"
                target="_blank"
                rel="noopener noreferrer"
                type="primary"
                className="ray__button ray__button--success ray__button--small w-100"
              >
                <i className="fe fe-arrow-up-circle mr-1" />
                Delegate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
