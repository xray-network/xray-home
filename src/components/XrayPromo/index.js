import React from "react"
import { Link } from "gatsby"
import { SVGLink } from "@/svg"
// import * as style from "./style.module.scss"

const XrayPromo = () => {
  return (
    <div className="ray__block">
      <div className="ray__promo">
        <div className="max-width-1000">
          <h1
            className="ray__promo__text"
            data-aos="fade-up"
            data-aos-delay="000"
          >
            Send, Stake, Earn, Swap, Fund, Bid? XRAY.
          </h1>
        </div>
        <p data-aos="fade-up" data-aos-delay="300">
          Ray Network token - XRAY - is a Cardano based cryptocurrency token for
          a fuelling the Ray platform. Ray is a highly functional open source
          project that banks on blockchain technology’s permissionless nature to
          provide decentralized finance (DeFi) solutions and other services.
        </p>
        <p className="mb-5" data-aos="fade-up" data-aos-delay="500">
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
          <br />
          More info:{" "}
          <strong className="text-active">
            <a
              href="https://cardanoscan.io/token/a91ed340458166d57f29b019ce7b2d07e08a07cf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View in Explorer
            </a>
          </strong>
        </p>
        <div
          className="d-block d-md-flex font-size-18"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <a
            href="https://cardanoscan.io/token/ae2a0aa5a24b27d9868c4a73b7c08077ac21baade5eca0fa467a2bbd58524159"
            target="_blank"
            rel="noopener noreferrer"
            className="ray__btn ray__btn--round me-3 mb-3"
          >
            <span className="me-2">View in Explorer</span>
            <span className="ray__icon">
              <SVGLink />
            </span>
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
    </div>
  )
}

export default XrayPromo
