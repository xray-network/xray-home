import React from "react"
import { Button } from "antd"
import { useSelector } from "react-redux"
import { format } from "@/utils"
import ChartSchedule from "./_/ChartSchedule"
import ChartStakeSchedule from "./_/ChartStakeSchedule"
import * as style from "./style.module.scss"

const XrayDistribution = () => {
  const pools = useSelector((state) => state.settings.pools)
  const history = useSelector((state) => state.settings.history)
  const stakeHistory = useSelector((state) => state.settings.stakeHistory)
  const rate = pools?.nextRate

  return (
    <div className="ray__block">
      <div className="ray__title">XRAY Distribution</div>
      <div className="ray__title__descr">
        <strong>XRAY</strong> token distribution
      </div>
      <div className={style.itemOuter}>
        <div className={style.item}>
          <div className="mb-3 d-flex">
            <div className="flex-grow-1">
              <h3 className="mb-0">
                <span className="me-3">
                  <strong className="bolder">XRAY ISPO</strong>
                </span>
              </h3>
              <div className="text-active">
                Distribution: 100,000,000{" "}
                <span className="ray__ticker">XRAY</span> + Early Delegators
                Bonus: 15,382 <span className="ray__ticker">XDIAMOND</span>
              </div>
            </div>
            <div>
              <div className={style.point}>1</div>
            </div>
          </div>
          <div className="mb-4">
            Stake ADA to earn 4.4% ADA and XRAY rewards based upon the Live Mining Rate every epoch (5 days). The program will continue until Epoch 500.
          </div>
          <div className="pt-4">
            <div className="mb-5">
              <div className="row">
                <div className="col-6 col-sm-4 mb-4">
                  <div className="ray__left ray__left--dark">
                    <div className="ray__card__value">
                      {format(history?.totalAccrued || 0)}
                      <span className="ray__ticker ms-2">XRAY</span>
                    </div>
                    <div>Total XRAY Distributed</div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 mb-4">
                  <div className="ray__left ray__left--dark">
                    <div className="ray__card__value">
                      {format(history?.totalUndelivered || 0)}
                      <span className="ray__ticker ms-2">XRAY</span>
                    </div>
                    <div>XRAY Undelivered</div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 mb-4">
                  <div className="ray__left ray__left--dark">
                    <div className="ray__card__value">
                      {rate / 1000000}
                      <span className="ray__ticker ms-2">ADA</span>
                    </div>
                    <div>Live XRAY Mining Rate</div>
                  </div>
                </div>
              </div>
              <div>
                <ChartSchedule history={history?.distributionHistory || []} />
              </div>
            </div>
            <div className={style.controls}>
              <a
                href="https://raystake.io/cardano/pools/"
                target="_blank"
                rel="noopener noreferrer"
                className="ray__btn ray__btn--round me-3 mb-3"
              >
                <span className="me-2">Pools</span>
                <i className="ri ri-ext ri-arrow_up" />
              </a>
              <a
                href="https://raystake.io/cardano/calculator/"
                target="_blank"
                rel="noopener noreferrer"
                className="ray__btn ray__btn--round me-3 mb-3"
              >
                <span className="me-2">Calculator</span>
                <i className="ri ri-ext ri-arrow_up" />
              </a>
              <a
                href="https://raystake.io/cardano/faq/"
                target="_blank"
                rel="noopener noreferrer"
                className="ray__btn ray__btn--round me-3 mb-3"
              >
                <span className="me-2">FAQ</span>
                <i className="ri ri-ext ri-arrow_up" />
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className={style.itemOuter}>
        <div className={style.item}>
          <div className="mb-3 d-flex">
            <div className="flex-grow-1">
              <h3 className="mb-0">
                <span className="me-3">
                  <strong className="bolder">LP / XRAY Staking — Stage 1</strong>
                </span>
              </h3>
              <div className="text-active">
                Stage 1: 75,000,000 <span className="ray__ticker">XRAY</span> +
                Early LP Providers Bonus: 8,884,503 <span className="ray__ticker">XRAY</span> / 
                Stage 2: 50,145,921 <span className="ray__ticker">XRAY</span>
              </div>
            </div>
            <div>
              <div className={style.point}>2</div>
            </div>
          </div>
          <div className="mb-4">
            Your XRAY tokens will earn a 20% base APY that can be boosted up to 76% by holding XDIAMOND NFTs. Holding XRAY/ADA LP tokens from participating exchanges (SundaeSwap, Minswap, Wingriders, RaySwap, and ErgoDex) will earn you a 100% base APY. Boost your 100% base APY by up to 280% when holding XDIAMOND NFTs for a max APY of 380%. Stage 1 will continue until 75,000,000 XRAY have been distrubuted.
          </div>
          <div className="pt-4">
            <div className="mb-5">
              <div className="row">
                <div className="col-6 col-sm-4 mb-4">
                  <div className="ray__left ray__left--dark">
                    <div className="ray__card__value">
                      {format(parseInt(stakeHistory.total) || 0)}
                      <span className="ray__ticker ms-2">XRAY</span>
                    </div>
                    <div>Total XRAY Distributed</div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 mb-4">
                  <div className="ray__left ray__left--dark">
                    <div className="ray__card__value">
                      {format(stakeHistory.total ? 75000000 - parseInt(stakeHistory.total) : 0)}
                      <span className="ray__ticker ms-2">XRAY</span>
                    </div>
                    <div>XRAY Undelivered</div>
                  </div>
                </div>
              </div>
              <div>
                <ChartStakeSchedule history={stakeHistory?.history || []} />
              </div>
            </div>
            <div className={style.controls}>
              <a
                href="https://raystake.io/cardano/calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="ray__btn ray__btn--round me-3 mb-3"
              >
                <span className="me-2">Calculator</span>
                <i className="ri ri-ext ri-arrow_up" />
              </a>
              <a
                href="https://raystake.io/cardano/faq/"
                target="_blank"
                rel="noopener noreferrer"
                className="ray__btn ray__btn--round me-3 mb-3"
              >
                <span className="me-2">FAQ</span>
                <i className="ri ri-ext ri-arrow_up" />
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className={style.itemOuter}>
        <div className={style.item}>
          <div className="mb-4 d-flex">
            <div className="flex-grow-1">
              <h3 className="mb-0">
                <span className="me-3">
                  <strong className="bolder">Reserve & Buyback Round</strong>
                </span>
                <span className="badge badge-token align-middle">SOON</span>
              </h3>
              <div className="text-active">
                Distribution: 81,230,560 <span className="ray__ticker">XRAY</span>
              </div>
            </div>
            <div>
              <div className={style.point}>3</div>
            </div>
          </div>
          <div className="mb-5">
            <p>
              IDE token distribution with vesting period and buy back option. To
              be announced after the release of RayPad.
            </p>
            <ul className="mb-0">
              <li>ADA/XRAY pair</li>
              <li>
                Locking funds in a smart contract for 6, 12, 18 months with an
                option to cancel the purchase at any time with a 30%, 20%, 10%
                penalty
              </li>
              <li>All unrealized and returned tokens will be burned</li>
            </ul>
          </div>
          <div>
            <div className={style.controls}>
              <Button className="ray__btn ray__btn--round" disabled>
                Reserve XRAY
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default XrayDistribution
