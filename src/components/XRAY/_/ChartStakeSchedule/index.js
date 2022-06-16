import React from "react"
import { useSelector } from "react-redux"
import { Line } from "react-chartjs-2"
import { range } from "lodash"

const ChartStakeSchedule = ({ history }) => {
  const theme = useSelector((state) => state.settings.theme)
  const isLight = theme === "default"

  const colors = ['#647ee6', '#355aeb', '#647ee6', '#355aeb']
  const emptyColor = isLight ? '#efefef' : '#787878'
  const hoverColor = isLight ? '#000' : '#fff'

  const firstBlock = history[0]?.history[0]?.blockNumber || 0
  const historyLength = history[0]?.history?.length || 0
  const lastBlock = history[0]?.history[historyLength - 1]?.blockNumber || 0

  const step = 2000
  const labels = range(firstBlock, lastBlock + step, step)
  const datasets = history?.map((asset, index) => {
    return {
      type: "bar",
      label: asset?.name,
      data: labels.map((block) => {
        return asset?.history?.filter((a) => a.blockNumber === block)[0]?.total
      }) || [],
      fill: true,
      stepped: "before",
      radius: 0,
      backgroundColor: [colors[index] || emptyColor],
      hoverBackgroundColor: [hoverColor],
    }
  }) || []

  const chartData = {
    labels: labels || [],
    datasets: datasets,
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: true,
      axis: "x",
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: (tooltipItem) =>
            `Block ${tooltipItem[0].label} Snapshot`,
          label: (tooltipItem) => {
            return [`${tooltipItem.dataset.label} Rewards: ${tooltipItem.formattedValue} XRAY`]
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

export default React.memo(ChartStakeSchedule)
