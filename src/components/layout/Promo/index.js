import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import style from "./style.module.scss"
import LogoOutline from "../../../../static/resources/images/logo-outline.inline.svg"

export default () => {
  return (
    <div className="ray__block">
      <div className="container-fluid">
        <div className={style.header}>
          <div className={style.welcome}>
            <div className={style.welcomeIcon}>
              <LogoOutline />
            </div>
            <h2>
              <strong>Advanced Ecosystem</strong> for
              <br />
              Cardano Blockchain Platform
            </h2>
          </div>
          <div className={style.content}>
            <h1 className={`${style.title} ray__heading mb-4`}>
              RAY Network is an advanced ecosystem for the Cardano blockchain platform.
              <br />
              All about ADA finances (DeFi) in one place.
            </h1>
            <div className="mb-4">
              <AnchorLink to="/stake/#submenu" stripHash className="ray__link d-inline-block text-nowrap mb-2 mb-sm-0 mr-4">
                Staking Calculator
              </AnchorLink>
              <AnchorLink to="/stake/#pools" stripHash className="ray__link d-inline-block text-nowrap mb-2 mb-sm-0 mr-4">
                RAY Pools
              </AnchorLink>
              <a href="https://raywallet.io/#/stake" target="_blank" rel="noopener noreferrer" className="ray__link d-inline-block text-nowrap mb-2 mb-sm-0">
                Visit Staking Center
                <i className="fe fe-arrow-up-right ray__link__icon" />
              </a>
            </div>
            <div className={style.description}>
              <p>
                Get <strong>5.5% ROI</strong> in ADA by delegating your funds to a <strong>RAY Pool</strong> and receive additional rewards:
                <br />
                <strong>1 RAY</strong> per each 20 ADA / Epoch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
