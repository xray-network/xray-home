import React from "react"

const RayStake = () => {
  return (
    <div className="ray__block">
      <div className="ray__title">RayStake</div>
      <div className="ray__title__descr">
        <strong>RayStake</strong>, an advanced staking solution for Cardano & XRAY ISPO
      </div>
      <p>
        Ray Network provides Cardano staking services on high-performance servers in the Cloudflare cloud. High
        availability, high uptime, low latency and automated infrastructure deployment allow for the highest possible
        ROI.
      </p>
      <p className="mb-5">
        For owners of tokenized projects it is possible to create their own pools with custom parameters and distribute
        tokens with the APY set.
      </p>
      <div className="mt-4 pt-3">
        <span className="d-inline-block me-3 mb-2">
          <a className="ray__btn ray__btn--round" href="https://raystake.io" rel="noopener noreferrer" target="_blank">
            <span className="me-2">RayStake</span>
            <i className="ri ri-ext ri-arrow_up" />
          </a>
        </span>
        <span className="d-inline-block">
          <a
            className="ray__btn ray__btn--round ray__btn--transparent"
            href="https://docs.raynetwork.io/dapps/raystake"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="me-2">SDK / Documentation</span>
            <i className="ri ri-ext ri-arrow_up" />
          </a>
        </span>
      </div>
    </div>
  )
}

export default RayStake
