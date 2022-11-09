import React, { useState } from "react"
import { useSelector } from "react-redux"
import { format } from "@/utils"
import * as style from "./style.module.scss"

const Stats = () => {
  const prices = useSelector((state) => state.settings.prices)
  const pricesXRAY = useSelector((state) => state.settings.pricesXRAY)

  const [section, setSection] = useState("price")

  return (
    <div>
      <div className="ray__block mb-0">
        <div className="ray__title">Ray Network Metrics</div>
        <div className="ray__title__descr">
          Ecosystem <strong>Performance</strong>
        </div>
      </div>
      <div className="ray__banner mb-5 pb-5">
        <div className="ray__banner__frame ray__banner__frame--border">
          <div className="ray__banner__line">
            <div />
            <div />
          </div>
          <div className="ray__banner__content">
            <div className="ray__block pt-5 pb-4 mb-0">
              <h4 className={style.menu}>
                <a className={`${section === "price" ? style.menuActive : ""}`} onClick={() => setSection("price")}>
                  <span>Price Metrics</span>
                </a>
                <a
                  className={`${section === "raystake" ? style.menuActive : ""}`}
                  onClick={() => setSection("raystake")}
                >
                  <span>RayStake Stage1</span>
                </a>
              </h4>
              {section === "price" && (
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="ray__title">XRAY Price</div>
                    <div className="ray__price">
                      {(pricesXRAY?.price || 0).toFixed(6)} <span>ADA</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="ray__title">XRAY Market Price</div>
                    <div className="ray__price">
                      {((pricesXRAY?.price || 0) * (prices?.cardano?.usd || 0)).toFixed(6)} <span>$</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="ray__title">ADA Market Price</div>
                    <div className="ray__price">
                      {(prices?.cardano?.usd || 0).toFixed(6)} <span>$</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="ray__title">24h, DEX/CEX Volume</div>
                    <div className="ray__price">—</div>
                  </div>
                </div>
              )}
              {section === "raystake" && (
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="ray__title">XRAY Mined</div>
                    <div className="ray__price">
                      185,422,703 <span>XRAY</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="ray__title">ISPO, Max TVL</div>
                    <div className="ray__price">
                      265,841,222 <span>ADA</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="ray__title">ISPO, Max XRAY Mining Rate per 1 XRAY</div>
                    <div className="ray__price">
                      525.314580 <span>ADA</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="ray__title">Stake Keys Involved</div>
                    <div className="ray__price">26,141</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
