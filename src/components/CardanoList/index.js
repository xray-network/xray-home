import React from "react"

const CardanoList = () => {
  return (
    <div className="ray__block">
      <div className="ray__title">CardanoList.io</div>
      <div className="ray__title__descr">
        <strong>Finding Cardano-based</strong> projects has never been so easy
      </div>
      <div>
        <p className="mb-5">
          CardanoList is an aggregator of all projects ever created for the Cardano blockchain. A complete list of
          projects, tokens, NFT collections is now available not only as a map, but also as a table with advanced search
          parameters. Our administrators have their hand on the pulse, all you have to do is make a couple of clicks!
        </p>
      </div>
      <div className="mt-4 pt-3 mb-5">
        <span className="d-inline-block me-3 mb-2">
          <a
            className="ray__btn ray__btn--round"
            href="https://cardanolist.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="me-2">CardanoList.io</span>
            <i className="ri ri-ext ri-arrow_up" />
          </a>
        </span>
        <span className="d-inline-block">
          <a
            className="ray__btn ray__btn--round ray__btn--transparent"
            href="https://docs.raynetwork.io/dapps/cardanolist.io"
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

export default CardanoList
