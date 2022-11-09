import React from "react"

const Minterr = () => {
  return (
    <div className="ray__block">
      <div className="ray__title">Minterr.io</div>
      <div className="ray__title__descr">
        Let's mint a <strong>Cardano token</strong>, creator. Absolutely free of charge!
      </div>
      <div>
        <p className="mb-5">
          Minter is a Cardano-based front-end solution for fast and group token mining. Advanced metadata editor, IPFS
          media file uploader, and NFT token explorer. Thanks to the absence of any backend, your keys are always yours
          - our servers don't store a single piece of information about you!
        </p>
      </div>
      <div className="mt-4 pt-3 mb-5">
        <span className="d-inline-block me-3 mb-2">
          <a className="ray__btn ray__btn--round" href="https://minterr.io" rel="noopener noreferrer" target="_blank">
            <span className="me-2">Minterr.io</span>
            <i className="ri ri-ext ri-arrow_up" />
          </a>
        </span>
        <span className="d-inline-block">
          <a
            className="ray__btn ray__btn--round ray__btn--transparent"
            href="https://docs.raynetwork.io/dapps/minterr.io"
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

export default Minterr
