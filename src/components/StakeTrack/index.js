import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Table, Tooltip, message, Input, Button, Alert } from "antd"
import { Line } from 'react-chartjs-2'
import QRCode from "qrcode.react"
import store from "store"
import { format as formatDate, addDays } from 'date-fns'
import { CopyToClipboard } from "react-copy-to-clipboard"
import { format, truncate } from "@/utils"
import { SVGClose, SVGFiles, SVGAdd, SVGHelp } from "@/svg"
import * as style from "./style.module.scss"

const columns = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (record) => <strong>{record}</strong>
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (record) => <strong>{record}</strong>
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (record) => <strong>{record}</strong>
  },
]

const StakeTrack = ({ callback = () => { } }) => {
  const theme = useSelector((state) => state.settings.theme)
  const networkEpochStartedAt = useSelector((state) => state.settings.networkEpochStartedAt)
  const isLight = theme === 'default'

  const [keys, setKeys] = useState(store.get('RAY.track.keys') || [])
  const [address, setAddress] = useState(keys[0] || '')
  const [rewards, setRewards] = useState({})
  const [findAddress, setFindAddress] = useState('')
  const [showAdd, setShowAdd] = useState(false)

  const lookupAddress = () => {
    if (findAddress) {
      fetch(`https://api-mainnet-helper.rraayy.com/rewards/search/${findAddress}`)
        // fetch(`http://localhost:8080/rewards/search/${findAddress}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.id) {
            message.success('Stake key found')
            setAndFetch(data.key, true)
          } else {
            message.error('Address or stake key not found. Try another one.')
          }
        })
        .catch(() => {
          message.error('Something went wrong')
        })
    } else {
      message.error('Enter a valid address or stake key')
    }
  }

  const setAndFetch = (key, add = false) => {
    setFindAddress('')
    setRewards([])
    fetchData(key)
    setAddress(key)
    setShowAdd(false)
    if (add) {
      const newKeys = [
        ...keys,
        key,
      ]
      store.set('RAY.track.keys', newKeys)
      setKeys(newKeys)
    }
  }

  const removeItem = (key) => {
    if (keys.length < 2) {
      setRewards([])
      setKeys([])
    } else {
      const index = keys.indexOf(key)
      const newKeys = [...keys].splice(index, 1)
      console.log(newKeys)
      setKeys(newKeys)
      store.set('RAY.track.keys', newKeys)
      setAndFetch(keys[0])
    }
  }

  const fetchData = (key) => {
    // fetch(`http://localhost:8080/rewards/delegation/state/${key}`)
    fetch(`https://api-mainnet-helper.rraayy.com/rewards/delegation/state/${key}`)
      .then((response) => response.json())
      .then((data) => {
        setRewards(data)
      })
      .catch(() => {
        message.error('Something went wrong')
      })
  }

  useEffect(() => {
    if (keys.length > 0) {
      fetchData(keys[0])
    }
    // eslint-disable-next-line
  }, [])

  const dataset = rewards.rewardsHistory || []
  const datasetProcessed = [...dataset].reverse()

  const chartData = {
    labels: datasetProcessed.map(epoch => epoch.epochNo),
    datasets: [
      {
        type: 'bar',
        label: 'Epoch Rewards',
        maxBarThickness: 5,
        data: datasetProcessed.map(epoch => epoch.amount),
        fill: true,
        radius: 0,
        width: 2,
        backgroundColor: [
          '#355aeb',
        ],
        hoverBackgroundColor: [
          '#355aeb',
        ],
        borderColor: [
          '#355aeb',
        ],
        postfix: 'XRAY',
      },
      {
        type: 'bar',
        label: 'Snapshot',
        hidden: true,
        maxBarThickness: 5,
        data: datasetProcessed.map(epoch => epoch.snapshot / 1000000),
        radius: 0,
        width: 2,
        backgroundColor: [
          '#355aeb',
        ],
        hoverBackgroundColor: [
          '#355aeb',
        ],
        borderColor: [
          '#355aeb',
        ],
        postfix: 'ADA',
      },
      {
        type: 'bar',
        label: 'ADA per 1 XRAY',
        hidden: true,
        maxBarThickness: 5,
        data: datasetProcessed.map(epoch => epoch.perXray / 1000000),
        radius: 0,
        width: 2,
        backgroundColor: [
          '#355aeb',
        ],
        hoverBackgroundColor: [
          '#355aeb',
        ],
        borderColor: [
          '#355aeb',
        ],
        postfix: 'ADA',
      },
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      axis: 'x'
    },
    scales: {
      x: {
        grid: {
          color: isLight ? '#e4e9f0' : '#232236',
        },
        ticks: {
          autoSkip: true,
          color: isLight ? '#8484AD' : '#4f4f7a',
        }
      },
      y: {
        grid: {
          color: isLight ? '#e4e9f0' : '#232236',
        },
        ticks: {
          color: isLight ? '#8484AD' : '#4f4f7a',
        }
      },
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      },
      tooltip: {
        callbacks: {
          title: (tooltipItem) => `Epoch ${tooltipItem[0].label} (for Epoch ${parseInt(tooltipItem[0].label) - 2})`,
          label: (tooltipItem) => chartData.datasets.map(ds => `${ds.label}: ${format(ds.data[tooltipItem.dataIndex], ds.postfix === 'ADA' ? 6 : 0)} ${ds.postfix}`)
        }
      },
    }
  }

  const withdrawalAddress = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  const keysNotEmpty = keys.length > 0

  return (
    <div className="ray__block">
      {keysNotEmpty && (
        <div className="mb-5 text-wrap">
          {keys.map((key, index) => {
            return (
              <span
                key={index}
                className={`${style.stakeLink} ${!showAdd && address === key && style.stakeLinkActive}`}
                onClick={() => setAndFetch(key)}
                onKeyPress={() => setAndFetch(key)}
                role="button"
                tabIndex="0"
              >
                {truncate(key)}
                {' '}
              </span>
            )
          })}
          <span
            className={`${style.stakeLink} ${showAdd && style.stakeLinkActive}`}
            onClick={() => setShowAdd(true)}
            onKeyPress={() => setShowAdd(true)}
            role="button"
            tabIndex="0"
          >
            <span className="ray__icon ray__icon--inline ray__icon--14">
              <SVGAdd />
            </span>
          </span>
        </div>
      )}
      {(!keysNotEmpty || showAdd) && (
        <div className={style.addWallet}>
          <h3 className="mb-5"><strong>Add Rewards Tracking</strong></h3>
          <p className="mb-4">Enter your any used wallet address (addr1…) or stake key (stake1…) below</p>
          <div className="mb-5">
            <Input value={findAddress} placeholder="addr1..." size="large" onChange={(e) => setFindAddress(e.target.value)} />
          </div>
          <div>
            <Button className="ray__btn ray__btn--round" onClick={lookupAddress}>
              <span className="me-2">Add Wallet</span>
              <span className="ray__icon">
                <SVGAdd />
              </span>
            </Button>
          </div>
        </div>
      )}
      <div className={!(keysNotEmpty && !showAdd) ? 'd-none' : ''}>
        <div>
          <span
            className="link ms-4 float-end"
            onClick={() => removeItem(address)}
            onKeyPress={() => removeItem(address)}
            role="button"
            tabIndex="0"
          >
            <span className="me-1">Remove</span>
            <span className="ray__icon ray__icon--inline ray__icon--14">
              <SVGClose />
            </span>
          </span>
          <h5 className="mb-4 pb-2 text-break"><strong>{address}</strong></h5>
        </div>
        {(!rewards.rewardsHistory?.length && rewards.found) && (
          <div className="mb-5">
            <Alert type="warning" showIcon message="Stake is not matured" description="You should wait 2 epochs after delegation to receive your XRAY rewards" />
          </div>
        )}
        <div className="row mb-4">
          <div className="col-6 col-sm-4 mb-4">
            <div className="ray__left ray__left--dark">
              <div className="ray__card__value">
                {format(rewards.total || 0)} <span className="ray__ticker">XRAY</span>
              </div>
              <div>Accrued Balance</div>
            </div>
          </div>
          {rewards.totalEarlyBonus > 0 && (
            <div className="col-6 col-sm-4 mb-4">
              <div className="ray__left ray__left--dark">
                <div className="ray__card__value">
                  {format(rewards.totalEarlyBonus || 0)} <span className="ray__ticker">XDIAMOND</span>
                </div>
                <div>
                  <span className="me-2">Early Delegator Bonus</span>
                  <Tooltip title="Will be sent on next withdrawal">
                    <span className="ray__icon ray__icon--14 ray__icon--inline">
                      <SVGHelp />
                    </span>
                  </Tooltip>
                </div>
              </div>
            </div>
          )}
          <div className="col-6 col-sm-4 mb-4">
            <div className="ray__left ray__left--dark">
              <div className="ray__card__value">
                {formatDate(addDays(new Date(networkEpochStartedAt || null), 5), 'MM/dd/yyyy HH:mm')}
              </div>
              <div>Next Accrual</div>
            </div>
          </div>
        </div>
        <div className="ray__left ray__left--dark mb-5">
          <h5><strong>Withdraw Rewards</strong></h5>
          <div className={style.redeem}>
            <div className={style.redeemQr}>
              <QRCode
                value={withdrawalAddress} size="100"
                bgColor={theme === 'default' ? '#fff' : '#000'}
                fgColor={theme === 'default' ? '#000' : '#fff'}
              />
            </div>
            <div className={style.redeemInfo}>
              <p>
                <strong>Send 2 <span className="ray__ticker">ADA</span> from wallet you delegated to the address below.</strong> This amount subtract transaction fee will be
                returned to your wallet with accrued <span className="ray__ticker">XRAY</span> rewards.
              </p>
              <p className="mb-4 mb-md-0">
                <CopyToClipboard
                  text={withdrawalAddress}
                  onCopy={() => message.success('Copied to clipboard')}
                >
                  <Tooltip title="Copy to clipboard">
                    <span className="link">
                      <span className="me-2">Withdrawals will be opened soon</span>
                      <span className="ray__icon ray__icon--16 ray__icon--inline">
                        <SVGFiles />
                      </span>
                    </span>
                  </Tooltip>
                </CopyToClipboard>
              </p>
            </div>
          </div>
        </div>
        <div className="ray__left ray__left--dark mb-4">
          <h5 className="mb-0"><strong>Distribution history</strong></h5>
        </div>
        <div className="mb-5">
          <Line data={chartData} options={options} height={200} />
        </div>
        <div className="ray__left ray__left--dark mb-4">
          <h5 className="mb-0"><strong>Withdrawals history</strong></h5>
        </div>
        <div className="ray__table">
          <Table dataSource={[]} columns={columns} pagination={false} />
        </div>
      </div>
    </div>
  )
}

export default StakeTrack