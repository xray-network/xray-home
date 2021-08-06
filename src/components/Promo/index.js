import React from "react"
import { Link } from "gatsby"
import { SVGCardano } from "@/svg"
// import * as style from "./style.module.scss"

const Promo = () => {
  return (
    <div className="ray__block">
      <div className="ray__promo">
        <h1 className="ray__promo__text" data-aos="fade-up" data-aos-delay="0">
          Hello, we’re Ray Network! An advanced DeFi ecosystem{" "}
          <span className="text-nowrap">
            for{" "}
            <span className="ray__promo__cardano">
              <SVGCardano />
            </span>{" "}
            Cardano
          </span>{" "}
          blockchain platform.
        </h1>
        <div data-aos="fade-up" data-aos-delay="300">
          <p>
            We provide the whole range of blockchain solutions for Cardano: from
            DeFi exchange, API provisioning, light wallets, minting tools &
            explorers, to different SDKs that open the blockchain world to
            thousands of crypto-enthusiasts from all over the world. It's all
            about ADA DeFi finances in one place!
          </p>
          <p className="mb-5">
            Stake ADA in Ray pools and get <strong>~5% ROI</strong> with extra
            rewards each epoch <strong className="ray__ticker">1 XRAY</strong>{" "}
            per each <strong className="ray__ticker">50 ADA</strong> staked.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <Link
            to="/xray/distribution/"
            className="ray__btn ray__btn--round me-3 mb-3"
          >
            XRAY Fair Launch
          </Link>
          <Link
            to="/xray/xdiamond/"
            className="ray__btn ray__btn--round me-3 mb-3"
          >
            XDIAMOND
          </Link>
          <Link
            to="/stake/calculator/"
            className="ray__btn ray__btn--round me-3 mb-3"
          >
            Stake Calculator
          </Link>
          <Link
            to="/stake/pools/"
            className="ray__btn ray__btn--round me-3 mb-3"
          >
            Stake Pools
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Promo