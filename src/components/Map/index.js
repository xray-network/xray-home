import React, { useState, useEffect } from "react"
import { Button, Popover, Alert, Spin, Tooltip, message } from "antd"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { LoadingOutlined } from "@ant-design/icons"
import classnames from "classnames"
import style from "./style.module.scss"
import pools from "./pools"
import network from "./network"


export default () => {
  const [currentPool, setCurrentPool] = useState(pools[0])
  const [poolData, setPoolData] = useState({})
  const [loading, setLoading] = useState(true)

  const numberWithCommas = (number, round = 4) => {
    if (!number) {
      return ''
    }
    const formatted = parseFloat(number).toFixed(round)
    return formatted.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
  }

  const setPool = (pool) => {
    const { id } = pool
    setCurrentPool(pool)
    fetchData(id)
  }

  useEffect(() => {
    fetchData(currentPool.id)
    // eslint-disable-next-line
  }, [])

  const fetchData = (id) => {
    if (!id) {
      setPoolData({})
      return
    }
    setLoading(true)
    fetch(`https://js.adapools.org/pools/${id}/summary.json`)
      .then(res => res.json())
      .then((result => {
        setPoolData({
          ...result.data,
          updated: result.updated,
        })
        setTimeout(() => {
          setLoading(false)
        }, 500)
      }))
  }

  const formatValue = (value, postfix = '') => {
    return (
      <span>
        {value || '—'}
        {(value && postfix) ? postfix : ''}
      </span>
    )
  }

  return (
    <div className="cui__block">
      <div className="container-fluid">
        <h6 className="cui__block__heading mb-4 pb-2">Our Pools</h6>
        <div className={style.container}>
          <div className={style.poolsList}>
            {pools.map(item => {
              return (
                <Button
                  key={item.key}
                  className={`${!item.id ? style.disabled : ''} mb-2 mr-2`}
                  type={currentPool.key === item.key ? 'primary' : ''}
                  onClick={() => setPool(item)}
                >
                  {item.key}
                </Button>
              )
            })}
          </div>
          {!currentPool.id && (
            <div className={style.deploymentInfo}>
              <Alert
                message={`${currentPool.key} pool auto deployment is scheduled`}
                description={`This pool will be deployed after the saturation threshold limit has been triggered. Current threshold limit: 50m live stake.`}
                type="info"
                showIcon
              />
            </div>
          )}
          <div className={style.performance}>
            <div className={classnames(style.loading, {
              [style.loadingActive]: loading
            })}>
              <Spin indicator={<LoadingOutlined style={{ fontSize: 30 }} spin />} />
            </div>
            {currentPool.id && (
              <div>
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className={style.item}>
                      <span className={style.itemLabel}>Ticker</span>
                      <strong className={style.itemData}>
                        {formatValue(poolData.ticker_orig)}
                      </strong>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className={style.item}>
                      <span className={style.itemLabel}>Fee Margin</span>
                      <strong className={style.itemData}>
                        {formatValue(poolData.tax_ratio, '%')}
                      </strong>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className={style.item}>
                      <span className={style.itemLabel}>Fixed Fee</span>
                      <strong className={style.itemData}>
                        {formatValue(poolData.tax_fix / 1000000, <span className="badge">ADA</span>)}
                      </strong>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className={style.item}>
                      <span className={style.itemLabel}>Data Update</span>
                      <strong className={style.itemData}>
                        {poolData.updated ? new Date(poolData.updated).toLocaleString() : '—'}
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className={style.item}>
                      <span className={style.itemLabel}>Pool ID</span>
                      <span className={style.itemData}>
                        {!poolData.pool_id && <strong>—</strong>}
                        {poolData.pool_id && (
                          <span>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cui__link mr-2"
                              href={`https://adapools.org/pool/${poolData.pool_id}`}
                            >
                              {formatValue(`${(poolData.pool_id).substring(0, 4)}...${(poolData.pool_id).slice(-8)}`)}
                            </a>
                            <CopyToClipboard text={poolData.pool_id} onCopy={() => message.success('Pool ID successful copied!')}>
                              <Tooltip title="Copy Pool ID">
                                <i className="cui__link fe fe-copy" />
                              </Tooltip>
                            </CopyToClipboard>
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className={style.item}>
                      <span className={style.itemLabel}>Description</span>
                      <span className={style.itemData}>
                        {formatValue(poolData.db_description)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className={style.item}>
                      <span className={style.itemLabel}>Live Stake</span>
                      <strong className={style.itemData}>
                        {formatValue(numberWithCommas(poolData.total_stake / 1000000), <span className="badge">ADA</span>)}
                      </strong>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className={style.item}>
                      <span className={style.itemLabel}>Active Stake</span>
                      <strong className={style.itemData}>
                        {formatValue(numberWithCommas(poolData.active_stake / 1000000), <span className="badge">ADA</span>)}
                      </strong>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className={style.item}>
                      <span className={style.itemLabel}>Saturation</span>
                      <strong className={style.itemData}>
                        {formatValue(poolData.saturated ? (poolData.saturated).toFixed(4) : '', '%')}
                      </strong>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className={style.item}>
                      <span className={style.itemLabel}>Delegators</span>
                      <strong className={style.itemData}>
                        {formatValue(poolData.delegators)}
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className={style.item}>
                      <span className={style.itemLabel}>ROA Lifetime</span>
                      <strong className={style.itemData}>
                        {formatValue(poolData.roa_lifetime, '%')}
                      </strong>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className={style.item}>
                      <span className={style.itemLabel}>ROA</span>
                      <strong className={style.itemData}>
                        {formatValue(poolData.roa, '%')}
                      </strong>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className={style.item}>
                      <span className={style.itemLabel}>Declared Pledge</span>
                      <strong className={style.itemData}>
                        {formatValue(numberWithCommas(poolData.pledge / 1000000), <span className="badge">ADA</span>)}
                      </strong>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className={style.item}>
                      <span className={style.itemLabel}>Pledged</span>
                      <strong className={style.itemData}>
                        {formatValue(numberWithCommas(poolData.pledged / 1000000), <span className="badge">ADA</span>)}
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className={style.item}>
                      <span className={style.itemLabel}>Blocks Lifetime</span>
                      <strong className={style.itemData}>
                        {formatValue(poolData.blocks_lifetime)}
                      </strong>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className={style.item}>
                      <span className={style.itemLabel}>Blocks in Epoch</span>
                      <strong className={style.itemData}>
                        {formatValue(poolData.blocks_epoch)}
                      </strong>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className={style.item}>
                      <span className={style.itemLabel}>Blocks Estimated in Epoch</span>
                      <strong className={style.itemData}>
                        {formatValue(poolData.blocks_estimated)}
                      </strong>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className={style.item}>
                      <span className={style.itemLabel}>Last Reward Epoch</span>
                      <strong className={style.itemData}>
                        {formatValue(poolData.rewards_epoch)}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={style.map}>
            <div className={style.img}>
              <div className={style.relays}>
                {network && network.map((relay, index) => {
                  return (
                    <Popover
                      key={index}
                      title={(
                        <div>
                          <strong>{relay.name}</strong>
                          {' '}
                          {relay.producer && <span className="badge badge-success">producer</span>}
                          {!relay.producer && <span className="badge badge-primary">relay</span>}
                        </div>
                      )}
                      content={(
                        <div>
                          {relay.data && Object.keys(relay.data).map((key, index) => <div key={index}>{key}: <strong>{relay.data[key]}</strong></div>)}
                          <img className={style.do} src="/resources/img/digitalocean.svg" alt="Digital Ocean Datacenter" />
                        </div>
                      )}
                    >
                      <span
                        className={classnames(style.relay, {
                          [style.isProducer]: relay.producer,
                        })}
                        style={{
                          top: `${relay.coords[0]}%`,
                          left: `${relay.coords[1]}%`,
                        }}
                      />
                    </Popover>
                  )
                })}
              </div>
              <img src="/resources/img/map.jpg" alt="" />
            </div>
            <span className={style.itemLabel}>RAY Producers & Relays Trace Map</span>
          </div>
        </div>
      </div>
    </div>
  )
}
