import React, { useState, useEffect } from "react"
import { Statistic } from "antd"
import { useSelector } from "react-redux"
import { addDays } from "date-fns"
import { Link } from "gatsby"
import { format } from "@/utils"
import Heading from "@/components/Heading"
import StakeTotal from "@/components/StakeTotal"
import { SVGLink } from "@/svg"
// import * as style from "./style.module.scss"

const XrayDistribution = () => {
  const rate = useSelector((state) => state.settings.rate)

  const [rewards, setRewards] = useState({
    currentEpoch: 0,
    distributed: [],
    totalAccrued: 0,
    totalUndelivered: 0,
  })

  const epochStats =
    rewards.distributed.filter(
      (item) => item.epoch === rewards.currentEpoch
    )[0] || {}

  const [poolsData1, setPoolsData1] = useState({})
  const [poolsData2, setPoolsData2] = useState({})
  const [poolsData3, setPoolsData3] = useState({})

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  const pools = [
    "1c8cd022e993a8366be641c17cb6d9c5d8944e00bfce3189d8b1515a",
    "9ad2692a4865c5999f27d65baf170be5ba38b25489c8e21007193edd",
    "22cfa3b8612c146a0737c974dcfcbb8cddd86f3a511cf531ce8d91a1",
  ]

  const fetchData = () => {
    fetch(`https://js.adapools.org/pools/${pools[0]}/summary.json`)
      .then((res) => res.json())
      .then((result) => {
        setPoolsData1({
          ...result.data,
          pHash: pools[0],
          pId: "pool1rjxdqghfjw5rv6lxg8qhedkechvfgnsqhl8rrzwck9g45n43yql",
        })
      })
    fetch(`https://js.adapools.org/pools/${pools[1]}/summary.json`)
      .then((res) => res.json())
      .then((result) => {
        setPoolsData2({
          ...result.data,
          pHash: pools[1],
          pId: "pool1ntfxj2jgvhzen8e86ed679ctukar3vj538ywyyq8ryld66jj4sx",
        })
      })
    fetch(`https://js.adapools.org/pools/${pools[2]}/summary.json`)
      .then((res) => res.json())
      .then((result) => {
        setPoolsData3({
          ...result.data,
          pHash: pools[2],
          pId: "pool1yt868wrp9s2x5pehe96del9m3nwasme62yw02vww3kg6zwzspcz",
        })
      })
  }

  const totals = {
    live: parseInt(poolsData1.total_stake || 0) + parseInt(poolsData2.total_stake || 0) + parseInt(poolsData3.total_stake || 0),
    active: parseInt(poolsData1.active_stake || 0) + parseInt(poolsData2.active_stake || 0) + parseInt(poolsData3.active_stake || 0),
    delegators: parseInt(poolsData1.delegators || 0) + parseInt(poolsData2.delegators || 0) + parseInt(poolsData3.delegators || 0),
  }

  return (
    <div className="ray__block">
      <Heading id="distribution">
        <strong>Ray Stake</strong>, ADA staking & XRAY ISPO
      </Heading>
      <p>
        Ray Network provides Cardano staking services on high-performance
        servers in the Cloudflare cloud. High availability, high uptime, low
        latency and automated infrastructure deployment allow for the highest
        possible ROI.
      </p>
      <p className="mb-5">
        Stake ADA in Ray pools and get <strong>~5% ROI</strong> with extra
        rewards each epoch <strong className="ray__ticker">1 XRAY</strong> per
        each <strong className="ray__ticker">{rate / 1000000} ADA</strong> staked.
      </p>
      <div className="mt-4 pt-3 mb-5 pb-3">
        <span className="d-inline-block me-3 mb-2">
          <Link className="ray__btn ray__btn--round" to="/stake/pools/">
            Stake Pools
          </Link>
        </span>
        <span className="d-inline-block me-3 mb-2">
          <Link className="ray__btn ray__btn--round" to="/stake/calculator/">
            Calculator
          </Link>
        </span>
        <span className="d-inline-block me-3 mb-2">
          <Link className="ray__btn ray__btn--round" to="/stake/track/">
            Track & Withdraw
          </Link>
        </span>
        <span className="d-inline-block me-3 mb-2">
          <Link
            className="ray__btn ray__btn--round"
            to="/wiki/stake-delegators/"
          >
            Wiki
          </Link>
        </span>
        <span className="d-inline-block me-3 mb-2">
          <a
            className="ray__btn ray__btn--round"
            href="https://app.raywallet.io/#/stake"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="me-2">Delegate</span>
            <span className="ray__icon">
              <SVGLink />
            </span>
          </a>
        </span>
      </div>
      <h5>
        <strong>Ray pools information</strong>
      </h5>
      <div className="row mb-4">
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(totals.live / 1e6 || 0)}{" "}
              <span className="ray__ticker">ADA</span>
            </div>
            <div>Total Live Stake</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(totals.active / 1e6 || 0)}{" "}
              <span className="ray__ticker">ADA</span>
            </div>
            <div>Total Active Stake</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              3 / {totals.delegators}
            </div>
            <div>Total Pools / Delegators</div>
          </div>
        </div>
      </div>
      <h5>
        <strong>XRAY payouts in Epoch {rewards.currentEpoch} (for Epoch {rewards.currentEpoch - 2})</strong>
      </h5>
      <div className="row mb-4">
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(epochStats.rate ? epochStats.rate / 1000000 : 0, 6)}{" "}
              <span className="ray__ticker">ADA</span> / 1{" "}
              <span className="ray__ticker">XRAY</span>
            </div>
            <div>Rewards Rate</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(epochStats.total / 1000000 || 0)}{" "}
              <span className="ray__ticker">ADA</span>
            </div>
            <div>Active Stake Snapshot</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              <Statistic.Countdown
                className="ray__count__inline"
                value={addDays(new Date(epochStats.timeStart || null), 5)}
                format="D[d] HH[h] mm[m] ss[s]"
              />
            </div>
            <div>Epoch Ends In</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(epochStats.xray || 0)}{" "}
              <span className="ray__ticker">XRAY</span>
            </div>
            <div>XRAY Payouts</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(epochStats.maxRewards || 0)}{" "}
              <span className="ray__ticker">XRAY</span>
            </div>
            <div>XRAY Epoch Limit</div>
          </div>
        </div>
      </div>
      <h5>
        <strong>XRAY distribution schedule</strong>
      </h5>
      <StakeTotal callback={setRewards} />
    </div>
  )
}

export default XrayDistribution
