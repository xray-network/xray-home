import React from "react"
import { useSelector } from "react-redux"
import { format } from "@/utils"
import * as style from "./style.module.scss"

const Stats = () => {
  const prices = useSelector((state) => state.settings.prices)
  const pools = useSelector((state) => state.settings.pools)
  const history = useSelector((state) => state.settings.history)
  const totalLiveStake =
    (pools?.totalLiveStake || 0) * (prices?.cardano?.usd || 0)
  const delegators =
    pools?.pools?.reduce(
      (accum, pool) => accum + parseInt(pool.delegators, 10),
      0
    ) || 0

  return (
    <div className={style.container}>
      <div className="ray__block">
        <div className={style.box}>
          <div className="row">
            <div className="col-sm-4">
              <div className={style.item}>
                <div className={style.itemLabel}>RayStake TVL</div>
                <div className={style.itemCount}>
                  ${format(totalLiveStake / 1e6 / 1e6, 1)}m
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className={style.item}>
                <div className={style.itemLabel}>XRAY Tokens Distributed</div>
                <div className={style.itemCount}>
                  {format((history?.totalAccrued || 0) / 1e6, 2)}m
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className={style.item}>
                <div className={style.itemLabel}>Total Delegators</div>
                <div className={style.itemCount}>{format(delegators)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
