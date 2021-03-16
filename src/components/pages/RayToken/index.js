import React, { useContext } from "react"
import { Doughnut } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels'
import { globalContext } from "@/provider"
import { format } from "@/utils"
import style from "./style.module.scss"

export default () => {
  const context = useContext(globalContext)

  const total = 406152800
  const rewards = parseInt(total * 0.28)
  const kickstart = parseInt(total * 0.50)
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
    labels: ['KickStart', 'Rewards', 'Development', 'Founders'],
    datasets: [
      {
        data: [kickstart, rewards, development, founders],
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
        <h2 className="ray__heading mb-4">RAY Token</h2>
        <div className={`${style.container} mb-5`}>
          <div className={style.info}>
            <p>RAY Token - <strong>RAY</strong> - is a Cardano based cryptocurrency token for a fuelling the RAY platform. RAY is a highly functional open source project that banks on blockchain technology’s permissionless nature to provide decentralized finance (DeFi) solutions and other services.</p>
            <p>In the near future RAY Token will provide holders with discounted fees on the platform, and it also serves as a governance token, giving owners a say in future development.</p>
            <p>
              You can receive RAY Tokens via a{' '}
              <a href="https://raywallet.io/#/rewards" target="_blank" rel="noopener noreferrer" className="ray__link">Rewards Program</a>
              , or{' '}
              <a href="https://raywallet.io/#/kickstart" className="ray__link">KickStart Distribution</a> (total five phases).
            </p>
          </div>
        </div>
        <h2 className="ray__heading mb-4">Distribution</h2>
        <div className={`${style.distibution} mb-2`}>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>Circulating Supply: <strong>{format(total)} RAY</strong></li>
              </ul>
              <ul>
                <li>Rewards Program: <strong>{format(rewards)} RAY</strong> <sup>28%</sup></li>
                <li>KickStart: <strong>{format(kickstart)} RAY</strong> <sup>64%</sup></li>
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
        <div className="row pt-3">
          <div className="col-lg-6">
            <div className={style.chart}>
              <h5 className="mb-3 text-center">Genesis</h5>
              <div>
                <Doughnut data={distributionData} options={chartOptions(total)} width={300} height={300} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={style.chart}>
              <h5 className="mb-3 text-center">Rewards</h5>
              <div>
                <Doughnut data={rewardsData} options={chartOptions(rewards)} width={300} height={300} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
