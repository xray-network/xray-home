import React from "react"
import { Statistic } from "antd"
import { useSelector } from "react-redux"
import { addDays } from "date-fns"
import { Link } from "gatsby"
import { format } from "@/utils"
import Heading from "@/components/Heading"
import StakeTotal from "@/components/StakeTotal"
import { SVGLink } from "@/svg"
// import * as style from "./style.module.scss"

const XrayDistribution = () => {
  const pools = useSelector((state) => state.settings.pools)
  const history = useSelector((state) => state.settings.history)
  const rate = pools?.nextRate

  return (
    <div className="ray__block">
      <Heading id="distribution">
        <strong>Ray Stake</strong>, ADA staking & XRAY ISPO
      </Heading>
      <p>
        Ray Network provides Cardano staking services on high-performance
        servers in the Cloudflare cloud. High availability, high uptime, low
        latency and automated infrastructure deployment allow for the highest
        possible ROI.
      </p>
      <p className="mb-5">
        Stake ADA in Ray pools and get <strong>~5% ROI</strong> with extra
        rewards each epoch 1 <strong className="ray__ticker">XRAY</strong> per{" "}
        {rate / 1000000} <strong className="ray__ticker">ADA</strong> staked.
      </p>
      <div className="mt-4 pt-3 mb-5 pb-3">
        <span className="d-inline-block me-3 mb-2">
          <a
            className="ray__btn ray__btn--round"
            href="https://stake.rraayy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="me-2">RayStake App</span>
            <span className="ray__icon">
              <SVGLink />
            </span>
          </a>
        </span>
        <span className="d-inline-block me-3 mb-2">
          <a
            className="ray__btn ray__btn--round"
            href="https://app.raywallet.io/#/stake"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="me-2">Delegate</span>
            <span className="ray__icon">
              <SVGLink />
            </span>
          </a>
        </span>
        {/* <span className="d-inline-block me-3 mb-2">
          <Link className="ray__btn ray__btn--round" to="/stake/pools/">
            Stake Pools
          </Link>
        </span>
        <span className="d-inline-block me-3 mb-2">
          <Link className="ray__btn ray__btn--round" to="/stake/calculator/">
            Calculator
          </Link>
        </span> */}
        <span className="d-inline-block me-3 mb-2">
          <Link
            className="ray__btn ray__btn--round"
            to="/wiki/stake-delegators/"
          >
            Wiki
          </Link>
        </span>
      </div>
      <h5>
        <strong>Ray pools information</strong>
      </h5>
      <div className="row mb-4">
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(pools?.totalLiveStake / 1000000 || 0)}{" "}
              <span className="ray__ticker">ADA</span>
            </div>
            <div>Live Stake</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(pools?.totalRewards / 1000000 || 0)}{" "}
              <span className="ray__ticker">ADA</span>
            </div>
            <div>Total ADA Rewards</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {pools?.pools?.reduce((accum, pool) => accum + parseInt(pool.delegators), 0) || 0}{" / "}
              {pools?.pools?.length || 0}
            </div>
            <div>Delegators / Pools</div>
          </div>
        </div>
      </div>
      <h5>
        <strong>
          {history?.lastSynced && `XRAY Epoch ${history?.lastSynced?.epoch} Payouts (For Epoch ${history?.lastSynced?.epoch - 2})`}
          {!history?.lastSynced && `Current Epoch Payouts`}  
        </strong>
      </h5>
      <div className="row mb-4">
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(history?.lastSynced?.accrued || 0)}
              <span className="ray__ticker">XRAY</span>
            </div>
            <div>XRAY Payouts</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(history?.lastSynced?.max || 0)}{" "}
              <span className="ray__ticker">XRAY</span>
            </div>
            <div>XRAY Epoch Limit</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              <span>{format(history?.lastSynced?.rate / 1000000 || 0)}</span>
              <span className="ray__card__amount__small me-2">.{(history?.lastSynced?.rate / 1000000 || 0).toString().split(".")[1] || '000000'}</span>
              <span className="ray__ticker ray__ticker__lg">ADA</span>
            </div>
            <div>Rewards Rate</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              <span className="me-2">
                {format(history?.lastSynced?.snapshot / 1000000 || 0)}
              </span>
              <span className="ray__ticker">ADA</span>
            </div>
            <div>Next Rewards</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              <Statistic.Countdown
                className="ray__count__inline"
                value={addDays(new Date(history?.currentEpoch?.startedAt || null), 5)}
                format="D[d] HH[h] mm[m] ss[s]"
              />
            </div>
            <div>Active Stake Snapshot</div>
          </div>
        </div>
      </div>
      <h5>
        <strong>XRAY distribution schedule</strong>
      </h5>
      <div>
        <StakeTotal />
      </div>
    </div>
  )
}

export default XrayDistribution
