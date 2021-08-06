import React from "react"
import { Doughnut } from 'react-chartjs-2'
import { useSelector } from "react-redux"
import { Link } from "gatsby"
import { format } from "@/utils"
import Heading from "@/components/Heading"
import * as style from "./style.module.scss"

const XrayTokenomics = () => {
  const theme = useSelector((state) => state.settings.theme)
  const isLight = theme === 'default'

  const total = 406152800
  const percentage = {
    delegators: 0.25,
    providers: 0.33,
    investors: 0.20,
    development: 0.14,
    founders: 0.08,
  }
  const delegators = parseInt(total * percentage.delegators)
  const providers = parseInt(total * percentage.providers)
  const investors = parseInt(total * percentage.investors)
  const development = parseInt(total * percentage.development)
  const founders = parseInt(total * percentage.founders)

  const colors = {
    backgroundColor: [
      'rgba(54, 162, 235, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(186, 186, 163,0.6)',
      'rgba(255, 206, 86, 0.6)',
    ],
    hoverBackgroundColor: [
      'rgba(54, 162, 235, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(186, 186, 163,0.8)',
      'rgba(255, 206, 86, 0.8)',
    ],
    borderColor: [
      'rgba(54, 162, 235, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(186, 186, 163,0.6)',
      'rgba(255, 206, 86, 0.6)',
    ],
  }

  const distributionData = {
    labels: ['Stake Delegators', 'Liquidity Providers', 'Investors', 'Development Fund', 'Founders'],
    datasets: [
      {
        data: [delegators, providers, investors, development, founders],
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
          fontColor: isLight ? '#232135' : '#fff',
        }
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
            return data['labels'][tooltipItem[0]['index']];
          },
          label: function (tooltipItem, data) {
            return format(data['datasets'][0]['data'][tooltipItem['index']]) + ' RAY';
          },
        },
      },
    }
  }

  return (
    <div className="ray__block">
      <Heading id="tokenomics">
        <strong>XRAY</strong> tokenomics
      </Heading>
      <div className="ray__left ray__left--dark">
        <h5 className="mb-0">
          <strong>Circulating Supply (Max Supply 406,152,800 <span className="ray__ticker">XRAY</span>)</strong>
        </h5>
        <div className={`${style.supply} ${style.supplyLarge}`}>
          <strong className="bolder">10,152,800 <sup><span className="ray__ticker">XRAY</span></sup></strong>
        </div>
        <p>
          A total of 406 million XRAYs will be issued and will be available over a 3-year period. The initial four year allocation is as follows:
        </p>
        <ul className="mb-5">
          <li>58.00% to Ray Network community members <span className="badge badge-token">235,568,624 XRAY</span></li>
          <li>20.00% to investors with 3-year vesting <span className="badge badge-token">81,230,560 XRAY</span></li>
          <li>14.00% to team members and future employees with 3-year vesting <span className="badge badge-token">56,681,392 XRAY</span></li>
          <li>8.00% founders and advisors <span className="badge badge-token">32,492,224 XRAY</span></li>
        </ul>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <div className="ray__left ray__left--dark">
            <h5 className="mb-1">
              <strong>Stake Delegators <span className="text-shade">25%</span></strong>
            </h5>
            <div className={`${style.supply} mb-5`}>
              <strong className="bolder">101,538,200 <sup><span className="ray__ticker">XRAY</span></sup></strong>
            </div>
          </div>
          <div className="ray__left ray__left--dark">
            <h5 className="mb-1">
              <strong>Liquidity Providers <span className="text-shade">33%</span></strong>
            </h5>
            <div className={`${style.supply} mb-5`}>
              <strong className="bolder">134,030,424 <sup><span className="ray__ticker">XRAY</span></sup></strong>
            </div>
          </div>
          <div className="ray__left ray__left--dark">
            <h5 className="mb-1">
              <strong>Investors Round <span className="text-shade">20%</span></strong>
            </h5>
            <div className={`${style.supply} mb-5`}>
              <strong className="bolder">81,230,560 <sup><span className="ray__ticker">XRAY</span></sup></strong>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <div className="ray__left ray__left--dark">
            <h5 className="mb-1">
              <strong>Development Fund <span className="text-shade">14%</span></strong>
            </h5>
            <div className={`${style.supply} mb-5`}>
              <strong className="bolder">56,861,392 <sup><span className="ray__ticker">XRAY</span></sup></strong>
            </div>
          </div>
          <div className="ray__left ray__left--dark">
            <h5 className="mb-1">
              <strong>Founders <span className="text-shade">8%</span></strong>
            </h5>
            <div className={`${style.supply} mb-5`}>
              <strong className="bolder">32,492,224 <sup><span className="ray__ticker">XRAY</span></sup></strong>
            </div>
          </div>
        </div>
      </div>
      <div className={style.chart}>
        <div className="text-center">
          <h5 className="mb-2">
            <strong>Distribution Breakdown</strong>
          </h5>
          <div className="mb-3">
            Looking for distribution information?{' '}
            <Link to="/xray/distribution/">Read here.</Link>
          </div>
        </div>
        <div>
          <Doughnut data={distributionData} options={chartOptions(total)} width={300} height={300} />
        </div>
      </div>
    </div>
  )
}

export default XrayTokenomics
