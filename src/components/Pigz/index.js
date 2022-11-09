import React from "react"

const Pigz = () => {
  return (
    <div className="ray__block">
      <div className="ray__title">Pigz.io Metaverse</div>
      <div className="ray__title__descr">
        Adventures in <strong>a piggy meta universe</strong> await your action!
      </div>
      <div>
        <p className="mb-5">
          Play an exciting game based on Cardano blockchain: make moves, win battles, get collectibles, create clans and
          community. The world of piglets is open for those looking for bright adventures and exciting journeys on the
          virtual island of PIGZ.IO!
        </p>
      </div>
      <div className="mt-4 pt-3 mb-5">
        <span className="d-inline-block me-3 mb-2">
          <a className="ray__btn ray__btn--round" href="https://pigz.io" rel="noopener noreferrer" target="_blank">
            <span className="me-2">Pigz.io</span>
            <i className="ri ri-ext ri-arrow_up" />
          </a>
        </span>
        <span className="d-inline-block">
          <a
            className="ray__btn ray__btn--round ray__btn--transparent"
            href="https://docs.raynetwork.io/dapps/pigz.io"
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

export default Pigz
