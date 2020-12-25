import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="cui__block mb-5">
      <div className="container-fluid">
        <h6 className="cui__block__heading mb-4 pb-2">RAY Network Roadmap</h6>
        <div className={`${style.roadmap} clearfix`}>
          <div className={`${style.line} ${style.l1}`}>
            <div className={style.active} />
            <span className={`${style.label} ${style.current}`}>LIVE</span>
            <span className={style.label}>Phase 1</span>
            <ul>
              <li>Funding through ADA pool rewards</li>
              <li>RAY Coins distribution</li>
            </ul>
          </div>
          <div className={`${style.line} ${style.l2}`}>
            <span className={`${style.label} ${style.current}`}>IN PROGRESS</span>
            <span className={style.label}>Phase 2</span>
            <ul>
              <li>Ray Network App MVP</li>
              <li>Client Mobile Application</li>
            </ul>
          </div>
          <div className={`${style.line} ${style.l3}`}>
            <span className={style.label}>Phase 3</span>
            <ul>
              <li>Atala PRISM Implementation</li>
              <li>Payment Gate</li>
            </ul>
          </div>
          <div className={`${style.line} ${style.l4}`}>
            <span className={style.label}>Phase 4</span>
            <ul>
              <li>Swap to Cardano Native Token</li>
              <li>Marketing Campaign</li>
            </ul>
          </div>
          <div className={`${style.line} ${style.l5}`}>
            <span className={style.label}>Phase 5</span>
            <ul>
              <li>Final Release</li>
              <li>RAY Token Economics</li>
              <li>Future-Proof Roadmap</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
