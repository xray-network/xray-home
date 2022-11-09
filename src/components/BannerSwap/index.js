import React from "react"
import { Link } from "gatsby"
import { SVGRay } from "@/svg"

const BannerSwap = () => {
  return (
    <div className="ray__banner">
      <div className="ray__banner__frame">
        <div className="ray__banner__image" style={{ backgroundImage: "url(/resources/banners/night.jpg)" }} />
        <div className="ray__banner__line">
          <div />
          <div />
        </div>
        <div className="ray__banner__content">
          <div className="ray__block py-5 mb-0">
            <div className="py-5 text-white">
              <div className="position-relative">
                <div className="ray__banner__logo">
                  <SVGRay />
                </div>
                <h1 className="mb-5 text-white">
                  <strong className="bolder">The New XRAY Token &rarr; Swap Event</strong>
                </h1>
                <div className="max-width-800">
                  <p className="mb-3">
                    After the initial free community distribution of the XRAY token is successfully completed and the
                    initial tokenomics is set, we will begin the two-month period of exchanging the old token for the
                    new XRAY token.
                  </p>
                  <p className="pb-5">
                    Please follow the link to the Locking & Swap Event page and swap your old token for the new one. It
                    will take no more than 15 minutes!
                  </p>
                </div>
                <div className="mt-4 pt-5">
                  <Link to="/xray/swap-event/" className="ray__btn ray__btn--large ray__btn--round ray__btn--white">
                    <span className="me-2">Go to Swap &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerSwap
