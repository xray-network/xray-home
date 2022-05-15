import React from "react"
import { useSelector } from "react-redux"
import { Link } from "gatsby"
import { Line } from "react-chartjs-2"
import { subDays, eachDayOfInterval, format as dateFormat } from "date-fns"
import { todo } from "@/config"
import { format } from "@/utils"
import * as style from "./style.module.scss"

function mFormatter(num) {
  return Math.abs(num) > 999999 ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(1)) + 'M' : Math.sign(num)*Math.abs(num)
}

const marketDex = [
  {
    id: 'sundaeswap',
    title: 'SundaeSwap',
    img: '/resources/dex/sundaeswap.png',
    url: 'https://exchange.sundaeswap.finance/#/swap?swap_from=ae2a0aa5a24b27d9868c4a73b7c08077ac21baade5eca0fa467a2bbd.58524159&swap_to=cardano.ada',
  },
  {
    id: 'minswap',
    title: 'Minswap',
    img: '/resources/dex/minswap.png',
    url: 'https://app.minswap.org/swap?currencySymbolA=&tokenNameA=&currencySymbolB=ae2a0aa5a24b27d9868c4a73b7c08077ac21baade5eca0fa467a2bbd&tokenNameB=58524159',
  },
  {
    id: 'wingriders',
    title: 'Wingriders',
    img: '/resources/dex/wingriders.png',
    url: 'https://app.wingriders.com/swap/ada/ae2a0aa5a24b27d9868c4a73b7c08077ac21baade5eca0fa467a2bbd58524159',
  },
  {
    id: 'muesliswap',
    title: 'MuesliSwap',
    img: '/resources/dex/muesliswap.png',
    url: 'https://muesliswap.com/markets/token/ae2a0aa5a24b27d9868c4a73b7c08077ac21baade5eca0fa467a2bbd.XRAY',
  },
]

const marketNft = [
  {
    id: 'sundaeswap',
    title: 'SundaeSwap',
    img: '/resources/dex/sundaeswap.png',
    url: 'https://exchange.sundaeswap.finance/#/swap?swap_from=b6798a74fb7441ef5f7af1ff4ea6150bbb7aaeb0aca0113e558592f6.584449414d4f4e44&swap_to=cardano.ada',
  },
  {
    id: 'cnftio',
    title: 'CNFT.IO',
    img: '/resources/dex/cnftio.png',
    url: 'https://cnft.io/explore?search=b6798a74fb7441ef5f7af1ff4ea6150bbb7aaeb0aca0113e558592f6',
  },
  {
    id: 'jpegstore',
    title: 'Jpeg.store',
    img: '/resources/dex/jpegstore.png',
    url: 'https://www.jpg.store/collection/b6798a74fb7441ef5f7af1ff4ea6150bbb7aaeb0aca0113e558592f6',
  },
]

const RayData = () => {
  const prices = useSelector((state) => state.settings.prices)
  const pools = useSelector((state) => state.settings.pools)
  const totalLiveStake =
    (pools?.totalLiveStake || 0) * (prices?.cardano?.usd || 0)

  const labels = eachDayOfInterval({ start: subDays(new Date(), 6), end: new Date() }).map((d) => dateFormat(d, 'PP'))
  const dataXray = {
    labels: labels,
    datasets: [
      {
        type: "line",
        label: null,
        data: [0.15, 0.17, 0.14, 0.12, 0.2, 0.21, 0.23],
        fill: true,
        radius: 0,
        borderWidth: 8,
        backgroundColor: ["rgba(54, 162, 235, 0.1)"],
        hoverBackgroundColor: ["#000"],
        borderColor: ["#000"],
        tension: 0.4
      }
    ],
  }

  const dataXdiamond = {
    labels: labels,
    datasets: [
      {
        type: "line",
        label: null,
        data: [98, 102, 121, 113, 110, 120, 102],
        fill: true,
        radius: 0,
        borderWidth: 8,
        backgroundColor: ["rgba(54, 162, 235, 0.1)"],
        hoverBackgroundColor: ["#000"],
        borderColor: ["#000"],
        tension: 0.4
      }
    ],
  }

  const dataTvl = {
    labels: labels,
    datasets: [
      {
        type: "line",
        label: null,
        data: [117058254, 124871641, 125487521, 123461516, 121615254, 126975125, totalLiveStake / 1000000],
        fill: true,
        radius: 0,
        borderWidth: 8,
        backgroundColor: ["rgba(54, 162, 235, 0.1)"],
        hoverBackgroundColor: ["#000"],
        borderColor: ["#000"],
        tension: 0.4
      }
    ],
  }

  const optionsPrice = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      axis: "x",
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          // title: (tooltipItem) => `${tooltipItem[0].label})`,
          label: (tooltipItem) => `${tooltipItem.formattedValue} ADA`,
        },
      }
    },
    scales: {
      x: {
        // display: false,
        ticks: {
          autoSkip: true,
        }
      },
      y: {
        position: 'left',
        title: {
          display: true,
          text: 'Price, USD',
        }
      }
    }
  }

  const optionsTvl = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      axis: "x",
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          // title: (tooltipItem) => `${tooltipItem[0].label})`,
          label: (tooltipItem) => `${tooltipItem.formattedValue} USD`,
        },
      }
    },
    scales: {
      x: {
        // display: false,
        ticks: {
          autoSkip: true,
        }
      },
      y: {
        position: 'left',
        title: {
          display: true,
          text: 'TVL, USD',
        },
        ticks: {
          callback: (value) => mFormatter(value)
        }
      }
    }
  }

  return (
    <div className="ray__block pt-5">
      <div className="ray__title">Explore Ray Network & Use The Ecosystem </div>
      
      <div className="ray__title__descr">
        <strong>Where To Start</strong> 
      </div>
      <div className="mb-4">
        <div className="row">
          {todo.map((item, index) => {
            return (
              <div key={index} className="col-md-4 col-sm-6 col-12">
                <div className={style.item}>
                  {item.external && (
                    <a
                      href={item.url}
                      className={style.itemInner}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={style.itemInnerExternal}>
                        <i className="ri ri-ext ri-arrow_up" />
                      </span>
                      <div className={style.itemInnerTitle}>{index + 1}. {item.title}</div>
                      <div>{item.descr}</div>
                    </a>
                  )}
                  {!item.external && (
                    <Link
                      to={item.url}
                      className={style.itemInner}
                      activeClassName={style.itemInnerActive}
                      partiallyActive
                    >
                      <div className={style.itemInnerTitle}>{index + 1}. {item.title}</div>
                      <div>{item.descr}</div>
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="ray__title__descr">
        <strong>Ecosystem Performance <span className="badge badge-token align-middle font-size-18 ms-2">SOON</span></strong> 
      </div>
      <div className="mb-4">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="mb-4">
              <h6><strong>XRAY: 0.00 USD</strong></h6>
              <div><Line data={dataXray} options={optionsPrice} height={150} /></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="mb-4">
              <h6><strong>XDIAMOND: 0.00 USD</strong></h6>
              <div><Line data={dataXdiamond} options={optionsPrice} height={150} /></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="mb-4">
              <h6><strong>RayStake TVL: {format(totalLiveStake / 1e6 / 1e6, 1)}M USD</strong></h6>
              <div><Line data={dataTvl} options={optionsTvl} height={150} /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="ray__title__descr">
        <strong>Where To Buy</strong> 
      </div>
      <div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="mb-4">
              <h6><strong>XRAY</strong></h6>
              <div className="text-muted mb-3">XRAY is the governance token that powers Ray Network. It facilitates community led growth and sustainable tokenomics.</div>
              <div>
                {marketDex.map((item) => {
                  return (
                    <a className={style.market} href={item.url} target="_blank" rel="noopener noreferrer">
                      <span><img src={item.img} alt={item.title} /></span>
                      <span>{item.title}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-4">
              <h6><strong>XDIAMOND</strong></h6>
              <div className="text-muted mb-3">XDIAMOND is an NFT in the Ray Network ecosystem. Can be redeemed for 100 XRAY or used as an APY booster in RayStake.</div>
              {marketNft.map((item) => {
                return (
                  <a className={style.market} href={item.url} target="_blank" rel="noopener noreferrer">
                    <span><img src={item.img} alt={item.title} /></span>
                    <span>{item.title}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RayData
