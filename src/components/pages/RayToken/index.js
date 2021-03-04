import React, { useContext } from "react"
import { Tooltip } from "antd"
import { Doughnut } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels'
import { globalContext } from "@/provider"
import { format } from "@/utils"
import style from "./style.module.scss"

export default () => {
  const context = useContext(globalContext)

  const total = 406152800
  const rewards = parseInt(total * 0.28)
  const ico = parseInt(total * 0.50)
  const development = parseInt(total * 0.14)
  const founders = parseInt(total * 0.08)

  const colors = {
    backgroundColor: [
      'rgba(54, 162, 235, 0.6)',
      'rgba(54, 162, 235, 0.4)',
      'rgba(255, 206, 86, 0.4)',
      'rgba(255, 99, 132, 0.4)',
    ],
    hoverBackgroundColor: [
      'rgba(54, 162, 235, 0.7)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
      'rgba(255, 99, 132, 0.5)',
    ],
    borderColor: [
      'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(255, 99, 132, 1)',
    ],
  }

  const distributionData = {
    labels: ['ICO', 'Rewards', 'Development', 'Founders'],
    datasets: [
      {
        data: [ico, rewards, development, founders],
        ...colors,
        borderWidth: 1,
      },
    ],
  }

  const rewardsData = {
    labels: ['Stake Rewards', 'Early Users Airdrop', 'Other Activities'],
    datasets: [
      {
        data: [rewards * 0.7, rewards * 0.2, rewards * 0.1],
        ...colors,
        borderWidth: 1,
      },
    ],
  }

  const chartOptions = (total) => {
    return {
      maintainAspectRatio: false,
      legend: {
        labels: {
          fontColor: context.isLight ? '#232135' : '#fff',
        }
      },
      plugins: {
        datalabels: {
          color: context.isLight ? '#232135' : '#fff',
          formatter: (value) => {
            return parseInt(value / total * 100) + '%'
          }
        },
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
      <div className="container-fluid">
        <h2 className="ray__heading mb-4">Ray Token</h2>
        <div className={`${style.container} mb-5`}>
          <div className={style.info}>
            <p>Ray Token - <strong>RAY</strong> - is Cardano based cryptocurrency token for a fueling Ray Network platform. Ray Network is a highly functional open source project that banks on blockchain technology’s permissionless nature to provide decentralized finance (DeFi) solutions and other services.</p>
            <p>In the near future Ray Token will provide holders with discounted fees on the platform, and it also serves as a governance token — giving owners a say in the future development of the platform.</p>
            <p>
              You can receive Ray Tokens via{' '}
              <a href="https://wallet.rraayy.com/#/rewards" target="_blank" rel="noopener noreferrer" className="ray__link">Rewards Program</a>
              , or{' '}
              <Tooltip title="Planned to 2022"><span className="ray__link">ICO</span></Tooltip>.
            </p>
          </div>
        </div>
        <h2 className="ray__heading mb-4">Distribution</h2>
        <div className={`${style.distibution} mb-4`}>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>Circulating Supply: <strong>{format(total)} RAY</strong></li>
              </ul>
              <ul>
                <li>Rewards Program: <strong>{format(rewards)} RAY</strong> <sup>28%</sup></li>
                <li>2022 ICO: <strong>{format(ico)} RAY</strong> <sup>64%</sup></li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>Target RAY Price: <strong>{format(1, 2)} $</strong> <sup>{format(1 / context.prices.btc, 8)} BTC</sup></li>
              </ul>
              <ul>
                <li>Development Fund: <strong>{format(development)} RAY</strong> <sup>14%</sup></li>
                <li>Founders: <strong>{format(founders)} RAY</strong> <sup>4+4%</sup></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row pt-3 pb-4">
          <div className="col-lg-6">
            <h5 className="mb-3 text-center">Genesis</h5>
            <div>
              <Doughnut data={distributionData} options={chartOptions(total)} width={300} height={300} />
            </div>
          </div>
          <div className="col-lg-6">
            <h5 className="mb-3 text-center">Rewards</h5>
            <div>
              <Doughnut data={rewardsData} options={chartOptions(rewards)} width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
