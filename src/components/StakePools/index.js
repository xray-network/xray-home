import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Button, message } from "antd"
import { format, formatValue } from "@/utils"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Heading from "@/components/Heading"
import {
  SVGFiles,
  SVGCheckCircled,
} from '@/svg'
import * as style from "./style.module.scss"

const XrayPools = () => {
  const [poolsData1, setPoolsData1] = useState({})
  const [poolsData2, setPoolsData2] = useState({})
  const [poolsData3, setPoolsData3] = useState({})

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  const pools = [
    '1c8cd022e993a8366be641c17cb6d9c5d8944e00bfce3189d8b1515a',
    '9ad2692a4865c5999f27d65baf170be5ba38b25489c8e21007193edd',
    '22cfa3b8612c146a0737c974dcfcbb8cddd86f3a511cf531ce8d91a1',
  ]

  const fetchData = () => {
    fetch(`https://js.adapools.org/pools/${pools[0]}/summary.json`)
      .then(res => res.json())
      .then((result => {
        setPoolsData1({
          ...result.data,
          pHash: pools[0],
          pId: 'pool1rjxdqghfjw5rv6lxg8qhedkechvfgnsqhl8rrzwck9g45n43yql',
        })
      }))
    fetch(`https://js.adapools.org/pools/${pools[1]}/summary.json`)
      .then(res => res.json())
      .then((result => {
        setPoolsData2({
          ...result.data,
          pHash: pools[1],
          pId: 'pool1ntfxj2jgvhzen8e86ed679ctukar3vj538ywyyq8ryld66jj4sx',
        })
      }))
    fetch(`https://js.adapools.org/pools/${pools[2]}/summary.json`)
      .then(res => res.json())
      .then((result => {
        setPoolsData3({
          ...result.data,
          pHash: pools[2],
          pId: 'pool1yt868wrp9s2x5pehe96del9m3nwasme62yw02vww3kg6zwzspcz',
        })
      }))
  }

  return (
    <div className="ray__block">
      <Heading id="pools">
        <strong>Ray Pools</strong>, high-performance Cardano staking pools
      </Heading>
      <p className="mb-5">
        Use any Cardano wallet (Ray Wallet, Daedalus, Yoroi, Adalite, or any another) to delegate to Ray pools. XRAY rewards will accrue to virtual balance automatically after the end of the epoch. Track or withdraw XRAY rewards here{' '}
        <Link to="/stake/track/">Stake &rarr; Track & Withdraw</Link>
      </p>
      <div className="row">
        {[poolsData1, poolsData2, poolsData3].map((pool, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className={style.pool}>
                <span className="badge badge-success">ACTIVE</span>
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>
                    Pool Id
                  </div>
                  <div className={style.poolValue}>
                    <CopyToClipboard
                      text={pool.pId}
                      onCopy={() => message.success('Pool ID copied successfully')}
                    >
                      <strong className={style.copy}>
                        {pool.pId && pool.pId.substring(0, 8)}...{pool.pId && pool.pId.slice(-8)}
                        <span className="ray__icon ray__icon--inline ms-2">
                          <SVGFiles />
                        </span>
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
                      text={pool.pHash}
                      onCopy={() => message.success('Pool Hash copied successfully')}
                    >
                      <strong className={style.copy}>
                        {pool.pHash && pool.pHash.substring(0, 8)}...{pool.pHash && pool.pHash.slice(-8)}
                        <span className="ray__icon ray__icon--inline ms-2">
                          <SVGFiles />
                        </span>
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
                        <strong className="font-size-24">{formatValue(pool.ticker_orig)}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={style.poolItem}>
                      <div className={style.poolLabel}>
                        XRAY Rewards
                      </div>
                      <div className={style.poolValue}>
                        <span className="ray__icon ray__icon--inline mt-2">
                          <SVGCheckCircled />
                        </span>
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
                          {formatValue(format(pool.total_stake / 1000000), <sup> ADA</sup>)}
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
                          {formatValue(pool.tax_ratio, '%')}
                        </strong>
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
                          {formatValue(pool.delegators)}
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
                          {formatValue((pool.saturated * 100).toFixed(2), '%')}
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
                          {formatValue(pool.blocks_lifetime)}
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
                          {formatValue(pool.blocks_epoch)}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <Button
                    href="https://app.raywallet.io/#/stake/"
                    target="_blank"
                    rel="noopener noreferrer"
                    type="primary"
                    className="ray__btn ray__btn--success ray__btn--small w-100"
                  >
                    <strong>Delegate</strong>
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default XrayPools
