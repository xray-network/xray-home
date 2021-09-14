import React from "react"
import { Link } from "gatsby"
import { useSelector } from "react-redux"
import * as style from "./style.module.scss"
import { SVGInfo } from "@/svg"

const BannerISPO = () => {
  const pools = useSelector((state) => state.settings.pools)
  const rate = pools?.nextRate

  return (
    <div className="ray__block">
      <div className={style.banner}>
        <div className="ray__left ray__left--orange mb-5">
          <div className={style.title}>
            <h1 className="mb-0">
              <strong>Join XRAY 0% FEE ISPO, 100,000,000 XRAY.</strong>
            </h1>
          </div>
        </div>
        <img src="/resources/banner/1.png" className={style.image} alt="" />
        <div className="ray__left ray__left--empty">
          <div className={style.content}>
            <p>
              XRAY tokens are distributed through a fair launch. Delegate your <span className="ray__ticker">ADA</span> to Ray pools and receive 1 <span className="ray__ticker">XRAY</span> each epoch for every {rate / 1000000} <span className="ray__ticker">ADA</span> you staked.
            </p>
            <p>
              Ray pools have 0% fee comission, so <span className="ray__ticker">ADA</span> rewards stay with you.
            </p>
            <p className="mb-5 pb-0 pb-md-5">
              ISPO is up and running, delegate now!
            </p>
            <div>
              <Link
                to="/xray/distribution/"
                className="ray__btn ray__btn--large ray__btn--round ray__btn--white"
              >
                <span className="me-2">Read more</span>
                <span className="ray__link">
                  <SVGInfo />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerISPO
