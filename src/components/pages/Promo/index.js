import React from "react"
import { Link } from "gatsby"
import * as style from "./style.module.scss"

import { SVGCardano } from "@/svg"

const Promo = () => {
  return (
    <div className="ray__block">
      <div className={style.promo}>
        <h1 className={style.text}>
          Hello, we're Ray Network!
          We build an advanced ecosystem{' '}
          <span className="text-nowrap">
            for {' '}
            <span className={style.textCardano}>
              <SVGCardano />
            </span>{' '}
            Cardano
          </span>{' '}
          blockchain platform.
        </h1>
        <p>
          We provide the whole range of blockchain solutions for Cardano: from DeFi exchange, API provisioning, light wallets, minting tools & explorers, to different SDKs that open the blockchain world to thousands of crypto-enthusiasts from all over the world.
          It's all about ADA DeFi finances in one place!
        </p>
        <p className="mb-5">
          Stake ADA with Ray and get <strong>~5% ROI</strong> with extra rewards each epoch{' '}
          <strong className="ray__ticker">1 XRAY</strong> per each <strong className="ray__ticker">50 ADA</strong> staked.
        </p>
        <div>
          <Link to="/rewards/" className="ray__btn ray__btn--round me-3 mb-3">
            Rewards
          </Link>
          <Link to="/stake/calculator/" className="ray__btn ray__btn--round me-3 mb-3">
            Staking Calculator
          </Link>
          <Link to="/stake/pools/" className="ray__btn ray__btn--round me-3 mb-3">
            Staking Pools
          </Link>
          <Link to="/xray-token/" className="ray__btn ray__btn--round me-3 mb-3">
            XRAY Token
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Promo
