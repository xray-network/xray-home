import React from "react"
import { Button, Popover } from "antd"
import { useSelector } from "react-redux"
import { Line } from "react-chartjs-2"
import { format } from "@/utils"
import * as style from "./style.module.scss"

const XrayDistribution = () => {
  const pools = useSelector((state) => state.settings.pools)
  const history = useSelector((state) => state.settings.history)
  const distributed = history?.distributionHistory || []
  const rate = pools?.nextRate

  const chartData = {
    labels: distributed.map((epoch) => epoch.epoch),
    datasets: [
      {
        type: "line",
        label: "Max Rewards",
        data: distributed.map((epoch) => epoch.max),
        fill: true,
        radius: 0,
        backgroundColor: ["rgba(54, 162, 235, 0.1)"],
        hoverBackgroundColor: ["#355aeb"],
        borderColor: ["#355aeb"],
        postfix: "XRAY",
      },
      {
        type: "bar",
        label: "Epoch Rewards Distributed",
        data: distributed.map((epoch) => epoch.accrued),
        fill: true,
        stepped: "before",
        radius: 0,
        backgroundColor: ["#355aeb"],
        hoverBackgroundColor: ["#355aeb"],
        borderColor: ["#355aeb"],
        postfix: "XRAY",
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      axis: "x",
    },
    scales: {
      x: {
        grid: {
          color: "#e4e9f0",
        },
        ticks: {
          autoSkip: true,
          color: "#8484AD",
        },
      },
      y: {
        grid: {
          color: "#e4e9f0",
        },
        ticks: {
          color: "#8484AD",
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: (tooltipItem) =>
            `Epoch ${tooltipItem[0].label} (for Epoch ${parseInt(tooltipItem[0].label) - 2
            })`,
          label: (tooltipItem) => {
            const { datasetIndex } = tooltipItem
            const ds = chartData.datasets[datasetIndex]
            const arr = []
            arr.push(
              `${ds.label}: ${format(ds.data[tooltipItem.dataIndex])} ${ds.postfix
              }`
            )
            datasetIndex === 1 &&
              arr.push(
                `ADA per 1 XRAY: ${format(
                  distributed[tooltipItem.dataIndex].rate / 1000000,
                  6
                )} ADA`
              )
            datasetIndex === 1 &&
              arr.push(
                `Active Stake Snapshot: ${format(
                  distributed[tooltipItem.dataIndex].snapshot / 1000000,
                  6
                )} ADA`
              )
            return arr
          },
        },
      },
    },
  }

  return (
    <div className="ray__block">
      <div className="ray__title">XRAY Distribution</div>
      <div className="ray__title__descr">
        <strong>XRAY</strong> token distribution
      </div>
      <p className="mb-5">
        XRAY tokens are delivered to the community through a fair launch. A
        total of 58-78% of all tokens will be distributed (depending on how many
        tokens will be redeemed at Investors Round).
      </p>
      <div className={style.itemOuter}>
        <div className={style.item}>
          <div className="mb-3 d-flex">
            <div>
              <div className={`${style.point} ${style.pointActive}`}>1</div>
            </div>
            <div>
              <h3 className="mb-0">
                <span className="me-3">
                  <strong>Stake Delegators</strong>
                </span>
                <span className="badge badge-success align-middle">ACTIVE</span>
              </h3>
              <div className="text-active">
                101,538,200 <span className="ray__ticker">XRAY</span>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <p>
              Stake ADA in Ray pools and get <strong>~4.5% ROI</strong> with extra
              rewards each epoch 1 <strong className="ray__ticker">XRAY</strong> per{' '}
              {rate / 1000000} <strong className="ray__ticker">ADA</strong> staked.{' '}
            </p>
            <ul className="mb-5">
              <li>~4.5% ROI in ADA per epoch</li>
              <li>
                100,000,000 <span className="ray__ticker">XRAY</span> in ~3
                years;{" "}
                <Popover
                  content={
                    <div className="ray__info">
                      <div className="ray__info__label mb-2">Epoch 235-500</div>
                      <ul className="mb-0">
                        <li>
                          <strong>Total:</strong> 100,000,000
                          <span className="ray__ticker">XRAY</span>{" "}
                        </li>
                        <li>
                          <strong>Epoch Rewards:</strong> 888,888{" "}
                          <span className="ray__ticker">XRAY</span> / epoch
                        </li>
                        <li>
                          <strong>Decrease:</strong> -0.444% each epoch
                        </li>
                        <li>
                          <strong>Decrease from Epoch:</strong> 275
                        </li>
                        <li>
                          <strong>Max Rewards Rate:</strong> 1{" "}
                          <span className="ray__ticker">XRAY</span> per 50{" "}
                          <span className="ray__ticker">ADA</span>
                        </li>
                        <li>
                          <strong>Epoch Share:</strong> (delegator_stake /
                          pools_stake) * epoch_reward
                        </li>
                      </ul>
                    </div>
                  }
                >
                  <span className="link--dashed">distribution rules</span>
                </Popover>
              </li>
              <li>
                <strike>1,538,200 <span className="ray__ticker">XRAY</span> to early
                  delegators;</strike> End. {" "}
                <Popover
                  content={
                    <div className="ray__info">
                      <div className="ray__info__label mb-2">Epoch 235-275</div>
                      <ul className="mb-0">
                        <li>
                          <strong>Total Rewards:</strong> 1,538,200{" "}
                          <span className="ray__ticker">XRAY</span>
                        </li>
                        <li>
                          <strong>Share:</strong> (rewards / accum_pools_stake)
                          * accum_delegator_stake
                        </li>
                      </ul>
                    </div>
                  }
                >
                  <span className="link--dashed">distribution rules</span>
                </Popover>
              </li>
              <li>All unrealized tokens will be burned in Epoch 505</li>
            </ul>
            <div className="mb-5">
              <div className="row">
                <div className="col-6 col-sm-4 mb-4">
                  <div className="ray__left ray__left--dark">
                    <div className="ray__card__value">
                      {format(history?.totalAccrued || 0)}
                      <span className="ray__ticker">XRAY</span>
                    </div>
                    <div>Total XRAY Distributed</div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 mb-4">
                  <div className="ray__left ray__left--dark">
                    <div className="ray__card__value">
                      {format(history?.totalUndelivered || 0)}{" "}
                      <span className="ray__ticker">XRAY</span>
                    </div>
                    <div>XRAY Undelivered</div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 mb-4">
                  <div className="ray__left ray__left--dark">
                    <div className="ray__card__value">
                      {rate / 1000000}{" "}
                      <span className="ray__ticker">ADA</span>
                    </div>
                    <div>Live XRAY Mining Rate</div>
                  </div>
                </div>
              </div>
              <div>
                <Line data={chartData} options={options} height={300} />
              </div>
            </div>
            <div className={style.controls}>
              <a
                href="https://raystake.io/pools"
                target="_blank"
                rel="noopener noreferrer"
                className="ray__btn ray__btn--round me-3 mb-3"
              >
                <span className="me-2">Pools</span>
                <i className="ri ri-ext ri-arrow_up" />
              </a>
              <a
                href="https://raystake.io/calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="ray__btn ray__btn--round me-3 mb-3"
              >
                <span className="me-2">Calculator</span>
                <i className="ri ri-ext ri-arrow_up" />
              </a>
              <a
                href="https://raystake.io/faq"
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
            <div>
              <div className={style.point}>2</div>
            </div>
            <div>
              <h3 className="mb-0">
                <span className="me-3">
                  <strong>Liquidity Providers</strong>
                </span>
                <span className="badge badge-token align-middle">SOON</span>
              </h3>
              <div className="text-active">
                134,030,424 <span className="ray__ticker">XRAY</span>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <p className="mb-5">
              Support for liquidity providers. To be announced after the release
              of RaySwap.
            </p>
            <div className={style.controls}>
              <Button className="ray__btn ray__btn--round" disabled>
                Provide Liquidity
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.itemOuter}>
        <div className={style.item}>
          <div className="mb-3 d-flex">
            <div>
              <div className={style.point}>3</div>
            </div>
            <div>
              <h3 className="mb-0">
                <span className="me-3">
                  <strong>Investors Round</strong>
                </span>
                <span className="badge badge-token align-middle">SOON</span>
              </h3>
              <div className="text-active">
                81,230,560 <span className="ray__ticker">XRAY</span>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <p>
              IDE token distribution with vesting period and buy back option. To
              be announced after the release of RayPad.
            </p>
            <ul className="mb-5">
              <li>ADA/XRAY pair</li>
              <li>
                Locking funds in a smart contract for 6, 12, 18 months with an
                option to cancel the purchase at any time with a 30%, 20%, 10%
                penalty
              </li>
              <li>All unrealized and returned tokens will be burned</li>
            </ul>
            <div className={style.controls}>
              <Button className="ray__btn ray__btn--round" disabled>
                Buy XRAY
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default XrayDistribution
