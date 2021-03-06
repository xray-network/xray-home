import React, { useState, useEffect, useContext } from "react"
import { Input, Button, Tooltip, message } from "antd"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { globalContext } from "@/provider"
import { format, formatValue } from "@/utils"
import style from "./style.module.scss"

export default () => {
  const context = useContext(globalContext)
  const [amount, setAmount] = useState(undefined)
  const [totalAda, setTotalAda] = useState(0)
  const [totalRay, setTotalRay] = useState(0)
  const [poolData, setPoolData] = useState({})
  const pools = [
    '1c8cd022e993a8366be641c17cb6d9c5d8944e00bfce3189d8b1515a',
  ]

  useEffect(() => {
    fetchData(pools[0])
    // eslint-disable-next-line
  }, [])

  const fetchData = (id) => {
    fetch(`https://js.adapools.org/pools/${id}/summary.json`)
      .then(res => res.json())
      .then((result => {
        setPoolData(result.data)
      }))
  }

  useEffect(() => {
    setTotalAda(amount * 0.056 || 0)
    setTotalRay(amount / 100 * 73 || 0)
  }, [amount])

  return (
    <div className="ray__block">
      <div className="container-fluid">
        <h2 className="ray__heading mb-4">RAY Stake Calculator</h2>
        <div className="mb-5">
          <div className={style.calculator}>
            <div className="mb-4">
              <Input value={amount} onChange={({ target: { value } }) => setAmount(value)} placeholder="Enter ADA amount..." size="large" />
            </div>
            <div className={style.performance}>
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>ADA Return of Investment (ROI): <strong>~ 5.6% / Year</strong></li>
                    <li>
                      Year Returns: <strong>{format(totalAda, 2)} ADA</strong>{' '}
                      <sup>{format(totalAda * context.prices.ada, 2)}$</sup>
                    </li>
                    <li>
                      Month Returns: <strong>{format(totalAda / 12, 2)} ADA</strong>{' '}
                      <sup>{format(totalAda / 12 * context.prices.ada, 2)}$</sup>
                    </li>
                    <li>
                      Epoch Returns: <strong>{format(totalAda / 73, 2)} ADA</strong>{' '}
                      <sup>{format(totalAda / 73 * context.prices.ada, 2)}$</sup>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>RAY Rewards Rate: <strong>100 ADA = 1 RAY / Epoch</strong></li>
                    <li>
                      Year Returns: <strong>{format(totalRay)} RAY</strong>{' '}
                      <sup>{format(totalRay, 2)}$</sup>{' '}
                      <Tooltip title="If price reaches 1$ per RAY">
                        <i className="fe fe-info" />
                      </Tooltip>
                    </li>
                    <li>
                      Month Returns: <strong>{format(totalRay / 12)} RAY</strong>{' '}
                      <sup>{format(totalRay / 12, 2)}$</sup>{' '}
                      <Tooltip title="If price reaches 1$ per RAY">
                        <i className="fe fe-info" />
                      </Tooltip>
                    </li>
                    <li>
                      Epoch Returns: <strong>{format(totalRay / 73)} RAY</strong>{' '}
                      <sup>{format(totalRay / 73, 2)}$</sup>{' '}
                      <Tooltip title="If price reaches 1$ per RAY">
                        <i className="fe fe-info" />
                      </Tooltip>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="ray__heading mb-4" id="pools">RAY Pools</h2>
        <p className="mb-5">
          Use any Cardano wallet (RAY Wallet, Daedalus, Yoroi, Adalite, or any another) to delegate to RAY pools. RAY Token rewards will be transferred automatically to your delegation address after the end of the Epoch.
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
                    text={pools[0]}
                    onCopy={() => message.success('Pool ID copied successfully')}
                  >
                    <strong className={style.copy}>
                      {(pools[0]).substring(0, 4)}...{(pools[0]).slice(-8)}
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
                  href="https://wallet.rraayy.com/#/stake/"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="primary"
                  className="ray__btn ray__btn--white ray__btn--small"
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
                  href="https://wallet.rraayy.com/#/stake/"
                  target="_blank"
                  rel="noopener noreferrer"
                  disabled
                  type="primary"
                  className="ray__btn ray__btn--small"
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
                  href="https://wallet.rraayy.com/#/stake/"
                  target="_blank"
                  rel="noopener noreferrer"
                  disabled
                  type="primary"
                  className="ray__btn ray__btn--small"
                >
                  <i className="fe fe-arrow-up-circle mr-1" />
                  Delegate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
