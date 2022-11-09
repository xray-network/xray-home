import React from "react"
import { Link } from "gatsby"
import * as style from "./style.module.scss"

const BannerPromo = () => {
  return (
    <div className="ray__banner">
      <div className="ray__banner__frame ray__banner__frame--gray">
        <div
          className="ray__banner__image"
          style={{
            backgroundImage: "url(/resources/banners/waves.jpg)",
            opacity: 0.1,
          }}
        />
        <div className="ray__banner__content">
          <div className="ray__block mb-0">
            <div className={style.promo}>
              <div className={style.promoInner}>
                <div className="ray__title">Cardano DeFi Platform</div>
                <h1>An advanced DeFi ecosystem for Cardano blockchain platform</h1>
                <p className="mb-3">
                  We provide the whole range of blockchain solutions for Cardano: from DeFi exchanges, API provisioning
                  systems, light wallets, minting tools & explorers, to different SDKs that open the blockchain world to
                  thousands of crypto-enthusiasts from all over the world
                </p>
                <p>It's all about ADA DeFi finances in one place. Fully Open Sourced. Built on Cardano.</p>
                <div>
                  <Link to="/start/" className="ray__btn ray__btn--round me-3 mb-3">
                    Getting Started
                  </Link>
                  <a
                    href="https://github.com/ray-network"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ray__btn ray__btn--round me-3 mb-3"
                  >
                    Github
                    <i className="ri ri-arrow_up ri-ext ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerPromo
