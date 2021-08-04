import React from "react"
import { Link } from "gatsby"
import Heading from "@/components/shared/Heading"
import StakeTotal from "@/components/api/StakeTotal"
// import * as style from "./style.module.scss"

const XrayDistribution = () => {
  return (
    <div className="ray__block">
      {/* <Heading id="info">
        By fair launch was distributed <strong>12,256,162 <span className="ray__ticker">XRAY</span></strong> to <strong>7611 delegators</strong>.{' '}
        Total <strong>233 epochs left</strong> until the end of the distribution.{' '}
        Waiting for delivery <strong>96,496,920 <span className="ray__ticker">XRAY</span></strong>
      </Heading> */}
      <Heading id="distribution">
        <strong>Ray Stake</strong>, ADA SPO & XRAY 0% FEE ISPO
      </Heading>
      <p className="mb-5">
        Ray Swap is an automated liquidity protocol for creating liquidity and trading native tokens
        on Cardano. It eliminates trusted intermediaries and unnecessary forms
        of rent extraction, allowing for fast, efficient trading.
        Where it makes tradeoffs decentralization, censorship resistance,
        and security are prioritized.
      </p>
      <div className="mt-4 pt-3 mb-5 pb-3">
        <span className="d-inline-block me-3 mb-2">
          <Link
            className="ray__btn ray__btn--round"
            to="/stake/calculator/"
          >
            Calculator
          </Link>
        </span>
        <span className="d-inline-block me-3 mb-2">
          <Link
            className="ray__btn ray__btn--round"
            to="/stake/pools/"
          >
            Stake Pools
          </Link>
        </span>
        <span className="d-inline-block me-3 mb-2">
          <Link
            className="ray__btn ray__btn--round"
            to="/stake/track/"
          >
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
      <h5><strong>Last Payouts for Epoch 273</strong></h5>
      <div className="row mb-5 pb-3">
        <div className="col-12 col-sm-4">
          <div className="ray__left ray__left--gray">
            <div className="ray__card__value">
              50 <span className="ray__ticker">ADA</span>{' '}
              /{' '}
              1 <span className="ray__ticker">XRAY</span>
            </div>
            <div>Rewards Rate</div>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="ray__left ray__left--gray">
            <div className="ray__card__value">
              1,493,567 <span className="ray__ticker">XRAY</span>
            </div>
            <div>XRAY Payouts</div>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="ray__left ray__left--gray">
            <div className="ray__card__value">
              103,061 <span className="ray__ticker">ADA</span>
            </div>
            <div>ADA Payouts</div>
          </div>
        </div>
      </div>
      <h5><strong>Distribution schedule</strong></h5>
      <StakeTotal />
    </div>
  )
}

export default XrayDistribution
