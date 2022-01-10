import React from "react"
import { Link } from "gatsby"
// import * as style from "./style.module.scss"

const XrayPromo = () => {
  return (
    <div className="ray__block">
      <div className="ray__left ray__left--dark mb-5">
        <h1 className="max-width-700">
          <strong className="bolder">Send, Stake, Earn, Swap, Fund, Bid? XRAY.</strong>
        </h1>
      </div>
      <p>
        Ray Network token - XRAY - is a Cardano based cryptocurrency token for
        a fuelling the Ray platform. Ray is a highly functional open source
        project that banks on blockchain technology’s permissionless nature to
        provide decentralized finance (DeFi) solutions and other services.
      </p>
      <p className="mb-5">
        Ticker:{" "}
        <strong className="bolder text-active">
          <span className="ray__ticker">XRAY</span>
        </strong>
        <br />
        Policy ID:{" "}
        <strong className="text-active">
          <span className="text-break">
            ae2a0aa5a24b27d9868c4a73b7c08077ac21baade5eca0fa467a2bbd
          </span>
        </strong>
        <br />
        Fingerprint:{" "}
        <strong className="text-active">
          <span className="text-break">asset14y0dxsz9s9nd2lefkqvuu7edqlsg5p70r3wyxa</span>
        </strong>
      </p>
      <div className="d-block d-md-flex">
        <a
          href="https://cardanoscan.io/token/ae2a0aa5a24b27d9868c4a73b7c08077ac21baade5eca0fa467a2bbd58524159"
          target="_blank"
          rel="noopener noreferrer"
          className="ray__btn ray__btn--round me-3 mb-3"
        >
          <span className="me-2">View in Explorer</span>
          <i className="ri ri-ext ri-arrow_up" />
        </a>
        <Link
          to="/xray/tokenomics/"
          className="ray__btn ray__btn--round me-3 mb-3"
        >
          Tokenomics
        </Link>
        <Link
          to="/xray/distribution/"
          className="ray__btn ray__btn--round me-3 mb-3"
        >
          Distribution
        </Link>
        <Link
          to="/xray/governance/"
          className="ray__btn ray__btn--round me-3 mb-3"
        >
          Governance
        </Link>
      </div>
    </div>
  )
}

export default XrayPromo
