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
  const [poolData, setPoolData] = useState({})
  const [prices, setPrices] = useState({
    btc: 0,
    ada: 0,
  })

  const pools = [
    '1c8cd022e993a8366be641c17cb6d9c5d8944e00bfce3189d8b1515a',
  ]

  useEffect(() => {
    fetchData(pools[0])
    fetchPrices()
    // eslint-disable-next-line
  }, [])

  const fetchData = (id) => {
    fetch(`https://js.adapools.org/pools/${id}/summary.json`)
      .then(res => res.json())
      .then((result => {
        setPoolData(result.data)
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
        Use any Cardano wallet (Ray Wallet, Daedalus, Yoroi, Adalite, or any another) to delegate to Ray pools. XRAY rewards will be transferred automatically to your delegation address after the end of the Epoch.
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
                    <strong className="font-size-24">{formatValue(poolData.ticker_orig)}</strong>
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
                      {formatValue(poolData.delegators)}
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
                      {formatValue(poolData.tax_ratio, '%')}
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
                      {formatValue(poolData.tax_fix / 1000000, <sup> ADA</sup>)}
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
                      {formatValue(poolData.blocks_lifetime)}
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
                      {formatValue(poolData.blocks_epoch)}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    ROA Lifetime
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(poolData.roa_lifetime, '%')}
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
                      {formatValue(poolData.roa, '%')}
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
                      {formatValue(format(poolData.total_stake / 1000000), <sup> ADA</sup>)}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Active Stake
                  </div>
                  <div className={style.poolValue}>
                    <strong>
                      {formatValue(format(poolData.active_stake / 1000000), <sup> ADA</sup>)}
                    </strong>
                  </div>
                </div>
              </div>
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
            <span className="badge badge-transparent">SCHEDULED</span>
            <div className={style.poolItem}>
              <div className={style.poolLabel}>
                Pool Id
              </div>
              <div className={style.poolValue}>
                <strong>—</strong>
              </div>
            </div>
            <div className={style.poolItem}>
              <div className={style.poolLabel}>
                Pool Hash
              </div>
              <div className={style.poolValue}>
                <strong>—</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Ticker
                  </div>
                  <div className={style.poolValue}>
                    <strong className="font-size-24">RAY2</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Delegators
                  </div>
                  <div className={style.poolValue}>
                    <strong>0</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Fee Margin
                  </div>
                  <div className={style.poolValue}>
                    <strong>0%</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Fixed Fee
                  </div>
                  <div className={style.poolValue}>
                    <strong>340 <sup>ADA</sup></strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Blocks Lifetime
                  </div>
                  <div className={style.poolValue}>
                    <strong>0</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Blocks in Epoch
                  </div>
                  <div className={style.poolValue}>
                    <strong>0</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    ROA Lifetime
                  </div>
                  <div className={style.poolValue}>
                    <strong>—</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    ROA
                  </div>
                  <div className={style.poolValue}>
                    <strong>—</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Live Stake
                  </div>
                  <div className={style.poolValue}>
                    <strong>—</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Active Stake
                  </div>
                  <div className={style.poolValue}>
                    <strong>—</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <Button
                href="https://raywallet.io/#/stake/"
                target="_blank"
                rel="noopener noreferrer"
                disabled
                type="primary"
                className="ray__button ray__button--white ray__button--small w-100"
              >
                <i className="fe fe-arrow-up-circle mr-1" />
                Delegate
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={style.pool}>
            <span className="badge badge-transparent">SCHEDULED</span>
            <div className={style.poolItem}>
              <div className={style.poolLabel}>
                Pool Id
              </div>
              <div className={style.poolValue}>
                <strong>—</strong>
              </div>
            </div>
            <div className={style.poolItem}>
              <div className={style.poolLabel}>
                Pool Hash
              </div>
              <div className={style.poolValue}>
                <strong>—</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Ticker
                  </div>
                  <div className={style.poolValue}>
                    <strong className="font-size-24">RAY3</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Delegators
                  </div>
                  <div className={style.poolValue}>
                    <strong>0</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Fee Margin
                  </div>
                  <div className={style.poolValue}>
                    <strong>0%</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Fixed Fee
                  </div>
                  <div className={style.poolValue}>
                    <strong>340 <sup>ADA</sup></strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Blocks Lifetime
                  </div>
                  <div className={style.poolValue}>
                    <strong>0</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Blocks in Epoch
                  </div>
                  <div className={style.poolValue}>
                    <strong>0</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    ROA Lifetime
                  </div>
                  <div className={style.poolValue}>
                    <strong>—</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    ROA
                  </div>
                  <div className={style.poolValue}>
                    <strong>—</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Live Stake
                  </div>
                  <div className={style.poolValue}>
                    <strong>—</strong>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Active Stake
                  </div>
                  <div className={style.poolValue}>
                    <strong>—</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <Button
                href="https://raywallet.io/#/stake/"
                target="_blank"
                rel="noopener noreferrer"
                disabled
                type="primary"
                className="ray__button ray__button--white ray__button--small w-100"
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
