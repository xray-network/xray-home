import React from "react"
import { useSelector } from "react-redux"
import { SVGRay } from "@/svg"
import * as style from "./style.module.scss"

const BannerISPO = () => {
  const pools = useSelector((state) => state.settings.pools)
  const rate = pools?.nextRate

  return (
    <div className="ray__block">
      <div className={style.banner}>
        <div
          className={style.bannerBg}
          style={{ backgroundImage: "url(/resources/banners/night.jpeg)" }}
        />
        <div className={style.bannerLogo}>
          <SVGRay />
        </div>
        <div className="ray__left mb-5">
          <h1 className="mb-0 max-width-800 text-white">
            <strong className="bolder">
              RayStake is LIVE! Join XRAY 0% FEE distributions NOW.
            </strong>
          </h1>
        </div>
        <div className="ray__left ray__left--empty">
          <div className={style.content}>
            <p>
              XRAY ISPO: XRAY tokens are distributed through a fair launch. Delegate your{" "}
              <span className="ray__ticker">ADA</span> to Ray pools and receive
              1 <span className="ray__ticker">XRAY</span> each epoch for every{" "}
              {rate / 1000000} <span className="ray__ticker">ADA</span> you
              staked. Ray pools have 0% fee comission, so{" "}
              <span className="ray__ticker">ADA</span> rewards stay with you.
            </p>
            <p className="mb-5">
              LP / XRAY Staking: Earn up to 380% — you have to keep the tokens from the table below in your wallet. RayStake takes a snapshot every 2000 blocks and accrue XRAY tokens to your balance.
            </p>
            <div>
              <a
                href="https://raystake.io/cardano/calculator/"
                target="_blank"
                rel="noopener noreferrer"
                className="ray__btn ray__btn--large ray__btn--round ray__btn--white me-3"
              >
                <span className="me-2">Calculator</span>
                <i className="ri ri-sm ri-arrow_forward" />
              </a>
              <a
                href="https://raystake.io/cardano/faq/"
                target="_blank"
                rel="noopener noreferrer"
                className="ray__btn ray__btn--large ray__btn--round ray__btn--white"
              >
                <span className="me-2">FAQ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerISPO
