import React from "react"
import { Button, message } from "antd"
import { useSelector } from "react-redux"
import { format, formatValue, truncate } from "@/utils"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Heading from "@/components/Heading"
import { SVGFiles, SVGCheckCircled } from "@/svg"
import * as style from "./style.module.scss"

const XrayPools = () => {
  const pools = useSelector((state) => state.settings.pools)

  return (
    <div className="ray__block">
      <Heading id="pools">
        <strong>Ray Pools</strong>, high-performance Cardano staking pools
      </Heading>
      <p className="mb-5">
        Use any Cardano wallet (RayWallet, Daedalus, Yoroi, Adalite, or any
        another) to delegate to Ray pools. XRAY rewards will accrue to virtual
        balance automatically after the end of the epoch. Track or withdraw XRAY
        rewards here{" "}
        <a href="https://stake.rraayy.com" target="_blank" rel="noopener noreferrer">Stake &rarr; Track & Withdraw</a>
      </p>
      <div className="row">
      {pools?.pools?.map((pool, index) => {
          const isSaturated = pool.total_stake > 60000000 * 1000000
          return (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className={style.pool}>
                <span className="badge">{isSaturated ? 'SATURATED' : 'ACTIVE'}</span>
                <strong className={style.poolTicker}>
                  {formatValue(pool.ticker_orig)}
                </strong>
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>Pool Id</div>
                  <div className={style.poolValue}>
                    <CopyToClipboard
                      text={pool.pool_id_bech32}
                      onCopy={() =>
                        message.success("Pool ID copied successfully")
                      }
                    >
                      <strong className="cursor-pointer">
                        {truncate(pool.pool_id_bech32, 12)}
                        <span className="icn ms-2">
                          <SVGFiles />
                        </span>
                      </strong>
                    </CopyToClipboard>
                  </div>
                </div>
                <div className={style.poolItem}>
                  <div className={style.poolLabel}>Pool Hash</div>
                  <div className={style.poolValue}>
                    <CopyToClipboard
                      text={pool.pool_id}
                      onCopy={() =>
                        message.success("Pool Hash copied successfully")
                      }
                    >
                      <strong className="cursor-pointer">
                        {truncate(pool.pool_id, 12)}
                        <span className="icn ms-2">
                          <SVGFiles />
                        </span>
                      </strong>
                    </CopyToClipboard>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className={style.poolItem}>
                      <div className={style.poolLabel}>Live Stake</div>
                      <div className={style.poolValue}>
                        <strong>
                          {formatValue(
                            format(pool.total_stake / 1000000),
                            <sup> ADA</sup>
                          )}
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={style.poolItem}>
                      <div className={style.poolLabel}>Saturation</div>
                      <div className={style.poolValue}>
                        <strong>
                          {formatValue((pool.saturated * 100).toFixed(2), "%")}
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={style.poolItem}>
                      <div className={style.poolLabel}>XRAY Rewards</div>
                      <div className={style.poolValue}>
                        <span className="icn mt-2">
                          <SVGCheckCircled />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={style.poolItem}>
                      <div className={style.poolLabel}>Fee Margin</div>
                      <div className={style.poolValue}>
                        <strong>{formatValue(pool.tax_ratio, "%")}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={style.poolItem}>
                      <div className={style.poolLabel}>Delegators</div>
                      <div className={style.poolValue}>
                        <strong>{formatValue(pool.delegators)}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={style.poolItem}>
                      <div className={style.poolLabel}>Blocks Lifetime</div>
                      <div className={style.poolValue}>
                        <strong>{formatValue(pool.blocks_lifetime)}</strong>
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
                    className={`ray__btn ray__btn--success ray__btn--small w-100 ${isSaturated && 'ray__btn--disabled'}`}
                  >
                    <strong>{isSaturated ? 'Saturated' : 'Delegate'}</strong>
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
