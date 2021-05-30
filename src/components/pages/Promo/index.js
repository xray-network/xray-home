import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import style from "./style.module.scss"

import SvgCardano from "../../../../static/resources/cardano.inline.svg"

export default () => {
  return (
    <div className="ray__block ray__block--hidden">
      <div className={style.promo}>
        <h1 className={style.text}>
          Advanced Ecosystem for{' '}
          <span className="text-nowrap">
            <span className={style.cardano}>
              <SvgCardano />
            </span>{' '}
            Cardano
          </span>{' '}
          Blockchain Platform
        </h1>
        <h2>
          <strong className="">All about ADA finances (DeFi) in one place</strong>
        </h2>
        <p className="mt-4 pt-2">Get <strong>5.5% ROI in ADA</strong> by delegating your funds to a Ray pools and receive additional rewards: <strong>1 XRAY per each 50 ADA / Epoch</strong>.</p>
        <div>
          <AnchorLink to="/stake/#calculator" stripHash className="ray__link d-inline-block text-nowrap mb-2 mb-sm-0 mr-4">
            Staking Calculator
          </AnchorLink>
          <AnchorLink to="/stake/#pools" stripHash className="ray__link d-inline-block text-nowrap mb-2 mb-sm-0 mr-4">
            Ray Pools
          </AnchorLink>
          <a href="https://raywallet.io/#/stake" target="_blank" rel="noopener noreferrer" className="ray__link d-inline-block text-nowrap mb-2 mb-sm-0">
            Visit Staking Center
            <i className="fe fe-arrow-up-right ray__link__icon" />
          </a>
        </div>
      </div>
    </div>
  )
}
