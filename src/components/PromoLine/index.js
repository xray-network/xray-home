import React from "react"
import { useSelector } from "react-redux"
import { format } from "@/utils"
import * as style from "./style.module.scss"

const Promo = () => {
  const prices = useSelector((state) => state.settings.prices)
  const pools = useSelector((state) => state.settings.pools)
  const history = useSelector((state) => state.settings.history)
  const totalLiveStake = (pools?.totalLiveStake || 0) * (prices?.cardano?.usd || 0)

  console.log(history)

  return (
    <div className={style.line}>
      <div className="ray__block">
        <div className={style.item}>
          <div className={style.itemValue}>${format(totalLiveStake / 1e6 / 1e6, 1)}m</div>
          <div className={style.itemTitle}>Staked with RayStake</div>
        </div>
        <div className={style.item}>
          <div className={style.itemValue}>{format((history?.totalAccrued || 0) / 1e6, 2)}m</div>
          <div className={style.itemTitle}>XRAY Tokens Distributed</div>
        </div>
        <div className={style.item}>
          <div className={style.itemValue}>12+</div>
          <div className={style.itemTitle}>Ecosystem Projects</div>
        </div>
      </div>
    </div>
  )
}

export default Promo
