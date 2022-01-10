import React from "react"
import { Link } from "gatsby"
import { SVGGithub } from "@/svg"
import * as style from "./style.module.scss"

const Promo = () => {
  return (
    <div className={style.container}>
      <div className={style.containerInner}>
        <div
          className={style.containerInnerBg}
          style={{ backgroundImage: "url(/resources/banners/lines.jpg)" }}
        />
        <div className={style.containerInnerFade} />
        <div className="ray__block mb-0">
          <div className={style.promo}>
            <div className={style.promoInner}>
              <div className="ray__title ray__title--inverse">
                Cardano DeFi Platform
              </div>
              <h1>
                An advanced DeFi ecosystem for Cardano blockchain platform
              </h1>
              <p>
                We provide the whole range of blockchain solutions for Cardano:
                from DeFi exchanges, API provisioning systems, light wallets,
                minting tools & explorers, to different SDKs that open the
                blockchain world to thousands of crypto-enthusiasts from all
                over the world
              </p>
              <div>
                <Link
                  to="/ecosystem/"
                  className="ray__btn ray__btn--white  ray__btn--round me-3 mb-3"
                >
                  Ecosystem
                </Link>
                <Link
                  to="/xray/"
                  className="ray__btn ray__btn--white  ray__btn--round me-3 mb-3"
                >
                  XRAY Token
                </Link>
                <Link
                  to="/developers/"
                  className="ray__btn ray__btn--white  ray__btn--round me-3 mb-3"
                >
                  Developers
                </Link>
                <Link
                  to="/community/"
                  className="ray__btn ray__btn--white ray__btn--round me-3 mb-3"
                >
                  Community
                </Link>
              </div>
            </div>
          </div>
          <div className={style.info}>
            <div>
              It's all about ADA DeFi finances in one place. Fully Open Sourced.
              Built on Cardano.{" "}
            </div>
            <div className="ms-4">
              <a
                href="https://github.com/ray-network"
                className="ray__btn ray__btn--transparentDark ray__btn--round"
              >
                <SVGGithub className="me-1" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promo
