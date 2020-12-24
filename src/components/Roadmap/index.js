import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="cui__block mb-5 pb-5">
      <div className="container-fluid">
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
              <li>Marketing Campaign</li>
            </ul>
          </div>
          <div className={`${style.line} ${style.l4}`}>
            <span className={style.label}>Phase 4</span>
            <ul>
              <li>Cardano Token Swap</li>
              <li>Payment Gate Integration</li>
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
