import React from "react"

const CardanoWeb3 = () => {
  return (
    <div className="ray__block">
      <div className="ray__title">CardanoWeb3.js</div>
      <div className="ray__title__descr">
        Universal <strong>Javascript Web3</strong> library for Cardano
      </div>
      <div>
        <p className="mb-5">
          Our open-source javascript library contains modules for generating Cardano cryptoprimitives, as well as
          methods for retrieving data from cardano-graphql stack, which together give a powerful developer's kit for any
          third-party application. Building an application for Cardano now takes much less time and lowers the entry
          threshold to a minimum.
        </p>
      </div>
      <div className="mt-4 pt-3 mb-5">
        <span className="d-inline-block me-3 mb-2">
          <a
            className="ray__btn ray__btn--round"
            href="https://github.com/ray-network/cardano-web3.js"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="me-2">CardanoWeb3.js</span>
            <i className="ri ri-ext ri-arrow_up" />
          </a>
        </span>
        <span className="d-inline-block">
          <a
            className="ray__btn ray__btn--round ray__btn--transparent"
            href="https://docs.raynetwork.io/sdk-and-tools/cardanoweb3.js"
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

export default CardanoWeb3
