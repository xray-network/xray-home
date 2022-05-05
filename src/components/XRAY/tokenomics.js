import React from "react"
import { Doughnut } from "react-chartjs-2"
import { useSelector } from "react-redux"
import { Link } from "gatsby"
import { format } from "@/utils"
import * as style from "./style.module.scss"

const XrayTokenomics = () => {
  const theme = useSelector((state) => state.settings.theme)
  const isLight = theme === "default"

  const total = 406152800
  const percentage = {
    delegators: 0.25,
    providers: 0.33,
    reserve: 0.2,
    development: 0.14,
    founders: 0.08,
  }
  const delegators = parseInt(total * percentage.delegators)
  const providers = parseInt(total * percentage.providers)
  const reserve = parseInt(total * percentage.reserve)
  const development = parseInt(total * percentage.development)
  const founders = parseInt(total * percentage.founders)

  const colors = {
    backgroundColor: [
      "rgba(54, 162, 235, 0.6)",
      "rgba(54, 162, 235, 0.6)",
      "rgba(54, 162, 235, 0.6)",
      "rgba(186, 186, 163,0.6)",
      "rgba(255, 206, 86, 0.6)",
    ],
    hoverBackgroundColor: [
      "rgba(54, 162, 235, 0.8)",
      "rgba(54, 162, 235, 0.8)",
      "rgba(54, 162, 235, 0.8)",
      "rgba(186, 186, 163,0.8)",
      "rgba(255, 206, 86, 0.8)",
    ],
    borderColor: [
      "rgba(54, 162, 235, 0.6)",
      "rgba(54, 162, 235, 0.6)",
      "rgba(54, 162, 235, 0.6)",
      "rgba(186, 186, 163,0.6)",
      "rgba(255, 206, 86, 0.6)",
    ],
  }

  const distributionData = {
    labels: [
      "ADA Staking & XRAY ISPO Program",
      "LP / XRAY Staking Program",
      "Reserve & Buyback Round",
      "Development & Marketing Fund",
      "Founders",
    ],
    datasets: [
      {
        data: [delegators, providers, reserve, development, founders],
        ...colors,
        borderWidth: 1,
        rotation: -120,
      },
    ],
  }

  const chartOptions = (total) => {
    return {
      maintainAspectRatio: false,
      legend: {
        labels: {
          fontColor: isLight ? "#232135" : "#fff",
        },
      },
      plugins: {
        // labels: {
        //   render: 'value'
        // }
        // datalabels: {
        //   color: isLight ? '#232135' : '#fff',
        //   formatter: (value) => {
        //     return parseInt(value / total * 100) + '%'
        //   }
        // },
      },
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]]
          },
          label: function (tooltipItem, data) {
            return (
              format(data["datasets"][0]["data"][tooltipItem["index"]]) + " RAY"
            )
          },
        },
      },
    }
  }

  return (
    <div className="ray__block">
      <div className="ray__title">XRAY Tokenomics</div>
      <div className="ray__title__descr mb-5">
        <strong>Ray Network</strong> is a public good <strong>owned</strong> and{" "}
        <strong>governed</strong> by XRAY token holders
      </div>
      <div className="ray__left ray__left--dark">
        <h5 className="mb-0">
          <strong>Circulating Supply</strong>
        </h5>
        <div className={`${style.supply} ${style.supplyLarge}`}>
          <strong className="bolder">
            44,538,200{" "}
            <sup>
              <span className="ray__ticker">XRAY</span>
            </sup>
          </strong>
        </div>
        <div className="ray__progress mb-4">
          <div style={{ width: `${(44.6 / 406) * 100}%` }} />
        </div>
        <h5 className="mb-1">
          <strong>Max Supply</strong>
        </h5>
        <div className={`${style.supply} mb-5`}>
          <strong className="bolder">
            406,152,800{" "}
            <sup>
              <span className="ray__ticker">XRAY</span>
            </sup>
          </strong>
        </div>
        <p>
          A total of 406,152,800 XRAY will be issued and will be available over
          a 3-year period. The initial three year allocation is as follows:
        </p>
        <ul className="mb-5">
          <li>
            58.00% to Ray Network community members{" "}
            <span className="badge badge-token">235,568,624 XRAY</span>
          </li>
          <li>
            20.00% to reserve & buyback program with vesting periods{" "}
            <span className="badge badge-token">81,230,560 XRAY</span>
          </li>
          <li>
            14.00% to team members and future employees with 3-year vesting{" "}
            <span className="badge badge-token">56,681,392 XRAY</span>
          </li>
          <li>
            8.00% founders and advisors{" "}
            <span className="badge badge-token">32,492,224 XRAY</span>
          </li>
        </ul>
        <div className="mb-5">
          <Link
            to="/xray/distribution/"
            className="ray__btn ray__btn--round me-3 mb-3"
          >
            Distribution
          </Link>
          <Link
            to="/xray/governance/"
            className="ray__btn ray__btn--round me-3 mb-3"
          >
            Governance
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <div className="ray__left ray__left--dark">
            <h5 className="mb-1">
              <strong>
                ADA Staking & XRAY ISPO Program <span className="text-shade">25%</span>
              </strong>
            </h5>
            <div className={`${style.supply} mb-1`}>
              <strong className="bolder">
                41,538,200{" "}
                <sup>
                  <span className="ray__ticker">XRAY</span>
                </sup>
              </strong>
            </div>
            <div className="ray__progress ray__progress--small mb-3 me-5">
              <div style={{ width: `${(41.5 / 101) * 100}%` }} />
            </div>
            <div>
              <strong>Max Allocation</strong>
            </div>
            <div className="mb-5">
              <strong>101,538,200</strong>{" "}
              <span className="ray__ticker">XRAY</span>
            </div>
          </div>
          <div className="ray__left ray__left--dark">
            <h5 className="mb-1">
              <strong>
                LP / XRAY Staking Program <span className="text-shade">33%</span>
              </strong>
            </h5>
            <div className={`${style.supply} mb-1`}>
              <strong className="bolder">
                0{" "}
                <sup>
                  <span className="ray__ticker">XRAY</span>
                </sup>
              </strong>
            </div>
            <div className="ray__progress ray__progress--small mb-3 me-5">
              <div style={{ width: 0 }} />
            </div>
            <div>
              <strong>Max Allocation</strong>
            </div>
            <div className="mb-5">
              <strong>134,030,424</strong>{" "}
              <span className="ray__ticker">XRAY</span>
            </div>
          </div>
          <div className="ray__left ray__left--dark">
            <h5 className="mb-1">
              <strong>
                Reserve & Buyback Round <span className="text-shade">20%</span>
              </strong>
            </h5>
            <div className={`${style.supply} mb-1`}>
              <strong className="bolder">
                0{" "}
                <sup>
                  <span className="ray__ticker">XRAY</span>
                </sup>
              </strong>
            </div>
            <div className="ray__progress ray__progress--small mb-3 me-5">
              <div style={{ width: 0 }} />
            </div>
            <div>
              <strong>Max Allocation</strong>
            </div>
            <div className="mb-5">
              <strong>81,230,560</strong>{" "}
              <span className="ray__ticker">XRAY</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <div className="ray__left ray__left--dark">
            <h5 className="mb-1">
              <strong>
                Development & Marketing Fund{" "}
                <span className="text-shade">14%</span>
              </strong>
            </h5>
            <div className={`${style.supply} mb-1`}>
              <strong className="bolder">
                3,000,000{" "}
                <sup>
                  <span className="ray__ticker">XRAY</span>
                </sup>
              </strong>
            </div>
            <div className="ray__progress ray__progress--small mb-3 me-5">
              <div style={{ width: `${(3 / 56) * 100}%` }} />
            </div>
            <div>
              <strong>Max Allocation</strong>
            </div>
            <div className="mb-5">
              <strong>56,861,392</strong>{" "}
              <span className="ray__ticker">XRAY</span>
            </div>
          </div>
          <div className="ray__left ray__left--dark">
            <h5 className="mb-1">
              <strong>
                Founders Fund <span className="text-shade">8%</span>
              </strong>
            </h5>
            <div className={`${style.supply} mb-1`}>
              <strong className="bolder">
                0{" "}
                <sup>
                  <span className="ray__ticker">XRAY</span>
                </sup>
              </strong>
            </div>
            <div className="ray__progress ray__progress--small mb-3 me-5">
              <div style={{ width: 0 }} />
            </div>
            <div>
              <strong>Max Allocation</strong>
            </div>
            <div className="mb-5">
              <strong>32,492,224</strong>{" "}
              <span className="ray__ticker">XRAY</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.chart}>
        <div className="text-center">
          <h5 className="mb-2">
            <strong>Planned Distribution Breakdown</strong>
          </h5>
          <div className="mb-3">
            Looking for detailed distribution information?{" "}
            <Link to="/xray/distribution/">Read here.</Link>
          </div>
        </div>
        <div>
          <Doughnut
            data={distributionData}
            options={chartOptions(total)}
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}

export default XrayTokenomics
