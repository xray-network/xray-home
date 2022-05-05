import React from "react"
import { useSelector } from "react-redux"
import { Line } from "react-chartjs-2"
import { format } from "@/utils"

const ChartSchedule = ({ history }) => {
  const theme = useSelector((state) => state.settings.theme)
  const distributed = history || []
  const isLight = theme === "default"
  const hoverColor = isLight ? '#000' : '#fff'

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
        hoverBackgroundColor: [hoverColor],
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
        hoverBackgroundColor: [hoverColor],
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
          color: isLight ? "#e4e9f0" : "#2e2e46",
        },
        ticks: {
          autoSkip: true,
          color: isLight ? "#8484AD" : "#4f4f7a",
        },
      },
      y: {
        grid: {
          color: isLight ? "#e4e9f0" : "#2e2e46",
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
            `Epoch ${tooltipItem[0].label} (for Epoch ${
              parseInt(tooltipItem[0].label, 10) - 2
            })`,
          label: (tooltipItem) => {
            const { datasetIndex } = tooltipItem
            const ds = chartData.datasets[datasetIndex]
            const arr = []
            arr.push(
              `${ds.label}: ${format(ds.data[tooltipItem.dataIndex])} ${
                ds.postfix
              }`
            )
            if (datasetIndex === 1) {
              arr.push(
                `ADA per 1 XRAY: ${format(
                  distributed[tooltipItem.dataIndex].rate / 1000000,
                  6
                )} ADA`
              )
            }
            if (datasetIndex === 1) {
              arr.push(
                `Active Stake Snapshot: ${format(
                  distributed[tooltipItem.dataIndex].snapshot / 1000000,
                  6
                )} ADA`
              )
            }
            return arr
          },
        },
      },
    },
  }

  return (
    <div style={{ userSelect: "none" }}>
      <Line data={chartData} options={options} height={300} />
    </div>
  )
}

export default React.memo(ChartSchedule)
