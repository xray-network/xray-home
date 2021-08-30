import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Line } from "react-chartjs-2"
import { format } from "@/utils"

const StakeTotal = ({ callback = () => { } }) => {
  const theme = useSelector((state) => state.settings.theme)
  const isLight = theme === "default"
  const [rewards, setRewards] = useState({
    currentEpoch: 0,
    distributed: [],
    totalAccrued: 0,
    totalUndelivered: 0,
  })
  const { distributed } = rewards

  const fetchData = () => {
    // fetch(`http://localhost:8080/ispo/state/`)
    fetch(`https://api-mainnet-helper.rraayy.com/ispo/state/`)
      .then((response) => response.json())
      .then((data) => {
        setRewards(data)
        callback(data)
      })
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  const chartData = {
    labels: distributed.map((epoch) => epoch.epoch),
    datasets: [
      {
        type: "line",
        label: "Max Rewards",
        data: distributed.map((epoch) => epoch.maxRewards),
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
        data: distributed.map((epoch) => epoch.xray),
        fill: true,
        stepped: "before",
        radius: 0,
        backgroundColor: ["#355aeb"],
        hoverBackgroundColor: ["#355aeb"],
        borderColor: ["#355aeb"],
        postfix: "XRAY",
      },
      // {
      //   type: "bar",
      //   label: "Snapshot",
      //   hidden: true,
      //   maxBarThickness: 5,
      //   data: distributed.map((epoch) => epoch.total / 1000000),
      //   radius: 0,
      //   width: 2,
      //   backgroundColor: ["#355aeb"],
      //   hoverBackgroundColor: ["#355aeb"],
      //   borderColor: ["#355aeb"],
      //   postfix: "ADA",
      // },
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
          color: isLight ? "#e4e9f0" : "#232236",
        },
        ticks: {
          autoSkip: true,
          color: isLight ? "#8484AD" : "#4f4f7a",
        },
      },
      y: {
        grid: {
          color: isLight ? "#e4e9f0" : "#232236",
        },
        ticks: {
          color: isLight ? "#8484AD" : "#4f4f7a",
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
                  distributed[tooltipItem.dataIndex].total / 1000000,
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
    <div>
      <div className="row mb-4">
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(rewards.totalAccrued)}{" "}
              <span className="ray__ticker">XRAY</span>
            </div>
            <div>Total Distributed</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(rewards.totalUndelivered)}{" "}
              <span className="ray__ticker">XRAY</span>
            </div>
            <div>Undelivered</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(rewards.currentEpoch)}
            </div>
            <div>Current Epoch</div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <Line data={chartData} options={options} height={300} />
      </div>
    </div>
  )
}

export default StakeTotal
