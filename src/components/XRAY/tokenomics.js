import React, { useState } from "react"
import { useSelector } from "react-redux"
import ChartSchedule from "./_/ChartSchedule"
import ChartStakeSchedule from "./_/ChartStakeSchedule"
import { format } from "@/utils"
import * as style from "./style.module.scss"

const XrayTokenomics = () => {
  const ispoHistory = useSelector((state) => state.settings.ispoHistory)
  const stakeHistory = useSelector((state) => state.settings.stakeHistory)

  const [section, setSection] = useState("ispo")

  const stage1 = 185422703
  const stage2 = 50145921
  const devfund = 56861392
  const founders = 32492224
  const total = stage1 + stage2 + devfund + founders

  return (
    <div>
      <div className="ray__block mb-5 pb-2">
        <div className="ray__title">XRAY Tokenomics</div>
        <div className="ray__title__descr mb-5">
          <strong>Ray Network</strong> is a public good <strong>owned</strong> and <strong>governed</strong> by XRAY
          token holders
        </div>
        <p>
          {" "}
          Ray Network's tokenomics is based on full value creation by the community's participation in the life of the
          project. The initial token distribution was completely free in the ISPO and RayStake Stage 1 programs with
          high ROI. <strong>57.07%</strong> of all tokens were distributed to participants in these programs.{" "}
          <strong>15.43%</strong> of the tokens will be allocated to stimulate the community to provide liquidity and
          other value creation programs. In total, the community accessed <strong>72.5%</strong> of the total capacity
          of tokens.
        </p>
      </div>
      <div className="ray__banner">
        <div className="ray__banner__frame ray__banner__frame--dark">
          <div
            className="ray__banner__image"
            style={{
              backgroundImage: "url(/resources/banners/night6.jpg)",
              opacity: 0.4,
            }}
          />
          <div className="ray__banner__line">
            <div />
            <div />
          </div>
          <div className="ray__banner__content text-white py-5">
            <div className="ray__block pt-5 pb-3 mb-0">
              <div className="row">
                <div className="col-12">
                  <div className="ray__title ray__title--normal font-size-32">Total Cap</div>
                  <div className="ray__price ray__price--large mb-5 pb-3">
                    {format(total)} <span>XRAY</span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title ray__title--empty ray__title--normal font-size-32">
                    <span className="ray__title__square" />
                    Community (Stage 1) — {((stage1 / total) * 100).toFixed(2)}%
                  </div>
                  <div className="ray__price">
                    {format(stage1)} <span>XRAY</span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title ray__title--empty ray__title--normal font-size-32">
                    <span className="ray__title__square" />
                    Community (Stage 2) — {((stage2 / total) * 100).toFixed(2)}%
                  </div>
                  <div className="ray__price">
                    {format(stage2)} <span>XRAY</span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title ray__title--empty ray__title--normal font-size-32">
                    <span className="ray__title__square ray__title__square--red" />
                    Dev & Marketing Fund — {((devfund / total) * 100).toFixed(2)}%
                  </div>
                  <div className="ray__price">
                    {format(devfund)} <span>XRAY</span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title ray__title--empty ray__title--normal font-size-32">
                    <span className="ray__title__square ray__title__square--blue" />
                    Founders Fund — {((founders / total) * 100).toFixed(2)}%
                  </div>
                  <div className="ray__price">
                    {format(founders)} <span>XRAY</span>
                  </div>
                </div>
                <div className="col-12 mb-5">
                  <div className="ray__title ray__title--normal font-size-32">Distribution Breakdown</div>
                  <div className={style.breakdown}>
                    <div style={{ width: "57.07%" }}>57.07%</div>
                    <div style={{ width: "15.43%" }}>15.43%</div>
                    <div style={{ width: "17.50%" }} className={style.breakdownRed}>
                      17.50%
                    </div>
                    <div style={{ width: "10%" }} className={style.breakdownBlue}>
                      10%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ray__block pt-5 mb-2">
        <div className="ray__title__descr mb-5">
          <strong className="me-3">Stage 2 Allocation</strong>
          <span className="ray__title__status">Live</span>
        </div>
        <p className="mb-5">
          Stage 2 includes classic staking with a soft ROI of 15% to incentivize engaged users by the Ray Network
          ecosystem. Stage 2 will deliver <strong>50,145,921 XRAY</strong> tokens in subsequent programs: RayStake &
          RaySwap (65%) and other DEXes (35%).{" "}
          <a href="https://raystake.io/" target="_blank" rel="noopener noreferrer">
            Visit RayStake &rarr;
          </a>
        </p>
      </div>
      <div className="ray__banner mb-5 pb-5">
        <div className="ray__banner__frame ray__banner__frame--border">
          <div className="ray__banner__line">
            <div />
            <div />
          </div>
          <div className="ray__banner__content">
            <div className="ray__block pt-5 pb-4 mb-0">
              <div className="ray__title">To Be Distributed</div>
              <div className="ray__price">
                50,145,921 <span>XRAY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ray__block pt-3 mb-2">
        <div className="ray__title__descr mb-5">
          <strong className="me-3">Stage 1 Allocation</strong>
          <span className="ray__title__status ray__title__status--end">End</span>
        </div>
        <p className="mb-5">
          Stage 1 includes programs such as ISPO and high ROI XRAY/LP staking. In fact, it is the initial distribution
          of the XRAY token. A total of <strong>185,422,703 XRAY</strong> were scheduled for distribution, of which only{" "}
          <strong>131,278,985 XRAY</strong> were distributed during ISPO (one year and a half) and RayStake (9 months).
          The remaining <strong>54,143,718 XRAY</strong> will automatically be sent to <strong>25,906</strong> unique
          wallets who participated in any way in XRAY ISPO or RayStake Stage 1.
        </p>
      </div>
      <div className="ray__banner mb-5 pb-5">
        <div className="ray__banner__frame ray__banner__frame--border">
          <div className="ray__banner__line">
            <div />
            <div />
          </div>
          <div className="ray__banner__content">
            <div className="ray__block pt-5 pb-4 mb-0">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="ray__title">Total Distributed</div>
                  <div className="ray__price">
                    185,422,703 <span>XRAY</span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title">Including Undelivered Tokens Drop</div>
                  <div className="ray__price">
                    54,143,718 <span>XRAY</span>
                  </div>
                </div>
              </div>

              <h4 className={style.menu}>
                <a className={`${section === "ispo" ? style.menuActive : ""}`} onClick={() => setSection("ispo")}>
                  <span>ISPO</span>
                </a>
                <a
                  className={`${section === "raystake" ? style.menuActive : ""}`}
                  onClick={() => setSection("raystake")}
                >
                  <span>RayStake Stage1</span>
                </a>
              </h4>
              <div className="pb-5">
                {section === "ispo" && (
                  <div>
                    {/* <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="ray__title">
                          Distributed
                        </div>
                        <div className="ray__price">66,940,282 <span>XRAY</span></div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="ray__title">
                          Undelivered Tokens
                        </div>
                        <div className="ray__price">33,059,718 <span>XRAY</span></div>
                      </div>
                    </div> */}
                    <div>
                      <ChartSchedule history={ispoHistory?.distributionHistory || []} />
                    </div>
                  </div>
                )}
                {section === "raystake" && (
                  <div>
                    {/* <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="ray__title">
                          Distributed
                        </div>
                        <div className="ray__price">53,916,000 <span>XRAY</span></div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="ray__title">
                          Undelivered Tokens
                        </div>
                        <div className="ray__price">21,084,000 <span>XRAY</span></div>
                      </div>
                    </div> */}
                    <div>
                      <ChartStakeSchedule history={stakeHistory?.history || []} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default XrayTokenomics
