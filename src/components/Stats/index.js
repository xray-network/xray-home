import React from "react"
import { useSelector } from "react-redux"
import { format } from "@/utils"
import * as style from "./style.module.scss"

const Stats = () => {
  const stakeHistory = useSelector((state) => state.settings.stakeHistory)
  const pools = useSelector((state) => state.settings.pools)
  const prices = useSelector((state) => state.settings.prices)
  const stakeDataXrayPrice = useSelector((state) => state.settings.stakeDataXrayPrice)
  const stakeDataKeysTotal = useSelector((state) => state.settings.stakeDataKeysTotal)

  const poolsLocked = stakeHistory?.history?.map((block) => {
    const length = block?.history?.length
    const lastItem = block?.history[length - 1]
    return {
      id: block.id,
      amount: lastItem && (block.id === 'xray' ? lastItem.tokenTotal : parseInt(lastItem.tokenTotal * lastItem.rate)) || 0
    }
  }) || []

  const stakeTotal = poolsLocked?.reduce((accum, snap) => {
    return accum + parseInt(snap.amount)
  }, 0) || 0

  poolsLocked.push({
    id: 'ada',
    amount: pools?.totalLiveStake / 1000000 || 0
  })

  return (
    <div className={style.container}>
      <div className="ray__block">
        <div className={style.box}>
          <div className="row">
            <div className="col-sm-4">
              <div className={style.item}>
                <div className={style.itemLabel}>RayStake TVL</div>
                <div className={style.itemCount}>
                  ${format(parseInt((stakeTotal || 0) * (stakeDataXrayPrice?.price || 0) * (prices?.cardano?.usd || 0) + (((pools?.totalLiveStake / 1000000) || 0) * (prices?.cardano?.usd || 0))) / 1000000, 1)}m
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className={style.item}>
                <div className={style.itemLabel}>XRAY Price</div>
                <div className={style.itemCount}>
                  ${format((stakeDataXrayPrice?.price || 0) * (prices?.cardano?.usd || 0), 4)}
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className={style.item}>
                <div className={style.itemLabel}>Stake Keys Involved</div>
                <div className={style.itemCount}>{format(stakeDataKeysTotal?.unique || 0)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
