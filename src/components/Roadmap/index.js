import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="cui__block mb-4">
      <div className="container-fluid">
        <div className={style.roadmap}>
          <div className={`${style.line} ${style.l1}`}>
            <span className={style.label}>Phase 1</span>
            <span>1. Funding through ADA pool rewards</span>
            <span>2. RAY Coins distribution</span>
          </div>
        </div>
      </div>
    </div>
  )
}
