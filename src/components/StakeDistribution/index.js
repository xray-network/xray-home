import React, { useState } from "react"
import { Link } from "gatsby"
import { format } from "@/utils"
import Heading from "@/components/Heading"
import StakeTotal from "@/components/StakeTotal"
// import * as style from "./style.module.scss"

const XrayDistribution = () => {
  const [rewards, setRewards] = useState({
    currentEpoch: 0,
    distributed: [],
    totalAccrued: 0,
    totalUndelivered: 0,
  })

  const epochStats =
    rewards.distributed.filter(
      (item) => item.epoch === rewards.currentEpoch
    )[0] || {}

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
        rewards each epoch <strong className="ray__ticker">1 XRAY</strong> per
        each <strong className="ray__ticker">50 ADA</strong> staked.
      </p>
      <div className="mt-4 pt-3 mb-5 pb-3">
        <span className="d-inline-block me-3 mb-2">
          <Link className="ray__btn ray__btn--round" to="/stake/calculator/">
            Calculator
          </Link>
        </span>
        <span className="d-inline-block me-3 mb-2">
          <Link className="ray__btn ray__btn--round" to="/stake/pools/">
            Stake Pools
          </Link>
        </span>
        <span className="d-inline-block me-3 mb-2">
          <Link className="ray__btn ray__btn--round" to="/stake/track/">
            Track & Withdraw
          </Link>
        </span>
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
        <strong>Payout statistics in Epoch {rewards.currentEpoch}</strong>
      </h5>
      <div className="row mb-4">
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(epochStats.xray || 0)}{" "}
              <span className="ray__ticker">XRAY</span>
            </div>
            <div>XRAY Payouts</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(epochStats.maxRewards || 0)}{" "}
              <span className="ray__ticker">XRAY</span>
            </div>
            <div>XRAY Epoch Limit</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(epochStats.rate ? epochStats.rate / 1000000 : 0)}{" "}
              <span className="ray__ticker">ADA</span> / 1{" "}
              <span className="ray__ticker">XRAY</span>
            </div>
            <div>Rewards Rate</div>
          </div>
        </div>
      </div>
      <h5>
        <strong>Distribution schedule</strong>
      </h5>
      <StakeTotal callback={setRewards} />
    </div>
  )
}

export default XrayDistribution
