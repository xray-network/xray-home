import React from "react"
import { useSelector } from "react-redux"
import { Link } from "gatsby"
import { marketDex, marketNft } from "@/config"

const WhereToBuy = () => {
  return (
    <div>
      <div className="ray__block pt-1">
        <div className="ray__title">Cryptocurrency exchanges</div>
        <div className="ray__title__descr">
          <strong>Where To Buy</strong>
        </div>
        <div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="mb-4">
                <h6>
                  <strong>XRAY</strong>
                </h6>
                <div className="text-muted mb-5">
                  XRAY is the governance token that powers Ray Network. It facilitates community led growth and
                  sustainable tokenomics.
                </div>
                <div>
                  {marketDex.map((item, index) => {
                    return item.url ? (
                      <a
                        key={index}
                        className="ray__info w-100"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="ray__info__texture" />
                        <div className="ray__info__dot" />
                        <div className="ray__info__icon">
                          <img src={item.img} alt={item.title} />
                        </div>
                        <div className="ray__info__title">{item.title} &rarr;</div>
                      </a>
                    ) : (
                      <span key={index} className="ray__info w-100">
                        <div className="ray__info__texture" />
                        <div className="ray__info__dot" />
                        <div className="ray__info__icon">
                          <img src={item.img} alt={item.title} />
                        </div>
                        <div className="ray__info__title">
                          {item.title} <sup>SOON</sup> &rarr;
                        </div>
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="mb-4">
                <h6>
                  <strong>XDIAMOND</strong>
                </h6>
                <div className="text-muted mb-5">
                  XDIAMOND is a Cardano collectible semi-NFT token for marketing and community incentives.
                </div>
                {marketNft.map((item, index) => {
                  return (
                    <a
                      key={index}
                      className="ray__info w-100"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="ray__info__texture" />
                      <div className="ray__info__dot" />
                      <div className="ray__info__icon">
                        <img src={item.img} alt={item.title} />
                      </div>
                      <div className="ray__info__title">{item.title} &rarr;</div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhereToBuy
