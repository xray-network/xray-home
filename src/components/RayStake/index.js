import React from "react"
import { Link } from "gatsby"
import { useSelector } from "react-redux"

const RayStake = () => {
  const pools = useSelector((state) => state.settings.pools)
  const rate = pools?.nextRate

  return (
    <div className="ray__block">
      <div className="ray__title">RayStake</div>
      <div className="ray__title__descr">
        <strong>RayStake</strong>, Cardano / NEAR Protocol / Solana staking solutions & XRAY ISPO
      </div>
      <p>
        Ray Network provides Cardano staking services on high-performance
        servers in the Cloudflare cloud. High availability, high uptime, low
        latency and automated infrastructure deployment allow for the highest
        possible ROI.
      </p>
      <p className="mb-5">
        Stake ADA in Ray pools and get <strong>~4.5% ROI</strong> with extra
        rewards 1 <strong className="ray__ticker">XRAY</strong> each epoch for every{" "}
        {rate / 1000000} <strong className="ray__ticker">ADA</strong> you staked.
      </p>
      <div className="mt-4 pt-3">
        <span className="d-inline-block me-3 mb-2">
          <a
            className="ray__btn ray__btn--round"
            href="https://raystake.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="me-2">RayStake</span>
            <i className="ri ri-ext ri-arrow_up" />
          </a>
        </span>
        <span className="d-inline-block me-3 mb-2">
          <Link
            className="ray__btn ray__btn--round ray__btn--transparent"
            to="/wiki/stake-delegators/"
          >
            Wiki
          </Link>
        </span>
      </div>
    </div>
  )
}

export default RayStake
