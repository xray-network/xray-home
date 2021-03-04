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
              Our pools are looking for delegators.
              <br />
              Ray Token airdrop starts soon — hurry up!
            </h1>
            <div className="mb-4">
              <AnchorLink to="/stake/#submenu" stripHash className="ray__link mr-4">
                Staking Calculator
              </AnchorLink>
              <a href="https://wallet.rraayy.com/#/stake" target="_blank" rel="noopener noreferrer" className="ray__link">
                Visit Staking Center
                <i className="fe fe-arrow-up-right ray__link__icon" />
              </a>
            </div>
            <div className={style.description}>
              <p>
                Get <strong>5.5% ROI</strong> in ADA by delegating your funds to a <strong>Ray Pools</strong> and receive additional rewards:
                <br />
                <strong>1 RAY</strong> per each 100 ADA / Epoch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
