import React, { useContext } from "react"
import { Tooltip } from "antd"
import { Doughnut } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels'
import { globalContext } from "@/provider"
import style from "./style.module.scss"

export default () => {
  const context = useContext(globalContext)

  const total = 206152800
  const rewards = parseInt(total * 0.28)
  const ico = parseInt(total * 0.50)
  const development = parseInt(total * 0.14)
  const founders = parseInt(total * 0.08)

  const doughnutData = {
    labels: ['ICO', 'Rewards', 'Development Fund', 'Founders'],
    datasets: [
      {
        data: [ico, rewards, development, founders],
        backgroundColor: [
          'rgba(54, 162, 235, 0.4)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        hoverBackgroundColor: [
          'rgba(54, 162, 235, 0.5)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(255, 206, 86, 0.3)',
          'rgba(255, 99, 132, 0.3)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const doughuntOptions = {
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: context.isLight ? '#232135' : '#7575a3',
      }
    },
    plugins: {
      datalabels: {
        color: context.isLight ? '#232135' : '#7575a3',
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

  const format = (x) => {
    return parseInt(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="ray__block">
      <div className="container-fluid">
        <h2 className="ray__heading mb-4">Ray Token</h2>
        <h5 className="mb-3">About token</h5>
        <div className={`${style.container} mb-3`}>
          <div className={style.info}>
            <p>Ray Token is Cardano based cryptocurrency token for a fueling Ray Network platform. Ray Network is a highly functional open source project that banks on blockchain technology’s permissionless nature to provide decentralized finance (DeFi) solutions and other services.</p>
            <p>In the near future Ray Token will provide holders with discounted fees on the platform, and it also serves as a governance token — giving owners a say in the future development of the platform.</p>
            <p>
              You can receive Ray Tokens via{' '}
              <a href="https://wallet.rraayy.com/#/rewards" target="_blank" rel="noopener noreferrer" className="ray__link">Rewards Program</a>
              , or{' '}
              <Tooltip title="Planned to 2022"><span className="ray__link">ICO</span></Tooltip>.
            </p>
          </div>
        </div>
        <h5 className="mb-3">Distribution</h5>
        <div className={`${style.distibution} mb-4`}>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>Circulating Supply: <strong>{format(total)} RAY</strong></li>
                <li>Rewards Program (14%): <strong>{format(rewards)} RAY</strong></li>
                <li>2022 ICO (64%): <strong>{format(ico)} RAY</strong></li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>Development Fund (14%): <strong>{format(development)} RAY</strong></li>
                <li>Founders (4+4%): <strong>{format(founders)} RAY</strong></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p3-5">
          <Doughnut data={doughnutData} options={doughuntOptions} width={300} height={300} />
        </div>
      </div>
    </div>
  )
}
