import React from "react"
import { Link } from "gatsby"
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
          <h1 className="mb-0 max-width-700 text-white">
            <strong className="bolder">
              Join XRAY 0% FEE ISPO, 100,000,000 XRAY.
            </strong>
          </h1>
        </div>
        <div className="ray__left ray__left--empty">
          <div className={style.content}>
            <p>
              XRAY tokens are distributed through a fair launch. Delegate your{" "}
              <span className="ray__ticker">ADA</span> to Ray pools and receive
              1 <span className="ray__ticker">XRAY</span> each epoch for every{" "}
              {rate / 1000000} <span className="ray__ticker">ADA</span> you
              staked.
            </p>
            <p>
              Ray pools have 0% fee comission, so{" "}
              <span className="ray__ticker">ADA</span> rewards stay with you.
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
                <i className="ri ri-sm ri-arrow_forward" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerISPO
